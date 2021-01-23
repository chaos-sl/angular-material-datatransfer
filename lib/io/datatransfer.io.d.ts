import { IDatatransferItem } from '../models/datatransfer-item.model';
import { LoggerService } from '../services/logger.service';
import { GuidUtil } from '../utils/guid.util';
import { CryptoService } from '../services/crypto.service';
import { TransferStatus } from '../enums/transfer-status.enum';
import { TransferType } from '../enums/transfer-type.enum';
export interface IDatatransfer {
    on(event: string, callback: Function): void;
    isWorking(): boolean;
    startAll(): void;
    pauseAll(): void;
    removeAll(): void;
    addItem(item: IDatatransferItem): void;
    removeItem(item: IDatatransferItem): void;
    retryItem(item: IDatatransferItem): void;
}
export declare abstract class BaseDatatransfer implements IDatatransfer {
    protected logger: LoggerService;
    protected guidUtil: GuidUtil;
    protected cryptoService: CryptoService;
    private events;
    protected _isWorking: boolean;
    constructor(logger: LoggerService, guidUtil: GuidUtil, cryptoService: CryptoService);
    on(event: string, callback: Function): void;
    protected fire(...args: any[]): void;
    protected updateZone(): void;
    protected changeItemStatus(item: IDatatransferItem, status: TransferStatus, message?: string): void;
    protected updateItemProgress(item: IDatatransferItem, progress: number): void;
    protected updateOverallProgress(transferType: TransferType, progress: number): void;
    protected updateOverallSize(size: number): void;
    isWorking(): boolean;
    abstract startAll(): void;
    abstract pauseAll(): void;
    abstract removeAll(): void;
    addItem(item: IDatatransferItem): void;
    abstract removeItem(item: IDatatransferItem): void;
    abstract retryItem(item: IDatatransferItem): void;
    protected generateUniqueIdentifier(): string;
    protected preprocessHash(item: IDatatransferItem, file: File, continueCallback: Function, cancelCallback: Function): void;
}
//# sourceMappingURL=datatransfer.io.d.ts.map