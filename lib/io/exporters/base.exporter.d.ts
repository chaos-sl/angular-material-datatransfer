import { LoggerService } from '../../services/logger.service';
import { DatatransferStore } from '../../stores/datatransfer.store';
import * as i0 from "@angular/core";
export interface IExporter {
    export(): void;
}
export declare abstract class BaseExporter implements IExporter {
    protected logger: LoggerService;
    protected store: DatatransferStore;
    constructor(logger: LoggerService, store: DatatransferStore);
    abstract export(): void;
    protected download(content: any, fileName: any, mimeType: any): void;
    static ɵfac: i0.ɵɵFactoryDef<BaseExporter, never>;
    static ɵprov: i0.ɵɵInjectableDef<BaseExporter>;
}
//# sourceMappingURL=base.exporter.d.ts.map