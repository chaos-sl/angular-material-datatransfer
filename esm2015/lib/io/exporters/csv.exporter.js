import { Injectable } from "@angular/core";
import { BaseExporter } from "./base.exporter";
import { LoggerService } from "../../services/logger.service";
import { DatatransferStore } from "../../stores/datatransfer.store";
import * as i0 from "@angular/core";
import * as i1 from "../../services/logger.service";
import * as i2 from "../../stores/datatransfer.store";
export class CsvExporter extends BaseExporter {
    constructor(logger, store) {
        super(logger, store);
        this.logger = logger;
        this.store = store;
    }
    export() {
        let csvContent = "id,name,path,status,size,message\n";
        const items = this.store.getItems();
        items.forEach((item, index) => {
            const itemString = item.id +
                "," +
                item.name +
                "," +
                item.path +
                "," +
                item.getStatusName() +
                "," +
                item.sizeContainer.displaySize +
                " " +
                item.sizeContainer.displayUnit +
                "," +
                item.message;
            csvContent += index < items.length ? itemString + "\n" : itemString;
        });
        this.download(csvContent, "export.csv", "text/csv;encoding:utf-8");
    }
}
CsvExporter.ɵfac = function CsvExporter_Factory(t) { return new (t || CsvExporter)(i0.ɵɵinject(i1.LoggerService), i0.ɵɵinject(i2.DatatransferStore)); };
CsvExporter.ɵprov = i0.ɵɵdefineInjectable({ token: CsvExporter, factory: CsvExporter.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CsvExporter, [{
        type: Injectable
    }], function () { return [{ type: i1.LoggerService }, { type: i2.DatatransferStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3N2LmV4cG9ydGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYW1kLWxpYi9zcmMvbGliL2lvL2V4cG9ydGVycy9jc3YuZXhwb3J0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzlELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7O0FBR3BFLE1BQU0sT0FBTyxXQUFZLFNBQVEsWUFBWTtJQUMzQyxZQUNZLE1BQXFCLEVBQ3JCLEtBQXdCO1FBRWxDLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFIWCxXQUFNLEdBQU4sTUFBTSxDQUFlO1FBQ3JCLFVBQUssR0FBTCxLQUFLLENBQW1CO0lBR3BDLENBQUM7SUFFTSxNQUFNO1FBQ1gsSUFBSSxVQUFVLEdBQUcsb0NBQW9DLENBQUM7UUFDdEQsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNwQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQzVCLE1BQU0sVUFBVSxHQUNkLElBQUksQ0FBQyxFQUFFO2dCQUNQLEdBQUc7Z0JBQ0gsSUFBSSxDQUFDLElBQUk7Z0JBQ1QsR0FBRztnQkFDSCxJQUFJLENBQUMsSUFBSTtnQkFDVCxHQUFHO2dCQUNILElBQUksQ0FBQyxhQUFhLEVBQUU7Z0JBQ3BCLEdBQUc7Z0JBQ0gsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXO2dCQUM5QixHQUFHO2dCQUNILElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVztnQkFDOUIsR0FBRztnQkFDSCxJQUFJLENBQUMsT0FBTyxDQUFDO1lBRWYsVUFBVSxJQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUM7UUFDdEUsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxZQUFZLEVBQUUseUJBQXlCLENBQUMsQ0FBQztJQUNyRSxDQUFDOztzRUEvQlUsV0FBVzttREFBWCxXQUFXLFdBQVgsV0FBVzt1RkFBWCxXQUFXO2NBRHZCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQmFzZUV4cG9ydGVyIH0gZnJvbSBcIi4vYmFzZS5leHBvcnRlclwiO1xyXG5pbXBvcnQgeyBMb2dnZXJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2xvZ2dlci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IERhdGF0cmFuc2ZlclN0b3JlIH0gZnJvbSBcIi4uLy4uL3N0b3Jlcy9kYXRhdHJhbnNmZXIuc3RvcmVcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENzdkV4cG9ydGVyIGV4dGVuZHMgQmFzZUV4cG9ydGVyIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByb3RlY3RlZCBsb2dnZXI6IExvZ2dlclNlcnZpY2UsXHJcbiAgICBwcm90ZWN0ZWQgc3RvcmU6IERhdGF0cmFuc2ZlclN0b3JlXHJcbiAgKSB7XHJcbiAgICBzdXBlcihsb2dnZXIsIHN0b3JlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBleHBvcnQoKTogdm9pZCB7XHJcbiAgICBsZXQgY3N2Q29udGVudCA9IFwiaWQsbmFtZSxwYXRoLHN0YXR1cyxzaXplLG1lc3NhZ2VcXG5cIjtcclxuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5zdG9yZS5nZXRJdGVtcygpO1xyXG4gICAgaXRlbXMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgY29uc3QgaXRlbVN0cmluZyA9XHJcbiAgICAgICAgaXRlbS5pZCArXHJcbiAgICAgICAgXCIsXCIgK1xyXG4gICAgICAgIGl0ZW0ubmFtZSArXHJcbiAgICAgICAgXCIsXCIgK1xyXG4gICAgICAgIGl0ZW0ucGF0aCArXHJcbiAgICAgICAgXCIsXCIgK1xyXG4gICAgICAgIGl0ZW0uZ2V0U3RhdHVzTmFtZSgpICtcclxuICAgICAgICBcIixcIiArXHJcbiAgICAgICAgaXRlbS5zaXplQ29udGFpbmVyLmRpc3BsYXlTaXplICtcclxuICAgICAgICBcIiBcIiArXHJcbiAgICAgICAgaXRlbS5zaXplQ29udGFpbmVyLmRpc3BsYXlVbml0ICtcclxuICAgICAgICBcIixcIiArXHJcbiAgICAgICAgaXRlbS5tZXNzYWdlO1xyXG5cclxuICAgICAgY3N2Q29udGVudCArPSBpbmRleCA8IGl0ZW1zLmxlbmd0aCA/IGl0ZW1TdHJpbmcgKyBcIlxcblwiIDogaXRlbVN0cmluZztcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZG93bmxvYWQoY3N2Q29udGVudCwgXCJleHBvcnQuY3N2XCIsIFwidGV4dC9jc3Y7ZW5jb2Rpbmc6dXRmLThcIik7XHJcbiAgfVxyXG59XHJcbiJdfQ==