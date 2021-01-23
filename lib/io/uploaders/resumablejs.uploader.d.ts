import { BaseUploader } from './base.uploader';
import { LoggerService } from '../../services/logger.service';
import { GuidUtil } from '../../utils/guid.util';
import { CryptoService } from '../../services/crypto.service';
import { IDatatransferItem } from '../../models/datatransfer-item.model';
import * as i0 from "@angular/core";
export declare class ResumableJsUploader extends BaseUploader {
    protected logger: LoggerService;
    protected guidUtil: GuidUtil;
    protected cryptoService: CryptoService;
    private r;
    private preprocessFileFn;
    private preprocessChunkFn;
    constructor(logger: LoggerService, guidUtil: GuidUtil, cryptoService: CryptoService);
    private initResumable;
    assignBrowse(element: any, isDirectory: any): void;
    assignDrop(element: any): void;
    editPath(oldPath: string, newPath: string): void;
    editFilename(item: IDatatransferItem, name: string): void;
    startAll(): void;
    pauseAll(): void;
    removeAll(): void;
    removeItem(item: IDatatransferItem): void;
    retryItem(item: IDatatransferItem): void;
    static ɵfac: i0.ɵɵFactoryDef<ResumableJsUploader, never>;
    static ɵprov: i0.ɵɵInjectableDef<ResumableJsUploader>;
}
//# sourceMappingURL=resumablejs.uploader.d.ts.map