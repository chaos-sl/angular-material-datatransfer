import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/icon";
export class BrowseDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.datatransferFacade = this.data.datatransferFacade;
    }
    ngAfterViewInit() {
        this.datatransferFacade.assignUploadBrowse(document.getElementById("amd-browse-files"));
        this.datatransferFacade.assignUploadBrowse(document.getElementById("amd-browse-folder"), true);
    }
    close() {
        this.dialogRef.close();
    }
    onNoClick() {
        this.close();
    }
}
BrowseDialogComponent.ɵfac = function BrowseDialogComponent_Factory(t) { return new (t || BrowseDialogComponent)(i0.ɵɵdirectiveInject(i1.MatDialogRef), i0.ɵɵdirectiveInject(MAT_DIALOG_DATA)); };
BrowseDialogComponent.ɵcmp = i0.ɵɵdefineComponent({ type: BrowseDialogComponent, selectors: [["amd-browse-dialog"]], decls: 11, vars: 0, consts: [["mat-raised-button", "", "id", "amd-browse-files", "tabindex", "1", 3, "click"], ["mat-raised-button", "", "id", "amd-browse-folder", "tabindex", "2", 3, "click"]], template: function BrowseDialogComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-dialog-content");
        i0.ɵɵtext(1, "Select specific files or a folder");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "mat-dialog-actions");
        i0.ɵɵelementStart(3, "button", 0);
        i0.ɵɵlistener("click", function BrowseDialogComponent_Template_button_click_3_listener() { return ctx.close(); });
        i0.ɵɵelementStart(4, "mat-icon");
        i0.ɵɵtext(5, "insert_drive_file");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(6, " Files");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "button", 1);
        i0.ɵɵlistener("click", function BrowseDialogComponent_Template_button_click_7_listener() { return ctx.close(); });
        i0.ɵɵelementStart(8, "mat-icon");
        i0.ɵɵtext(9, "folder_open");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(10, " Folder");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, directives: [i1.MatDialogContent, i1.MatDialogActions, i2.MatButton, i3.MatIcon], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BrowseDialogComponent, [{
        type: Component,
        args: [{
                // tslint:disable-next-line:component-selector
                selector: "amd-browse-dialog",
                templateUrl: "browse-dialog.component.html",
            }]
    }], function () { return [{ type: i1.MatDialogRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3NlLWRpYWxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hbWQtbGliL3NyYy9saWIvY29tcG9uZW50cy9icm93c2UtZGlhbG9nLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FtZC1saWIvc3JjL2xpYi9jb21wb25lbnRzL2Jyb3dzZS1kaWFsb2cuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7O0FBUXpFLE1BQU0sT0FBTyxxQkFBcUI7SUFHaEMsWUFDUyxTQUE4QyxFQUNyQixJQUFTO1FBRGxDLGNBQVMsR0FBVCxTQUFTLENBQXFDO1FBQ3JCLFNBQUksR0FBSixJQUFJLENBQUs7UUFFekMsSUFBSSxDQUFDLGtCQUFrQixHQUF1QixJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDO0lBQzdFLENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGtCQUFrQixDQUN4QyxRQUFRLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLENBQzVDLENBQUM7UUFDRixJQUFJLENBQUMsa0JBQWtCLENBQUMsa0JBQWtCLENBQ3hDLFFBQVEsQ0FBQyxjQUFjLENBQUMsbUJBQW1CLENBQUMsRUFDNUMsSUFBSSxDQUNMLENBQUM7SUFDSixDQUFDO0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELFNBQVM7UUFDUCxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDZixDQUFDOzswRkExQlUscUJBQXFCLDhEQUt0QixlQUFlOzBEQUxkLHFCQUFxQjtRQ1RsQywwQ0FBb0I7UUFBQSxpREFBaUM7UUFBQSxpQkFBcUI7UUFDMUUsMENBQ0k7UUFBQSxpQ0FDSTtRQUQ0QyxrR0FBUyxXQUFPLElBQUM7UUFDN0QsZ0NBQVU7UUFBQSxpQ0FBaUI7UUFBQSxpQkFBVztRQUFDLHNCQUFLO1FBQUEsaUJBQVM7UUFDekQsaUNBQ0k7UUFENkMsa0dBQVMsV0FBTyxJQUFDO1FBQzlELGdDQUFVO1FBQUEsMkJBQVc7UUFBQSxpQkFBVztRQUFDLHdCQUFNO1FBQUEsaUJBQVM7UUFDeEQsaUJBQXFCOzt1RkRHUixxQkFBcUI7Y0FMakMsU0FBUztlQUFDO2dCQUNULDhDQUE4QztnQkFDOUMsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsV0FBVyxFQUFFLDhCQUE4QjthQUM1Qzs7c0JBTUksTUFBTTt1QkFBQyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QsIEFmdGVyVmlld0luaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBNYXREaWFsb2dSZWYsIE1BVF9ESUFMT0dfREFUQSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2dcIjtcclxuaW1wb3J0IHsgRGF0YXRyYW5zZmVyRmFjYWRlIH0gZnJvbSBcIi4uL2ZhY2FkZXMvZGF0YXRyYW5zZmVyLmZhY2FkZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiBcImFtZC1icm93c2UtZGlhbG9nXCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwiYnJvd3NlLWRpYWxvZy5jb21wb25lbnQuaHRtbFwiLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnJvd3NlRGlhbG9nQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgZGF0YXRyYW5zZmVyRmFjYWRlOiBEYXRhdHJhbnNmZXJGYWNhZGU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPEJyb3dzZURpYWxvZ0NvbXBvbmVudD4sXHJcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IGFueVxyXG4gICkge1xyXG4gICAgdGhpcy5kYXRhdHJhbnNmZXJGYWNhZGUgPSA8RGF0YXRyYW5zZmVyRmFjYWRlPnRoaXMuZGF0YS5kYXRhdHJhbnNmZXJGYWNhZGU7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLmRhdGF0cmFuc2ZlckZhY2FkZS5hc3NpZ25VcGxvYWRCcm93c2UoXHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW1kLWJyb3dzZS1maWxlc1wiKVxyXG4gICAgKTtcclxuICAgIHRoaXMuZGF0YXRyYW5zZmVyRmFjYWRlLmFzc2lnblVwbG9hZEJyb3dzZShcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbWQtYnJvd3NlLWZvbGRlclwiKSxcclxuICAgICAgdHJ1ZVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNsb3NlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcclxuICB9XHJcblxyXG4gIG9uTm9DbGljaygpOiB2b2lkIHtcclxuICAgIHRoaXMuY2xvc2UoKTtcclxuICB9XHJcbn1cclxuIiwiPG1hdC1kaWFsb2ctY29udGVudD5TZWxlY3Qgc3BlY2lmaWMgZmlsZXMgb3IgYSBmb2xkZXI8L21hdC1kaWFsb2ctY29udGVudD5cclxuPG1hdC1kaWFsb2ctYWN0aW9ucz5cclxuICAgIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gaWQ9XCJhbWQtYnJvd3NlLWZpbGVzXCIgKGNsaWNrKT1cImNsb3NlKClcIiB0YWJpbmRleD1cIjFcIj5cclxuICAgICAgICA8bWF0LWljb24+aW5zZXJ0X2RyaXZlX2ZpbGU8L21hdC1pY29uPiBGaWxlczwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBpZD1cImFtZC1icm93c2UtZm9sZGVyXCIgKGNsaWNrKT1cImNsb3NlKClcIiB0YWJpbmRleD1cIjJcIj5cclxuICAgICAgICA8bWF0LWljb24+Zm9sZGVyX29wZW48L21hdC1pY29uPiBGb2xkZXI8L2J1dHRvbj5cclxuPC9tYXQtZGlhbG9nLWFjdGlvbnM+Il19