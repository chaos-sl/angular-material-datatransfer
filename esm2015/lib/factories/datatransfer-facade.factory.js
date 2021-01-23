import { Injectable, NgZone } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { LoggerService } from "../services/logger.service";
import { DatatransferStore } from "../stores/datatransfer.store";
import { DateUtil } from "../utils/date.util";
import { PaginationService } from "../services/pagination.service";
import { ExportService } from "../services/export.service";
import { DatatransferFacade } from "../facades/datatransfer.facade";
import { ResumableJsUploader } from "../io/uploaders/resumablejs.uploader";
import { BlobDownloader } from "../io/downloaders/blob.downloader";
import * as i0 from "@angular/core";
import * as i1 from "../services/logger.service";
import * as i2 from "../stores/datatransfer.store";
import * as i3 from "../utils/date.util";
import * as i4 from "../services/pagination.service";
import * as i5 from "../services/export.service";
import * as i6 from "@angular/material/dialog";
import * as i7 from "../io/uploaders/resumablejs.uploader";
import * as i8 from "../io/downloaders/blob.downloader";
export class DatatransferFacadeFactory {
    constructor(logger, zone, store, dateUtil, paginationService, exportService, dialog, resumableUploader, blobDownloader) {
        this.logger = logger;
        this.zone = zone;
        this.store = store;
        this.dateUtil = dateUtil;
        this.paginationService = paginationService;
        this.exportService = exportService;
        this.dialog = dialog;
        this.resumableUploader = resumableUploader;
        this.blobDownloader = blobDownloader;
    }
    // TODO: pass arguments to define which uploader/downloader implementation should be used
    createDatatransferFacade() {
        if (!this.facade1) {
            this.facade1 = new DatatransferFacade(this.logger, this.zone, this.store, this.dateUtil, this.paginationService, this.exportService, this.resumableUploader, this.blobDownloader, this.dialog);
        }
        return this.facade1;
    }
}
DatatransferFacadeFactory.ɵfac = function DatatransferFacadeFactory_Factory(t) { return new (t || DatatransferFacadeFactory)(i0.ɵɵinject(i1.LoggerService), i0.ɵɵinject(i0.NgZone), i0.ɵɵinject(i2.DatatransferStore), i0.ɵɵinject(i3.DateUtil), i0.ɵɵinject(i4.PaginationService), i0.ɵɵinject(i5.ExportService), i0.ɵɵinject(i6.MatDialog), i0.ɵɵinject(i7.ResumableJsUploader), i0.ɵɵinject(i8.BlobDownloader)); };
DatatransferFacadeFactory.ɵprov = i0.ɵɵdefineInjectable({ token: DatatransferFacadeFactory, factory: DatatransferFacadeFactory.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DatatransferFacadeFactory, [{
        type: Injectable
    }], function () { return [{ type: i1.LoggerService }, { type: i0.NgZone }, { type: i2.DatatransferStore }, { type: i3.DateUtil }, { type: i4.PaginationService }, { type: i5.ExportService }, { type: i6.MatDialog }, { type: i7.ResumableJsUploader }, { type: i8.BlobDownloader }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YXRyYW5zZmVyLWZhY2FkZS5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYW1kLWxpYi9zcmMvbGliL2ZhY3Rvcmllcy9kYXRhdHJhbnNmZXItZmFjYWRlLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDOUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbkUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzNELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7Ozs7Ozs7OztBQUduRSxNQUFNLE9BQU8seUJBQXlCO0lBR3BDLFlBQ1UsTUFBcUIsRUFDckIsSUFBWSxFQUNaLEtBQXdCLEVBQ3hCLFFBQWtCLEVBQ2xCLGlCQUFvQyxFQUNwQyxhQUE0QixFQUM1QixNQUFpQixFQUNqQixpQkFBc0MsRUFDdEMsY0FBOEI7UUFSOUIsV0FBTSxHQUFOLE1BQU0sQ0FBZTtRQUNyQixTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1osVUFBSyxHQUFMLEtBQUssQ0FBbUI7UUFDeEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLFdBQU0sR0FBTixNQUFNLENBQVc7UUFDakIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFxQjtRQUN0QyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFDckMsQ0FBQztJQUVKLHlGQUF5RjtJQUNsRix3QkFBd0I7UUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLGtCQUFrQixDQUNuQyxJQUFJLENBQUMsTUFBTSxFQUNYLElBQUksQ0FBQyxJQUFJLEVBQ1QsSUFBSSxDQUFDLEtBQUssRUFDVixJQUFJLENBQUMsUUFBUSxFQUNiLElBQUksQ0FBQyxpQkFBaUIsRUFDdEIsSUFBSSxDQUFDLGFBQWEsRUFDbEIsSUFBSSxDQUFDLGlCQUFpQixFQUN0QixJQUFJLENBQUMsY0FBYyxFQUNuQixJQUFJLENBQUMsTUFBTSxDQUNaLENBQUM7U0FDSDtRQUNELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDOztrR0EvQlUseUJBQXlCO2lFQUF6Qix5QkFBeUIsV0FBekIseUJBQXlCO3VGQUF6Qix5QkFBeUI7Y0FEckMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE5nWm9uZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE1hdERpYWxvZyB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2dcIjtcclxuaW1wb3J0IHsgTG9nZ2VyU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9sb2dnZXIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBEYXRhdHJhbnNmZXJTdG9yZSB9IGZyb20gXCIuLi9zdG9yZXMvZGF0YXRyYW5zZmVyLnN0b3JlXCI7XHJcbmltcG9ydCB7IERhdGVVdGlsIH0gZnJvbSBcIi4uL3V0aWxzL2RhdGUudXRpbFwiO1xyXG5pbXBvcnQgeyBQYWdpbmF0aW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9wYWdpbmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRXhwb3J0U2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9leHBvcnQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBEYXRhdHJhbnNmZXJGYWNhZGUgfSBmcm9tIFwiLi4vZmFjYWRlcy9kYXRhdHJhbnNmZXIuZmFjYWRlXCI7XHJcbmltcG9ydCB7IFJlc3VtYWJsZUpzVXBsb2FkZXIgfSBmcm9tIFwiLi4vaW8vdXBsb2FkZXJzL3Jlc3VtYWJsZWpzLnVwbG9hZGVyXCI7XHJcbmltcG9ydCB7IEJsb2JEb3dubG9hZGVyIH0gZnJvbSBcIi4uL2lvL2Rvd25sb2FkZXJzL2Jsb2IuZG93bmxvYWRlclwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRGF0YXRyYW5zZmVyRmFjYWRlRmFjdG9yeSB7XHJcbiAgcHJpdmF0ZSBmYWNhZGUxOiBEYXRhdHJhbnNmZXJGYWNhZGU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBsb2dnZXI6IExvZ2dlclNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHpvbmU6IE5nWm9uZSxcclxuICAgIHByaXZhdGUgc3RvcmU6IERhdGF0cmFuc2ZlclN0b3JlLFxyXG4gICAgcHJpdmF0ZSBkYXRlVXRpbDogRGF0ZVV0aWwsXHJcbiAgICBwcml2YXRlIHBhZ2luYXRpb25TZXJ2aWNlOiBQYWdpbmF0aW9uU2VydmljZSxcclxuICAgIHByaXZhdGUgZXhwb3J0U2VydmljZTogRXhwb3J0U2VydmljZSxcclxuICAgIHByaXZhdGUgZGlhbG9nOiBNYXREaWFsb2csXHJcbiAgICBwcml2YXRlIHJlc3VtYWJsZVVwbG9hZGVyOiBSZXN1bWFibGVKc1VwbG9hZGVyLFxyXG4gICAgcHJpdmF0ZSBibG9iRG93bmxvYWRlcjogQmxvYkRvd25sb2FkZXJcclxuICApIHt9XHJcblxyXG4gIC8vIFRPRE86IHBhc3MgYXJndW1lbnRzIHRvIGRlZmluZSB3aGljaCB1cGxvYWRlci9kb3dubG9hZGVyIGltcGxlbWVudGF0aW9uIHNob3VsZCBiZSB1c2VkXHJcbiAgcHVibGljIGNyZWF0ZURhdGF0cmFuc2ZlckZhY2FkZSgpOiBEYXRhdHJhbnNmZXJGYWNhZGUge1xyXG4gICAgaWYgKCF0aGlzLmZhY2FkZTEpIHtcclxuICAgICAgdGhpcy5mYWNhZGUxID0gbmV3IERhdGF0cmFuc2ZlckZhY2FkZShcclxuICAgICAgICB0aGlzLmxvZ2dlcixcclxuICAgICAgICB0aGlzLnpvbmUsXHJcbiAgICAgICAgdGhpcy5zdG9yZSxcclxuICAgICAgICB0aGlzLmRhdGVVdGlsLFxyXG4gICAgICAgIHRoaXMucGFnaW5hdGlvblNlcnZpY2UsXHJcbiAgICAgICAgdGhpcy5leHBvcnRTZXJ2aWNlLFxyXG4gICAgICAgIHRoaXMucmVzdW1hYmxlVXBsb2FkZXIsXHJcbiAgICAgICAgdGhpcy5ibG9iRG93bmxvYWRlcixcclxuICAgICAgICB0aGlzLmRpYWxvZ1xyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuZmFjYWRlMTtcclxuICB9XHJcbn1cclxuIl19