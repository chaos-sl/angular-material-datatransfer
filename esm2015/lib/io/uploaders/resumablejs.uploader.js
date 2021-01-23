import { Injectable } from '@angular/core';
import * as Resumable from 'resumablejs';
import { BaseUploader } from './base.uploader';
import { ConfigService } from '../../services/config.service';
import { LoggerService } from '../../services/logger.service';
import { GuidUtil } from '../../utils/guid.util';
import { CryptoService } from '../../services/crypto.service';
import { TransferStatus } from '../../enums/transfer-status.enum';
import { DatatransferItem } from '../../models/datatransfer-item.model';
import { SizeContainer } from '../../models/size-container.model';
import { DecimalByteUnit } from '../../enums/decimal-byte-unit.enum';
import { ProgressContainer } from '../../models/progress-container.model';
import { TransferType } from '../../enums/transfer-type.enum';
import * as i0 from "@angular/core";
import * as i1 from "../../services/logger.service";
import * as i2 from "../../utils/guid.util";
import * as i3 from "../../services/crypto.service";
export class ResumableJsUploader extends BaseUploader {
    constructor(logger, guidUtil, cryptoService) {
        super(logger, guidUtil, cryptoService);
        this.logger = logger;
        this.guidUtil = guidUtil;
        this.cryptoService = cryptoService;
        this.r = undefined;
        this.preprocessFileFn = undefined;
        this.preprocessChunkFn = undefined;
        this.initResumable();
    }
    initResumable() {
        function generateId(file, event) {
            const that = this;
            return that.generateUniqueIdentifier();
        }
        function preprocessChunkInlineFn(resumableChunk) {
            const that = this;
            if (typeof that.preprocessChunkFn === 'function') {
                that.preprocessChunkFn(resumableChunk);
            }
            else {
                resumableChunk.preprocessFinished();
            }
        }
        function preprocessFileInlineFn(resumableFile) {
            const that = this;
            if (typeof that.preprocessFileFn === 'function') {
                that.changeItemStatus(resumableFile.internalItem, TransferStatus.Preprocessing);
                that.preprocessFileFn(resumableFile);
            }
            else {
                if (ConfigService.settings.core.preprocessHashEnabled && ConfigService.settings.core.preprocessHashChecked) {
                    that.changeItemStatus(resumableFile.internalItem, TransferStatus.Preprocessing);
                    const continueCallback = function () {
                        resumableFile.preprocessFinished();
                    };
                    const cancelCallback = function () {
                        resumableFile.cancel();
                        that.changeItemStatus(resumableFile.internalItem, TransferStatus.Finished, resumableFile.internalItem.message);
                        that.r.uploadNextChunk();
                    };
                    that.preprocessHash(resumableFile.internalItem, resumableFile.file, continueCallback, cancelCallback);
                }
                else {
                    resumableFile.preprocessFinished();
                }
            }
        }
        ConfigService.settings.resumablejs.generateUniqueIdentifier = generateId.bind(this);
        if (typeof ConfigService.settings.resumablejs.preprocess === 'function') {
            // clones the function with '{}' acting as it's new 'this' parameter
            this.preprocessChunkFn = ConfigService.settings.resumablejs.preprocess.bind({});
        }
        ConfigService.settings.resumablejs.preprocess = preprocessChunkInlineFn.bind(this);
        if (typeof ConfigService.settings.resumablejs.preprocessFile === 'function') {
            // clones the function with '{}' acting as it's new 'this' parameter
            this.preprocessFileFn = ConfigService.settings.resumablejs.preprocessFile.bind({});
        }
        ConfigService.settings.resumablejs.preprocessFile = preprocessFileInlineFn.bind(this);
        // @ts-ignore: ignore type checking
        this.r = new Resumable(ConfigService.settings.resumablejs);
        this.r.on('fileAdded', function (file, event) {
            const that = this;
            // that.logger.log('fileAdded', file);
            const newItem = new DatatransferItem({
                id: file.uniqueIdentifier,
                name: file.fileName,
                path: file.relativePath.substr(0, file.relativePath.length - file.fileName.length),
                sizeContainer: new SizeContainer({ decimalByteUnit: DecimalByteUnit.Byte, decimalByteUnitSize: file.size }),
                progressContainer: new ProgressContainer(file.size),
                transferType: TransferType.Upload,
                status: TransferStatus.Ready,
                externalItem: file
            });
            file.internalItem = newItem;
            that.addItem(newItem);
        }.bind(this));
        this.r.on('fileProgress', function (file, message) {
            const that = this;
            // that.logger.log('fileProgress', file.progress());
            that.changeItemStatus(file.internalItem, TransferStatus.Uploading);
            that.updateItemProgress(file.internalItem, file.progress());
            that.updateOverallProgress(that.transferType, that.r.progress());
        }.bind(this));
        this.r.on('fileSuccess', function (file, message) {
            const that = this;
            // that.logger.log('fileSuccess', file);
            that.changeItemStatus(file.internalItem, TransferStatus.Finished, message);
        }.bind(this));
        this.r.on('fileError', function (file, message) {
            const that = this;
            // that.logger.log('fileError', file, message);
            that.changeItemStatus(file.internalItem, TransferStatus.Failed, message);
        }.bind(this));
        this.r.on('uploadStart', function () {
            const that = this;
            // that.logger.log('uploadStart', that.r);
            that._isWorking = true;
            that.updateZone();
            that.updateOverallProgress(that.transferType, that.r.progress());
            that.updateOverallSize(that.r.getSize());
        }.bind(this));
        this.r.on('chunkingComplete', function () {
            const that = this;
            // that.logger.log('chunkingComplete');
        }.bind(this));
        this.r.on('pause', function () {
            const that = this;
            // that.logger.log('pause');
            that._isWorking = false;
            that.updateZone();
        }.bind(this));
        this.r.on('cancel', function () {
            const that = this;
            // that.logger.log('cancel');
            that._isWorking = false;
            that.updateZone();
        }.bind(this));
        this.r.on('complete', function () {
            const that = this;
            // that.logger.log('complete', that.r);
            that._isWorking = false;
            that.updateZone();
        }.bind(this));
    }
    assignBrowse(element, isDirectory) {
        this.r.assignBrowse(element, isDirectory);
    }
    assignDrop(element) {
        this.r.assignDrop(element);
    }
    editPath(oldPath, newPath) {
        super.editPath(oldPath, newPath);
        this.r.files.forEach((file, index) => {
            const internalItem = file.internalItem;
            if (internalItem.status === TransferStatus.Ready && internalItem.path === oldPath) {
                file.relativePath = newPath + file.fileName;
                internalItem.path = newPath;
            }
        });
    }
    editFilename(item, name) {
        super.editFilename(item, name);
        item.externalItem.fileName = name;
        item.externalItem.relativePath = item.path + name;
        item.name = name;
    }
    startAll() {
        this.r.upload();
    }
    pauseAll() {
        // reset preprocessState
        this.r.files.forEach((file, index) => {
            if (file.preprocessState === 1) {
                file.preprocessState = 0;
            }
        });
        this.r.pause();
    }
    removeAll() {
        const tempFiles = this.r.files.slice();
        tempFiles.forEach((file, index) => {
            const that = this;
            that.r.removeFile(file);
        });
        this._isWorking = false;
    }
    removeItem(item) {
        this.r.removeFile(item.externalItem);
        if (this.r.files.length <= 0) {
            this._isWorking = false;
        }
    }
    retryItem(item) {
        item.externalItem.retry();
    }
}
ResumableJsUploader.ɵfac = function ResumableJsUploader_Factory(t) { return new (t || ResumableJsUploader)(i0.ɵɵinject(i1.LoggerService), i0.ɵɵinject(i2.GuidUtil), i0.ɵɵinject(i3.CryptoService)); };
ResumableJsUploader.ɵprov = i0.ɵɵdefineInjectable({ token: ResumableJsUploader, factory: ResumableJsUploader.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ResumableJsUploader, [{
        type: Injectable
    }], function () { return [{ type: i1.LoggerService }, { type: i2.GuidUtil }, { type: i3.CryptoService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdW1hYmxlanMudXBsb2FkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hbWQtbGliL3NyYy9saWIvaW8vdXBsb2FkZXJzL3Jlc3VtYWJsZWpzLnVwbG9hZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxLQUFLLFNBQVMsTUFBTSxhQUFhLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDbEUsT0FBTyxFQUFFLGdCQUFnQixFQUFxQixNQUFNLHNDQUFzQyxDQUFDO0FBQzNGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDckUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDMUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdDQUFnQyxDQUFDOzs7OztBQUc5RCxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsWUFBWTtJQU1qRCxZQUFzQixNQUFxQixFQUNyQixRQUFrQixFQUNsQixhQUE0QjtRQUM5QyxLQUFLLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUhyQixXQUFNLEdBQU4sTUFBTSxDQUFlO1FBQ3JCLGFBQVEs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QUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDMUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7U0FDM0I7SUFDTCxDQUFDO0lBRU0sU0FBUyxDQUFDLElBQXVCO1FBQ3BDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDOUIsQ0FBQzs7c0ZBL0xRLG1CQUFtQjsyREFBbkIsbUJBQW1CLFdBQW5CLG1CQUFtQjt1RkFBbkIsbUJBQW1CO2NBRC9CLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIFJlc3VtYWJsZSBmcm9tICdyZXN1bWFibGVqcyc7XHJcbmltcG9ydCB7IEJhc2VVcGxvYWRlciB9IGZyb20gJy4vYmFzZS51cGxvYWRlcic7XHJcbmltcG9ydCB7IENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jb25maWcuc2VydmljZSc7XHJcbmltcG9ydCB7IExvZ2dlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9sb2dnZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IEd1aWRVdGlsIH0gZnJvbSAnLi4vLi4vdXRpbHMvZ3VpZC51dGlsJztcclxuaW1wb3J0IHsgQ3J5cHRvU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NyeXB0by5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVHJhbnNmZXJTdGF0dXMgfSBmcm9tICcuLi8uLi9lbnVtcy90cmFuc2Zlci1zdGF0dXMuZW51bSc7XHJcbmltcG9ydCB7IERhdGF0cmFuc2Zlckl0ZW0sIElEYXRhdHJhbnNmZXJJdGVtIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2RhdGF0cmFuc2Zlci1pdGVtLm1vZGVsJztcclxuaW1wb3J0IHsgU2l6ZUNvbnRhaW5lciB9IGZyb20gJy4uLy4uL21vZGVscy9zaXplLWNvbnRhaW5lci5tb2RlbCc7XHJcbmltcG9ydCB7IERlY2ltYWxCeXRlVW5pdCB9IGZyb20gJy4uLy4uL2VudW1zL2RlY2ltYWwtYnl0ZS11bml0LmVudW0nO1xyXG5pbXBvcnQgeyBQcm9ncmVzc0NvbnRhaW5lciB9IGZyb20gJy4uLy4uL21vZGVscy9wcm9ncmVzcy1jb250YWluZXIubW9kZWwnO1xyXG5pbXBvcnQgeyBUcmFuc2ZlclR5cGUgfSBmcm9tICcuLi8uLi9lbnVtcy90cmFuc2Zlci10eXBlLmVudW0nO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUmVzdW1hYmxlSnNVcGxvYWRlciBleHRlbmRzIEJhc2VVcGxvYWRlciB7XHJcblxyXG4gICAgcHJpdmF0ZSByOiBSZXN1bWFibGUuUmVzdW1hYmxlID0gdW5kZWZpbmVkO1xyXG4gICAgcHJpdmF0ZSBwcmVwcm9jZXNzRmlsZUZuID0gdW5kZWZpbmVkO1xyXG4gICAgcHJpdmF0ZSBwcmVwcm9jZXNzQ2h1bmtGbiA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgbG9nZ2VyOiBMb2dnZXJTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJvdGVjdGVkIGd1aWRVdGlsOiBHdWlkVXRpbCxcclxuICAgICAgICAgICAgICAgIHByb3RlY3RlZCBjcnlwdG9TZXJ2aWNlOiBDcnlwdG9TZXJ2aWNlKSB7XHJcbiAgICAgICAgc3VwZXIobG9nZ2VyLCBndWlkVXRpbCwgY3J5cHRvU2VydmljZSk7XHJcbiAgICAgICAgdGhpcy5pbml0UmVzdW1hYmxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0UmVzdW1hYmxlKCk6IHZvaWQge1xyXG4gICAgICAgIGZ1bmN0aW9uIGdlbmVyYXRlSWQoZmlsZSwgZXZlbnQpIHtcclxuICAgICAgICAgICAgY29uc3QgdGhhdCA9IHRoaXMgYXMgUmVzdW1hYmxlSnNVcGxvYWRlcjtcclxuICAgICAgICAgICAgcmV0dXJuIHRoYXQuZ2VuZXJhdGVVbmlxdWVJZGVudGlmaWVyKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBwcmVwcm9jZXNzQ2h1bmtJbmxpbmVGbihyZXN1bWFibGVDaHVuaykge1xyXG4gICAgICAgICAgICBjb25zdCB0aGF0ID0gdGhpcyBhcyBSZXN1bWFibGVKc1VwbG9hZGVyO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoYXQucHJlcHJvY2Vzc0NodW5rRm4gPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIHRoYXQucHJlcHJvY2Vzc0NodW5rRm4ocmVzdW1hYmxlQ2h1bmspO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVzdW1hYmxlQ2h1bmsucHJlcHJvY2Vzc0ZpbmlzaGVkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHByZXByb2Nlc3NGaWxlSW5saW5lRm4ocmVzdW1hYmxlRmlsZSkge1xyXG4gICAgICAgICAgICBjb25zdCB0aGF0ID0gdGhpcyBhcyBSZXN1bWFibGVKc1VwbG9hZGVyO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoYXQucHJlcHJvY2Vzc0ZpbGVGbiA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgdGhhdC5jaGFuZ2VJdGVtU3RhdHVzKHJlc3VtYWJsZUZpbGUuaW50ZXJuYWxJdGVtLCBUcmFuc2ZlclN0YXR1cy5QcmVwcm9jZXNzaW5nKTtcclxuICAgICAgICAgICAgICAgIHRoYXQucHJlcHJvY2Vzc0ZpbGVGbihyZXN1bWFibGVGaWxlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChDb25maWdTZXJ2aWNlLnNldHRpbmdzLmNvcmUucHJlcHJvY2Vzc0hhc2hFbmFibGVkICYmIENvbmZpZ1NlcnZpY2Uuc2V0dGluZ3MuY29yZS5wcmVwcm9jZXNzSGFzaENoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGF0LmNoYW5nZUl0ZW1TdGF0dXMocmVzdW1hYmxlRmlsZS5pbnRlcm5hbEl0ZW0sIFRyYW5zZmVyU3RhdHVzLlByZXByb2Nlc3NpbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRpbnVlQ2FsbGJhY2sgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdW1hYmxlRmlsZS5wcmVwcm9jZXNzRmluaXNoZWQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhbmNlbENhbGxiYWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VtYWJsZUZpbGUuY2FuY2VsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuY2hhbmdlSXRlbVN0YXR1cyhyZXN1bWFibGVGaWxlLmludGVybmFsSXRlbSwgVHJhbnNmZXJTdGF0dXMuRmluaXNoZWQsIHJlc3VtYWJsZUZpbGUuaW50ZXJuYWxJdGVtLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnIudXBsb2FkTmV4dENodW5rKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB0aGF0LnByZXByb2Nlc3NIYXNoKHJlc3VtYWJsZUZpbGUuaW50ZXJuYWxJdGVtLCByZXN1bWFibGVGaWxlLmZpbGUsIGNvbnRpbnVlQ2FsbGJhY2ssIGNhbmNlbENhbGxiYWNrKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdW1hYmxlRmlsZS5wcmVwcm9jZXNzRmluaXNoZWQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQ29uZmlnU2VydmljZS5zZXR0aW5ncy5yZXN1bWFibGVqcy5nZW5lcmF0ZVVuaXF1ZUlkZW50aWZpZXIgPSBnZW5lcmF0ZUlkLmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgQ29uZmlnU2VydmljZS5zZXR0aW5ncy5yZXN1bWFibGVqcy5wcmVwcm9jZXNzID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIC8vIGNsb25lcyB0aGUgZnVuY3Rpb24gd2l0aCAne30nIGFjdGluZyBhcyBpdCdzIG5ldyAndGhpcycgcGFyYW1ldGVyXHJcbiAgICAgICAgICAgIHRoaXMucHJlcHJvY2Vzc0NodW5rRm4gPSBDb25maWdTZXJ2aWNlLnNldHRpbmdzLnJlc3VtYWJsZWpzLnByZXByb2Nlc3MuYmluZCh7fSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIENvbmZpZ1NlcnZpY2Uuc2V0dGluZ3MucmVzdW1hYmxlanMucHJlcHJvY2VzcyA9IHByZXByb2Nlc3NDaHVua0lubGluZUZuLmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgQ29uZmlnU2VydmljZS5zZXR0aW5ncy5yZXN1bWFibGVqcy5wcmVwcm9jZXNzRmlsZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAvLyBjbG9uZXMgdGhlIGZ1bmN0aW9uIHdpdGggJ3t9JyBhY3RpbmcgYXMgaXQncyBuZXcgJ3RoaXMnIHBhcmFtZXRlclxyXG4gICAgICAgICAgICB0aGlzLnByZXByb2Nlc3NGaWxlRm4gPSBDb25maWdTZXJ2aWNlLnNldHRpbmdzLnJlc3VtYWJsZWpzLnByZXByb2Nlc3NGaWxlLmJpbmQoe30pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBDb25maWdTZXJ2aWNlLnNldHRpbmdzLnJlc3VtYWJsZWpzLnByZXByb2Nlc3NGaWxlID0gcHJlcHJvY2Vzc0ZpbGVJbmxpbmVGbi5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgICAvLyBAdHMtaWdub3JlOiBpZ25vcmUgdHlwZSBjaGVja2luZ1xyXG4gICAgICAgIHRoaXMuciA9IG5ldyBSZXN1bWFibGUoQ29uZmlnU2VydmljZS5zZXR0aW5ncy5yZXN1bWFibGVqcyk7XHJcblxyXG4gICAgICAgIHRoaXMuci5vbignZmlsZUFkZGVkJywgZnVuY3Rpb24oZmlsZSwgZXZlbnQpIHtcclxuICAgICAgICAgICAgY29uc3QgdGhhdCA9IHRoaXMgYXMgUmVzdW1hYmxlSnNVcGxvYWRlcjtcclxuICAgICAgICAgICAgLy8gdGhhdC5sb2dnZXIubG9nKCdmaWxlQWRkZWQnLCBmaWxlKTtcclxuICAgICAgICAgICAgY29uc3QgbmV3SXRlbSA9IG5ldyBEYXRhdHJhbnNmZXJJdGVtKHtcclxuICAgICAgICAgICAgICAgIGlkOiBmaWxlLnVuaXF1ZUlkZW50aWZpZXIsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBmaWxlLmZpbGVOYW1lLFxyXG4gICAgICAgICAgICAgICAgcGF0aDogZmlsZS5yZWxhdGl2ZVBhdGguc3Vic3RyKDAsIGZpbGUucmVsYXRpdmVQYXRoLmxlbmd0aCAtIGZpbGUuZmlsZU5hbWUubGVuZ3RoKSxcclxuICAgICAgICAgICAgICAgIHNpemVDb250YWluZXI6IG5ldyBTaXplQ29udGFpbmVyKHsgZGVjaW1hbEJ5dGVVbml0OiBEZWNpbWFsQnl0ZVVuaXQuQnl0ZSwgZGVjaW1hbEJ5dGVVbml0U2l6ZTogZmlsZS5zaXplIH0pLFxyXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3NDb250YWluZXI6IG5ldyBQcm9ncmVzc0NvbnRhaW5lcihmaWxlLnNpemUpLFxyXG4gICAgICAgICAgICAgICAgdHJhbnNmZXJUeXBlOiBUcmFuc2ZlclR5cGUuVXBsb2FkLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiBUcmFuc2ZlclN0YXR1cy5SZWFkeSxcclxuICAgICAgICAgICAgICAgIGV4dGVybmFsSXRlbTogZmlsZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZmlsZS5pbnRlcm5hbEl0ZW0gPSBuZXdJdGVtO1xyXG4gICAgICAgICAgICB0aGF0LmFkZEl0ZW0obmV3SXRlbSk7XHJcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLnIub24oJ2ZpbGVQcm9ncmVzcycsIGZ1bmN0aW9uKGZpbGUsIG1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgY29uc3QgdGhhdCA9IHRoaXMgYXMgUmVzdW1hYmxlSnNVcGxvYWRlcjtcclxuICAgICAgICAgICAgLy8gdGhhdC5sb2dnZXIubG9nKCdmaWxlUHJvZ3Jlc3MnLCBmaWxlLnByb2dyZXNzKCkpO1xyXG4gICAgICAgICAgICB0aGF0LmNoYW5nZUl0ZW1TdGF0dXMoZmlsZS5pbnRlcm5hbEl0ZW0sIFRyYW5zZmVyU3RhdHVzLlVwbG9hZGluZyk7XHJcbiAgICAgICAgICAgIHRoYXQudXBkYXRlSXRlbVByb2dyZXNzKGZpbGUuaW50ZXJuYWxJdGVtLCBmaWxlLnByb2dyZXNzKCkpO1xyXG4gICAgICAgICAgICB0aGF0LnVwZGF0ZU92ZXJhbGxQcm9ncmVzcyh0aGF0LnRyYW5zZmVyVHlwZSwgdGhhdC5yLnByb2dyZXNzKCkpO1xyXG4gICAgICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5yLm9uKCdmaWxlU3VjY2VzcycsIGZ1bmN0aW9uKGZpbGUsIG1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgY29uc3QgdGhhdCA9IHRoaXMgYXMgUmVzdW1hYmxlSnNVcGxvYWRlcjtcclxuICAgICAgICAgICAgLy8gdGhhdC5sb2dnZXIubG9nKCdmaWxlU3VjY2VzcycsIGZpbGUpO1xyXG4gICAgICAgICAgICB0aGF0LmNoYW5nZUl0ZW1TdGF0dXMoZmlsZS5pbnRlcm5hbEl0ZW0sIFRyYW5zZmVyU3RhdHVzLkZpbmlzaGVkLCBtZXNzYWdlKTtcclxuICAgICAgICB9LmJpbmQodGhpcykpO1xyXG4gICAgICAgIHRoaXMuci5vbignZmlsZUVycm9yJywgZnVuY3Rpb24oZmlsZSwgbWVzc2FnZSkge1xyXG4gICAgICAgICAgICBjb25zdCB0aGF0ID0gdGhpcyBhcyBSZXN1bWFibGVKc1VwbG9hZGVyO1xyXG4gICAgICAgICAgICAvLyB0aGF0LmxvZ2dlci5sb2coJ2ZpbGVFcnJvcicsIGZpbGUsIG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB0aGF0LmNoYW5nZUl0ZW1TdGF0dXMoZmlsZS5pbnRlcm5hbEl0ZW0sIFRyYW5zZmVyU3RhdHVzLkZhaWxlZCwgbWVzc2FnZSk7XHJcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLnIub24oJ3VwbG9hZFN0YXJ0JywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzIGFzIFJlc3VtYWJsZUpzVXBsb2FkZXI7XHJcbiAgICAgICAgICAgIC8vIHRoYXQubG9nZ2VyLmxvZygndXBsb2FkU3RhcnQnLCB0aGF0LnIpO1xyXG4gICAgICAgICAgICB0aGF0Ll9pc1dvcmtpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGF0LnVwZGF0ZVpvbmUoKTtcclxuICAgICAgICAgICAgdGhhdC51cGRhdGVPdmVyYWxsUHJvZ3Jlc3ModGhhdC50cmFuc2ZlclR5cGUsIHRoYXQuci5wcm9ncmVzcygpKTtcclxuICAgICAgICAgICAgdGhhdC51cGRhdGVPdmVyYWxsU2l6ZSh0aGF0LnIuZ2V0U2l6ZSgpKTtcclxuICAgICAgICB9LmJpbmQodGhpcykpO1xyXG4gICAgICAgIHRoaXMuci5vbignY2h1bmtpbmdDb21wbGV0ZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjb25zdCB0aGF0ID0gdGhpcyBhcyBSZXN1bWFibGVKc1VwbG9hZGVyO1xyXG4gICAgICAgICAgICAvLyB0aGF0LmxvZ2dlci5sb2coJ2NodW5raW5nQ29tcGxldGUnKTtcclxuICAgICAgICB9LmJpbmQodGhpcykpO1xyXG4gICAgICAgIHRoaXMuci5vbigncGF1c2UnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY29uc3QgdGhhdCA9IHRoaXMgYXMgUmVzdW1hYmxlSnNVcGxvYWRlcjtcclxuICAgICAgICAgICAgLy8gdGhhdC5sb2dnZXIubG9nKCdwYXVzZScpO1xyXG4gICAgICAgICAgICB0aGF0Ll9pc1dvcmtpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhhdC51cGRhdGVab25lKCk7XHJcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLnIub24oJ2NhbmNlbCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjb25zdCB0aGF0ID0gdGhpcyBhcyBSZXN1bWFibGVKc1VwbG9hZGVyO1xyXG4gICAgICAgICAgICAvLyB0aGF0LmxvZ2dlci5sb2coJ2NhbmNlbCcpO1xyXG4gICAgICAgICAgICB0aGF0Ll9pc1dvcmtpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhhdC51cGRhdGVab25lKCk7XHJcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLnIub24oJ2NvbXBsZXRlJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzIGFzIFJlc3VtYWJsZUpzVXBsb2FkZXI7XHJcbiAgICAgICAgICAgIC8vIHRoYXQubG9nZ2VyLmxvZygnY29tcGxldGUnLCB0aGF0LnIpO1xyXG4gICAgICAgICAgICB0aGF0Ll9pc1dvcmtpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhhdC51cGRhdGVab25lKCk7XHJcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXNzaWduQnJvd3NlKGVsZW1lbnQsIGlzRGlyZWN0b3J5KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5yLmFzc2lnbkJyb3dzZShlbGVtZW50LCBpc0RpcmVjdG9yeSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzc2lnbkRyb3AoZWxlbWVudCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuci5hc3NpZ25Ecm9wKGVsZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlZGl0UGF0aChvbGRQYXRoOiBzdHJpbmcsIG5ld1BhdGg6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHN1cGVyLmVkaXRQYXRoKG9sZFBhdGgsIG5ld1BhdGgpO1xyXG4gICAgICAgIHRoaXMuci5maWxlcy5mb3JFYWNoKChmaWxlOiBhbnksIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGludGVybmFsSXRlbSA9IGZpbGUuaW50ZXJuYWxJdGVtIGFzIElEYXRhdHJhbnNmZXJJdGVtO1xyXG4gICAgICAgICAgICBpZiAoaW50ZXJuYWxJdGVtLnN0YXR1cyA9PT0gVHJhbnNmZXJTdGF0dXMuUmVhZHkgJiYgaW50ZXJuYWxJdGVtLnBhdGggPT09IG9sZFBhdGgpIHtcclxuICAgICAgICAgICAgICAgIGZpbGUucmVsYXRpdmVQYXRoID0gbmV3UGF0aCArIGZpbGUuZmlsZU5hbWU7XHJcbiAgICAgICAgICAgICAgICBpbnRlcm5hbEl0ZW0ucGF0aCA9IG5ld1BhdGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZWRpdEZpbGVuYW1lKGl0ZW06IElEYXRhdHJhbnNmZXJJdGVtLCBuYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBzdXBlci5lZGl0RmlsZW5hbWUoaXRlbSwgbmFtZSk7XHJcbiAgICAgICAgaXRlbS5leHRlcm5hbEl0ZW0uZmlsZU5hbWUgPSBuYW1lO1xyXG4gICAgICAgIGl0ZW0uZXh0ZXJuYWxJdGVtLnJlbGF0aXZlUGF0aCA9IGl0ZW0ucGF0aCArIG5hbWU7XHJcbiAgICAgICAgaXRlbS5uYW1lID0gbmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhcnRBbGwoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5yLnVwbG9hZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwYXVzZUFsbCgpOiB2b2lkIHtcclxuICAgICAgICAvLyByZXNldCBwcmVwcm9jZXNzU3RhdGVcclxuICAgICAgICB0aGlzLnIuZmlsZXMuZm9yRWFjaCgoZmlsZTogYW55LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZmlsZS5wcmVwcm9jZXNzU3RhdGUgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIGZpbGUucHJlcHJvY2Vzc1N0YXRlID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuci5wYXVzZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW1vdmVBbGwoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgdGVtcEZpbGVzID0gdGhpcy5yLmZpbGVzLnNsaWNlKCk7XHJcbiAgICAgICAgdGVtcEZpbGVzLmZvckVhY2goKGZpbGU6IGFueSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdGhhdCA9IHRoaXMgYXMgUmVzdW1hYmxlSnNVcGxvYWRlcjtcclxuICAgICAgICAgICAgdGhhdC5yLnJlbW92ZUZpbGUoZmlsZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5faXNXb3JraW5nID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbW92ZUl0ZW0oaXRlbTogSURhdGF0cmFuc2Zlckl0ZW0pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnIucmVtb3ZlRmlsZShpdGVtLmV4dGVybmFsSXRlbSk7XHJcbiAgICAgICAgaWYgKHRoaXMuci5maWxlcy5sZW5ndGggPD0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLl9pc1dvcmtpbmcgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJldHJ5SXRlbShpdGVtOiBJRGF0YXRyYW5zZmVySXRlbSk6IHZvaWQge1xyXG4gICAgICAgIGl0ZW0uZXh0ZXJuYWxJdGVtLnJldHJ5KCk7XHJcbiAgICB9XHJcbn1cclxuIl19