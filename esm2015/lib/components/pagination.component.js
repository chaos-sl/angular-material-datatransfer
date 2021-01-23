import { Component, Input } from '@angular/core';
import { PaginationService } from '../services/pagination.service';
import { LoggerService } from '../services/logger.service';
import * as i0 from "@angular/core";
import * as i1 from "../services/logger.service";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/select";
import * as i4 from "@angular/forms";
import * as i5 from "@angular/common";
import * as i6 from "@angular/material/button";
import * as i7 from "@angular/material/icon";
import * as i8 from "@angular/material/core";
function PaginationComponent_mat_option_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const p_r2 = ctx.$implicit;
    i0.ɵɵproperty("value", p_r2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", p_r2, " ");
} }
function PaginationComponent_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const o_r3 = ctx.$implicit;
    i0.ɵɵproperty("value", o_r3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", o_r3, " ");
} }
export class PaginationComponent {
    constructor(logger) {
        this.logger = logger;
    }
    max() {
        return this.paginationService.max();
    }
    ;
    min() {
        return this.paginationService.min();
    }
    ;
    first() {
        this.paginationService.first();
    }
    last() {
        this.paginationService.last();
    }
    hasNext() {
        return this.paginationService.hasNext();
    }
    hasPrevious() {
        return this.paginationService.hasPrevious();
    }
    ;
    moveNext() {
        this.paginationService.moveNext();
    }
    movePrevious() {
        this.paginationService.movePrevious();
    }
    onPageChange() {
        this.paginationService.onPageChange();
    }
    onRppChange() {
        this.paginationService.onRppChange();
    }
    onPaginationChange() {
        this.paginationService.onPaginationChange();
    }
    pageCount() {
        return this.paginationService.pageCount();
    }
}
PaginationComponent.ɵfac = function PaginationComponent_Factory(t) { return new (t || PaginationComponent)(i0.ɵɵdirectiveInject(i1.LoggerService)); };
PaginationComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PaginationComponent, selectors: [["amd-pagination"]], inputs: { paginationService: "paginationService" }, decls: 14, vars: 9, consts: [["placeholder", "Page", "aria-label", "Page", 3, "ngModel", "ngModelChange", "change"], [3, "value", 4, "ngFor", "ngForOf"], ["placeholder", "Rows per page", "aria-label", "Rows per page", 3, "ngModel", "ngModelChange", "change"], ["mat-icon-button", "", "mat-button", "", 3, "disabled", "click"], [3, "value"]], template: function PaginationComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-form-field");
        i0.ɵɵelementStart(1, "mat-select", 0);
        i0.ɵɵlistener("ngModelChange", function PaginationComponent_Template_mat_select_ngModelChange_1_listener($event) { return ctx.paginationService.pagination.page = $event; })("change", function PaginationComponent_Template_mat_select_change_1_listener() { return ctx.onPageChange(); });
        i0.ɵɵtemplate(2, PaginationComponent_mat_option_2_Template, 2, 2, "mat-option", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-form-field");
        i0.ɵɵelementStart(4, "mat-select", 2);
        i0.ɵɵlistener("ngModelChange", function PaginationComponent_Template_mat_select_ngModelChange_4_listener($event) { return ctx.paginationService.pagination.rpp = $event; })("change", function PaginationComponent_Template_mat_select_change_4_listener() { return ctx.onRppChange(); });
        i0.ɵɵtemplate(5, PaginationComponent_mat_option_5_Template, 2, 2, "mat-option", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "span");
        i0.ɵɵtext(7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "button", 3);
        i0.ɵɵlistener("click", function PaginationComponent_Template_button_click_8_listener() { return ctx.movePrevious(); });
        i0.ɵɵelementStart(9, "mat-icon");
        i0.ɵɵtext(10, "navigate_before");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "button", 3);
        i0.ɵɵlistener("click", function PaginationComponent_Template_button_click_11_listener() { return ctx.moveNext(); });
        i0.ɵɵelementStart(12, "mat-icon");
        i0.ɵɵtext(13, "navigate_next");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx.paginationService.pagination.page);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.paginationService.pagination.pages);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngModel", ctx.paginationService.pagination.rpp);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.paginationService.pagination.rppOptions);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate3("", ctx.min(), " - ", ctx.max(), " of ", ctx.paginationService.pagination.total, "");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("disabled", !ctx.hasPrevious());
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("disabled", !ctx.hasNext());
    } }, directives: [i2.MatFormField, i3.MatSelect, i4.NgControlStatus, i4.NgModel, i5.NgForOf, i6.MatButton, i7.MatIcon, i8.MatOption], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PaginationComponent, [{
        type: Component,
        args: [{
                // tslint:disable-next-line:component-selector
                selector: 'amd-pagination',
                templateUrl: 'pagination.component.html'
            }]
    }], function () { return [{ type: i1.LoggerService }]; }, { paginationService: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hbWQtbGliL3NyYy9saWIvY29tcG9uZW50cy9wYWdpbmF0aW9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FtZC1saWIvc3JjL2xpYi9jb21wb25lbnRzL3BhZ2luYXRpb24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbkUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRCQUE0QixDQUFDOzs7Ozs7Ozs7OztJQ0FuRCxxQ0FDSTtJQUFBLFlBQ0o7SUFBQSxpQkFBYTs7O0lBRm9ELDRCQUFXO0lBQ3hFLGVBQ0o7SUFESSxxQ0FDSjs7O0lBS0EscUNBQ0k7SUFBQSxZQUNKO0lBQUEsaUJBQWE7OztJQUZ5RCw0QkFBVztJQUM3RSxlQUNKO0lBREkscUNBQ0o7O0FERFIsTUFBTSxPQUFPLG1CQUFtQjtJQUk1QixZQUFvQixNQUFxQjtRQUFyQixXQUFNLEdBQU4sTUFBTSxDQUFlO0lBQUksQ0FBQztJQUU5QyxHQUFHO1FBQ0MsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDeEMsQ0FBQztJQUFBLENBQUM7SUFFRixHQUFHO1FBQ0MsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDeEMsQ0FBQztJQUFBLENBQUM7SUFFRixLQUFLO1FBQ0QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFFRCxJQUFJO1FBQ0EsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRCxPQUFPO1FBQ0gsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDNUMsQ0FBQztJQUVELFdBQVc7UUFDUCxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNoRCxDQUFDO0lBQUEsQ0FBQztJQUVGLFFBQVE7UUFDSixJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDdEMsQ0FBQztJQUVELFlBQVk7UUFDUixJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUMsQ0FBQztJQUVELFlBQVk7UUFDUixJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUMsQ0FBQztJQUVELFdBQVc7UUFDUCxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDekMsQ0FBQztJQUVELGtCQUFrQjtRQUNkLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQ2hELENBQUM7SUFFRCxTQUFTO1FBQ0wsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDOUMsQ0FBQzs7c0ZBcERRLG1CQUFtQjt3REFBbkIsbUJBQW1CO1FDVmhDLHNDQUNJO1FBQUEscUNBQ0k7UUFEMkIsNEtBQStDLHlGQUFXLGtCQUFjLElBQXpCO1FBQzFFLGtGQUVhO1FBQ2pCLGlCQUFhO1FBQ2pCLGlCQUFpQjtRQUNqQixzQ0FDSTtRQUFBLHFDQUNJO1FBRG9DLDJLQUE4Qyx5RkFBVyxpQkFBYSxJQUF4QjtRQUNsRixrRkFFYTtRQUNqQixpQkFBYTtRQUNqQixpQkFBaUI7UUFDakIsNEJBQU07UUFBQSxZQUErRDtRQUFBLGlCQUFPO1FBQzVFLGlDQUNJO1FBRCtCLGdHQUFTLGtCQUFjLElBQUM7UUFDdkQsZ0NBQVU7UUFBQSxnQ0FBZTtRQUFBLGlCQUFXO1FBQ3hDLGlCQUFTO1FBQ1Qsa0NBQ0k7UUFEK0IsaUdBQVMsY0FBVSxJQUFDO1FBQ25ELGlDQUFVO1FBQUEsOEJBQWE7UUFBQSxpQkFBVztRQUN0QyxpQkFBUzs7UUFuQjBCLGVBQStDO1FBQS9DLCtEQUErQztRQUNoRCxlQUFxQztRQUFyQyxnRUFBcUM7UUFNM0IsZUFBOEM7UUFBOUMsOERBQThDO1FBQ3hELGVBQTBDO1FBQTFDLHFFQUEwQztRQUt0RSxlQUErRDtRQUEvRCwwR0FBK0Q7UUFDVCxlQUEyQjtRQUEzQiw2Q0FBMkI7UUFHL0IsZUFBdUI7UUFBdkIseUNBQXVCOzt1RkRSbEUsbUJBQW1CO2NBTi9CLFNBQVM7ZUFBQztnQkFDUCw4Q0FBOEM7Z0JBQzlDLFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFdBQVcsRUFBRSwyQkFBMkI7YUFDM0M7Z0VBSVksaUJBQWlCO2tCQUF6QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQYWdpbmF0aW9uU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3BhZ2luYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IExvZ2dlclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9sb2dnZXIuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICAgIHNlbGVjdG9yOiAnYW1kLXBhZ2luYXRpb24nLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdwYWdpbmF0aW9uLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFBhZ2luYXRpb25Db21wb25lbnQge1xyXG5cclxuICAgIEBJbnB1dCgpIHBhZ2luYXRpb25TZXJ2aWNlOiBQYWdpbmF0aW9uU2VydmljZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvZ2dlcjogTG9nZ2VyU2VydmljZSkgeyB9XHJcblxyXG4gICAgbWF4KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGFnaW5hdGlvblNlcnZpY2UubWF4KCk7XHJcbiAgICB9O1xyXG5cclxuICAgIG1pbigpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhZ2luYXRpb25TZXJ2aWNlLm1pbigpO1xyXG4gICAgfTtcclxuXHJcbiAgICBmaXJzdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnBhZ2luYXRpb25TZXJ2aWNlLmZpcnN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgbGFzdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnBhZ2luYXRpb25TZXJ2aWNlLmxhc3QoKTtcclxuICAgIH1cclxuXHJcbiAgICBoYXNOZXh0KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhZ2luYXRpb25TZXJ2aWNlLmhhc05leHQoKTtcclxuICAgIH1cclxuXHJcbiAgICBoYXNQcmV2aW91cygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wYWdpbmF0aW9uU2VydmljZS5oYXNQcmV2aW91cygpO1xyXG4gICAgfTtcclxuXHJcbiAgICBtb3ZlTmV4dCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnBhZ2luYXRpb25TZXJ2aWNlLm1vdmVOZXh0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZVByZXZpb3VzKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucGFnaW5hdGlvblNlcnZpY2UubW92ZVByZXZpb3VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25QYWdlQ2hhbmdlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucGFnaW5hdGlvblNlcnZpY2Uub25QYWdlQ2hhbmdlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25ScHBDaGFuZ2UoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wYWdpbmF0aW9uU2VydmljZS5vblJwcENoYW5nZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUGFnaW5hdGlvbkNoYW5nZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnBhZ2luYXRpb25TZXJ2aWNlLm9uUGFnaW5hdGlvbkNoYW5nZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHBhZ2VDb3VudCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhZ2luYXRpb25TZXJ2aWNlLnBhZ2VDb3VudCgpO1xyXG4gICAgfVxyXG59XHJcbiIsIjxtYXQtZm9ybS1maWVsZD5cclxuICAgIDxtYXQtc2VsZWN0IHBsYWNlaG9sZGVyPVwiUGFnZVwiIFsobmdNb2RlbCldPVwicGFnaW5hdGlvblNlcnZpY2UucGFnaW5hdGlvbi5wYWdlXCIgKGNoYW5nZSk9XCJvblBhZ2VDaGFuZ2UoKVwiIGFyaWEtbGFiZWw9XCJQYWdlXCI+XHJcbiAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IHAgb2YgcGFnaW5hdGlvblNlcnZpY2UucGFnaW5hdGlvbi5wYWdlc1wiIFt2YWx1ZV09XCJwXCI+XHJcbiAgICAgICAgICAgIHt7IHAgfX1cclxuICAgICAgICA8L21hdC1vcHRpb24+XHJcbiAgICA8L21hdC1zZWxlY3Q+XHJcbjwvbWF0LWZvcm0tZmllbGQ+XHJcbjxtYXQtZm9ybS1maWVsZD5cclxuICAgIDxtYXQtc2VsZWN0IHBsYWNlaG9sZGVyPVwiUm93cyBwZXIgcGFnZVwiIFsobmdNb2RlbCldPVwicGFnaW5hdGlvblNlcnZpY2UucGFnaW5hdGlvbi5ycHBcIiAoY2hhbmdlKT1cIm9uUnBwQ2hhbmdlKClcIiBhcmlhLWxhYmVsPVwiUm93cyBwZXIgcGFnZVwiPlxyXG4gICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBvIG9mIHBhZ2luYXRpb25TZXJ2aWNlLnBhZ2luYXRpb24ucnBwT3B0aW9uc1wiIFt2YWx1ZV09XCJvXCI+XHJcbiAgICAgICAgICAgIHt7IG8gfX1cclxuICAgICAgICA8L21hdC1vcHRpb24+XHJcbiAgICA8L21hdC1zZWxlY3Q+XHJcbjwvbWF0LWZvcm0tZmllbGQ+XHJcbjxzcGFuPnt7bWluKCl9fSAtIHt7bWF4KCl9fSBvZiB7e3BhZ2luYXRpb25TZXJ2aWNlLnBhZ2luYXRpb24udG90YWx9fTwvc3Bhbj5cclxuPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gbWF0LWJ1dHRvbiAoY2xpY2spPVwibW92ZVByZXZpb3VzKClcIiBbZGlzYWJsZWRdPVwiIWhhc1ByZXZpb3VzKClcIj5cclxuICAgIDxtYXQtaWNvbj5uYXZpZ2F0ZV9iZWZvcmU8L21hdC1pY29uPlxyXG48L2J1dHRvbj5cclxuPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gbWF0LWJ1dHRvbiAoY2xpY2spPVwibW92ZU5leHQoKVwiIFtkaXNhYmxlZF09XCIhaGFzTmV4dCgpXCI+XHJcbiAgICA8bWF0LWljb24+bmF2aWdhdGVfbmV4dDwvbWF0LWljb24+XHJcbjwvYnV0dG9uPiJdfQ==