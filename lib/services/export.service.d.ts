import { CsvExporter } from '../io/exporters/csv.exporter';
import { JsonExporter } from '../io/exporters/json.exporter';
import * as i0 from "@angular/core";
export declare class ExportService {
    private csvExporter;
    private jsonExporter;
    constructor(csvExporter: CsvExporter, jsonExporter: JsonExporter);
    export(exportType: string): void;
    static ɵfac: i0.ɵɵFactoryDef<ExportService, never>;
    static ɵprov: i0.ɵɵInjectableDef<ExportService>;
}
//# sourceMappingURL=export.service.d.ts.map