import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/flex-layout/flex";
import * as i2 from "@angular/flex-layout/extended";
import * as i3 from "@angular/common";
import * as i4 from "@angular/material/progress-bar";
function ProgressComponent_mat_progress_bar_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mat-progress-bar", 5);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("value", ctx_r0.progressContainer.percent);
} }
export class ProgressComponent {
    constructor() { }
}
ProgressComponent.ɵfac = function ProgressComponent_Factory(t) { return new (t || ProgressComponent)(); };
ProgressComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ProgressComponent, selectors: [["amd-progress"]], inputs: { progressContainer: "progressContainer" }, decls: 10, vars: 7, consts: [[2, "font-size", "11px", "margin-top", "10px"], ["fxFlex", "25%", "fxFlex.lt-md", "50%"], ["fxFlex", "25%", "fxHide.lt-md", "", 2, "text-align", "center"], ["fxFlex", "25%", "fxFlex.lt-md", "50%", 2, "text-align", "right"], [3, "value", 4, "ngIf"], [3, "value"]], template: function ProgressComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 2);
        i0.ɵɵtext(4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div", 2);
        i0.ɵɵtext(6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "div", 3);
        i0.ɵɵtext(8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(9, ProgressComponent_mat_progress_bar_9_Template, 1, 1, "mat-progress-bar", 4);
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", ctx.progressContainer.displayBitrate, " ");
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", ctx.progressContainer.displayTimeLeft, " ");
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", ctx.progressContainer.percent, "% ");
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate3(" ", ctx.progressContainer.loadedSizeContainer.displaySize, " / ", ctx.progressContainer.totalSizeContainer.displaySize, " ", ctx.progressContainer.totalSizeContainer.displayUnit, " ");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.progressContainer.total > 0);
    } }, directives: [i1.DefaultFlexDirective, i2.DefaultShowHideDirective, i3.NgIf, i4.MatProgressBar], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProgressComponent, [{
        type: Component,
        args: [{
                // tslint:disable-next-line:component-selector
                selector: 'amd-progress',
                templateUrl: 'progress.component.html'
            }]
    }], function () { return []; }, { progressContainer: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYW1kLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvcHJvZ3Jlc3MuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYW1kLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvcHJvZ3Jlc3MuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7SUNjakQsc0NBQ21COzs7SUFEbUMsd0RBQW1DOztBREx6RixNQUFNLE9BQU8saUJBQWlCO0lBSTFCLGdCQUFnQixDQUFDOztrRkFKUixpQkFBaUI7c0RBQWpCLGlCQUFpQjtRQ1Q5Qiw4QkFDSTtRQUFBLDhCQUNJO1FBQUEsWUFDSjtRQUFBLGlCQUFNO1FBQ04sOEJBQ0k7UUFBQSxZQUNKO1FBQUEsaUJBQU07UUFDTiw4QkFDSTtRQUFBLFlBQ0o7UUFBQSxpQkFBTTtRQUNOLDhCQUNJO1FBQUEsWUFDSjtRQUFBLGlCQUFNO1FBQ1YsaUJBQU07UUFDTiw0RkFDbUI7O1FBYlgsZUFDSjtRQURJLHFFQUNKO1FBRUksZUFDSjtRQURJLHNFQUNKO1FBRUksZUFDSjtRQURJLCtEQUNKO1FBRUksZUFDSjtRQURJLDhNQUNKO1FBRWUsZUFBaUM7UUFBakMsc0RBQWlDOzt1RkRMdkMsaUJBQWlCO2NBTjdCLFNBQVM7ZUFBQztnQkFDUCw4Q0FBOEM7Z0JBQzlDLFFBQVEsRUFBRSxjQUFjO2dCQUN4QixXQUFXLEVBQUUseUJBQXlCO2FBQ3pDO3NDQUlZLGlCQUFpQjtrQkFBekIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSVByb2dyZXNzQ29udGFpbmVyIH0gZnJvbSAnLi4vbW9kZWxzL3Byb2dyZXNzLWNvbnRhaW5lci5tb2RlbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICAgIHNlbGVjdG9yOiAnYW1kLXByb2dyZXNzJyxcclxuICAgIHRlbXBsYXRlVXJsOiAncHJvZ3Jlc3MuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NDb21wb25lbnQge1xyXG5cclxuICAgIEBJbnB1dCgpIHByb2dyZXNzQ29udGFpbmVyOiBJUHJvZ3Jlc3NDb250YWluZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7IH1cclxufVxyXG4iLCI8ZGl2IHN0eWxlPVwiZm9udC1zaXplOiAxMXB4OyBtYXJnaW4tdG9wOiAxMHB4O1wiPlxyXG4gICAgPGRpdiBmeEZsZXg9XCIyNSVcIiBmeEZsZXgubHQtbWQ9XCI1MCVcIj5cclxuICAgICAgICB7e3Byb2dyZXNzQ29udGFpbmVyLmRpc3BsYXlCaXRyYXRlfX1cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBmeEZsZXg9XCIyNSVcIiBmeEhpZGUubHQtbWQgc3R5bGU9XCJ0ZXh0LWFsaWduOiBjZW50ZXJcIj5cclxuICAgICAgICB7e3Byb2dyZXNzQ29udGFpbmVyLmRpc3BsYXlUaW1lTGVmdH19XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgZnhGbGV4PVwiMjUlXCIgZnhIaWRlLmx0LW1kIHN0eWxlPVwidGV4dC1hbGlnbjogY2VudGVyXCI+XHJcbiAgICAgICAge3twcm9ncmVzc0NvbnRhaW5lci5wZXJjZW50fX0lXHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgZnhGbGV4PVwiMjUlXCIgZnhGbGV4Lmx0LW1kPVwiNTAlXCIgc3R5bGU9XCJ0ZXh0LWFsaWduOiByaWdodFwiPlxyXG4gICAgICAgIHt7cHJvZ3Jlc3NDb250YWluZXIubG9hZGVkU2l6ZUNvbnRhaW5lci5kaXNwbGF5U2l6ZX19IC8ge3twcm9ncmVzc0NvbnRhaW5lci50b3RhbFNpemVDb250YWluZXIuZGlzcGxheVNpemV9fSB7e3Byb2dyZXNzQ29udGFpbmVyLnRvdGFsU2l6ZUNvbnRhaW5lci5kaXNwbGF5VW5pdH19XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbjxtYXQtcHJvZ3Jlc3MtYmFyICpuZ0lmPVwicHJvZ3Jlc3NDb250YWluZXIudG90YWwgPiAwXCIgW3ZhbHVlXT1cInByb2dyZXNzQ29udGFpbmVyLnBlcmNlbnRcIj5cclxuPC9tYXQtcHJvZ3Jlc3MtYmFyPiJdfQ==