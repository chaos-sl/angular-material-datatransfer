import { ISizeContainer } from './size-container.model';
import { TransferType } from '../enums/transfer-type.enum';
import { TransferStatus } from '../enums/transfer-status.enum';
import { IPreprocessContainer } from './preprocess-container.model';
import { IProgressContainer } from './progress-container.model';
export interface IDatatransferItem {
    id: string;
    name: string;
    path: string;
    displayPath: string;
    sizeContainer: ISizeContainer;
    transferType: TransferType;
    status: TransferStatus;
    preprocessContainer: IPreprocessContainer;
    progressContainer: IProgressContainer;
    message?: string;
    isSelected?: boolean;
    externalItem?: any;
    getStatusName(): string;
    getTransferTypeName(): string;
}
export declare class DatatransferItem implements IDatatransferItem {
    id: string;
    name: string;
    private _path;
    get path(): string;
    set path(newPath: string);
    displayPath: string;
    sizeContainer: ISizeContainer;
    transferType: TransferType;
    status: TransferStatus;
    preprocessContainer: IPreprocessContainer;
    progressContainer: IProgressContainer;
    private _message;
    string: any;
    get message(): string;
    set message(newMessage: string);
    isSelected?: boolean;
    externalItem?: any;
    constructor(init?: Partial<DatatransferItem>);
    getStatusName(): string;
    getTransferTypeName(): string;
}
//# sourceMappingURL=datatransfer-item.model.d.ts.map