import { AfterViewInit } from '@angular/core';
import { IAppConfig } from '../models/app-config.model';
import { DatatransferFacade } from '../facades/datatransfer.facade';
import { IProgressContainer } from '../models/progress-container.model';
import { PaginationService } from '../services/pagination.service';
import { DatatransferStore } from '../stores/datatransfer.store';
import * as i0 from "@angular/core";
export declare class MainComponent implements AfterViewInit {
    datatransferStore: DatatransferStore;
    paginationService: PaginationService;
    datatransferFacade: DatatransferFacade;
    config: IAppConfig;
    uploadProgress: IProgressContainer;
    downloadProgress: IProgressContainer;
    constructor(datatransferStore: DatatransferStore, paginationService: PaginationService);
    ngAfterViewInit(): void;
    private init;
    static ɵfac: i0.ɵɵFactoryDef<MainComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<MainComponent, "amd-main", never, { "datatransferFacade": "datatransferFacade"; }, {}, never, never>;
}
//# sourceMappingURL=main.component.d.ts.map