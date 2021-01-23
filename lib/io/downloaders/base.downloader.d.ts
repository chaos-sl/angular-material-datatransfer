import { IDatatransfer, BaseDatatransfer } from '../datatransfer.io';
import { TransferType } from '../../enums/transfer-type.enum';
import { LoggerService } from '../../services/logger.service';
import { GuidUtil } from '../../utils/guid.util';
import { CryptoService } from '../../services/crypto.service';
export interface IDownloader extends IDatatransfer {
    download(filename: string, url: string, sizeInBytes: number): void;
}
export declare abstract class BaseDownloader extends BaseDatatransfer implements IDownloader {
    protected logger: LoggerService;
    protected guidUtil: GuidUtil;
    protected cryptoService: CryptoService;
    protected transferType: TransferType;
    constructor(logger: LoggerService, guidUtil: GuidUtil, cryptoService: CryptoService);
    abstract download(filename: string, url: string, sizeInBytes: number): void;
}
//# sourceMappingURL=base.downloader.d.ts.map