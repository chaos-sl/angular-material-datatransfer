import { BaseExporter } from "./base.exporter";
import { LoggerService } from "../../services/logger.service";
import { DatatransferStore } from "../../stores/datatransfer.store";
import * as i0 from "@angular/core";
export declare class CsvExporter extends BaseExporter {
    protected logger: LoggerService;
    protected store: DatatransferStore;
    constructor(logger: LoggerService, store: DatatransferStore);
    export(): void;
    static ɵfac: i0.ɵɵFactoryDef<CsvExporter, never>;
    static ɵprov: i0.ɵɵInjectableDef<CsvExporter>;
}
//# sourceMappingURL=csv.exporter.d.ts.map