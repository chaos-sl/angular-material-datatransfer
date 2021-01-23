import { IDatatransfer, BaseDatatransfer } from '../datatransfer.io';
import { IDatatransferItem } from '../../models/datatransfer-item.model';
import { TransferType } from '../../enums/transfer-type.enum';
import { LoggerService } from '../../services/logger.service';
import { GuidUtil } from '../../utils/guid.util';
import { CryptoService } from '../../services/crypto.service';
export interface IUploader extends IDatatransfer {
    assignBrowse(element: any, isDirectory: any): void;
    assignDrop(element: any): void;
    editPath(oldPath: string, newPath: string): void;
    editFilename(item: IDatatransferItem, name: string): void;
}
export declare abstract class BaseUploader extends BaseDatatransfer {
    protected logger: LoggerService;
    protected guidUtil: GuidUtil;
    protected cryptoService: CryptoService;
    private filenameRegExp;
    private pathRegExp;
    protected transferType: TransferType;
    constructor(logger: LoggerService, guidUtil: GuidUtil, cryptoService: CryptoService);
    abstract assignBrowse(element: any, isDirectory: any): void;
    abstract assignDrop(element: any): void;
    editPath(oldPath: string, newPath: string): void;
    editFilename(item: IDatatransferItem, name: string): void;
}
//# sourceMappingURL=base.uploader.d.ts.map