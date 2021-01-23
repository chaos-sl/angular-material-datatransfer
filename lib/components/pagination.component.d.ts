import { PaginationService } from '../services/pagination.service';
import { LoggerService } from '../services/logger.service';
import * as i0 from "@angular/core";
export declare class PaginationComponent {
    private logger;
    paginationService: PaginationService;
    constructor(logger: LoggerService);
    max(): number;
    min(): number;
    first(): void;
    last(): void;
    hasNext(): boolean;
    hasPrevious(): boolean;
    moveNext(): void;
    movePrevious(): void;
    onPageChange(): void;
    onRppChange(): void;
    onPaginationChange(): void;
    pageCount(): number;
    static ɵfac: i0.ɵɵFactoryDef<PaginationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<PaginationComponent, "amd-pagination", never, { "paginationService": "paginationService"; }, {}, never, never>;
}
//# sourceMappingURL=pagination.component.d.ts.map