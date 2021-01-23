import { Injectable } from '@angular/core';
import { CsvExporter } from '../io/exporters/csv.exporter';
import { JsonExporter } from '../io/exporters/json.exporter';
import { ExportType } from '../enums/export-type.enum';
import * as i0 from "@angular/core";
import * as i1 from "../io/exporters/csv.exporter";
import * as i2 from "../io/exporters/json.exporter";
export class ExportService {
    constructor(csvExporter, jsonExporter) {
        this.csvExporter = csvExporter;
        this.jsonExporter = jsonExporter;
    }
    export(exportType) {
        let castedExportType = ExportType[exportType];
        switch (castedExportType) {
            case ExportType.CSV:
                this.csvExporter.export();
                break;
            case ExportType.JSON:
                this.jsonExporter.export();
                break;
            default:
                break;
        }
    }
}
ExportService.ɵfac = function ExportService_Factory(t) { return new (t || ExportService)(i0.ɵɵinject(i1.CsvExporter), i0.ɵɵinject(i2.JsonExporter)); };
ExportService.ɵprov = i0.ɵɵdefineInjectable({ token: ExportService, factory: ExportService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ExportService, [{
        type: Injectable
    }], function () { return [{ type: i1.CsvExporter }, { type: i2.JsonExporter }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwb3J0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hbWQtbGliL3NyYy9saWIvc2VydmljZXMvZXhwb3J0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDM0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzdELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7OztBQUd2RCxNQUFNLE9BQU8sYUFBYTtJQUV0QixZQUFvQixXQUF3QixFQUFVLFlBQTBCO1FBQTVELGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWM7SUFFaEYsQ0FBQztJQUVNLE1BQU0sQ0FBQyxVQUFrQjtRQUM1QixJQUFJLGdCQUFnQixHQUFlLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMxRCxRQUFRLGdCQUFnQixFQUFFO1lBQ3RCLEtBQUssVUFBVSxDQUFDLEdBQUc7Z0JBQ2YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDMUIsTUFBTTtZQUNWLEtBQUssVUFBVSxDQUFDLElBQUk7Z0JBQ2hCLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQzNCLE1BQU07WUFDVjtnQkFDSSxNQUFNO1NBQ2I7SUFDTCxDQUFDOzswRUFsQlEsYUFBYTtxREFBYixhQUFhLFdBQWIsYUFBYTt1RkFBYixhQUFhO2NBRHpCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBDc3ZFeHBvcnRlciB9IGZyb20gJy4uL2lvL2V4cG9ydGVycy9jc3YuZXhwb3J0ZXInO1xyXG5pbXBvcnQgeyBKc29uRXhwb3J0ZXIgfSBmcm9tICcuLi9pby9leHBvcnRlcnMvanNvbi5leHBvcnRlcic7XHJcbmltcG9ydCB7IEV4cG9ydFR5cGUgfSBmcm9tICcuLi9lbnVtcy9leHBvcnQtdHlwZS5lbnVtJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEV4cG9ydFNlcnZpY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY3N2RXhwb3J0ZXI6IENzdkV4cG9ydGVyLCBwcml2YXRlIGpzb25FeHBvcnRlcjogSnNvbkV4cG9ydGVyKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBleHBvcnQoZXhwb3J0VHlwZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGNhc3RlZEV4cG9ydFR5cGU6IEV4cG9ydFR5cGUgPSBFeHBvcnRUeXBlW2V4cG9ydFR5cGVdO1xyXG4gICAgICAgIHN3aXRjaCAoY2FzdGVkRXhwb3J0VHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIEV4cG9ydFR5cGUuQ1NWOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jc3ZFeHBvcnRlci5leHBvcnQoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEV4cG9ydFR5cGUuSlNPTjpcclxuICAgICAgICAgICAgICAgIHRoaXMuanNvbkV4cG9ydGVyLmV4cG9ydCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==