import { ConfigService } from "../services/config.service";
import { TransferStatus } from "../enums/transfer-status.enum";
import { TransferType } from "../enums/transfer-type.enum";
import { BrowseDialogComponent } from "../components/browse-dialog.component";
import { EditDialogComponent } from "../components/edit-dialog.component";
import { CustomEventType, CustomEventTypeExtensions, } from "../enums/custom-event-type.enum";
export class DatatransferFacade {
    constructor(logger, zone, store, dateUtil, paginationService, exportService, uploader, downloader, dialog) {
        this.logger = logger;
        this.zone = zone;
        this.store = store;
        this.dateUtil = dateUtil;
        this.paginationService = paginationService;
        this.exportService = exportService;
        this.uploader = uploader;
        this.downloader = downloader;
        this.dialog = dialog;
        // Interval in milliseconds to calculate progress:
        this.progressInterval = 200;
        // Interval in milliseconds to calculate bitrate:
        this.bitrateInterval = 1000;
        this.uploadProgress = this.store.uploadProgress;
        this.downloadProgress = this.store.downloadProgress;
        this.init(this.uploader, this.uploadProgress);
        this.init(this.downloader, this.downloadProgress);
    }
    init(datatransfer, progressContainer) {
        datatransfer.on("itemAdded", function (item) {
            const that = this;
            that.zone.run(() => {
                that.addItem(item);
            });
        }.bind(this));
        datatransfer.on("zoneUpdated", function (item, status, message) {
            const that = this;
            that.zone.run(() => {
                // console.log(that.uploader.isWorking());
            });
        }.bind(this));
        datatransfer.on("itemStatusChanged", function (item, status, message) {
            const that = this;
            that.zone.run(() => {
                that.changeItemStatus(item, status, message);
            });
        }.bind(this));
        datatransfer.on("itemProgressUpdated", function (item, progress) {
            const that = this;
            that.zone.run(() => {
                that.updateItemProgress(item, progress);
            });
        }.bind(this));
        datatransfer.on("overallProgressUpdated", function (transferType, progress) {
            const that = this;
            that.zone.run(() => {
                that.updateOverallProgress(progressContainer, transferType, progress);
            });
        }.bind(this));
        datatransfer.on("overallSizeUpdated", function (size) {
            const that = this;
            that.zone.run(() => {
                that.updateOverallSize(progressContainer, size);
            });
        }.bind(this));
    }
    assignUploadBrowse(element, isDirectory = false) {
        this.uploader.assignBrowse(element, isDirectory);
    }
    assignUploadDrop(element) {
        this.uploader.assignDrop(element);
    }
    openBrowseDialog() {
        const dialogRef = this.dialog.open(BrowseDialogComponent, {
            data: {
                datatransferFacade: this,
            },
        });
    }
    openEditPathDialog(item) {
        const dialogRef = this.dialog.open(EditDialogComponent, {
            data: {
                datatransferFacade: this,
                mode: "edit-path",
                item,
            },
        });
    }
    openEditFilenameDialog(item) {
        const dialogRef = this.dialog.open(EditDialogComponent, {
            data: {
                datatransferFacade: this,
                mode: "edit-filename",
                item,
            },
        });
    }
    toggleVisible(checked) {
        this.paginationService.paginatedItems.forEach((item, index) => {
            item.isSelected = checked;
        });
    }
    startAll() {
        this.store.getItems().forEach((item, index) => {
            const that = this;
            if (item.transferType === TransferType.Upload &&
                item.status === TransferStatus.Ready) {
                that.changeItemStatus(item, TransferStatus.Queued);
            }
        });
        this.uploader.startAll();
    }
    pauseAll() {
        this.store.getItems().forEach((item, index) => {
            item.preprocessContainer.pause(true);
        });
        this.uploader.pauseAll();
        this.downloader.pauseAll();
    }
    removeAll() {
        this.store.getItems().forEach((item, index) => {
            item.preprocessContainer.cancel(true);
        });
        this.uploader.removeAll();
        this.downloader.removeAll();
        this.store.clear();
        this.uploadProgress.reset(0);
        this.paginationService.update(0);
        document.dispatchEvent(new CustomEvent(CustomEventTypeExtensions.toString(CustomEventType.ITEMS_CLEARED)));
    }
    retryAll() {
        this.store.getByStatus(TransferStatus.Failed).forEach((item, index) => {
            const that = this;
            that.retryItem(item);
        });
    }
    removeSelected() {
        const temp = this.store.getSelected().slice();
        temp.forEach((item, index) => {
            const that = this;
            that.removeItem(item);
        });
    }
    addItem(item) {
        if (!!item) {
            this.store.addItem(item);
            this.paginationService.update(this.store.count);
            document.dispatchEvent(new CustomEvent(CustomEventTypeExtensions.toString(CustomEventType.ITEM_ADDED), { detail: item }));
        }
    }
    removeItem(item) {
        if (!!item) {
            item.preprocessContainer.cancel(true);
            switch (item.transferType) {
                case TransferType.Upload:
                    this.uploader.removeItem(item);
                    break;
                case TransferType.Download:
                    this.downloader.removeItem(item);
                    break;
                default:
                    break;
            }
            this.store.removeById(item.id);
            this.paginationService.update(this.store.count);
            document.dispatchEvent(new CustomEvent(CustomEventTypeExtensions.toString(CustomEventType.ITEM_REMOVED), { detail: item }));
        }
    }
    retryItem(item) {
        if (!!item) {
            item.preprocessContainer.cancel(true);
            switch (item.transferType) {
                case TransferType.Upload:
                    this.uploader.retryItem(item);
                    break;
                case TransferType.Download:
                    this.downloader.retryItem(item);
                    break;
                default:
                    break;
            }
        }
    }
    itemClick(item) {
        document.dispatchEvent(new CustomEvent(CustomEventTypeExtensions.toString(CustomEventType.ITEM_CLICKED), { detail: item }));
    }
    changeItemStatus(item, status, message) {
        if (!!item && !!status) {
            if (item.status !== status) {
                this.paginationService.setPageByItemId(item.id);
                item.status = status;
                if (!!message) {
                    item.message = message;
                }
                this.store.updateFailedCount();
                if (status === TransferStatus.Finished) {
                    document.dispatchEvent(new CustomEvent(CustomEventTypeExtensions.toString(CustomEventType.ITEM_COMPLETED), { detail: item }));
                }
            }
        }
    }
    updateItemProgress(item, progress) {
        if (!!item) {
            const now = this.dateUtil.now();
            const loaded = item.progressContainer.total * progress;
            item.progressContainer.updateBitrate(now, loaded, this.bitrateInterval);
            item.progressContainer.updateProgress(now, loaded, this.progressInterval);
        }
    }
    updateOverallProgress(progressContainer, transferType, progress) {
        const now = this.dateUtil.now();
        const loaded = progressContainer.total * progress;
        // this.logger.log('total: ' + progressContainer.total + ' progress: ' + progress + ' loaded: ' + loaded);
        progressContainer.updateBitrate(now, loaded, this.bitrateInterval);
        progressContainer.updateProgress(now, loaded, this.progressInterval);
        if (progressContainer.total > 0 && loaded >= progressContainer.total) {
            switch (transferType) {
                case TransferType.Upload:
                    document.dispatchEvent(new CustomEvent(CustomEventTypeExtensions.toString(CustomEventType.UPLOAD_COMPLETED)));
                    break;
                case TransferType.Download:
                    document.dispatchEvent(new CustomEvent(CustomEventTypeExtensions.toString(CustomEventType.DOWNLOAD_COMPLETED)));
                    break;
                default:
                    break;
            }
        }
    }
    updateOverallSize(progressContainer, size) {
        progressContainer.reset(size);
    }
    download(filename, url, sizeInBytes) {
        this.downloader.download(filename, url, sizeInBytes);
    }
    export(exportType) {
        this.exportService.export(exportType);
    }
    getStatusClass(status) {
        switch (status) {
            case TransferStatus.Ready:
                return "add_circle_outline";
            case TransferStatus.Uploading:
                return "arrow_upward";
            case TransferStatus.Downloading:
                return "arrow_downward";
            case TransferStatus.Failed:
                return "error_outline";
            case TransferStatus.Queued:
            case TransferStatus.Preprocessing:
                return "schedule";
            case TransferStatus.Finished:
                return "done_all";
            default:
                return "";
        }
    }
    showStartButton() {
        return (this.store.count > 0 &&
            !this.uploader.isWorking() &&
            !this.downloader.isWorking());
    }
    showPauseButton() {
        return this.uploader.isWorking();
    }
    showRemoveButton() {
        return this.store.count > 0;
    }
    showRetryButton() {
        return (this.store.failedCount > 0 &&
            !this.uploader.isWorking() &&
            !this.downloader.isWorking());
    }
    showRetryButtonByItem(item) {
        return item.status === TransferStatus.Failed;
    }
    showExportButton() {
        return this.store.count > 0;
    }
    showPreprocessingCheckbox() {
        return (this.store.count > 0 && ConfigService.settings.core.preprocessHashEnabled);
    }
    showPreprocessingTooltip() {
        return (this.showPreprocessingCheckbox() &&
            !!ConfigService.settings.core.preprocessHashTooltipContent);
    }
    showSpinner(item) {
        return (item.preprocessContainer.percent > 0 &&
            item.status === TransferStatus.Preprocessing);
    }
    showProgressbar(item) {
        return (item.progressContainer.percent > 0 &&
            (item.status === TransferStatus.Uploading ||
                item.status === TransferStatus.Downloading));
    }
    showPath(items, index) {
        if (index > 0 && items.length > index) {
            const currentPath = items[index].path;
            // don't show if previous path is same as current
            return items[index - 1].path !== currentPath;
        }
        return true;
    }
    showEditDialog(item) {
        let result = false;
        if (item) {
            switch (item.transferType) {
                case TransferType.Upload:
                    if (item.status === TransferStatus.Ready) {
                        result = true;
                    }
                    break;
                default:
                    break;
            }
        }
        return result;
    }
    editPath(item, oldPath, newPath) {
        switch (item.transferType) {
            case TransferType.Upload:
                // replace all \ with /
                let cleanedPath = newPath.replace(/\\/g, "/");
                // replace repeated / with one
                cleanedPath = cleanedPath.replace(/\/+/g, "/");
                if (cleanedPath.startsWith("/")) {
                    cleanedPath = cleanedPath.slice(1);
                }
                if (cleanedPath && !cleanedPath.endsWith("/")) {
                    cleanedPath += "/";
                }
                this.uploader.editPath(oldPath, cleanedPath);
                break;
            default:
                break;
        }
    }
    editFilename(item, name) {
        switch (item.transferType) {
            case TransferType.Upload:
                this.uploader.editFilename(item, name);
                break;
            default:
                break;
        }
    }
    parseMessage(item) {
        if (ConfigService.settings.core.parseMessageCallback instanceof Function) {
            return ConfigService.settings.core.parseMessageCallback(item.message);
        }
        else {
            return undefined;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YXRyYW5zZmVyLmZhY2FkZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FtZC1saWIvc3JjL2xpYi9mYWNhZGVzL2RhdGF0cmFuc2Zlci5mYWNhZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBVTNELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDM0QsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDOUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDMUUsT0FBTyxFQUNMLGVBQWUsRUFDZix5QkFBeUIsR0FDMUIsTUFBTSxpQ0FBaUMsQ0FBQztBQUV6QyxNQUFNLE9BQU8sa0JBQWtCO0lBUzdCLFlBQ1UsTUFBcUIsRUFDckIsSUFBWSxFQUNaLEtBQXdCLEVBQ3hCLFFBQWtCLEVBQ2xCLGlCQUFvQyxFQUNwQyxhQUE0QixFQUM1QixRQUFtQixFQUNuQixVQUF1QixFQUN2QixNQUFpQjtRQVJqQixXQUFNLEdBQU4sTUFBTSxDQUFlO1FBQ3JCLFNBQUksR0FBSixJQUFJLENBQVE7UUFDWixVQUFLLEdBQUwsS0FBSyxDQUFtQjtRQUN4QixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixlQUFVLEdBQVYsVUFBVSxDQUFhO1FBQ3ZCLFdBQU0sR0FBTixNQUFNLENBQVc7UUFkM0Isa0RBQWtEO1FBQzFDLHFCQUFnQixHQUFHLEdBQUcsQ0FBQztRQUMvQixpREFBaUQ7UUFDekMsb0JBQWUsR0FBRyxJQUFJLENBQUM7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QUNsQjtJQUNILENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nWm9uZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE1hdERpYWxvZyB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2dcIjtcclxuaW1wb3J0IHsgSVByb2dyZXNzQ29udGFpbmVyIH0gZnJvbSBcIi4uL21vZGVscy9wcm9ncmVzcy1jb250YWluZXIubW9kZWxcIjtcclxuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9jb25maWcuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBMb2dnZXJTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2xvZ2dlci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IERhdGF0cmFuc2ZlclN0b3JlIH0gZnJvbSBcIi4uL3N0b3Jlcy9kYXRhdHJhbnNmZXIuc3RvcmVcIjtcclxuaW1wb3J0IHsgRGF0ZVV0aWwgfSBmcm9tIFwiLi4vdXRpbHMvZGF0ZS51dGlsXCI7XHJcbmltcG9ydCB7IFBhZ2luYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3BhZ2luYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBFeHBvcnRTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2V4cG9ydC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IElVcGxvYWRlciB9IGZyb20gXCIuLi9pby91cGxvYWRlcnMvYmFzZS51cGxvYWRlclwiO1xyXG5pbXBvcnQgeyBJRG93bmxvYWRlciB9IGZyb20gXCIuLi9pby9kb3dubG9hZGVycy9iYXNlLmRvd25sb2FkZXJcIjtcclxuaW1wb3J0IHsgSURhdGF0cmFuc2ZlciB9IGZyb20gXCIuLi9pby9kYXRhdHJhbnNmZXIuaW9cIjtcclxuaW1wb3J0IHsgSURhdGF0cmFuc2Zlckl0ZW0gfSBmcm9tIFwiLi4vbW9kZWxzL2RhdGF0cmFuc2Zlci1pdGVtLm1vZGVsXCI7XHJcbmltcG9ydCB7IFRyYW5zZmVyU3RhdHVzIH0gZnJvbSBcIi4uL2VudW1zL3RyYW5zZmVyLXN0YXR1cy5lbnVtXCI7XHJcbmltcG9ydCB7IFRyYW5zZmVyVHlwZSB9IGZyb20gXCIuLi9lbnVtcy90cmFuc2Zlci10eXBlLmVudW1cIjtcclxuaW1wb3J0IHsgQnJvd3NlRGlhbG9nQ29tcG9uZW50IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvYnJvd3NlLWRpYWxvZy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRWRpdERpYWxvZ0NvbXBvbmVudCB9IGZyb20gXCIuLi9jb21wb25lbnRzL2VkaXQtZGlhbG9nLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1xyXG4gIEN1c3RvbUV2ZW50VHlwZSxcclxuICBDdXN0b21FdmVudFR5cGVFeHRlbnNpb25zLFxyXG59IGZyb20gXCIuLi9lbnVtcy9jdXN0b20tZXZlbnQtdHlwZS5lbnVtXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRGF0YXRyYW5zZmVyRmFjYWRlIHtcclxuICBwcml2YXRlIHVwbG9hZFByb2dyZXNzOiBJUHJvZ3Jlc3NDb250YWluZXI7XHJcbiAgcHJpdmF0ZSBkb3dubG9hZFByb2dyZXNzOiBJUHJvZ3Jlc3NDb250YWluZXI7XHJcblxyXG4gIC8vIEludGVydmFsIGluIG1pbGxpc2Vjb25kcyB0byBjYWxjdWxhdGUgcHJvZ3Jlc3M6XHJcbiAgcHJpdmF0ZSBwcm9ncmVzc0ludGVydmFsID0gMjAwO1xyXG4gIC8vIEludGVydmFsIGluIG1pbGxpc2Vjb25kcyB0byBjYWxjdWxhdGUgYml0cmF0ZTpcclxuICBwcml2YXRlIGJpdHJhdGVJbnRlcnZhbCA9IDEwMDA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBsb2dnZXI6IExvZ2dlclNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHpvbmU6IE5nWm9uZSxcclxuICAgIHByaXZhdGUgc3RvcmU6IERhdGF0cmFuc2ZlclN0b3JlLFxyXG4gICAgcHJpdmF0ZSBkYXRlVXRpbDogRGF0ZVV0aWwsXHJcbiAgICBwcml2YXRlIHBhZ2luYXRpb25TZXJ2aWNlOiBQYWdpbmF0aW9uU2VydmljZSxcclxuICAgIHByaXZhdGUgZXhwb3J0U2VydmljZTogRXhwb3J0U2VydmljZSxcclxuICAgIHByaXZhdGUgdXBsb2FkZXI6IElVcGxvYWRlcixcclxuICAgIHByaXZhdGUgZG93bmxvYWRlcjogSURvd25sb2FkZXIsXHJcbiAgICBwcml2YXRlIGRpYWxvZzogTWF0RGlhbG9nXHJcbiAgKSB7XHJcbiAgICB0aGlzLnVwbG9hZFByb2dyZXNzID0gdGhpcy5zdG9yZS51cGxvYWRQcm9ncmVzcztcclxuICAgIHRoaXMuZG93bmxvYWRQcm9ncmVzcyA9IHRoaXMuc3RvcmUuZG93bmxvYWRQcm9ncmVzcztcclxuICAgIHRoaXMuaW5pdCh0aGlzLnVwbG9hZGVyLCB0aGlzLnVwbG9hZFByb2dyZXNzKTtcclxuICAgIHRoaXMuaW5pdCh0aGlzLmRvd25sb2FkZXIsIHRoaXMuZG93bmxvYWRQcm9ncmVzcyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluaXQoXHJcbiAgICBkYXRhdHJhbnNmZXI6IElEYXRhdHJhbnNmZXIsXHJcbiAgICBwcm9ncmVzc0NvbnRhaW5lcjogSVByb2dyZXNzQ29udGFpbmVyXHJcbiAgKTogdm9pZCB7XHJcbiAgICBkYXRhdHJhbnNmZXIub24oXHJcbiAgICAgIFwiaXRlbUFkZGVkXCIsXHJcbiAgICAgIGZ1bmN0aW9uIChpdGVtOiBJRGF0YXRyYW5zZmVySXRlbSkge1xyXG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzIGFzIERhdGF0cmFuc2ZlckZhY2FkZTtcclxuICAgICAgICB0aGF0LnpvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgIHRoYXQuYWRkSXRlbShpdGVtKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfS5iaW5kKHRoaXMpXHJcbiAgICApO1xyXG4gICAgZGF0YXRyYW5zZmVyLm9uKFxyXG4gICAgICBcInpvbmVVcGRhdGVkXCIsXHJcbiAgICAgIGZ1bmN0aW9uIChcclxuICAgICAgICBpdGVtOiBJRGF0YXRyYW5zZmVySXRlbSxcclxuICAgICAgICBzdGF0dXM6IFRyYW5zZmVyU3RhdHVzLFxyXG4gICAgICAgIG1lc3NhZ2U/OiBzdHJpbmdcclxuICAgICAgKSB7XHJcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXMgYXMgRGF0YXRyYW5zZmVyRmFjYWRlO1xyXG4gICAgICAgIHRoYXQuem9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2codGhhdC51cGxvYWRlci5pc1dvcmtpbmcoKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0uYmluZCh0aGlzKVxyXG4gICAgKTtcclxuICAgIGRhdGF0cmFuc2Zlci5vbihcclxuICAgICAgXCJpdGVtU3RhdHVzQ2hhbmdlZFwiLFxyXG4gICAgICBmdW5jdGlvbiAoXHJcbiAgICAgICAgaXRlbTogSURhdGF0cmFuc2Zlckl0ZW0sXHJcbiAgICAgICAgc3RhdHVzOiBUcmFuc2ZlclN0YXR1cyxcclxuICAgICAgICBtZXNzYWdlPzogc3RyaW5nXHJcbiAgICAgICkge1xyXG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzIGFzIERhdGF0cmFuc2ZlckZhY2FkZTtcclxuICAgICAgICB0aGF0LnpvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgIHRoYXQuY2hhbmdlSXRlbVN0YXR1cyhpdGVtLCBzdGF0dXMsIG1lc3NhZ2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LmJpbmQodGhpcylcclxuICAgICk7XHJcbiAgICBkYXRhdHJhbnNmZXIub24oXHJcbiAgICAgIFwiaXRlbVByb2dyZXNzVXBkYXRlZFwiLFxyXG4gICAgICBmdW5jdGlvbiAoaXRlbTogSURhdGF0cmFuc2Zlckl0ZW0sIHByb2dyZXNzOiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCB0aGF0ID0gdGhpcyBhcyBEYXRhdHJhbnNmZXJGYWNhZGU7XHJcbiAgICAgICAgdGhhdC56b25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICB0aGF0LnVwZGF0ZUl0ZW1Qcm9ncmVzcyhpdGVtLCBwcm9ncmVzcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0uYmluZCh0aGlzKVxyXG4gICAgKTtcclxuICAgIGRhdGF0cmFuc2Zlci5vbihcclxuICAgICAgXCJvdmVyYWxsUHJvZ3Jlc3NVcGRhdGVkXCIsXHJcbiAgICAgIGZ1bmN0aW9uICh0cmFuc2ZlclR5cGU6IFRyYW5zZmVyVHlwZSwgcHJvZ3Jlc3M6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzIGFzIERhdGF0cmFuc2ZlckZhY2FkZTtcclxuICAgICAgICB0aGF0LnpvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgIHRoYXQudXBkYXRlT3ZlcmFsbFByb2dyZXNzKHByb2dyZXNzQ29udGFpbmVyLCB0cmFuc2ZlclR5cGUsIHByb2dyZXNzKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfS5iaW5kKHRoaXMpXHJcbiAgICApO1xyXG4gICAgZGF0YXRyYW5zZmVyLm9uKFxyXG4gICAgICBcIm92ZXJhbGxTaXplVXBkYXRlZFwiLFxyXG4gICAgICBmdW5jdGlvbiAoc2l6ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXMgYXMgRGF0YXRyYW5zZmVyRmFjYWRlO1xyXG4gICAgICAgIHRoYXQuem9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgdGhhdC51cGRhdGVPdmVyYWxsU2l6ZShwcm9ncmVzc0NvbnRhaW5lciwgc2l6ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0uYmluZCh0aGlzKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3NpZ25VcGxvYWRCcm93c2UoZWxlbWVudCwgaXNEaXJlY3RvcnkgPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgdGhpcy51cGxvYWRlci5hc3NpZ25Ccm93c2UoZWxlbWVudCwgaXNEaXJlY3RvcnkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzc2lnblVwbG9hZERyb3AoZWxlbWVudCk6IHZvaWQge1xyXG4gICAgdGhpcy51cGxvYWRlci5hc3NpZ25Ecm9wKGVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9wZW5Ccm93c2VEaWFsb2coKTogdm9pZCB7XHJcbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKEJyb3dzZURpYWxvZ0NvbXBvbmVudCwge1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgZGF0YXRyYW5zZmVyRmFjYWRlOiB0aGlzLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb3BlbkVkaXRQYXRoRGlhbG9nKGl0ZW06IElEYXRhdHJhbnNmZXJJdGVtKTogdm9pZCB7XHJcbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKEVkaXREaWFsb2dDb21wb25lbnQsIHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGRhdGF0cmFuc2ZlckZhY2FkZTogdGhpcyxcclxuICAgICAgICBtb2RlOiBcImVkaXQtcGF0aFwiLFxyXG4gICAgICAgIGl0ZW0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvcGVuRWRpdEZpbGVuYW1lRGlhbG9nKGl0ZW06IElEYXRhdHJhbnNmZXJJdGVtKTogdm9pZCB7XHJcbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKEVkaXREaWFsb2dDb21wb25lbnQsIHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGRhdGF0cmFuc2ZlckZhY2FkZTogdGhpcyxcclxuICAgICAgICBtb2RlOiBcImVkaXQtZmlsZW5hbWVcIixcclxuICAgICAgICBpdGVtLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9nZ2xlVmlzaWJsZShjaGVja2VkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLnBhZ2luYXRpb25TZXJ2aWNlLnBhZ2luYXRlZEl0ZW1zLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgIGl0ZW0uaXNTZWxlY3RlZCA9IGNoZWNrZWQ7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGFydEFsbCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc3RvcmUuZ2V0SXRlbXMoKS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICBjb25zdCB0aGF0ID0gdGhpcyBhcyBEYXRhdHJhbnNmZXJGYWNhZGU7XHJcbiAgICAgIGlmIChcclxuICAgICAgICBpdGVtLnRyYW5zZmVyVHlwZSA9PT0gVHJhbnNmZXJUeXBlLlVwbG9hZCAmJlxyXG4gICAgICAgIGl0ZW0uc3RhdHVzID09PSBUcmFuc2ZlclN0YXR1cy5SZWFkeVxyXG4gICAgICApIHtcclxuICAgICAgICB0aGF0LmNoYW5nZUl0ZW1TdGF0dXMoaXRlbSwgVHJhbnNmZXJTdGF0dXMuUXVldWVkKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnVwbG9hZGVyLnN0YXJ0QWxsKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcGF1c2VBbGwoKTogdm9pZCB7XHJcbiAgICB0aGlzLnN0b3JlLmdldEl0ZW1zKCkuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgaXRlbS5wcmVwcm9jZXNzQ29udGFpbmVyLnBhdXNlKHRydWUpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnVwbG9hZGVyLnBhdXNlQWxsKCk7XHJcbiAgICB0aGlzLmRvd25sb2FkZXIucGF1c2VBbGwoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW1vdmVBbGwoKTogdm9pZCB7XHJcbiAgICB0aGlzLnN0b3JlLmdldEl0ZW1zKCkuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgaXRlbS5wcmVwcm9jZXNzQ29udGFpbmVyLmNhbmNlbCh0cnVlKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy51cGxvYWRlci5yZW1vdmVBbGwoKTtcclxuICAgIHRoaXMuZG93bmxvYWRlci5yZW1vdmVBbGwoKTtcclxuICAgIHRoaXMuc3RvcmUuY2xlYXIoKTtcclxuICAgIHRoaXMudXBsb2FkUHJvZ3Jlc3MucmVzZXQoMCk7XHJcbiAgICB0aGlzLnBhZ2luYXRpb25TZXJ2aWNlLnVwZGF0ZSgwKTtcclxuICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoXHJcbiAgICAgIG5ldyBDdXN0b21FdmVudChcclxuICAgICAgICBDdXN0b21FdmVudFR5cGVFeHRlbnNpb25zLnRvU3RyaW5nKEN1c3RvbUV2ZW50VHlwZS5JVEVNU19DTEVBUkVEKVxyXG4gICAgICApXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJldHJ5QWxsKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zdG9yZS5nZXRCeVN0YXR1cyhUcmFuc2ZlclN0YXR1cy5GYWlsZWQpLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgIGNvbnN0IHRoYXQgPSB0aGlzIGFzIERhdGF0cmFuc2ZlckZhY2FkZTtcclxuICAgICAgdGhhdC5yZXRyeUl0ZW0oaXRlbSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW1vdmVTZWxlY3RlZCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IHRlbXAgPSB0aGlzLnN0b3JlLmdldFNlbGVjdGVkKCkuc2xpY2UoKTtcclxuICAgIHRlbXAuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgY29uc3QgdGhhdCA9IHRoaXMgYXMgRGF0YXRyYW5zZmVyRmFjYWRlO1xyXG4gICAgICB0aGF0LnJlbW92ZUl0ZW0oaXRlbSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhZGRJdGVtKGl0ZW06IElEYXRhdHJhbnNmZXJJdGVtKTogdm9pZCB7XHJcbiAgICBpZiAoISFpdGVtKSB7XHJcbiAgICAgIHRoaXMuc3RvcmUuYWRkSXRlbShpdGVtKTtcclxuICAgICAgdGhpcy5wYWdpbmF0aW9uU2VydmljZS51cGRhdGUodGhpcy5zdG9yZS5jb3VudCk7XHJcbiAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoXHJcbiAgICAgICAgbmV3IEN1c3RvbUV2ZW50KFxyXG4gICAgICAgICAgQ3VzdG9tRXZlbnRUeXBlRXh0ZW5zaW9ucy50b1N0cmluZyhDdXN0b21FdmVudFR5cGUuSVRFTV9BRERFRCksXHJcbiAgICAgICAgICB7IGRldGFpbDogaXRlbSB9XHJcbiAgICAgICAgKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbW92ZUl0ZW0oaXRlbTogSURhdGF0cmFuc2Zlckl0ZW0pOiB2b2lkIHtcclxuICAgIGlmICghIWl0ZW0pIHtcclxuICAgICAgaXRlbS5wcmVwcm9jZXNzQ29udGFpbmVyLmNhbmNlbCh0cnVlKTtcclxuICAgICAgc3dpdGNoIChpdGVtLnRyYW5zZmVyVHlwZSkge1xyXG4gICAgICAgIGNhc2UgVHJhbnNmZXJUeXBlLlVwbG9hZDpcclxuICAgICAgICAgIHRoaXMudXBsb2FkZXIucmVtb3ZlSXRlbShpdGVtKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgVHJhbnNmZXJUeXBlLkRvd25sb2FkOlxyXG4gICAgICAgICAgdGhpcy5kb3dubG9hZGVyLnJlbW92ZUl0ZW0oaXRlbSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zdG9yZS5yZW1vdmVCeUlkKGl0ZW0uaWQpO1xyXG4gICAgICB0aGlzLnBhZ2luYXRpb25TZXJ2aWNlLnVwZGF0ZSh0aGlzLnN0b3JlLmNvdW50KTtcclxuICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChcclxuICAgICAgICBuZXcgQ3VzdG9tRXZlbnQoXHJcbiAgICAgICAgICBDdXN0b21FdmVudFR5cGVFeHRlbnNpb25zLnRvU3RyaW5nKEN1c3RvbUV2ZW50VHlwZS5JVEVNX1JFTU9WRUQpLFxyXG4gICAgICAgICAgeyBkZXRhaWw6IGl0ZW0gfVxyXG4gICAgICAgIClcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyByZXRyeUl0ZW0oaXRlbTogSURhdGF0cmFuc2Zlckl0ZW0pOiB2b2lkIHtcclxuICAgIGlmICghIWl0ZW0pIHtcclxuICAgICAgaXRlbS5wcmVwcm9jZXNzQ29udGFpbmVyLmNhbmNlbCh0cnVlKTtcclxuICAgICAgc3dpdGNoIChpdGVtLnRyYW5zZmVyVHlwZSkge1xyXG4gICAgICAgIGNhc2UgVHJhbnNmZXJUeXBlLlVwbG9hZDpcclxuICAgICAgICAgIHRoaXMudXBsb2FkZXIucmV0cnlJdGVtKGl0ZW0pO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBUcmFuc2ZlclR5cGUuRG93bmxvYWQ6XHJcbiAgICAgICAgICB0aGlzLmRvd25sb2FkZXIucmV0cnlJdGVtKGl0ZW0pO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXRlbUNsaWNrKGl0ZW06IElEYXRhdHJhbnNmZXJJdGVtKSB7XHJcbiAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoXHJcbiAgICAgbmV3IEN1c3RvbUV2ZW50KFxyXG4gICAgICAgQ3VzdG9tRXZlbnRUeXBlRXh0ZW5zaW9ucy50b1N0cmluZyhDdXN0b21FdmVudFR5cGUuSVRFTV9DTElDS0VEKSxcclxuICAgICAgIHsgZGV0YWlsOiBpdGVtIH1cclxuICAgICApXHJcbiAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2hhbmdlSXRlbVN0YXR1cyhcclxuICAgIGl0ZW06IElEYXRhdHJhbnNmZXJJdGVtLFxyXG4gICAgc3RhdHVzOiBUcmFuc2ZlclN0YXR1cyxcclxuICAgIG1lc3NhZ2U/OiBzdHJpbmdcclxuICApOiB2b2lkIHtcclxuICAgIGlmICghIWl0ZW0gJiYgISFzdGF0dXMpIHtcclxuICAgICAgaWYgKGl0ZW0uc3RhdHVzICE9PSBzdGF0dXMpIHtcclxuICAgICAgICB0aGlzLnBhZ2luYXRpb25TZXJ2aWNlLnNldFBhZ2VCeUl0ZW1JZChpdGVtLmlkKTtcclxuICAgICAgICBpdGVtLnN0YXR1cyA9IHN0YXR1cztcclxuICAgICAgICBpZiAoISFtZXNzYWdlKSB7XHJcbiAgICAgICAgICBpdGVtLm1lc3NhZ2UgPSBtZXNzYWdlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnN0b3JlLnVwZGF0ZUZhaWxlZENvdW50KCk7XHJcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gVHJhbnNmZXJTdGF0dXMuRmluaXNoZWQpIHtcclxuICAgICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoXHJcbiAgICAgICAgICAgIG5ldyBDdXN0b21FdmVudChcclxuICAgICAgICAgICAgICBDdXN0b21FdmVudFR5cGVFeHRlbnNpb25zLnRvU3RyaW5nKFxyXG4gICAgICAgICAgICAgICAgQ3VzdG9tRXZlbnRUeXBlLklURU1fQ09NUExFVEVEXHJcbiAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICB7IGRldGFpbDogaXRlbSB9XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlSXRlbVByb2dyZXNzKGl0ZW06IElEYXRhdHJhbnNmZXJJdGVtLCBwcm9ncmVzczogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBpZiAoISFpdGVtKSB7XHJcbiAgICAgIGNvbnN0IG5vdzogbnVtYmVyID0gdGhpcy5kYXRlVXRpbC5ub3coKTtcclxuICAgICAgY29uc3QgbG9hZGVkOiBudW1iZXIgPSBpdGVtLnByb2dyZXNzQ29udGFpbmVyLnRvdGFsICogcHJvZ3Jlc3M7XHJcbiAgICAgIGl0ZW0ucHJvZ3Jlc3NDb250YWluZXIudXBkYXRlQml0cmF0ZShub3csIGxvYWRlZCwgdGhpcy5iaXRyYXRlSW50ZXJ2YWwpO1xyXG4gICAgICBpdGVtLnByb2dyZXNzQ29udGFpbmVyLnVwZGF0ZVByb2dyZXNzKG5vdywgbG9hZGVkLCB0aGlzLnByb2dyZXNzSW50ZXJ2YWwpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZU92ZXJhbGxQcm9ncmVzcyhcclxuICAgIHByb2dyZXNzQ29udGFpbmVyOiBJUHJvZ3Jlc3NDb250YWluZXIsXHJcbiAgICB0cmFuc2ZlclR5cGU6IFRyYW5zZmVyVHlwZSxcclxuICAgIHByb2dyZXNzOiBudW1iZXJcclxuICApOiB2b2lkIHtcclxuICAgIGNvbnN0IG5vdzogbnVtYmVyID0gdGhpcy5kYXRlVXRpbC5ub3coKTtcclxuICAgIGNvbnN0IGxvYWRlZDogbnVtYmVyID0gcHJvZ3Jlc3NDb250YWluZXIudG90YWwgKiBwcm9ncmVzcztcclxuICAgIC8vIHRoaXMubG9nZ2VyLmxvZygndG90YWw6ICcgKyBwcm9ncmVzc0NvbnRhaW5lci50b3RhbCArICcgcHJvZ3Jlc3M6ICcgKyBwcm9ncmVzcyArICcgbG9hZGVkOiAnICsgbG9hZGVkKTtcclxuICAgIHByb2dyZXNzQ29udGFpbmVyLnVwZGF0ZUJpdHJhdGUobm93LCBsb2FkZWQsIHRoaXMuYml0cmF0ZUludGVydmFsKTtcclxuICAgIHByb2dyZXNzQ29udGFpbmVyLnVwZGF0ZVByb2dyZXNzKG5vdywgbG9hZGVkLCB0aGlzLnByb2dyZXNzSW50ZXJ2YWwpO1xyXG4gICAgaWYgKHByb2dyZXNzQ29udGFpbmVyLnRvdGFsID4gMCAmJiBsb2FkZWQgPj0gcHJvZ3Jlc3NDb250YWluZXIudG90YWwpIHtcclxuICAgICAgc3dpdGNoICh0cmFuc2ZlclR5cGUpIHtcclxuICAgICAgICBjYXNlIFRyYW5zZmVyVHlwZS5VcGxvYWQ6XHJcbiAgICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KFxyXG4gICAgICAgICAgICBuZXcgQ3VzdG9tRXZlbnQoXHJcbiAgICAgICAgICAgICAgQ3VzdG9tRXZlbnRUeXBlRXh0ZW5zaW9ucy50b1N0cmluZyhcclxuICAgICAgICAgICAgICAgIEN1c3RvbUV2ZW50VHlwZS5VUExPQURfQ09NUExFVEVEXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBUcmFuc2ZlclR5cGUuRG93bmxvYWQ6XHJcbiAgICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KFxyXG4gICAgICAgICAgICBuZXcgQ3VzdG9tRXZlbnQoXHJcbiAgICAgICAgICAgICAgQ3VzdG9tRXZlbnRUeXBlRXh0ZW5zaW9ucy50b1N0cmluZyhcclxuICAgICAgICAgICAgICAgIEN1c3RvbUV2ZW50VHlwZS5ET1dOTE9BRF9DT01QTEVURURcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGVPdmVyYWxsU2l6ZShcclxuICAgIHByb2dyZXNzQ29udGFpbmVyOiBJUHJvZ3Jlc3NDb250YWluZXIsXHJcbiAgICBzaXplOiBudW1iZXJcclxuICApOiB2b2lkIHtcclxuICAgIHByb2dyZXNzQ29udGFpbmVyLnJlc2V0KHNpemUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRvd25sb2FkKGZpbGVuYW1lOiBzdHJpbmcsIHVybDogc3RyaW5nLCBzaXplSW5CeXRlczogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLmRvd25sb2FkZXIuZG93bmxvYWQoZmlsZW5hbWUsIHVybCwgc2l6ZUluQnl0ZXMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGV4cG9ydChleHBvcnRUeXBlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMuZXhwb3J0U2VydmljZS5leHBvcnQoZXhwb3J0VHlwZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0U3RhdHVzQ2xhc3Moc3RhdHVzOiBUcmFuc2ZlclN0YXR1cyk6IHN0cmluZyB7XHJcbiAgICBzd2l0Y2ggKHN0YXR1cykge1xyXG4gICAgICBjYXNlIFRyYW5zZmVyU3RhdHVzLlJlYWR5OlxyXG4gICAgICAgIHJldHVybiBcImFkZF9jaXJjbGVfb3V0bGluZVwiO1xyXG4gICAgICBjYXNlIFRyYW5zZmVyU3RhdHVzLlVwbG9hZGluZzpcclxuICAgICAgICByZXR1cm4gXCJhcnJvd191cHdhcmRcIjtcclxuICAgICAgY2FzZSBUcmFuc2ZlclN0YXR1cy5Eb3dubG9hZGluZzpcclxuICAgICAgICByZXR1cm4gXCJhcnJvd19kb3dud2FyZFwiO1xyXG4gICAgICBjYXNlIFRyYW5zZmVyU3RhdHVzLkZhaWxlZDpcclxuICAgICAgICByZXR1cm4gXCJlcnJvcl9vdXRsaW5lXCI7XHJcbiAgICAgIGNhc2UgVHJhbnNmZXJTdGF0dXMuUXVldWVkOlxyXG4gICAgICBjYXNlIFRyYW5zZmVyU3RhdHVzLlByZXByb2Nlc3Npbmc6XHJcbiAgICAgICAgcmV0dXJuIFwic2NoZWR1bGVcIjtcclxuICAgICAgY2FzZSBUcmFuc2ZlclN0YXR1cy5GaW5pc2hlZDpcclxuICAgICAgICByZXR1cm4gXCJkb25lX2FsbFwiO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHNob3dTdGFydEJ1dHRvbigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIHRoaXMuc3RvcmUuY291bnQgPiAwICYmXHJcbiAgICAgICF0aGlzLnVwbG9hZGVyLmlzV29ya2luZygpICYmXHJcbiAgICAgICF0aGlzLmRvd25sb2FkZXIuaXNXb3JraW5nKClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2hvd1BhdXNlQnV0dG9uKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMudXBsb2FkZXIuaXNXb3JraW5nKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2hvd1JlbW92ZUJ1dHRvbigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnN0b3JlLmNvdW50ID4gMDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzaG93UmV0cnlCdXR0b24oKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICB0aGlzLnN0b3JlLmZhaWxlZENvdW50ID4gMCAmJlxyXG4gICAgICAhdGhpcy51cGxvYWRlci5pc1dvcmtpbmcoKSAmJlxyXG4gICAgICAhdGhpcy5kb3dubG9hZGVyLmlzV29ya2luZygpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNob3dSZXRyeUJ1dHRvbkJ5SXRlbShpdGVtOiBJRGF0YXRyYW5zZmVySXRlbSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGl0ZW0uc3RhdHVzID09PSBUcmFuc2ZlclN0YXR1cy5GYWlsZWQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2hvd0V4cG9ydEJ1dHRvbigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnN0b3JlLmNvdW50ID4gMDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzaG93UHJlcHJvY2Vzc2luZ0NoZWNrYm94KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgdGhpcy5zdG9yZS5jb3VudCA+IDAgJiYgQ29uZmlnU2VydmljZS5zZXR0aW5ncy5jb3JlLnByZXByb2Nlc3NIYXNoRW5hYmxlZFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzaG93UHJlcHJvY2Vzc2luZ1Rvb2x0aXAoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICB0aGlzLnNob3dQcmVwcm9jZXNzaW5nQ2hlY2tib3goKSAmJlxyXG4gICAgICAhIUNvbmZpZ1NlcnZpY2Uuc2V0dGluZ3MuY29yZS5wcmVwcm9jZXNzSGFzaFRvb2x0aXBDb250ZW50XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNob3dTcGlubmVyKGl0ZW06IElEYXRhdHJhbnNmZXJJdGVtKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBpdGVtLnByZXByb2Nlc3NDb250YWluZXIucGVyY2VudCA+IDAgJiZcclxuICAgICAgaXRlbS5zdGF0dXMgPT09IFRyYW5zZmVyU3RhdHVzLlByZXByb2Nlc3NpbmdcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2hvd1Byb2dyZXNzYmFyKGl0ZW06IElEYXRhdHJhbnNmZXJJdGVtKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBpdGVtLnByb2dyZXNzQ29udGFpbmVyLnBlcmNlbnQgPiAwICYmXHJcbiAgICAgIChpdGVtLnN0YXR1cyA9PT0gVHJhbnNmZXJTdGF0dXMuVXBsb2FkaW5nIHx8XHJcbiAgICAgICAgaXRlbS5zdGF0dXMgPT09IFRyYW5zZmVyU3RhdHVzLkRvd25sb2FkaW5nKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzaG93UGF0aChpdGVtczogSURhdGF0cmFuc2Zlckl0ZW1bXSwgaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgaWYgKGluZGV4ID4gMCAmJiBpdGVtcy5sZW5ndGggPiBpbmRleCkge1xyXG4gICAgICBjb25zdCBjdXJyZW50UGF0aCA9IGl0ZW1zW2luZGV4XS5wYXRoO1xyXG4gICAgICAvLyBkb24ndCBzaG93IGlmIHByZXZpb3VzIHBhdGggaXMgc2FtZSBhcyBjdXJyZW50XHJcbiAgICAgIHJldHVybiBpdGVtc1tpbmRleCAtIDFdLnBhdGggIT09IGN1cnJlbnRQYXRoO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2hvd0VkaXREaWFsb2coaXRlbTogSURhdGF0cmFuc2Zlckl0ZW0pOiBib29sZWFuIHtcclxuICAgIGxldCByZXN1bHQgPSBmYWxzZTtcclxuICAgIGlmIChpdGVtKSB7XHJcbiAgICAgIHN3aXRjaCAoaXRlbS50cmFuc2ZlclR5cGUpIHtcclxuICAgICAgICBjYXNlIFRyYW5zZmVyVHlwZS5VcGxvYWQ6XHJcbiAgICAgICAgICBpZiAoaXRlbS5zdGF0dXMgPT09IFRyYW5zZmVyU3RhdHVzLlJlYWR5KSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZWRpdFBhdGgoXHJcbiAgICBpdGVtOiBJRGF0YXRyYW5zZmVySXRlbSxcclxuICAgIG9sZFBhdGg6IHN0cmluZyxcclxuICAgIG5ld1BhdGg6IHN0cmluZ1xyXG4gICk6IHZvaWQge1xyXG4gICAgc3dpdGNoIChpdGVtLnRyYW5zZmVyVHlwZSkge1xyXG4gICAgICBjYXNlIFRyYW5zZmVyVHlwZS5VcGxvYWQ6XHJcbiAgICAgICAgLy8gcmVwbGFjZSBhbGwgXFwgd2l0aCAvXHJcbiAgICAgICAgbGV0IGNsZWFuZWRQYXRoID0gbmV3UGF0aC5yZXBsYWNlKC9cXFxcL2csIFwiL1wiKTtcclxuICAgICAgICAvLyByZXBsYWNlIHJlcGVhdGVkIC8gd2l0aCBvbmVcclxuICAgICAgICBjbGVhbmVkUGF0aCA9IGNsZWFuZWRQYXRoLnJlcGxhY2UoL1xcLysvZywgXCIvXCIpO1xyXG4gICAgICAgIGlmIChjbGVhbmVkUGF0aC5zdGFydHNXaXRoKFwiL1wiKSkge1xyXG4gICAgICAgICAgY2xlYW5lZFBhdGggPSBjbGVhbmVkUGF0aC5zbGljZSgxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNsZWFuZWRQYXRoICYmICFjbGVhbmVkUGF0aC5lbmRzV2l0aChcIi9cIikpIHtcclxuICAgICAgICAgIGNsZWFuZWRQYXRoICs9IFwiL1wiO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnVwbG9hZGVyLmVkaXRQYXRoKG9sZFBhdGgsIGNsZWFuZWRQYXRoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBlZGl0RmlsZW5hbWUoaXRlbTogSURhdGF0cmFuc2Zlckl0ZW0sIG5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgc3dpdGNoIChpdGVtLnRyYW5zZmVyVHlwZSkge1xyXG4gICAgICBjYXNlIFRyYW5zZmVyVHlwZS5VcGxvYWQ6XHJcbiAgICAgICAgdGhpcy51cGxvYWRlci5lZGl0RmlsZW5hbWUoaXRlbSwgbmFtZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcGFyc2VNZXNzYWdlKGl0ZW06IElEYXRhdHJhbnNmZXJJdGVtKTogc3RyaW5nIHtcclxuICAgIGlmIChDb25maWdTZXJ2aWNlLnNldHRpbmdzLmNvcmUucGFyc2VNZXNzYWdlQ2FsbGJhY2sgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xyXG4gICAgICByZXR1cm4gQ29uZmlnU2VydmljZS5zZXR0aW5ncy5jb3JlLnBhcnNlTWVzc2FnZUNhbGxiYWNrKGl0ZW0ubWVzc2FnZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=