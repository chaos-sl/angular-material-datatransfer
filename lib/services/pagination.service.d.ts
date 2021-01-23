import { IPaginationContainer } from '../models/pagination-container.model';
import { IDatatransferItem } from '../models/datatransfer-item.model';
import { DatatransferStore } from '../stores/datatransfer.store';
import * as i0 from "@angular/core";
export declare class PaginationService {
    private datatransferStore;
    pagination: IPaginationContainer;
    paginatedItems: IDatatransferItem[];
    constructor(datatransferStore: DatatransferStore);
    setRppOptions(rppOptions: number[]): void;
    update(total: number): void;
    setPaginationContainer(): void;
    max(): number;
    min(): number;
    first(): void;
    last(): void;
    hasNext(): boolean;
    hasPrevious(): boolean;
    moveNext(): void;
    movePrevious(): void;
    setPage(page: number): void;
    onPageChange(): void;
    onRppChange(): void;
    onPaginationChange(): void;
    pageCount(): number;
    getPageByItemId(id: string): number;
    setPageByItemId(id: string): void;
    static ɵfac: i0.ɵɵFactoryDef<PaginationService, never>;
    static ɵprov: i0.ɵɵInjectableDef<PaginationService>;
}
//# sourceMappingURL=pagination.service.d.ts.map