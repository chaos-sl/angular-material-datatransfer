import { NgZone } from "@angular/core";
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
export declare class DatatransferFacadeFactory {
    private logger;
    private zone;
    private store;
    private dateUtil;
    private paginationService;
    private exportService;
    private dialog;
    private resumableUploader;
    private blobDownloader;
    private facade1;
    constructor(logger: LoggerService, zone: NgZone, store: DatatransferStore, dateUtil: DateUtil, paginationService: PaginationService, exportService: ExportService, dialog: MatDialog, resumableUploader: ResumableJsUploader, blobDownloader: BlobDownloader);
    createDatatransferFacade(): DatatransferFacade;
    static ɵfac: i0.ɵɵFactoryDef<DatatransferFacadeFactory, never>;
    static ɵprov: i0.ɵɵInjectableDef<DatatransferFacadeFactory>;
}
//# sourceMappingURL=datatransfer-facade.factory.d.ts.map