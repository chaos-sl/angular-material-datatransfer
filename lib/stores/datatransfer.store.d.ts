import { IDatatransferItem } from '../models/datatransfer-item.model';
import { IProgressContainer } from '../models/progress-container.model';
import { TransferStatus } from '../enums/transfer-status.enum';
import * as i0 from "@angular/core";
export declare class DatatransferStore {
    private items;
    count: number;
    failedCount: number;
    uploadProgress: IProgressContainer;
    downloadProgress: IProgressContainer;
    constructor();
    private updateCount;
    updateFailedCount(): void;
    getItems(): IDatatransferItem[];
    getSelected(): IDatatransferItem[];
    getById(id: string): IDatatransferItem;
    getIndexById(id: string): number;
    clear(): void;
    addItem(item: IDatatransferItem): void;
    removeById(id: string): void;
    getByStatus(status: TransferStatus): IDatatransferItem[];
    static ɵfac: i0.ɵɵFactoryDef<DatatransferStore, never>;
    static ɵprov: i0.ɵɵInjectableDef<DatatransferStore>;
}
//# sourceMappingURL=datatransfer.store.d.ts.map