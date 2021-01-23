import { BaseExporter } from "./base.exporter";
import { LoggerService } from "../../services/logger.service";
import { DatatransferStore } from "../../stores/datatransfer.store";
import * as i0 from "@angular/core";
export declare class JsonExporter extends BaseExporter {
    protected logger: LoggerService;
    protected store: DatatransferStore;
    constructor(logger: LoggerService, store: DatatransferStore);
    export(): void;
    static ɵfac: i0.ɵɵFactoryDef<JsonExporter, never>;
    static ɵprov: i0.ɵɵInjectableDef<JsonExporter>;
}
//# sourceMappingURL=json.exporter.d.ts.map