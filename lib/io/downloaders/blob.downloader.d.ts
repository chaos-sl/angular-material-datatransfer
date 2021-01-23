import { BaseDownloader } from "./base.downloader";
import { IDatatransferItem } from "../../models/datatransfer-item.model";
import { LoggerService } from "../../services/logger.service";
import { GuidUtil } from "../../utils/guid.util";
import { CryptoService } from "../../services/crypto.service";
import { CommonUtil } from "../../utils/common.util";
import * as i0 from "@angular/core";
export declare class BlobDownloader extends BaseDownloader {
    protected logger: LoggerService;
    protected guidUtil: GuidUtil;
    protected cryptoService: CryptoService;
    private commonUtil;
    private throttleProgressCallbacks;
    private files;
    private queue;
    private downloading;
    constructor(logger: LoggerService, guidUtil: GuidUtil, cryptoService: CryptoService, commonUtil: CommonUtil);
    startAll(): void;
    pauseAll(): void;
    removeAll(): void;
    removeItem(item: IDatatransferItem): void;
    private removeItemFromArray;
    retryItem(item: IDatatransferItem): void;
    download(filename: string, url: string, sizeInBytes: number): void;
    private initDownload;
    private downloadNext;
    private abortDownload;
    private getSize;
    private getProgress;
    static ɵfac: i0.ɵɵFactoryDef<BlobDownloader, never>;
    static ɵprov: i0.ɵɵInjectableDef<BlobDownloader>;
}
//# sourceMappingURL=blob.downloader.d.ts.map