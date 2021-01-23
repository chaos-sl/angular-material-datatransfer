import { NgModule, ApplicationRef } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatMenuModule } from "@angular/material/menu";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSelectModule } from "@angular/material/select";
import { MatTooltipModule } from "@angular/material/tooltip";
import { FlexLayoutModule } from "@angular/flex-layout";
import { AngularMaterialDatatransferComponent } from "./angular-material-datatransfer.component";
import { MainComponent } from "./components/main.component";
import { BrowseDialogComponent } from "./components/browse-dialog.component";
import { DropzoneComponent } from "./components/dropzone.component";
import { EditDialogComponent } from "./components/edit-dialog.component";
import { PaginationComponent } from "./components/pagination.component";
import { ProgressComponent } from "./components/progress.component";
import { ConfigService } from "./services/config.service";
import { LoggerService } from "./services/logger.service";
import { PaginationService } from "./services/pagination.service";
import { ExportService } from "./services/export.service";
import { DemoService } from "./services/demo.service";
import { CryptoService } from "./services/crypto.service";
import { DatatransferStore } from "./stores/datatransfer.store";
import { DatatransferFacadeFactory } from "./factories/datatransfer-facade.factory";
import { CommonUtil } from "./utils/common.util";
import { DateUtil } from "./utils/date.util";
import { DecimalByteUnitUtil } from "./utils/decimal-byte-unit.util";
import { GuidUtil } from "./utils/guid.util";
import { CsvExporter } from "./io/exporters/csv.exporter";
import { JsonExporter } from "./io/exporters/json.exporter";
import { ResumableJsUploader } from "./io/uploaders/resumablejs.uploader";
import { BlobDownloader } from "./io/downloaders/blob.downloader";
import { HostDirective } from "./directives/host.directive";
import * as i0 from "@angular/core";
export class AngularMaterialDatatransferModule {
    constructor(appRef) {
        this.appRef = appRef;
    }
}
AngularMaterialDatatransferModule.ɵmod = i0.ɵɵdefineNgModule({ type: AngularMaterialDatatransferModule });
AngularMaterialDatatransferModule.ɵinj = i0.ɵɵdefineInjector({ factory: function AngularMaterialDatatransferModule_Factory(t) { return new (t || AngularMaterialDatatransferModule)(i0.ɵɵinject(i0.ApplicationRef)); }, providers: [
        ConfigService,
        LoggerService,
        PaginationService,
        ExportService,
        DemoService,
        CryptoService,
        DatatransferStore,
        DatatransferFacadeFactory,
        CommonUtil,
        DateUtil,
        DecimalByteUnitUtil,
        GuidUtil,
        CsvExporter,
        JsonExporter,
        ResumableJsUploader,
        BlobDownloader,
    ], imports: [[
            BrowserModule,
            BrowserAnimationsModule,
            FormsModule,
            ReactiveFormsModule,
            MatButtonModule,
            MatCheckboxModule,
            MatDialogModule,
            MatFormFieldModule,
            MatIconModule,
            MatInputModule,
            MatMenuModule,
            MatProgressBarModule,
            MatProgressSpinnerModule,
            MatSelectModule,
            MatTooltipModule,
            FlexLayoutModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AngularMaterialDatatransferModule, { declarations: [AngularMaterialDatatransferComponent,
        MainComponent,
        BrowseDialogComponent,
        DropzoneComponent,
        EditDialogComponent,
        PaginationComponent,
        ProgressComponent,
        HostDirective], imports: [BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatDialogModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatSelectModule,
        MatTooltipModule,
        FlexLayoutModule], exports: [AngularMaterialDatatransferComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AngularMaterialDatatransferModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    AngularMaterialDatatransferComponent,
                    MainComponent,
                    BrowseDialogComponent,
                    DropzoneComponent,
                    EditDialogComponent,
                    PaginationComponent,
                    ProgressComponent,
                    HostDirective,
                ],
                imports: [
                    BrowserModule,
                    BrowserAnimationsModule,
                    FormsModule,
                    ReactiveFormsModule,
                    MatButtonModule,
                    MatCheckboxModule,
                    MatDialogModule,
                    MatFormFieldModule,
                    MatIconModule,
                    MatInputModule,
                    MatMenuModule,
                    MatProgressBarModule,
                    MatProgressSpinnerModule,
                    MatSelectModule,
                    MatTooltipModule,
                    FlexLayoutModule,
                ],
                exports: [AngularMaterialDatatransferComponent],
                entryComponents: [MainComponent, BrowseDialogComponent, EditDialogComponent],
                providers: [
                    ConfigService,
                    LoggerService,
                    PaginationService,
                    ExportService,
                    DemoService,
                    CryptoService,
                    DatatransferStore,
                    DatatransferFacadeFactory,
                    CommonUtil,
                    DateUtil,
                    DecimalByteUnitUtil,
                    GuidUtil,
                    CsvExporter,
                    JsonExporter,
                    ResumableJsUploader,
                    BlobDownloader,
                ],
            }]
    }], function () { return [{ type: i0.ApplicationRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1tYXRlcmlhbC1kYXRhdHJhbnNmZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvYW1kLWxpYi9zcmMvbGliL2FuZ3VsYXItbWF0ZXJpYWwtZGF0YXRyYW5zZmVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDL0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDdEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDOUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRTdELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFN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LG9CQUFvQjtRQUNwQix3QkFBd0I7UUFDeEIsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixnQkFBZ0IsYUFFUixvQ0FBb0M7dUZBcUJuQyxpQ0FBaUM7Y0FsRDdDLFFBQVE7ZUFBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osb0NBQW9DO29CQUNwQyxhQUFhO29CQUNiLHFCQUFxQjtvQkFDckIsaUJBQWlCO29CQUNqQixtQkFBbUI7b0JBQ25CLG1CQUFtQjtvQkFDbkIsaUJBQWlCO29CQUNqQixhQUFhO2lCQUNkO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxhQUFhO29CQUNiLHVCQUF1QjtvQkFDdkIsV0FBVztvQkFDWCxtQkFBbUI7b0JBQ25CLGVBQWU7b0JBQ2YsaUJBQWlCO29CQUNqQixlQUFlO29CQUNmLGtCQUFrQjtvQkFDbEIsYUFBYTtvQkFDYixjQUFjO29CQUNkLGFBQWE7b0JBQ2Isb0JBQW9CO29CQUNwQix3QkFBd0I7b0JBQ3hCLGVBQWU7b0JBQ2YsZ0JBQWdCO29CQUNoQixnQkFBZ0I7aUJBQ2pCO2dCQUNELE9BQU8sRUFBRSxDQUFDLG9DQUFvQyxDQUFDO2dCQUMvQyxlQUFlLEVBQUUsQ0FBQyxhQUFhLEVBQUUscUJBQXFCLEVBQUUsbUJBQW1CLENBQUM7Z0JBQzVFLFNBQVMsRUFBRTtvQkFDVCxhQUFhO29CQUNiLGFBQWE7b0JBQ2IsaUJBQWlCO29CQUNqQixhQUFhO29CQUNiLFdBQVc7b0JBQ1gsYUFBYTtvQkFDYixpQkFBaUI7b0JBQ2pCLHlCQUF5QjtvQkFDekIsVUFBVTtvQkFDVixRQUFRO29CQUNSLG1CQUFtQjtvQkFDbkIsUUFBUTtvQkFDUixXQUFXO29CQUNYLFlBQVk7b0JBQ1osbUJBQW1CO29CQUNuQixjQUFjO2lCQUNmO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgQXBwbGljYXRpb25SZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIjtcclxuaW1wb3J0IHsgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zXCI7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9idXR0b25cIjtcclxuaW1wb3J0IHsgTWF0Q2hlY2tib3hNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvY2hlY2tib3hcIjtcclxuaW1wb3J0IHsgTWF0RGlhbG9nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2RpYWxvZ1wiO1xyXG5pbXBvcnQgeyBNYXRGb3JtRmllbGRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZFwiO1xyXG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2ljb25cIjtcclxuaW1wb3J0IHsgTWF0SW5wdXRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXRcIjtcclxuaW1wb3J0IHsgTWF0TWVudU1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9tZW51XCI7XHJcbmltcG9ydCB7IE1hdFByb2dyZXNzQmFyTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL3Byb2dyZXNzLWJhclwiO1xyXG5pbXBvcnQgeyBNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvcHJvZ3Jlc3Mtc3Bpbm5lclwiO1xyXG5pbXBvcnQgeyBNYXRTZWxlY3RNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvc2VsZWN0XCI7XHJcbmltcG9ydCB7IE1hdFRvb2x0aXBNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbHRpcFwiO1xyXG5cclxuaW1wb3J0IHsgRmxleExheW91dE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mbGV4LWxheW91dFwiO1xyXG5cclxuaW1wb3J0IHsgQW5ndWxhck1hdGVyaWFsRGF0YXRyYW5zZmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vYW5ndWxhci1tYXRlcmlhbC1kYXRhdHJhbnNmZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IE1haW5Db21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL21haW4uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEJyb3dzZURpYWxvZ0NvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvYnJvd3NlLWRpYWxvZy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRHJvcHpvbmVDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2Ryb3B6b25lLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBFZGl0RGlhbG9nQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9lZGl0LWRpYWxvZy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUGFnaW5hdGlvbkNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvcGFnaW5hdGlvbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUHJvZ3Jlc3NDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL3Byb2dyZXNzLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvY29uZmlnLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgTG9nZ2VyU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL2xvZ2dlci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFBhZ2luYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvcGFnaW5hdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEV4cG9ydFNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9leHBvcnQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBEZW1vU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL2RlbW8uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBDcnlwdG9TZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvY3J5cHRvLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRGF0YXRyYW5zZmVyU3RvcmUgfSBmcm9tIFwiLi9zdG9yZXMvZGF0YXRyYW5zZmVyLnN0b3JlXCI7XHJcbmltcG9ydCB7IERhdGF0cmFuc2ZlckZhY2FkZUZhY3RvcnkgfSBmcm9tIFwiLi9mYWN0b3JpZXMvZGF0YXRyYW5zZmVyLWZhY2FkZS5mYWN0b3J5XCI7XHJcbmltcG9ydCB7IENvbW1vblV0aWwgfSBmcm9tIFwiLi91dGlscy9jb21tb24udXRpbFwiO1xyXG5pbXBvcnQgeyBEYXRlVXRpbCB9IGZyb20gXCIuL3V0aWxzL2RhdGUudXRpbFwiO1xyXG5pbXBvcnQgeyBEZWNpbWFsQnl0ZVVuaXRVdGlsIH0gZnJvbSBcIi4vdXRpbHMvZGVjaW1hbC1ieXRlLXVuaXQudXRpbFwiO1xyXG5pbXBvcnQgeyBHdWlkVXRpbCB9IGZyb20gXCIuL3V0aWxzL2d1aWQudXRpbFwiO1xyXG5pbXBvcnQgeyBDc3ZFeHBvcnRlciB9IGZyb20gXCIuL2lvL2V4cG9ydGVycy9jc3YuZXhwb3J0ZXJcIjtcclxuaW1wb3J0IHsgSnNvbkV4cG9ydGVyIH0gZnJvbSBcIi4vaW8vZXhwb3J0ZXJzL2pzb24uZXhwb3J0ZXJcIjtcclxuaW1wb3J0IHsgUmVzdW1hYmxlSnNVcGxvYWRlciB9IGZyb20gXCIuL2lvL3VwbG9hZGVycy9yZXN1bWFibGVqcy51cGxvYWRlclwiO1xyXG5pbXBvcnQgeyBCbG9iRG93bmxvYWRlciB9IGZyb20gXCIuL2lvL2Rvd25sb2FkZXJzL2Jsb2IuZG93bmxvYWRlclwiO1xyXG5pbXBvcnQgeyBIb3N0RGlyZWN0aXZlIH0gZnJvbSBcIi4vZGlyZWN0aXZlcy9ob3N0LmRpcmVjdGl2ZVwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIEFuZ3VsYXJNYXRlcmlhbERhdGF0cmFuc2ZlckNvbXBvbmVudCxcclxuICAgIE1haW5Db21wb25lbnQsXHJcbiAgICBCcm93c2VEaWFsb2dDb21wb25lbnQsXHJcbiAgICBEcm9wem9uZUNvbXBvbmVudCxcclxuICAgIEVkaXREaWFsb2dDb21wb25lbnQsXHJcbiAgICBQYWdpbmF0aW9uQ29tcG9uZW50LFxyXG4gICAgUHJvZ3Jlc3NDb21wb25lbnQsXHJcbiAgICBIb3N0RGlyZWN0aXZlLFxyXG4gIF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQnJvd3Nlck1vZHVsZSxcclxuICAgIEJyb3dzZXJBbmltYXRpb25zTW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxyXG4gICAgTWF0Q2hlY2tib3hNb2R1bGUsXHJcbiAgICBNYXREaWFsb2dNb2R1bGUsXHJcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXHJcbiAgICBNYXRJY29uTW9kdWxlLFxyXG4gICAgTWF0SW5wdXRNb2R1bGUsXHJcbiAgICBNYXRNZW51TW9kdWxlLFxyXG4gICAgTWF0UHJvZ3Jlc3NCYXJNb2R1bGUsXHJcbiAgICBNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGUsXHJcbiAgICBNYXRTZWxlY3RNb2R1bGUsXHJcbiAgICBNYXRUb29sdGlwTW9kdWxlLFxyXG4gICAgRmxleExheW91dE1vZHVsZSxcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtBbmd1bGFyTWF0ZXJpYWxEYXRhdHJhbnNmZXJDb21wb25lbnRdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW01haW5Db21wb25lbnQsIEJyb3dzZURpYWxvZ0NvbXBvbmVudCwgRWRpdERpYWxvZ0NvbXBvbmVudF0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBDb25maWdTZXJ2aWNlLFxyXG4gICAgTG9nZ2VyU2VydmljZSxcclxuICAgIFBhZ2luYXRpb25TZXJ2aWNlLFxyXG4gICAgRXhwb3J0U2VydmljZSxcclxuICAgIERlbW9TZXJ2aWNlLFxyXG4gICAgQ3J5cHRvU2VydmljZSxcclxuICAgIERhdGF0cmFuc2ZlclN0b3JlLFxyXG4gICAgRGF0YXRyYW5zZmVyRmFjYWRlRmFjdG9yeSxcclxuICAgIENvbW1vblV0aWwsXHJcbiAgICBEYXRlVXRpbCxcclxuICAgIERlY2ltYWxCeXRlVW5pdFV0aWwsXHJcbiAgICBHdWlkVXRpbCxcclxuICAgIENzdkV4cG9ydGVyLFxyXG4gICAgSnNvbkV4cG9ydGVyLFxyXG4gICAgUmVzdW1hYmxlSnNVcGxvYWRlcixcclxuICAgIEJsb2JEb3dubG9hZGVyLFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBbmd1bGFyTWF0ZXJpYWxEYXRhdHJhbnNmZXJNb2R1bGUge1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBhcHBSZWY6IEFwcGxpY2F0aW9uUmVmKSB7fVxyXG59XHJcbiJdfQ==