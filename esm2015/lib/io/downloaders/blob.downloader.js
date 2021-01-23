import { Injectable } from "@angular/core";
import { saveAs } from "file-saver";
import { BaseDownloader } from "./base.downloader";
import { DatatransferItem, } from "../../models/datatransfer-item.model";
import { ConfigService } from "../../services/config.service";
import { LoggerService } from "../../services/logger.service";
import { GuidUtil } from "../../utils/guid.util";
import { CryptoService } from "../../services/crypto.service";
import { CommonUtil } from "../../utils/common.util";
import { TransferStatus } from "../../enums/transfer-status.enum";
import { SizeContainer } from "../../models/size-container.model";
import { DecimalByteUnit } from "../../enums/decimal-byte-unit.enum";
import { ProgressContainer } from "../../models/progress-container.model";
import { TransferType } from "../../enums/transfer-type.enum";
import * as i0 from "@angular/core";
import * as i1 from "../../services/logger.service";
import * as i2 from "../../utils/guid.util";
import * as i3 from "../../services/crypto.service";
import * as i4 from "../../utils/common.util";
export class BlobDownloader extends BaseDownloader {
    constructor(logger, guidUtil, cryptoService, commonUtil) {
        super(logger, guidUtil, cryptoService);
        this.logger = logger;
        this.guidUtil = guidUtil;
        this.cryptoService = cryptoService;
        this.commonUtil = commonUtil;
        this.throttleProgressCallbacks = 0.1;
        this.files = [];
        this.queue = [];
        this.downloading = [];
    }
    startAll() {
        if (!this.isWorking()) {
            for (let index = 0; index < ConfigService.settings.core.simultaneousDownloads; index++) {
                this.downloadNext();
            }
        }
    }
    pauseAll() { }
    removeAll() {
        this.files.forEach((item, index) => {
            const that = this;
            that.abortDownload(item);
        });
        this.files.length = 0;
        this.queue.length = 0;
        this.downloading.length = 0;
        this._isWorking = false;
        this.updateOverallSize(this.getSize());
        this.updateOverallProgress(this.transferType, this.getProgress());
    }
    removeItem(item) {
        this.abortDownload(item);
        this.removeItemFromArray(item, this.files);
        this.removeItemFromArray(item, this.queue);
        this.removeItemFromArray(item, this.downloading);
        this.downloadNext();
    }
    removeItemFromArray(item, array) {
        for (let i = array.length - 1; i >= 0; i--) {
            if (array[i] === item) {
                array.splice(i, 1);
                break;
            }
        }
    }
    retryItem(item) {
        this.abortDownload(item);
        this.removeItemFromArray(item, this.queue);
        this.removeItemFromArray(item, this.downloading);
        this._isWorking = this.downloading.length > 0;
        item.externalItem.progress = 0;
        this.updateItemProgress(item, item.externalItem.progress);
        this.changeItemStatus(item, TransferStatus.Queued);
        this.queue.push(item);
        this.initDownload(item);
        this.downloadNext();
    }
    download(filename, url, sizeInBytes) {
        const newItem = new DatatransferItem({
            id: this.generateUniqueIdentifier(),
            name: filename,
            sizeContainer: new SizeContainer({
                decimalByteUnit: DecimalByteUnit.Byte,
                decimalByteUnitSize: sizeInBytes,
            }),
            progressContainer: new ProgressContainer(sizeInBytes),
            transferType: TransferType.Download,
            status: TransferStatus.Queued,
            externalItem: {
                url,
                progress: 0,
                size: sizeInBytes,
                lastProgressCallback: new Date(),
            },
        });
        this.addItem(newItem);
        this.files.push(newItem);
        this.queue.push(newItem);
        this.initDownload(newItem);
        this.downloadNext();
    }
    initDownload(item) {
        const xhr = new XMLHttpRequest();
        item.externalItem.xhr = xhr;
        xhr.open(ConfigService.settings.core.downloadMethod, item.externalItem.url);
        xhr.timeout = ConfigService.settings.core.downloadXhrTimeout;
        xhr.withCredentials = ConfigService.settings.core.downloadWithCredentials;
        // Add data from header options
        let customHeaders = ConfigService.settings.core.downloadHeaders;
        if (typeof customHeaders === "function") {
            customHeaders = customHeaders(item);
        }
        this.commonUtil.each(customHeaders, function (k, v) {
            xhr.setRequestHeader(k, v);
        });
        xhr.responseType = "blob";
        xhr.onloadstart = function (e) {
            const that = this;
            that.changeItemStatus(item, TransferStatus.Downloading);
        }.bind(this);
        xhr.onprogress = function (e) {
            const that = this;
            if (new Date().getTime() -
                item.externalItem.lastProgressCallback.getTime() >
                that.throttleProgressCallbacks * 1000) {
                item.externalItem.progress = e.loaded / e.total;
                that.updateItemProgress(item, item.externalItem.progress);
                that.updateOverallProgress(that.transferType, that.getProgress());
                item.externalItem.lastProgressCallback = new Date();
            }
        }.bind(this);
        xhr.onloadend = function (e) {
            /*
                  Value	State	Description
                  0	UNSENT	Client has been created. open() not called yet.
                  1	OPENED	open() has been called.
                  2	HEADERS_RECEIVED	send() has been called, and headers and status are available.
                  3	LOADING	Downloading; responseText holds partial data.
                  4	DONE	The operation is complete.
                  */
            const that = this;
            if (xhr.readyState === 4) {
                item.externalItem.progress = 1;
                that.updateItemProgress(item, item.externalItem.progress);
                if (xhr.status === 200) {
                    that.changeItemStatus(item, TransferStatus.Finished);
                    if (ConfigService.settings.core.saveDownloadFileAs) {
                        ConfigService.settings.core.saveDownloadFileAs(xhr.response, item.name);
                    }
                    else {
                        saveAs(xhr.response, item.name);
                    }
                }
                else if (xhr.status !== 0) {
                    // don't change status for aborted items
                    that.changeItemStatus(item, TransferStatus.Failed);
                }
                that.removeItemFromArray(item, that.downloading);
                that.downloadNext();
            }
        }.bind(this);
    }
    downloadNext() {
        this.updateOverallSize(this.getSize());
        this.updateOverallProgress(this.transferType, this.getProgress());
        if (this.downloading.length <
            ConfigService.settings.core.simultaneousDownloads) {
            const item = this.queue.shift();
            if (!!item && !!item.externalItem && !!item.externalItem.xhr) {
                this.changeItemStatus(item, TransferStatus.Downloading);
                this.downloading.push(item);
                this._isWorking = this.downloading.length > 0;
                item.externalItem.xhr.send();
            }
        }
    }
    abortDownload(item) {
        if (!!item && !!item.externalItem && !!item.externalItem.xhr) {
            item.externalItem.xhr.abort();
            item.externalItem.xhr = null;
        }
    }
    getSize() {
        let totalSize = 0;
        this.files.forEach((file, index) => {
            totalSize += file.externalItem.size;
        });
        return totalSize;
    }
    getProgress() {
        let totalDone = 0;
        let totalSize = 0;
        this.files.forEach((file, index) => {
            let currentFileProgress = file.externalItem.progress;
            if (file.status === TransferStatus.Failed) {
                currentFileProgress = 1;
            }
            totalDone += currentFileProgress * file.externalItem.size;
            totalSize += file.externalItem.size;
        });
        return totalSize > 0 ? totalDone / totalSize : 0;
    }
}
BlobDownloader.ɵfac = function BlobDownloader_Factory(t) { return new (t || BlobDownloader)(i0.ɵɵinject(i1.LoggerService), i0.ɵɵinject(i2.GuidUtil), i0.ɵɵinject(i3.CryptoService), i0.ɵɵinject(i4.CommonUtil)); };
BlobDownloader.ɵprov = i0.ɵɵdefineInjectable({ token: BlobDownloader, factory: BlobDownloader.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BlobDownloader, [{
        type: Injectable
    }], function () { return [{ type: i1.LoggerService }, { type: i2.GuidUtil }, { type: i3.CryptoService }, { type: i4.CommonUtil }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvYi5kb3dubG9hZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYW1kLWxpYi9zcmMvbGliL2lvL2Rvd25sb2FkZXJzL2Jsb2IuZG93bmxvYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDcEMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFFTCxnQkFBZ0IsR0FDakIsTUFBTSxzQ0FBc0MsQ0FBQztBQUM5QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzlELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNsRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDbEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7Ozs7O0FBRzlELE1BQU0sT0FBTyxjQUFlLFNBQVEsY0FBYztJQU1oRCxZQUNZLE1BQXFCLEVBQ3JCLFFBQWtCLEVBQ2xCLGFBQTRCLEVBQzlCLFVBQXNCO1FBRTlCLEtBQUssQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLGFB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QUMsTUFBTSxLQUFLLGNBQWMsQ0FBQyxNQUFNLEVBQUU7Z0JBQ3pDLG1CQUFtQixHQUFHLENBQUMsQ0FBQzthQUN6QjtZQUNELFNBQVMsSUFBSSxtQkFBbUIsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQztZQUMxRCxTQUFTLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7UUFDdEMsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs0RUFyTlUsY0FBYztzREFBZCxjQUFjLFdBQWQsY0FBYzt1RkFBZCxjQUFjO2NBRDFCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgc2F2ZUFzIH0gZnJvbSBcImZpbGUtc2F2ZXJcIjtcclxuaW1wb3J0IHsgQmFzZURvd25sb2FkZXIgfSBmcm9tIFwiLi9iYXNlLmRvd25sb2FkZXJcIjtcclxuaW1wb3J0IHtcclxuICBJRGF0YXRyYW5zZmVySXRlbSxcclxuICBEYXRhdHJhbnNmZXJJdGVtLFxyXG59IGZyb20gXCIuLi8uLi9tb2RlbHMvZGF0YXRyYW5zZmVyLWl0ZW0ubW9kZWxcIjtcclxuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9jb25maWcuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBMb2dnZXJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2xvZ2dlci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEd1aWRVdGlsIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2d1aWQudXRpbFwiO1xyXG5pbXBvcnQgeyBDcnlwdG9TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2NyeXB0by5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IENvbW1vblV0aWwgfSBmcm9tIFwiLi4vLi4vdXRpbHMvY29tbW9uLnV0aWxcIjtcclxuaW1wb3J0IHsgVHJhbnNmZXJTdGF0dXMgfSBmcm9tIFwiLi4vLi4vZW51bXMvdHJhbnNmZXItc3RhdHVzLmVudW1cIjtcclxuaW1wb3J0IHsgU2l6ZUNvbnRhaW5lciB9IGZyb20gXCIuLi8uLi9tb2RlbHMvc2l6ZS1jb250YWluZXIubW9kZWxcIjtcclxuaW1wb3J0IHsgRGVjaW1hbEJ5dGVVbml0IH0gZnJvbSBcIi4uLy4uL2VudW1zL2RlY2ltYWwtYnl0ZS11bml0LmVudW1cIjtcclxuaW1wb3J0IHsgUHJvZ3Jlc3NDb250YWluZXIgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL3Byb2dyZXNzLWNvbnRhaW5lci5tb2RlbFwiO1xyXG5pbXBvcnQgeyBUcmFuc2ZlclR5cGUgfSBmcm9tIFwiLi4vLi4vZW51bXMvdHJhbnNmZXItdHlwZS5lbnVtXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBCbG9iRG93bmxvYWRlciBleHRlbmRzIEJhc2VEb3dubG9hZGVyIHtcclxuICBwcml2YXRlIHRocm90dGxlUHJvZ3Jlc3NDYWxsYmFja3MgPSAwLjE7XHJcbiAgcHJpdmF0ZSBmaWxlczogSURhdGF0cmFuc2Zlckl0ZW1bXSA9IFtdO1xyXG4gIHByaXZhdGUgcXVldWU6IElEYXRhdHJhbnNmZXJJdGVtW10gPSBbXTtcclxuICBwcml2YXRlIGRvd25sb2FkaW5nOiBJRGF0YXRyYW5zZmVySXRlbVtdID0gW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJvdGVjdGVkIGxvZ2dlcjogTG9nZ2VyU2VydmljZSxcclxuICAgIHByb3RlY3RlZCBndWlkVXRpbDogR3VpZFV0aWwsXHJcbiAgICBwcm90ZWN0ZWQgY3J5cHRvU2VydmljZTogQ3J5cHRvU2VydmljZSxcclxuICAgIHByaXZhdGUgY29tbW9uVXRpbDogQ29tbW9uVXRpbFxyXG4gICkge1xyXG4gICAgc3VwZXIobG9nZ2VyLCBndWlkVXRpbCwgY3J5cHRvU2VydmljZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhcnRBbGwoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuaXNXb3JraW5nKCkpIHtcclxuICAgICAgZm9yIChcclxuICAgICAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgICAgIGluZGV4IDwgQ29uZmlnU2VydmljZS5zZXR0aW5ncy5jb3JlLnNpbXVsdGFuZW91c0Rvd25sb2FkcztcclxuICAgICAgICBpbmRleCsrXHJcbiAgICAgICkge1xyXG4gICAgICAgIHRoaXMuZG93bmxvYWROZXh0KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBwYXVzZUFsbCgpOiB2b2lkIHt9XHJcblxyXG4gIHB1YmxpYyByZW1vdmVBbGwoKTogdm9pZCB7XHJcbiAgICB0aGlzLmZpbGVzLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgIGNvbnN0IHRoYXQgPSB0aGlzIGFzIEJsb2JEb3dubG9hZGVyO1xyXG4gICAgICB0aGF0LmFib3J0RG93bmxvYWQoaXRlbSk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuZmlsZXMubGVuZ3RoID0gMDtcclxuICAgIHRoaXMucXVldWUubGVuZ3RoID0gMDtcclxuICAgIHRoaXMuZG93bmxvYWRpbmcubGVuZ3RoID0gMDtcclxuICAgIHRoaXMuX2lzV29ya2luZyA9IGZhbHNlO1xyXG4gICAgdGhpcy51cGRhdGVPdmVyYWxsU2l6ZSh0aGlzLmdldFNpemUoKSk7XHJcbiAgICB0aGlzLnVwZGF0ZU92ZXJhbGxQcm9ncmVzcyh0aGlzLnRyYW5zZmVyVHlwZSwgdGhpcy5nZXRQcm9ncmVzcygpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW1vdmVJdGVtKGl0ZW06IElEYXRhdHJhbnNmZXJJdGVtKTogdm9pZCB7XHJcbiAgICB0aGlzLmFib3J0RG93bmxvYWQoaXRlbSk7XHJcbiAgICB0aGlzLnJlbW92ZUl0ZW1Gcm9tQXJyYXkoaXRlbSwgdGhpcy5maWxlcyk7XHJcbiAgICB0aGlzLnJlbW92ZUl0ZW1Gcm9tQXJyYXkoaXRlbSwgdGhpcy5xdWV1ZSk7XHJcbiAgICB0aGlzLnJlbW92ZUl0ZW1Gcm9tQXJyYXkoaXRlbSwgdGhpcy5kb3dubG9hZGluZyk7XHJcbiAgICB0aGlzLmRvd25sb2FkTmV4dCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW1vdmVJdGVtRnJvbUFycmF5KFxyXG4gICAgaXRlbTogSURhdGF0cmFuc2Zlckl0ZW0sXHJcbiAgICBhcnJheTogSURhdGF0cmFuc2Zlckl0ZW1bXVxyXG4gICk6IHZvaWQge1xyXG4gICAgZm9yIChsZXQgaSA9IGFycmF5Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgIGlmIChhcnJheVtpXSA9PT0gaXRlbSkge1xyXG4gICAgICAgIGFycmF5LnNwbGljZShpLCAxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHJldHJ5SXRlbShpdGVtOiBJRGF0YXRyYW5zZmVySXRlbSk6IHZvaWQge1xyXG4gICAgdGhpcy5hYm9ydERvd25sb2FkKGl0ZW0pO1xyXG4gICAgdGhpcy5yZW1vdmVJdGVtRnJvbUFycmF5KGl0ZW0sIHRoaXMucXVldWUpO1xyXG4gICAgdGhpcy5yZW1vdmVJdGVtRnJvbUFycmF5KGl0ZW0sIHRoaXMuZG93bmxvYWRpbmcpO1xyXG4gICAgdGhpcy5faXNXb3JraW5nID0gdGhpcy5kb3dubG9hZGluZy5sZW5ndGggPiAwO1xyXG4gICAgaXRlbS5leHRlcm5hbEl0ZW0ucHJvZ3Jlc3MgPSAwO1xyXG4gICAgdGhpcy51cGRhdGVJdGVtUHJvZ3Jlc3MoaXRlbSwgaXRlbS5leHRlcm5hbEl0ZW0ucHJvZ3Jlc3MpO1xyXG4gICAgdGhpcy5jaGFuZ2VJdGVtU3RhdHVzKGl0ZW0sIFRyYW5zZmVyU3RhdHVzLlF1ZXVlZCk7XHJcbiAgICB0aGlzLnF1ZXVlLnB1c2goaXRlbSk7XHJcbiAgICB0aGlzLmluaXREb3dubG9hZChpdGVtKTtcclxuICAgIHRoaXMuZG93bmxvYWROZXh0KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZG93bmxvYWQoZmlsZW5hbWU6IHN0cmluZywgdXJsOiBzdHJpbmcsIHNpemVJbkJ5dGVzOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGNvbnN0IG5ld0l0ZW0gPSBuZXcgRGF0YXRyYW5zZmVySXRlbSh7XHJcbiAgICAgIGlkOiB0aGlzLmdlbmVyYXRlVW5pcXVlSWRlbnRpZmllcigpLFxyXG4gICAgICBuYW1lOiBmaWxlbmFtZSxcclxuICAgICAgc2l6ZUNvbnRhaW5lcjogbmV3IFNpemVDb250YWluZXIoe1xyXG4gICAgICAgIGRlY2ltYWxCeXRlVW5pdDogRGVjaW1hbEJ5dGVVbml0LkJ5dGUsXHJcbiAgICAgICAgZGVjaW1hbEJ5dGVVbml0U2l6ZTogc2l6ZUluQnl0ZXMsXHJcbiAgICAgIH0pLFxyXG4gICAgICBwcm9ncmVzc0NvbnRhaW5lcjogbmV3IFByb2dyZXNzQ29udGFpbmVyKHNpemVJbkJ5dGVzKSxcclxuICAgICAgdHJhbnNmZXJUeXBlOiBUcmFuc2ZlclR5cGUuRG93bmxvYWQsXHJcbiAgICAgIHN0YXR1czogVHJhbnNmZXJTdGF0dXMuUXVldWVkLFxyXG4gICAgICBleHRlcm5hbEl0ZW06IHtcclxuICAgICAgICB1cmwsXHJcbiAgICAgICAgcHJvZ3Jlc3M6IDAsXHJcbiAgICAgICAgc2l6ZTogc2l6ZUluQnl0ZXMsXHJcbiAgICAgICAgbGFzdFByb2dyZXNzQ2FsbGJhY2s6IG5ldyBEYXRlKCksXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmFkZEl0ZW0obmV3SXRlbSk7XHJcbiAgICB0aGlzLmZpbGVzLnB1c2gobmV3SXRlbSk7XHJcbiAgICB0aGlzLnF1ZXVlLnB1c2gobmV3SXRlbSk7XHJcbiAgICB0aGlzLmluaXREb3dubG9hZChuZXdJdGVtKTtcclxuICAgIHRoaXMuZG93bmxvYWROZXh0KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluaXREb3dubG9hZChpdGVtOiBJRGF0YXRyYW5zZmVySXRlbSk6IHZvaWQge1xyXG4gICAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICBpdGVtLmV4dGVybmFsSXRlbS54aHIgPSB4aHI7XHJcblxyXG4gICAgeGhyLm9wZW4oQ29uZmlnU2VydmljZS5zZXR0aW5ncy5jb3JlLmRvd25sb2FkTWV0aG9kLCBpdGVtLmV4dGVybmFsSXRlbS51cmwpO1xyXG4gICAgeGhyLnRpbWVvdXQgPSBDb25maWdTZXJ2aWNlLnNldHRpbmdzLmNvcmUuZG93bmxvYWRYaHJUaW1lb3V0O1xyXG4gICAgeGhyLndpdGhDcmVkZW50aWFscyA9IENvbmZpZ1NlcnZpY2Uuc2V0dGluZ3MuY29yZS5kb3dubG9hZFdpdGhDcmVkZW50aWFscztcclxuXHJcbiAgICAvLyBBZGQgZGF0YSBmcm9tIGhlYWRlciBvcHRpb25zXHJcbiAgICBsZXQgY3VzdG9tSGVhZGVycyA9IENvbmZpZ1NlcnZpY2Uuc2V0dGluZ3MuY29yZS5kb3dubG9hZEhlYWRlcnM7XHJcbiAgICBpZiAodHlwZW9mIGN1c3RvbUhlYWRlcnMgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICBjdXN0b21IZWFkZXJzID0gY3VzdG9tSGVhZGVycyhpdGVtKTtcclxuICAgIH1cclxuICAgIHRoaXMuY29tbW9uVXRpbC5lYWNoKGN1c3RvbUhlYWRlcnMsIGZ1bmN0aW9uIChrOiBzdHJpbmcsIHY6IHN0cmluZykge1xyXG4gICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihrLCB2KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHhoci5yZXNwb25zZVR5cGUgPSBcImJsb2JcIjtcclxuICAgIHhoci5vbmxvYWRzdGFydCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGNvbnN0IHRoYXQgPSB0aGlzIGFzIEJsb2JEb3dubG9hZGVyO1xyXG4gICAgICB0aGF0LmNoYW5nZUl0ZW1TdGF0dXMoaXRlbSwgVHJhbnNmZXJTdGF0dXMuRG93bmxvYWRpbmcpO1xyXG4gICAgfS5iaW5kKHRoaXMpO1xyXG4gICAgeGhyLm9ucHJvZ3Jlc3MgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBjb25zdCB0aGF0ID0gdGhpcyBhcyBCbG9iRG93bmxvYWRlcjtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIG5ldyBEYXRlKCkuZ2V0VGltZSgpIC1cclxuICAgICAgICAgIGl0ZW0uZXh0ZXJuYWxJdGVtLmxhc3RQcm9ncmVzc0NhbGxiYWNrLmdldFRpbWUoKSA+XHJcbiAgICAgICAgdGhhdC50aHJvdHRsZVByb2dyZXNzQ2FsbGJhY2tzICogMTAwMFxyXG4gICAgICApIHtcclxuICAgICAgICBpdGVtLmV4dGVybmFsSXRlbS5wcm9ncmVzcyA9IGUubG9hZGVkIC8gZS50b3RhbDtcclxuICAgICAgICB0aGF0LnVwZGF0ZUl0ZW1Qcm9ncmVzcyhpdGVtLCBpdGVtLmV4dGVybmFsSXRlbS5wcm9ncmVzcyk7XHJcbiAgICAgICAgdGhhdC51cGRhdGVPdmVyYWxsUHJvZ3Jlc3ModGhhdC50cmFuc2ZlclR5cGUsIHRoYXQuZ2V0UHJvZ3Jlc3MoKSk7XHJcbiAgICAgICAgaXRlbS5leHRlcm5hbEl0ZW0ubGFzdFByb2dyZXNzQ2FsbGJhY2sgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9LmJpbmQodGhpcyk7XHJcbiAgICB4aHIub25sb2FkZW5kID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgLypcclxuICAgICAgICAgICAgVmFsdWVcdFN0YXRlXHREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAwXHRVTlNFTlRcdENsaWVudCBoYXMgYmVlbiBjcmVhdGVkLiBvcGVuKCkgbm90IGNhbGxlZCB5ZXQuXHJcbiAgICAgICAgICAgIDFcdE9QRU5FRFx0b3BlbigpIGhhcyBiZWVuIGNhbGxlZC5cclxuICAgICAgICAgICAgMlx0SEVBREVSU19SRUNFSVZFRFx0c2VuZCgpIGhhcyBiZWVuIGNhbGxlZCwgYW5kIGhlYWRlcnMgYW5kIHN0YXR1cyBhcmUgYXZhaWxhYmxlLlxyXG4gICAgICAgICAgICAzXHRMT0FESU5HXHREb3dubG9hZGluZzsgcmVzcG9uc2VUZXh0IGhvbGRzIHBhcnRpYWwgZGF0YS5cclxuICAgICAgICAgICAgNFx0RE9ORVx0VGhlIG9wZXJhdGlvbiBpcyBjb21wbGV0ZS5cclxuICAgICAgICAgICAgKi9cclxuICAgICAgY29uc3QgdGhhdCA9IHRoaXMgYXMgQmxvYkRvd25sb2FkZXI7XHJcbiAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xyXG4gICAgICAgIGl0ZW0uZXh0ZXJuYWxJdGVtLnByb2dyZXNzID0gMTtcclxuICAgICAgICB0aGF0LnVwZGF0ZUl0ZW1Qcm9ncmVzcyhpdGVtLCBpdGVtLmV4dGVybmFsSXRlbS5wcm9ncmVzcyk7XHJcbiAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgdGhhdC5jaGFuZ2VJdGVtU3RhdHVzKGl0ZW0sIFRyYW5zZmVyU3RhdHVzLkZpbmlzaGVkKTtcclxuICAgICAgICAgIGlmIChDb25maWdTZXJ2aWNlLnNldHRpbmdzLmNvcmUuc2F2ZURvd25sb2FkRmlsZUFzKSB7XHJcbiAgICAgICAgICAgIENvbmZpZ1NlcnZpY2Uuc2V0dGluZ3MuY29yZS5zYXZlRG93bmxvYWRGaWxlQXMoXHJcbiAgICAgICAgICAgICAgeGhyLnJlc3BvbnNlLFxyXG4gICAgICAgICAgICAgIGl0ZW0ubmFtZVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2F2ZUFzKHhoci5yZXNwb25zZSwgaXRlbS5uYW1lKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKHhoci5zdGF0dXMgIT09IDApIHtcclxuICAgICAgICAgIC8vIGRvbid0IGNoYW5nZSBzdGF0dXMgZm9yIGFib3J0ZWQgaXRlbXNcclxuICAgICAgICAgIHRoYXQuY2hhbmdlSXRlbVN0YXR1cyhpdGVtLCBUcmFuc2ZlclN0YXR1cy5GYWlsZWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGF0LnJlbW92ZUl0ZW1Gcm9tQXJyYXkoaXRlbSwgdGhhdC5kb3dubG9hZGluZyk7XHJcbiAgICAgICAgdGhhdC5kb3dubG9hZE5leHQoKTtcclxuICAgICAgfVxyXG4gICAgfS5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkb3dubG9hZE5leHQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnVwZGF0ZU92ZXJhbGxTaXplKHRoaXMuZ2V0U2l6ZSgpKTtcclxuICAgIHRoaXMudXBkYXRlT3ZlcmFsbFByb2dyZXNzKHRoaXMudHJhbnNmZXJUeXBlLCB0aGlzLmdldFByb2dyZXNzKCkpO1xyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLmRvd25sb2FkaW5nLmxlbmd0aCA8XHJcbiAgICAgIENvbmZpZ1NlcnZpY2Uuc2V0dGluZ3MuY29yZS5zaW11bHRhbmVvdXNEb3dubG9hZHNcclxuICAgICkge1xyXG4gICAgICBjb25zdCBpdGVtID0gdGhpcy5xdWV1ZS5zaGlmdCgpO1xyXG4gICAgICBpZiAoISFpdGVtICYmICEhaXRlbS5leHRlcm5hbEl0ZW0gJiYgISFpdGVtLmV4dGVybmFsSXRlbS54aHIpIHtcclxuICAgICAgICB0aGlzLmNoYW5nZUl0ZW1TdGF0dXMoaXRlbSwgVHJhbnNmZXJTdGF0dXMuRG93bmxvYWRpbmcpO1xyXG4gICAgICAgIHRoaXMuZG93bmxvYWRpbmcucHVzaChpdGVtKTtcclxuICAgICAgICB0aGlzLl9pc1dvcmtpbmcgPSB0aGlzLmRvd25sb2FkaW5nLmxlbmd0aCA+IDA7XHJcbiAgICAgICAgaXRlbS5leHRlcm5hbEl0ZW0ueGhyLnNlbmQoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhYm9ydERvd25sb2FkKGl0ZW06IElEYXRhdHJhbnNmZXJJdGVtKTogdm9pZCB7XHJcbiAgICBpZiAoISFpdGVtICYmICEhaXRlbS5leHRlcm5hbEl0ZW0gJiYgISFpdGVtLmV4dGVybmFsSXRlbS54aHIpIHtcclxuICAgICAgaXRlbS5leHRlcm5hbEl0ZW0ueGhyLmFib3J0KCk7XHJcbiAgICAgIGl0ZW0uZXh0ZXJuYWxJdGVtLnhociA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFNpemUoKTogbnVtYmVyIHtcclxuICAgIGxldCB0b3RhbFNpemUgPSAwO1xyXG4gICAgdGhpcy5maWxlcy5mb3JFYWNoKChmaWxlLCBpbmRleCkgPT4ge1xyXG4gICAgICB0b3RhbFNpemUgKz0gZmlsZS5leHRlcm5hbEl0ZW0uc2l6ZTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHRvdGFsU2l6ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0UHJvZ3Jlc3MoKTogbnVtYmVyIHtcclxuICAgIGxldCB0b3RhbERvbmUgPSAwO1xyXG4gICAgbGV0IHRvdGFsU2l6ZSA9IDA7XHJcbiAgICB0aGlzLmZpbGVzLmZvckVhY2goKGZpbGUsIGluZGV4KSA9PiB7XHJcbiAgICAgIGxldCBjdXJyZW50RmlsZVByb2dyZXNzID0gZmlsZS5leHRlcm5hbEl0ZW0ucHJvZ3Jlc3M7XHJcbiAgICAgIGlmIChmaWxlLnN0YXR1cyA9PT0gVHJhbnNmZXJTdGF0dXMuRmFpbGVkKSB7XHJcbiAgICAgICAgY3VycmVudEZpbGVQcm9ncmVzcyA9IDE7XHJcbiAgICAgIH1cclxuICAgICAgdG90YWxEb25lICs9IGN1cnJlbnRGaWxlUHJvZ3Jlc3MgKiBmaWxlLmV4dGVybmFsSXRlbS5zaXplO1xyXG4gICAgICB0b3RhbFNpemUgKz0gZmlsZS5leHRlcm5hbEl0ZW0uc2l6ZTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHRvdGFsU2l6ZSA+IDAgPyB0b3RhbERvbmUgLyB0b3RhbFNpemUgOiAwO1xyXG4gIH1cclxufVxyXG4iXX0=