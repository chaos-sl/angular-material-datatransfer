import { Injectable } from "@angular/core";
import { BaseExporter } from "./base.exporter";
import { LoggerService } from "../../services/logger.service";
import { DatatransferStore } from "../../stores/datatransfer.store";
import * as i0 from "@angular/core";
import * as i1 from "../../services/logger.service";
import * as i2 from "../../stores/datatransfer.store";
export class JsonExporter extends BaseExporter {
    constructor(logger, store) {
        super(logger, store);
        this.logger = logger;
        this.store = store;
    }
    export() {
        const content = [];
        const items = this.store.getItems();
        items.forEach((item, index) => {
            content.push({
                id: item.id,
                name: item.name,
                path: item.path,
                status: item.getStatusName(),
                size: item.sizeContainer.displaySize + " " + item.sizeContainer.displayUnit,
                message: item.message,
            });
        });
        this.download(JSON.stringify(content, null, "\t"), "export.json", "text/json;encoding:utf-8");
    }
}
JsonExporter.ɵfac = function JsonExporter_Factory(t) { return new (t || JsonExporter)(i0.ɵɵinject(i1.LoggerService), i0.ɵɵinject(i2.DatatransferStore)); };
JsonExporter.ɵprov = i0.ɵɵdefineInjectable({ token: JsonExporter, factory: JsonExporter.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(JsonExporter, [{
        type: Injectable
    }], function () { return [{ type: i1.LoggerService }, { type: i2.DatatransferStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi5leHBvcnRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FtZC1saWIvc3JjL2xpYi9pby9leHBvcnRlcnMvanNvbi5leHBvcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUNBQWlDLENBQUM7Ozs7QUFHcEUsTUFBTSxPQUFPLFlBQWEsU0FBUSxZQUFZO0lBQzVDLFlBQ1ksTUFBcUIsRUFDckIsS0FBd0I7UUFFbEMsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUhYLFdBQU0sR0FBTixNQUFNLENBQWU7UUFDckIsVUFBSyxHQUFMLEtBQUssQ0FBbUI7SUFHcEMsQ0FBQztJQUVNLE1BQU07UUFDWCxNQUFNLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbkIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNwQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQzVCLE9BQU8sQ0FBQyxJQUFJLENBQUM7Z0JBQ1gsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFO2dCQUNYLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtnQkFDZixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7Z0JBQ2YsTUFBTSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUU7Z0JBQzVCLElBQUksRUFDRixJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXO2dCQUN2RSxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87YUFDdEIsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsUUFBUSxDQUNYLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsRUFDbkMsYUFBYSxFQUNiLDBCQUEwQixDQUMzQixDQUFDO0lBQ0osQ0FBQzs7d0VBNUJVLFlBQVk7b0RBQVosWUFBWSxXQUFaLFlBQVk7dUZBQVosWUFBWTtjQUR4QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEJhc2VFeHBvcnRlciB9IGZyb20gXCIuL2Jhc2UuZXhwb3J0ZXJcIjtcclxuaW1wb3J0IHsgTG9nZ2VyU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9sb2dnZXIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBEYXRhdHJhbnNmZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9zdG9yZXMvZGF0YXRyYW5zZmVyLnN0b3JlXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBKc29uRXhwb3J0ZXIgZXh0ZW5kcyBCYXNlRXhwb3J0ZXIge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJvdGVjdGVkIGxvZ2dlcjogTG9nZ2VyU2VydmljZSxcclxuICAgIHByb3RlY3RlZCBzdG9yZTogRGF0YXRyYW5zZmVyU3RvcmVcclxuICApIHtcclxuICAgIHN1cGVyKGxvZ2dlciwgc3RvcmUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGV4cG9ydCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBbXTtcclxuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5zdG9yZS5nZXRJdGVtcygpO1xyXG4gICAgaXRlbXMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgY29udGVudC5wdXNoKHtcclxuICAgICAgICBpZDogaXRlbS5pZCxcclxuICAgICAgICBuYW1lOiBpdGVtLm5hbWUsXHJcbiAgICAgICAgcGF0aDogaXRlbS5wYXRoLFxyXG4gICAgICAgIHN0YXR1czogaXRlbS5nZXRTdGF0dXNOYW1lKCksXHJcbiAgICAgICAgc2l6ZTpcclxuICAgICAgICAgIGl0ZW0uc2l6ZUNvbnRhaW5lci5kaXNwbGF5U2l6ZSArIFwiIFwiICsgaXRlbS5zaXplQ29udGFpbmVyLmRpc3BsYXlVbml0LFxyXG4gICAgICAgIG1lc3NhZ2U6IGl0ZW0ubWVzc2FnZSxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmRvd25sb2FkKFxyXG4gICAgICBKU09OLnN0cmluZ2lmeShjb250ZW50LCBudWxsLCBcIlxcdFwiKSxcclxuICAgICAgXCJleHBvcnQuanNvblwiLFxyXG4gICAgICBcInRleHQvanNvbjtlbmNvZGluZzp1dGYtOFwiXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXX0=