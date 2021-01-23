import { Component, Inject } from "@angular/core";
import { FormControl } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/material/form-field";
import * as i5 from "@angular/material/input";
import * as i6 from "@angular/material/button";
function EditDialogComponent_div_0_mat_error_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.errorMessage, " ");
} }
function EditDialogComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "mat-dialog-content");
    i0.ɵɵelementStart(2, "p");
    i0.ɵɵtext(3, "Enter a new path:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "form");
    i0.ɵɵelementStart(5, "mat-form-field");
    i0.ɵɵelementStart(6, "input", 1);
    i0.ɵɵlistener("input", function EditDialogComponent_div_0_Template_input_input_6_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); ctx_r3.itemPath = $event.target.value; return ctx_r3.errorMessage = undefined; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, EditDialogComponent_div_0_mat_error_7_Template, 2, 1, "mat-error", 0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "mat-dialog-actions");
    i0.ɵɵelementStart(9, "button", 2);
    i0.ɵɵlistener("click", function EditDialogComponent_div_0_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r4); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.editPath(); });
    i0.ɵɵtext(10, "Ok");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "button", 3);
    i0.ɵɵlistener("click", function EditDialogComponent_div_0_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r4); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.close(); });
    i0.ɵɵtext(12, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("value", ctx_r0.itemPath)("formControl", ctx_r0.editFormControl);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.errorMessage);
} }
function EditDialogComponent_div_1_mat_error_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r7.errorMessage, " ");
} }
function EditDialogComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "mat-dialog-content");
    i0.ɵɵelementStart(2, "p");
    i0.ɵɵtext(3, "Enter a new filename:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "form");
    i0.ɵɵelementStart(5, "mat-form-field");
    i0.ɵɵelementStart(6, "input", 1);
    i0.ɵɵlistener("input", function EditDialogComponent_div_1_Template_input_input_6_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(); ctx_r8.itemName = $event.target.value; return ctx_r8.errorMessage = undefined; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, EditDialogComponent_div_1_mat_error_7_Template, 2, 1, "mat-error", 0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "mat-dialog-actions");
    i0.ɵɵelementStart(9, "button", 2);
    i0.ɵɵlistener("click", function EditDialogComponent_div_1_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r9); const ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.editFilename(); });
    i0.ɵɵtext(10, "Ok");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "button", 3);
    i0.ɵɵlistener("click", function EditDialogComponent_div_1_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r9); const ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.close(); });
    i0.ɵɵtext(12, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("value", ctx_r1.itemName)("formControl", ctx_r1.editFormControl);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.errorMessage);
} }
export class EditDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.datatransferFacade = this.data.datatransferFacade;
        this.mode = this.data.mode;
        this.item = this.data.item;
        this.itemPath = this.item.path;
        this.itemName = this.item.name;
        this.editFormControl = new FormControl("", []);
    }
    ngAfterViewInit() { }
    close() {
        this.dialogRef.close();
    }
    onNoClick() {
        this.close();
    }
    editPath() {
        try {
            this.datatransferFacade.editPath(this.item, this.item.path, this.itemPath);
            this.close();
        }
        catch (error) {
            this.errorMessage = error;
        }
    }
    editFilename() {
        try {
            this.datatransferFacade.editFilename(this.item, this.itemName);
            this.close();
        }
        catch (error) {
            this.errorMessage = error;
        }
    }
}
EditDialogComponent.ɵfac = function EditDialogComponent_Factory(t) { return new (t || EditDialogComponent)(i0.ɵɵdirectiveInject(i1.MatDialogRef), i0.ɵɵdirectiveInject(MAT_DIALOG_DATA)); };
EditDialogComponent.ɵcmp = i0.ɵɵdefineComponent({ type: EditDialogComponent, selectors: [["amd-edit-dialog"]], decls: 2, vars: 2, consts: [[4, "ngIf"], ["matInput", "", "autocomplete", "off", "tabindex", "1", 3, "value", "formControl", "input"], ["mat-raised-button", "", "tabindex", "2", 3, "click"], ["mat-raised-button", "", "tabindex", "-1", 3, "click"]], template: function EditDialogComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, EditDialogComponent_div_0_Template, 13, 3, "div", 0);
        i0.ɵɵtemplate(1, EditDialogComponent_div_1_Template, 13, 3, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.mode === "edit-path");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.mode === "edit-filename");
    } }, directives: [i2.NgIf, i1.MatDialogContent, i3.ɵangular_packages_forms_forms_y, i3.NgControlStatusGroup, i3.NgForm, i4.MatFormField, i5.MatInput, i3.DefaultValueAccessor, i3.NgControlStatus, i3.FormControlDirective, i1.MatDialogActions, i6.MatButton, i4.MatError], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EditDialogComponent, [{
        type: Component,
        args: [{
                // tslint:disable-next-line:component-selector
                selector: "amd-edit-dialog",
                templateUrl: "edit-dialog.component.html",
            }]
    }], function () { return [{ type: i1.MatDialogRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1kaWFsb2cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYW1kLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvZWRpdC1kaWFsb2cuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYW1kLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvZWRpdC1kaWFsb2cuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7Ozs7Ozs7SUNNN0QsaUNBQ0k7SUFBQSxZQUNKO0lBQUEsaUJBQVk7OztJQURSLGVBQ0o7SUFESSxvREFDSjs7OztJQVZaLDJCQUNJO0lBQUEsMENBQ0k7SUFBQSx5QkFBRztJQUFBLGlDQUFpQjtJQUFBLGlCQUFJO0lBQ3hCLDRCQUNJO0lBQUEsc0NBQ0k7SUFBQSxnQ0FFSjtJQURRLGtPQUF3RCxTQUFTLElBQUU7SUFEdkUsaUJBRUo7SUFBQSxpQkFBaUI7SUFDakIsc0ZBRVk7SUFDaEIsaUJBQU87SUFDWCxpQkFBcUI7SUFDckIsMENBQ0k7SUFBQSxpQ0FBNEQ7SUFBbEMscUxBQW9CO0lBQWMsbUJBQUU7SUFBQSxpQkFBUztJQUN2RSxrQ0FBMEQ7SUFBaEMsbUxBQWlCO0lBQWUsdUJBQU07SUFBQSxpQkFBUztJQUM3RSxpQkFBcUI7SUFDekIsaUJBQU07OztJQVowRCxlQUFrQjtJQUFsQix1Q0FBa0IsdUNBQUE7SUFHMUQsZUFBa0I7SUFBbEIsMENBQWtCOzs7SUFrQjlCLGlDQUNJO0lBQUEsWUFDSjtJQUFBLGlCQUFZOzs7SUFEUixlQUNKO0lBREksb0RBQ0o7Ozs7SUFWWiwyQkFDSTtJQUFBLDBDQUNJO0lBQUEseUJBQUc7SUFBQSxxQ0FBcUI7SUFBQSxpQkFBSTtJQUM1Qiw0QkFDSTtJQUFBLHNDQUNJO0lBQUEsZ0NBRUo7SUFEUSxrT0FBd0QsU0FBUyxJQUFFO0lBRHZFLGlCQUVKO0lBQUEsaUJBQWlCO0lBQ2pCLHNGQUVZO0lBQ2hCLGlCQUFPO0lBQ1gsaUJBQXFCO0lBQ3JCLDBDQUNJO0lBQUEsaUNBQWdFO0lBQXRDLDJMQUF3QjtJQUFjLG1CQUFFO0lBQUEsaUJBQVM7SUFDM0Usa0NBQTBEO0lBQWhDLHFMQUFpQjtJQUFlLHVCQUFNO0lBQUEsaUJBQVM7SUFDN0UsaUJBQXFCO0lBQ3pCLGlCQUFNOzs7SUFaMEQsZUFBa0I7SUFBbEIsdUNBQWtCLHVDQUFBO0lBRzFELGVBQWtCO0lBQWxCLDBDQUFrQjs7QURmMUMsTUFBTSxPQUFPLG1CQUFtQjtJQVM5QixZQUNTLFNBQTRDLEVBQ25CLElBQVM7UUFEbEMsY0FBUyxHQUFULFNBQVMsQ0FBbUM7UUFDbkIsU0FBSSxHQUFKLElBQUksQ0FBSztRQUV6QyxJQUFJLENBQUMsa0JBQWtCLEdBQXVCLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUM7UUFDM0UsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUMzQixJQUFJLENBQUMsSUFBSSxHQUFzQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUM5QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQy9CLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFFL0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELGVBQWUsS0FBSSxDQUFDO0lBRXBCLEtBQUs7UUFDSCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxTQUFTO1FBQ1AsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJO1lBQ0YsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FDOUIsSUFBSSxDQUFDLElBQUksRUFDVCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFDZCxJQUFJLENBQUMsUUFBUSxDQUNkLENBQUM7WUFDRixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDZDtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7U0FDM0I7SUFDSCxDQUFDO0lBRUQsWUFBWTtRQUNWLElBQUk7WUFDRixJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQy9ELElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNkO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztTQUMzQjtJQUNILENBQUM7O3NGQXBEVSxtQkFBbUIsOERBV3BCLGVBQWU7d0RBWGQsbUJBQW1CO1FDWGhDLHFFQWlCTTtRQUNOLHFFQWlCTTs7UUFuQ0EsK0NBQTBCO1FBa0IxQixlQUE4QjtRQUE5QixtREFBOEI7O3VGRFB2QixtQkFBbUI7Y0FML0IsU0FBUztlQUFDO2dCQUNULDhDQUE4QztnQkFDOUMsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsV0FBVyxFQUFFLDRCQUE0QjthQUMxQzs7c0JBWUksTUFBTTt1QkFBQyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QsIEFmdGVyVmlld0luaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBNYXREaWFsb2dSZWYsIE1BVF9ESUFMT0dfREFUQSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2dcIjtcclxuaW1wb3J0IHsgRGF0YXRyYW5zZmVyRmFjYWRlIH0gZnJvbSBcIi4uL2ZhY2FkZXMvZGF0YXRyYW5zZmVyLmZhY2FkZVwiO1xyXG5pbXBvcnQgeyBJRGF0YXRyYW5zZmVySXRlbSB9IGZyb20gXCIuLi9tb2RlbHMvZGF0YXRyYW5zZmVyLWl0ZW0ubW9kZWxcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogXCJhbWQtZWRpdC1kaWFsb2dcIixcclxuICB0ZW1wbGF0ZVVybDogXCJlZGl0LWRpYWxvZy5jb21wb25lbnQuaHRtbFwiLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRWRpdERpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG4gIGRhdGF0cmFuc2ZlckZhY2FkZTogRGF0YXRyYW5zZmVyRmFjYWRlO1xyXG4gIG1vZGU6IHN0cmluZztcclxuICBpdGVtOiBJRGF0YXRyYW5zZmVySXRlbTtcclxuICBpdGVtUGF0aDogc3RyaW5nO1xyXG4gIGl0ZW1OYW1lOiBzdHJpbmc7XHJcbiAgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XHJcbiAgZWRpdEZvcm1Db250cm9sOiBGb3JtQ29udHJvbDtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8RWRpdERpYWxvZ0NvbXBvbmVudD4sXHJcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IGFueVxyXG4gICkge1xyXG4gICAgdGhpcy5kYXRhdHJhbnNmZXJGYWNhZGUgPSA8RGF0YXRyYW5zZmVyRmFjYWRlPnRoaXMuZGF0YS5kYXRhdHJhbnNmZXJGYWNhZGU7XHJcbiAgICB0aGlzLm1vZGUgPSB0aGlzLmRhdGEubW9kZTtcclxuICAgIHRoaXMuaXRlbSA9IDxJRGF0YXRyYW5zZmVySXRlbT50aGlzLmRhdGEuaXRlbTtcclxuICAgIHRoaXMuaXRlbVBhdGggPSB0aGlzLml0ZW0ucGF0aDtcclxuICAgIHRoaXMuaXRlbU5hbWUgPSB0aGlzLml0ZW0ubmFtZTtcclxuXHJcbiAgICB0aGlzLmVkaXRGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbXSk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7fVxyXG5cclxuICBjbG9zZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XHJcbiAgfVxyXG5cclxuICBvbk5vQ2xpY2soKTogdm9pZCB7XHJcbiAgICB0aGlzLmNsb3NlKCk7XHJcbiAgfVxyXG5cclxuICBlZGl0UGF0aCgpOiB2b2lkIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHRoaXMuZGF0YXRyYW5zZmVyRmFjYWRlLmVkaXRQYXRoKFxyXG4gICAgICAgIHRoaXMuaXRlbSxcclxuICAgICAgICB0aGlzLml0ZW0ucGF0aCxcclxuICAgICAgICB0aGlzLml0ZW1QYXRoXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gZXJyb3I7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBlZGl0RmlsZW5hbWUoKTogdm9pZCB7XHJcbiAgICB0cnkge1xyXG4gICAgICB0aGlzLmRhdGF0cmFuc2ZlckZhY2FkZS5lZGl0RmlsZW5hbWUodGhpcy5pdGVtLCB0aGlzLml0ZW1OYW1lKTtcclxuICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBlcnJvcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiPGRpdiAqbmdJZj1cIm1vZGUgPT09ICdlZGl0LXBhdGgnXCI+XHJcbiAgICA8bWF0LWRpYWxvZy1jb250ZW50PlxyXG4gICAgICAgIDxwPkVudGVyIGEgbmV3IHBhdGg6PC9wPlxyXG4gICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgYXV0b2NvbXBsZXRlPVwib2ZmXCIgdGFiaW5kZXg9XCIxXCIgW3ZhbHVlXT1cIml0ZW1QYXRoXCJcclxuICAgICAgICAgICAgICAgICAgICAoaW5wdXQpPVwiaXRlbVBhdGggPSAkZXZlbnQudGFyZ2V0LnZhbHVlOyBlcnJvck1lc3NhZ2UgPSB1bmRlZmluZWQ7XCIgW2Zvcm1Db250cm9sXT1cImVkaXRGb3JtQ29udHJvbFwiPlxyXG4gICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8bWF0LWVycm9yICpuZ0lmPVwiZXJyb3JNZXNzYWdlXCI+XHJcbiAgICAgICAgICAgICAgICB7e2Vycm9yTWVzc2FnZX19XHJcbiAgICAgICAgICAgIDwvbWF0LWVycm9yPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgIDwvbWF0LWRpYWxvZy1jb250ZW50PlxyXG4gICAgPG1hdC1kaWFsb2ctYWN0aW9ucz5cclxuICAgICAgICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIChjbGljayk9XCJlZGl0UGF0aCgpXCIgdGFiaW5kZXg9XCIyXCI+T2s8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIChjbGljayk9XCJjbG9zZSgpXCIgdGFiaW5kZXg9XCItMVwiPkNhbmNlbDwvYnV0dG9uPlxyXG4gICAgPC9tYXQtZGlhbG9nLWFjdGlvbnM+XHJcbjwvZGl2PlxyXG48ZGl2ICpuZ0lmPVwibW9kZSA9PT0gJ2VkaXQtZmlsZW5hbWUnXCI+XHJcbiAgICA8bWF0LWRpYWxvZy1jb250ZW50PlxyXG4gICAgICAgIDxwPkVudGVyIGEgbmV3IGZpbGVuYW1lOjwvcD5cclxuICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IGF1dG9jb21wbGV0ZT1cIm9mZlwiIHRhYmluZGV4PVwiMVwiIFt2YWx1ZV09XCJpdGVtTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgKGlucHV0KT1cIml0ZW1OYW1lID0gJGV2ZW50LnRhcmdldC52YWx1ZTsgZXJyb3JNZXNzYWdlID0gdW5kZWZpbmVkO1wiIFtmb3JtQ29udHJvbF09XCJlZGl0Rm9ybUNvbnRyb2xcIj5cclxuICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPG1hdC1lcnJvciAqbmdJZj1cImVycm9yTWVzc2FnZVwiPlxyXG4gICAgICAgICAgICAgICAge3tlcnJvck1lc3NhZ2V9fVxyXG4gICAgICAgICAgICA8L21hdC1lcnJvcj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICA8L21hdC1kaWFsb2ctY29udGVudD5cclxuICAgIDxtYXQtZGlhbG9nLWFjdGlvbnM+XHJcbiAgICAgICAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiAoY2xpY2spPVwiZWRpdEZpbGVuYW1lKClcIiB0YWJpbmRleD1cIjJcIj5PazwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gKGNsaWNrKT1cImNsb3NlKClcIiB0YWJpbmRleD1cIi0xXCI+Q2FuY2VsPC9idXR0b24+XHJcbiAgICA8L21hdC1kaWFsb2ctYWN0aW9ucz5cclxuPC9kaXY+Il19