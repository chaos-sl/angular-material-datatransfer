import { ɵɵdirectiveInject, ViewContainerRef, ɵɵdefineDirective, ɵsetClassMetadata, Directive, ɵɵdefineInjectable, Injectable, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵlistener, Component, Inject, ɵɵnextContext, ɵɵadvance, ɵɵtextInterpolate1, ɵɵgetCurrentView, ɵɵrestoreView, ɵɵtemplate, ɵɵproperty, ReflectiveInjector, ɵɵinject, ɵɵtextInterpolate3, Input, ɵɵelement, ɵɵreference, ɵɵtextInterpolate, ɵɵpropertyInterpolate1, ɵɵtemplateRefExtractor, ɵɵpureFunction1, ɵɵpropertyInterpolate, NgZone, ComponentFactoryResolver, ɵɵviewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ViewChild, ɵɵdefineNgModule, ɵɵdefineInjector, ApplicationRef, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogContent, MatDialogActions, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { FormControl, ɵangular_packages_forms_forms_y, NgControlStatusGroup, NgForm, DefaultValueAccessor, NgControlStatus, FormControlDirective, NgModel, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIf, NgForOf, NgClass } from '@angular/common';
import { MatFormField, MatError, MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { DefaultFlexDirective, DefaultLayoutDirective } from '@angular/flex-layout/flex';
import { MatMenu, MatMenuItem, MatMenuTrigger, MatMenuModule } from '@angular/material/menu';
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';
import { DefaultShowHideDirective, DefaultClassDirective } from '@angular/flex-layout/extended';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { MatOption } from '@angular/material/core';
import { MatTooltip, MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressBar, MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinner, MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import * as Resumable from 'resumablejs';
import { createHash } from 'crypto-browserify';
import { saveAs } from 'file-saver';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

var CustomEventType;
(function (CustomEventType) {
    CustomEventType[CustomEventType["UNKNOWN"] = 0] = "UNKNOWN";
    // This event can be used to bootstrap the app module. An IAppConfig can be passed as detail payload.
    CustomEventType[CustomEventType["CREATE"] = 1] = "CREATE";
    // This event can be used to trigger an item download. The filename, url and size can be passed as detail payload.
    CustomEventType[CustomEventType["DOWNLOAD_ITEM"] = 2] = "DOWNLOAD_ITEM";
    // This event can be used to update the app configuration. An IAppConfig can be passed as detail payload.
    CustomEventType[CustomEventType["UPDATE_CONFIG"] = 3] = "UPDATE_CONFIG";
    // Indicates that the app has been initialized.
    CustomEventType[CustomEventType["INIT"] = 4] = "INIT";
    // Indicates that the overall upload has been completed.
    CustomEventType[CustomEventType["UPLOAD_COMPLETED"] = 5] = "UPLOAD_COMPLETED";
    // Indicates that the overall download has been completed.
    CustomEventType[CustomEventType["DOWNLOAD_COMPLETED"] = 6] = "DOWNLOAD_COMPLETED";
    // Indicates that an item has been added. It will be passed a IDatatransferItem as detail payload.
    CustomEventType[CustomEventType["ITEM_ADDED"] = 7] = "ITEM_ADDED";
    // Indicates that an item has been removed. It will be passed a IDatatransferItem as detail payload.
    CustomEventType[CustomEventType["ITEM_REMOVED"] = 8] = "ITEM_REMOVED";
    // Indicates that an item has been completed.
    CustomEventType[CustomEventType["ITEM_COMPLETED"] = 9] = "ITEM_COMPLETED";
    // Indicates that all items have been cleared.
    CustomEventType[CustomEventType["ITEMS_CLEARED"] = 10] = "ITEMS_CLEARED";
    // Indicates that an item have been clicked.
    CustomEventType[CustomEventType["ITEM_CLICKED"] = 11] = "ITEM_CLICKED";
})(CustomEventType || (CustomEventType = {}));
// tslint:disable-next-line: no-namespace
var CustomEventTypeExtensions;
(function (CustomEventTypeExtensions) {
    const CUSTOM_EVENT_TYPE_NS = 'github:niklr/angular-material-datatransfer.';
    const CUSTOM_EVENT_TYPE_UNKNOWN = CUSTOM_EVENT_TYPE_NS + 'unknown';
    const CUSTOM_EVENT_TYPE_CREATE = CUSTOM_EVENT_TYPE_NS + 'create';
    const CUSTOM_EVENT_TYPE_DOWNLOAD_ITEM = CUSTOM_EVENT_TYPE_NS + 'download-item';
    const CUSTOM_EVENT_TYPE_UPDATE_CONFIG = CUSTOM_EVENT_TYPE_NS + 'update-config';
    const CUSTOM_EVENT_TYPE_INIT = CUSTOM_EVENT_TYPE_NS + 'init';
    const CUSTOM_EVENT_TYPE_UPLOAD_COMPLETED = CUSTOM_EVENT_TYPE_NS + 'upload-completed';
    const CUSTOM_EVENT_TYPE_DOWNLOAD_COMPLETED = CUSTOM_EVENT_TYPE_NS + 'download-completed';
    const CUSTOM_EVENT_TYPE_ITEM_ADDED = CUSTOM_EVENT_TYPE_NS + 'item-added';
    const CUSTOM_EVENT_TYPE_ITEM_REMOVED = CUSTOM_EVENT_TYPE_NS + 'item-removed';
    const CUSTOM_EVENT_TYPE_ITEM_COMPLETED = CUSTOM_EVENT_TYPE_NS + 'item-completed';
    const CUSTOM_EVENT_TYPE_ITEMS_CLEARED = CUSTOM_EVENT_TYPE_NS + 'items-cleared';
    const CUSTOM_EVENT_TYPE_ITEM_CLICKED = CUSTOM_EVENT_TYPE_NS + 'item-clicked';
    function toString(type) {
        switch (type) {
            case CustomEventType.CREATE:
                return CUSTOM_EVENT_TYPE_CREATE;
            case CustomEventType.DOWNLOAD_ITEM:
                return CUSTOM_EVENT_TYPE_DOWNLOAD_ITEM;
            case CustomEventType.UPDATE_CONFIG:
                return CUSTOM_EVENT_TYPE_UPDATE_CONFIG;
            case CustomEventType.INIT:
                return CUSTOM_EVENT_TYPE_INIT;
            case CustomEventType.UPLOAD_COMPLETED:
                return CUSTOM_EVENT_TYPE_UPLOAD_COMPLETED;
            case CustomEventType.DOWNLOAD_COMPLETED:
                return CUSTOM_EVENT_TYPE_DOWNLOAD_COMPLETED;
            case CustomEventType.ITEM_ADDED:
                return CUSTOM_EVENT_TYPE_ITEM_ADDED;
            case CustomEventType.ITEM_REMOVED:
                return CUSTOM_EVENT_TYPE_ITEM_REMOVED;
            case CustomEventType.ITEM_COMPLETED:
                return CUSTOM_EVENT_TYPE_ITEM_COMPLETED;
            case CustomEventType.ITEMS_CLEARED:
                return CUSTOM_EVENT_TYPE_ITEMS_CLEARED;
            case CustomEventType.ITEM_CLICKED:
                return CUSTOM_EVENT_TYPE_ITEM_CLICKED;
            default:
                return CUSTOM_EVENT_TYPE_UNKNOWN;
        }
    }
    CustomEventTypeExtensions.toString = toString;
    function toEnum(type) {
        switch (type) {
            case CUSTOM_EVENT_TYPE_CREATE:
                return CustomEventType.CREATE;
            case CUSTOM_EVENT_TYPE_DOWNLOAD_ITEM:
                return CustomEventType.DOWNLOAD_ITEM;
            case CUSTOM_EVENT_TYPE_UPDATE_CONFIG:
                return CustomEventType.UPDATE_CONFIG;
            case CUSTOM_EVENT_TYPE_INIT:
                return CustomEventType.INIT;
            case CUSTOM_EVENT_TYPE_UPLOAD_COMPLETED:
                return CustomEventType.UPLOAD_COMPLETED;
            case CUSTOM_EVENT_TYPE_DOWNLOAD_COMPLETED:
                return CustomEventType.DOWNLOAD_COMPLETED;
            case CUSTOM_EVENT_TYPE_ITEM_ADDED:
                return CustomEventType.ITEM_ADDED;
            case CUSTOM_EVENT_TYPE_ITEM_REMOVED:
                return CustomEventType.ITEM_REMOVED;
            case CUSTOM_EVENT_TYPE_ITEM_COMPLETED:
                return CustomEventType.ITEM_COMPLETED;
            case CUSTOM_EVENT_TYPE_ITEMS_CLEARED:
                return CustomEventType.ITEMS_CLEARED;
            case CUSTOM_EVENT_TYPE_ITEM_CLICKED:
                return CustomEventType.ITEM_CLICKED;
            default:
                return CustomEventType.UNKNOWN;
        }
    }
    CustomEventTypeExtensions.toEnum = toEnum;
})(CustomEventTypeExtensions || (CustomEventTypeExtensions = {}));

class HostDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
}
HostDirective.ɵfac = function HostDirective_Factory(t) { return new (t || HostDirective)(ɵɵdirectiveInject(ViewContainerRef)); };
HostDirective.ɵdir = ɵɵdefineDirective({ type: HostDirective, selectors: [["", "amd-host", ""]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(HostDirective, [{
        type: Directive,
        args: [{
                // tslint:disable-next-line: directive-selector
                selector: '[amd-host]',
            }]
    }], function () { return [{ type: ViewContainerRef }]; }, null); })();

class CoreAppConfig {
    constructor() {
        this.showUploadDropzone = true;
        this.uploadBrowseElementId = undefined;
        this.uploadDropElementId = undefined;
        this.paginationRppOptions = [5, 10, 25];
        this.simultaneousDownloads = 2;
        this.downloadMethod = "GET";
        this.downloadHeaders = {};
        this.downloadWithCredentials = false;
        this.downloadXhrTimeout = 0;
        this.preprocessHashEnabled = false;
        this.preprocessHashChecked = true;
        this.preprocessHashTarget = "https://httpbin.org";
        this.preprocessHashMethod = "GET";
        this.preprocessHashParameterName = "hash";
        this.preprocessHashFileNameParameterName = "filename";
        this.preprocessHashFunctionName = "sha1";
        this.preprocessHashEncodingName = "hex";
        this.preprocessHashInputEncodingName = "latin1";
        this.preprocessHashTooltipContent = "The preprocess option checks if the file is already on the system before uploading.";
        this.saveDownloadFileAs = null;
        this.parseMessageCallback = function (message) {
            return message;
        };
        this.getTarget = function (request, params) {
            let target;
            if (request === "preprocessHash" && this.preprocessHashChecked) {
                target = this.preprocessHashTarget;
            }
            if (typeof target === "function") {
                return target(params);
            }
            if (target) {
                const separator = target.indexOf("?") < 0 ? "?" : "&";
                const joinedParams = params.join("&");
                return target + separator + joinedParams;
            }
            else {
                return;
            }
        };
    }
}
class ResumableJsAppConfig {
    constructor() {
        this.chunkSize = 1 * 1024 * 1024;
        this.forceChunkSize = false;
        this.simultaneousUploads = 3;
        this.fileParameterName = "file";
        this.chunkNumberParameterName = "resumableChunkNumber";
        this.chunkSizeParameterName = "resumableChunkSize";
        this.currentChunkSizeParameterName = "resumableCurrentChunkSize";
        this.totalSizeParameterName = "resumableTotalSize";
        this.typeParameterName = "resumableType";
        this.identifierParameterName = "resumableIdentifier";
        this.fileNameParameterName = "resumableFilename";
        this.relativePathParameterName = "resumableRelativePath";
        this.totalChunksParameterName = "resumableTotalChunks";
        this.throttleProgressCallbacks = 0.5;
        this.query = {};
        this.headers = {};
        this.preprocess = null;
        this.preprocessFile = null;
        this.method = "multipart";
        this.uploadMethod = "POST";
        this.testMethod = "GET";
        this.target = "https://httpbin.org";
        this.testTarget = null;
        this.parameterNamespace = "";
        this.testChunks = true;
        this.generateUniqueIdentifier = null;
        this.getTarget = null;
        this.maxChunkRetries = 100;
        this.chunkRetryInterval = undefined;
        this.permanentErrors = [400, 404, 405, 415, 501];
        this.maxFiles = undefined;
        this.withCredentials = false;
        this.xhrTimeout = 0;
        this.clearInput = true;
        this.chunkFormat = "blob";
        this.minFileSize = 1;
        this.maxFileSize = undefined;
        this.fileType = [];
        this.maxFilesErrorCallback = function (files, errorCount) {
            alert("Please upload no more than " +
                this.maxFiles +
                " file" +
                (this.maxFiles === 1 ? "" : "s") +
                " at a time.");
        };
        this.minFileSizeErrorCallback = function (file, errorCount) {
            alert(file.fileName ||
                file.name +
                    " is too small; please upload files larger than " +
                    this.minFileSize +
                    ".");
        };
        this.maxFileSizeErrorCallback = function (file, errorCount) {
            alert(file.fileName ||
                file.name +
                    " is too large; please upload files less than " +
                    this.maxFileSize +
                    ".");
        };
        this.fileTypeErrorCallback = function (file, errorCount) {
            alert(file.fileName ||
                file.name +
                    " has type not allowed; please upload files of type " +
                    this.fileType +
                    ".");
        };
    }
}
class AppConfig {
    constructor() {
        this.production = true;
        this.core = new CoreAppConfig();
        this.resumablejs = new ResumableJsAppConfig();
    }
}

class ConfigService {
    constructor() {
    }
    load(config) {
        if (!!config) {
            ConfigService.settings.production = config.production;
            if (!!config.core) {
                Object.keys(config.core).forEach(propertyName => {
                    if (typeof config.core[propertyName] !== 'undefined') {
                        ConfigService.settings.core[propertyName] = config.core[propertyName];
                    }
                });
            }
            if (!!config.resumablejs) {
                Object.keys(config.resumablejs).forEach(propertyName => {
                    if (typeof config.resumablejs[propertyName] !== 'undefined') {
                        ConfigService.settings.resumablejs[propertyName] = config.resumablejs[propertyName];
                    }
                });
            }
        }
    }
}
ConfigService.settings = new AppConfig();
ConfigService.ɵfac = function ConfigService_Factory(t) { return new (t || ConfigService)(); };
ConfigService.ɵprov = ɵɵdefineInjectable({ token: ConfigService, factory: ConfigService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ConfigService, [{
        type: Injectable
    }], function () { return []; }, null); })();

var TransferStatus;
(function (TransferStatus) {
    TransferStatus[TransferStatus["Ready"] = 0] = "Ready";
    TransferStatus[TransferStatus["Queued"] = 1] = "Queued";
    TransferStatus[TransferStatus["Preprocessing"] = 2] = "Preprocessing";
    TransferStatus[TransferStatus["Uploading"] = 3] = "Uploading";
    TransferStatus[TransferStatus["Downloading"] = 4] = "Downloading";
    TransferStatus[TransferStatus["Finished"] = 5] = "Finished";
    TransferStatus[TransferStatus["Failed"] = 6] = "Failed";
})(TransferStatus || (TransferStatus = {}));

var TransferType;
(function (TransferType) {
    TransferType[TransferType["Upload"] = 0] = "Upload";
    TransferType[TransferType["Download"] = 1] = "Download";
})(TransferType || (TransferType = {}));

class BrowseDialogComponent {
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
BrowseDialogComponent.ɵfac = function BrowseDialogComponent_Factory(t) { return new (t || BrowseDialogComponent)(ɵɵdirectiveInject(MatDialogRef), ɵɵdirectiveInject(MAT_DIALOG_DATA)); };
BrowseDialogComponent.ɵcmp = ɵɵdefineComponent({ type: BrowseDialogComponent, selectors: [["amd-browse-dialog"]], decls: 11, vars: 0, consts: [["mat-raised-button", "", "id", "amd-browse-files", "tabindex", "1", 3, "click"], ["mat-raised-button", "", "id", "amd-browse-folder", "tabindex", "2", 3, "click"]], template: function BrowseDialogComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-dialog-content");
        ɵɵtext(1, "Select specific files or a folder");
        ɵɵelementEnd();
        ɵɵelementStart(2, "mat-dialog-actions");
        ɵɵelementStart(3, "button", 0);
        ɵɵlistener("click", function BrowseDialogComponent_Template_button_click_3_listener() { return ctx.close(); });
        ɵɵelementStart(4, "mat-icon");
        ɵɵtext(5, "insert_drive_file");
        ɵɵelementEnd();
        ɵɵtext(6, " Files");
        ɵɵelementEnd();
        ɵɵelementStart(7, "button", 1);
        ɵɵlistener("click", function BrowseDialogComponent_Template_button_click_7_listener() { return ctx.close(); });
        ɵɵelementStart(8, "mat-icon");
        ɵɵtext(9, "folder_open");
        ɵɵelementEnd();
        ɵɵtext(10, " Folder");
        ɵɵelementEnd();
        ɵɵelementEnd();
    } }, directives: [MatDialogContent, MatDialogActions, MatButton, MatIcon], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(BrowseDialogComponent, [{
        type: Component,
        args: [{
                // tslint:disable-next-line:component-selector
                selector: "amd-browse-dialog",
                templateUrl: "browse-dialog.component.html",
            }]
    }], function () { return [{ type: MatDialogRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }]; }, null); })();

function EditDialogComponent_div_0_mat_error_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-error");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r2.errorMessage, " ");
} }
function EditDialogComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div");
    ɵɵelementStart(1, "mat-dialog-content");
    ɵɵelementStart(2, "p");
    ɵɵtext(3, "Enter a new path:");
    ɵɵelementEnd();
    ɵɵelementStart(4, "form");
    ɵɵelementStart(5, "mat-form-field");
    ɵɵelementStart(6, "input", 1);
    ɵɵlistener("input", function EditDialogComponent_div_0_Template_input_input_6_listener($event) { ɵɵrestoreView(_r4); const ctx_r3 = ɵɵnextContext(); ctx_r3.itemPath = $event.target.value; return ctx_r3.errorMessage = undefined; });
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtemplate(7, EditDialogComponent_div_0_mat_error_7_Template, 2, 1, "mat-error", 0);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(8, "mat-dialog-actions");
    ɵɵelementStart(9, "button", 2);
    ɵɵlistener("click", function EditDialogComponent_div_0_Template_button_click_9_listener() { ɵɵrestoreView(_r4); const ctx_r5 = ɵɵnextContext(); return ctx_r5.editPath(); });
    ɵɵtext(10, "Ok");
    ɵɵelementEnd();
    ɵɵelementStart(11, "button", 3);
    ɵɵlistener("click", function EditDialogComponent_div_0_Template_button_click_11_listener() { ɵɵrestoreView(_r4); const ctx_r6 = ɵɵnextContext(); return ctx_r6.close(); });
    ɵɵtext(12, "Cancel");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(6);
    ɵɵproperty("value", ctx_r0.itemPath)("formControl", ctx_r0.editFormControl);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.errorMessage);
} }
function EditDialogComponent_div_1_mat_error_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-error");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r7.errorMessage, " ");
} }
function EditDialogComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div");
    ɵɵelementStart(1, "mat-dialog-content");
    ɵɵelementStart(2, "p");
    ɵɵtext(3, "Enter a new filename:");
    ɵɵelementEnd();
    ɵɵelementStart(4, "form");
    ɵɵelementStart(5, "mat-form-field");
    ɵɵelementStart(6, "input", 1);
    ɵɵlistener("input", function EditDialogComponent_div_1_Template_input_input_6_listener($event) { ɵɵrestoreView(_r9); const ctx_r8 = ɵɵnextContext(); ctx_r8.itemName = $event.target.value; return ctx_r8.errorMessage = undefined; });
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtemplate(7, EditDialogComponent_div_1_mat_error_7_Template, 2, 1, "mat-error", 0);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(8, "mat-dialog-actions");
    ɵɵelementStart(9, "button", 2);
    ɵɵlistener("click", function EditDialogComponent_div_1_Template_button_click_9_listener() { ɵɵrestoreView(_r9); const ctx_r10 = ɵɵnextContext(); return ctx_r10.editFilename(); });
    ɵɵtext(10, "Ok");
    ɵɵelementEnd();
    ɵɵelementStart(11, "button", 3);
    ɵɵlistener("click", function EditDialogComponent_div_1_Template_button_click_11_listener() { ɵɵrestoreView(_r9); const ctx_r11 = ɵɵnextContext(); return ctx_r11.close(); });
    ɵɵtext(12, "Cancel");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(6);
    ɵɵproperty("value", ctx_r1.itemName)("formControl", ctx_r1.editFormControl);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1.errorMessage);
} }
class EditDialogComponent {
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
EditDialogComponent.ɵfac = function EditDialogComponent_Factory(t) { return new (t || EditDialogComponent)(ɵɵdirectiveInject(MatDialogRef), ɵɵdirectiveInject(MAT_DIALOG_DATA)); };
EditDialogComponent.ɵcmp = ɵɵdefineComponent({ type: EditDialogComponent, selectors: [["amd-edit-dialog"]], decls: 2, vars: 2, consts: [[4, "ngIf"], ["matInput", "", "autocomplete", "off", "tabindex", "1", 3, "value", "formControl", "input"], ["mat-raised-button", "", "tabindex", "2", 3, "click"], ["mat-raised-button", "", "tabindex", "-1", 3, "click"]], template: function EditDialogComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, EditDialogComponent_div_0_Template, 13, 3, "div", 0);
        ɵɵtemplate(1, EditDialogComponent_div_1_Template, 13, 3, "div", 0);
    } if (rf & 2) {
        ɵɵproperty("ngIf", ctx.mode === "edit-path");
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.mode === "edit-filename");
    } }, directives: [NgIf, MatDialogContent, ɵangular_packages_forms_forms_y, NgControlStatusGroup, NgForm, MatFormField, MatInput, DefaultValueAccessor, NgControlStatus, FormControlDirective, MatDialogActions, MatButton, MatError], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(EditDialogComponent, [{
        type: Component,
        args: [{
                // tslint:disable-next-line:component-selector
                selector: "amd-edit-dialog",
                templateUrl: "edit-dialog.component.html",
            }]
    }], function () { return [{ type: MatDialogRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }]; }, null); })();

class DatatransferFacade {
    constructor(logger, zone, store, dateUtil, paginationService, exportService, uploader, downloader, dialog) {
        this.logger = logger;
        this.zone = zone;
        this.store = store;
        this.dateUtil = dateUtil;
        this.paginationService = paginationService;
        this.exportService = exportService;
        this.uploader = uploader;
        this.downloader = downloader;
        this.dialog = dialog;
        // Interval in milliseconds to calculate progress:
        this.progressInterval = 200;
        // Interval in milliseconds to calculate bitrate:
        this.bitrateInterval = 1000;
        this.uploadProgress = this.store.uploadProgress;
        this.downloadProgress = this.store.downloadProgress;
        this.init(this.uploader, this.uploadProgress);
        this.init(this.downloader, this.downloadProgress);
    }
    init(datatransfer, progressContainer) {
        datatransfer.on("itemAdded", function (item) {
            const that = this;
            that.zone.run(() => {
                that.addItem(item);
            });
        }.bind(this));
        datatransfer.on("zoneUpdated", function (item, status, message) {
            const that = this;
            that.zone.run(() => {
                // console.log(that.uploader.isWorking());
            });
        }.bind(this));
        datatransfer.on("itemStatusChanged", function (item, status, message) {
            const that = this;
            that.zone.run(() => {
                that.changeItemStatus(item, status, message);
            });
        }.bind(this));
        datatransfer.on("itemProgressUpdated", function (item, progress) {
            const that = this;
            that.zone.run(() => {
                that.updateItemProgress(item, progress);
            });
        }.bind(this));
        datatransfer.on("overallProgressUpdated", function (transferType, progress) {
            const that = this;
            that.zone.run(() => {
                that.updateOverallProgress(progressContainer, transferType, progress);
            });
        }.bind(this));
        datatransfer.on("overallSizeUpdated", function (size) {
            const that = this;
            that.zone.run(() => {
                that.updateOverallSize(progressContainer, size);
            });
        }.bind(this));
    }
    assignUploadBrowse(element, isDirectory = false) {
        this.uploader.assignBrowse(element, isDirectory);
    }
    assignUploadDrop(element) {
        this.uploader.assignDrop(element);
    }
    openBrowseDialog() {
        const dialogRef = this.dialog.open(BrowseDialogComponent, {
            data: {
                datatransferFacade: this,
            },
        });
    }
    openEditPathDialog(item) {
        const dialogRef = this.dialog.open(EditDialogComponent, {
            data: {
                datatransferFacade: this,
                mode: "edit-path",
                item,
            },
        });
    }
    openEditFilenameDialog(item) {
        const dialogRef = this.dialog.open(EditDialogComponent, {
            data: {
                datatransferFacade: this,
                mode: "edit-filename",
                item,
            },
        });
    }
    toggleVisible(checked) {
        this.paginationService.paginatedItems.forEach((item, index) => {
            item.isSelected = checked;
        });
    }
    startAll() {
        this.store.getItems().forEach((item, index) => {
            const that = this;
            if (item.transferType === TransferType.Upload &&
                item.status === TransferStatus.Ready) {
                that.changeItemStatus(item, TransferStatus.Queued);
            }
        });
        this.uploader.startAll();
    }
    pauseAll() {
        this.store.getItems().forEach((item, index) => {
            item.preprocessContainer.pause(true);
        });
        this.uploader.pauseAll();
        this.downloader.pauseAll();
    }
    removeAll() {
        this.store.getItems().forEach((item, index) => {
            item.preprocessContainer.cancel(true);
        });
        this.uploader.removeAll();
        this.downloader.removeAll();
        this.store.clear();
        this.uploadProgress.reset(0);
        this.paginationService.update(0);
        document.dispatchEvent(new CustomEvent(CustomEventTypeExtensions.toString(CustomEventType.ITEMS_CLEARED)));
    }
    retryAll() {
        this.store.getByStatus(TransferStatus.Failed).forEach((item, index) => {
            const that = this;
            that.retryItem(item);
        });
    }
    removeSelected() {
        const temp = this.store.getSelected().slice();
        temp.forEach((item, index) => {
            const that = this;
            that.removeItem(item);
        });
    }
    addItem(item) {
        if (!!item) {
            this.store.addItem(item);
            this.paginationService.update(this.store.count);
            document.dispatchEvent(new CustomEvent(CustomEventTypeExtensions.toString(CustomEventType.ITEM_ADDED), { detail: item }));
        }
    }
    removeItem(item) {
        if (!!item) {
            item.preprocessContainer.cancel(true);
            switch (item.transferType) {
                case TransferType.Upload:
                    this.uploader.removeItem(item);
                    break;
                case TransferType.Download:
                    this.downloader.removeItem(item);
                    break;
                default:
                    break;
            }
            this.store.removeById(item.id);
            this.paginationService.update(this.store.count);
            document.dispatchEvent(new CustomEvent(CustomEventTypeExtensions.toString(CustomEventType.ITEM_REMOVED), { detail: item }));
        }
    }
    retryItem(item) {
        if (!!item) {
            item.preprocessContainer.cancel(true);
            switch (item.transferType) {
                case TransferType.Upload:
                    this.uploader.retryItem(item);
                    break;
                case TransferType.Download:
                    this.downloader.retryItem(item);
                    break;
                default:
                    break;
            }
        }
    }
    itemClick(item) {
        document.dispatchEvent(new CustomEvent(CustomEventTypeExtensions.toString(CustomEventType.ITEM_CLICKED), { detail: item }));
    }
    changeItemStatus(item, status, message) {
        if (!!item && !!status) {
            if (item.status !== status) {
                this.paginationService.setPageByItemId(item.id);
                item.status = status;
                if (!!message) {
                    item.message = message;
                }
                this.store.updateFailedCount();
                if (status === TransferStatus.Finished) {
                    document.dispatchEvent(new CustomEvent(CustomEventTypeExtensions.toString(CustomEventType.ITEM_COMPLETED), { detail: item }));
                }
            }
        }
    }
    updateItemProgress(item, progress) {
        if (!!item) {
            const now = this.dateUtil.now();
            const loaded = item.progressContainer.total * progress;
            item.progressContainer.updateBitrate(now, loaded, this.bitrateInterval);
            item.progressContainer.updateProgress(now, loaded, this.progressInterval);
        }
    }
    updateOverallProgress(progressContainer, transferType, progress) {
        const now = this.dateUtil.now();
        const loaded = progressContainer.total * progress;
        // this.logger.log('total: ' + progressContainer.total + ' progress: ' + progress + ' loaded: ' + loaded);
        progressContainer.updateBitrate(now, loaded, this.bitrateInterval);
        progressContainer.updateProgress(now, loaded, this.progressInterval);
        if (progressContainer.total > 0 && loaded >= progressContainer.total) {
            switch (transferType) {
                case TransferType.Upload:
                    document.dispatchEvent(new CustomEvent(CustomEventTypeExtensions.toString(CustomEventType.UPLOAD_COMPLETED)));
                    break;
                case TransferType.Download:
                    document.dispatchEvent(new CustomEvent(CustomEventTypeExtensions.toString(CustomEventType.DOWNLOAD_COMPLETED)));
                    break;
                default:
                    break;
            }
        }
    }
    updateOverallSize(progressContainer, size) {
        progressContainer.reset(size);
    }
    download(filename, url, sizeInBytes) {
        this.downloader.download(filename, url, sizeInBytes);
    }
    export(exportType) {
        this.exportService.export(exportType);
    }
    getStatusClass(status) {
        switch (status) {
            case TransferStatus.Ready:
                return "add_circle_outline";
            case TransferStatus.Uploading:
                return "arrow_upward";
            case TransferStatus.Downloading:
                return "arrow_downward";
            case TransferStatus.Failed:
                return "error_outline";
            case TransferStatus.Queued:
            case TransferStatus.Preprocessing:
                return "schedule";
            case TransferStatus.Finished:
                return "done_all";
            default:
                return "";
        }
    }
    showStartButton() {
        return (this.store.count > 0 &&
            !this.uploader.isWorking() &&
            !this.downloader.isWorking());
    }
    showPauseButton() {
        return this.uploader.isWorking();
    }
    showRemoveButton() {
        return this.store.count > 0;
    }
    showRetryButton() {
        return (this.store.failedCount > 0 &&
            !this.uploader.isWorking() &&
            !this.downloader.isWorking());
    }
    showRetryButtonByItem(item) {
        return item.status === TransferStatus.Failed;
    }
    showExportButton() {
        return this.store.count > 0;
    }
    showPreprocessingCheckbox() {
        return (this.store.count > 0 && ConfigService.settings.core.preprocessHashEnabled);
    }
    showPreprocessingTooltip() {
        return (this.showPreprocessingCheckbox() &&
            !!ConfigService.settings.core.preprocessHashTooltipContent);
    }
    showSpinner(item) {
        return (item.preprocessContainer.percent > 0 &&
            item.status === TransferStatus.Preprocessing);
    }
    showProgressbar(item) {
        return (item.progressContainer.percent > 0 &&
            (item.status === TransferStatus.Uploading ||
                item.status === TransferStatus.Downloading));
    }
    showPath(items, index) {
        if (index > 0 && items.length > index) {
            const currentPath = items[index].path;
            // don't show if previous path is same as current
            return items[index - 1].path !== currentPath;
        }
        return true;
    }
    showEditDialog(item) {
        let result = false;
        if (item) {
            switch (item.transferType) {
                case TransferType.Upload:
                    if (item.status === TransferStatus.Ready) {
                        result = true;
                    }
                    break;
                default:
                    break;
            }
        }
        return result;
    }
    editPath(item, oldPath, newPath) {
        switch (item.transferType) {
            case TransferType.Upload:
                // replace all \ with /
                let cleanedPath = newPath.replace(/\\/g, "/");
                // replace repeated / with one
                cleanedPath = cleanedPath.replace(/\/+/g, "/");
                if (cleanedPath.startsWith("/")) {
                    cleanedPath = cleanedPath.slice(1);
                }
                if (cleanedPath && !cleanedPath.endsWith("/")) {
                    cleanedPath += "/";
                }
                this.uploader.editPath(oldPath, cleanedPath);
                break;
            default:
                break;
        }
    }
    editFilename(item, name) {
        switch (item.transferType) {
            case TransferType.Upload:
                this.uploader.editFilename(item, name);
                break;
            default:
                break;
        }
    }
    parseMessage(item) {
        if (ConfigService.settings.core.parseMessageCallback instanceof Function) {
            return ConfigService.settings.core.parseMessageCallback(item.message);
        }
        else {
            return undefined;
        }
    }
}

class PaginationContainer {
    constructor() {
        this.pages = [];
        this.page = 1;
        this.rpp = 5;
        this.total = 0;
    }
}

class DateUtil {
    now() {
        return ((Date.now) ? Date.now() : (new Date()).getTime());
    }
    format(seconds) {
        let date = new Date(seconds * 1000);
        if (isNaN(date.getTime())) {
            return undefined;
        }
        else {
            return ('0' + date.getUTCHours()).slice(-2) + ':' +
                ('0' + date.getUTCMinutes()).slice(-2) + ':' +
                ('0' + date.getUTCSeconds()).slice(-2);
        }
    }
}
DateUtil.ɵfac = function DateUtil_Factory(t) { return new (t || DateUtil)(); };
DateUtil.ɵprov = ɵɵdefineInjectable({ token: DateUtil, factory: DateUtil.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(DateUtil, [{
        type: Injectable
    }], null, null); })();

var DecimalByteUnit;
(function (DecimalByteUnit) {
    /**
     * Byte (B)
     * 1 Byte
     */
    DecimalByteUnit[DecimalByteUnit["Byte"] = 0] = "Byte";
    /**
     * Kilobyte (kB)
     * 10^3 Byte = 1.000 Byte
     */
    DecimalByteUnit[DecimalByteUnit["KB"] = 1] = "KB";
    /**
     * Megabyte (MB)
     * 10^6 Byte = 1.000.000 Byte
     */
    DecimalByteUnit[DecimalByteUnit["MB"] = 2] = "MB";
    /**
     * Gigabyte (GB)
     * 10^9 Byte = 1.000.000.000 Byte
     */
    DecimalByteUnit[DecimalByteUnit["GB"] = 3] = "GB";
    /**
     * Terabyte (TB)
     * 10^12 Byte = 1.000.000.000.000 Byte
     */
    DecimalByteUnit[DecimalByteUnit["TB"] = 4] = "TB";
    /**
     * Petabyte (PB)
     * 10^15 Byte = 1.000.000.000.000.000 Byte
     */
    DecimalByteUnit[DecimalByteUnit["PB"] = 5] = "PB";
})(DecimalByteUnit || (DecimalByteUnit = {}));

// @dynamic
class EnumExtension {
    static getNamesAndValues(e) {
        return this.getNames(e).map(n => ({ name: n, value: e[n] }));
    }
    static getNames(e) {
        return this.getObjValues(e).filter(v => typeof v === 'string');
    }
    static getValues(e) {
        return this.getObjValues(e).filter(v => typeof v === 'number');
    }
    static getObjValues(e) {
        return Object.keys(e).map(k => e[k]);
    }
}

class DecimalByteUnitUtil {
    constructor() {
        this.C_KB = Math.pow(10, 3);
        this.C_MB = Math.pow(10, 6);
        this.C_GB = Math.pow(10, 9);
        this.C_TB = Math.pow(10, 12);
        this.C_PB = Math.pow(10, 15);
        this.MAX = Number.MAX_VALUE;
        this.byteUnits = EnumExtension.getNames(DecimalByteUnit);
    }
    multiply(number, multiplier) {
        const limit = this.MAX / multiplier;
        if (number > limit) {
            return Number.MAX_VALUE;
        }
        if (number < -limit) {
            return Number.MIN_VALUE;
        }
        return number * multiplier;
    }
    convert(number, fromUnit, toUnit) {
        const bytes = this.toBytes(number, fromUnit);
        switch (toUnit) {
            case DecimalByteUnit.Byte:
                return bytes;
            case DecimalByteUnit.KB:
                return bytes / this.C_KB;
            case DecimalByteUnit.MB:
                return bytes / this.C_MB;
            case DecimalByteUnit.GB:
                return bytes / this.C_GB;
            case DecimalByteUnit.TB:
                return bytes / this.C_TB;
            case DecimalByteUnit.PB:
                return bytes / this.C_PB;
        }
        return number;
    }
    toBytes(number, fromUnit) {
        switch (fromUnit) {
            case DecimalByteUnit.Byte:
                return number;
            case DecimalByteUnit.KB:
                return this.multiply(number, this.C_KB);
            case DecimalByteUnit.MB:
                return this.multiply(number, this.C_MB);
            case DecimalByteUnit.GB:
                return this.multiply(number, this.C_GB);
            case DecimalByteUnit.TB:
                return this.multiply(number, this.C_TB);
            case DecimalByteUnit.PB:
                return this.multiply(number, this.C_PB);
        }
        return number;
    }
    format(number, fromUnit) {
        let result;
        result = [DecimalByteUnit.Byte, this.toBytes(number, fromUnit)];
        for (const currentUnit of this.byteUnits) {
            if (Math.abs(result[1]) < 1000) {
                result[0] = DecimalByteUnit[currentUnit];
                break;
            }
            else {
                result[1] /= 1000;
            }
        }
        result[1] = Number(result[1].toFixed(2));
        return result;
    }
}
DecimalByteUnitUtil.ɵfac = function DecimalByteUnitUtil_Factory(t) { return new (t || DecimalByteUnitUtil)(); };
DecimalByteUnitUtil.ɵprov = ɵɵdefineInjectable({ token: DecimalByteUnitUtil, factory: DecimalByteUnitUtil.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(DecimalByteUnitUtil, [{
        type: Injectable
    }], null, null); })();

class SizeContainer {
    constructor(init) {
        this.decimalByteUnit = DecimalByteUnit.MB;
        this.decimalByteUnitSize = 0;
        let injector = ReflectiveInjector.resolveAndCreate([DecimalByteUnitUtil]);
        this.decimalByteUnitUtil = injector.get(DecimalByteUnitUtil);
        this.update(init);
    }
    update(init) {
        if (!!this.decimalByteUnitUtil && !!init && !!init.decimalByteUnitSize) {
            this.updateDecimal(init.decimalByteUnit, init.decimalByteUnitSize);
        }
    }
    updateDecimal(decimalByteUnit, decimalByteUnitSize) {
        let convertResult = this.decimalByteUnitUtil.format(decimalByteUnitSize, decimalByteUnit);
        this.decimalByteUnit = convertResult[0];
        this.decimalByteUnitSize = convertResult[1];
        this.displayUnit = DecimalByteUnit[this.decimalByteUnit];
        this.displaySize = !!this.decimalByteUnitSize ? this.decimalByteUnitSize : 0;
    }
}

class ProgressContainer {
    constructor(total) {
        const injector = ReflectiveInjector.resolveAndCreate([DateUtil]);
        this.dateUtil = injector.get(DateUtil);
        this.bitrateSizeContainer = new SizeContainer();
        this.loadedSizeContainer = new SizeContainer();
        this.totalSizeContainer = new SizeContainer();
        this.reset(total);
    }
    reset(total) {
        this.progressTimestamp = this.dateUtil.now();
        this.bitrateTimestamp = this.dateUtil.now();
        this.loaded = 0;
        this.bitrate = 0;
        this.percent = 0;
        this.total = total;
        this.displayBitrate = undefined;
        this.displayTimeLeft = undefined;
        this.bitrateSizeContainer.updateDecimal(DecimalByteUnit.Byte, this.bitrate);
        this.loadedSizeContainer.updateDecimal(DecimalByteUnit.Byte, this.loaded);
        this.totalSizeContainer.updateDecimal(DecimalByteUnit.Byte, this.total);
    }
    updateProgress(now, loaded, interval) {
        const timeDiff = now - this.progressTimestamp;
        // console.log('loaded: ' + loaded + ' total: ' + this.total);
        if (!this.percent || timeDiff > interval) {
            this.percent = Number((loaded / this.total * 100).toFixed(2));
            this.loaded = loaded;
            this.loadedSizeContainer.updateDecimal(DecimalByteUnit.Byte, this.loaded);
            this.progressTimestamp = now;
            if (this.bitrate > 0) {
                this.displayTimeLeft = this.dateUtil.format((this.total - this.loaded) * 8 / this.bitrate);
            }
            else {
                this.displayTimeLeft = this.dateUtil.format(0);
            }
        }
        else if (loaded >= this.total) {
            this.percent = 100;
            this.loaded = this.total;
        }
    }
    updateBitrate(now, loaded, interval) {
        const timeDiff = now - this.bitrateTimestamp;
        if (!this.bitrate || timeDiff > interval) {
            this.bitrate = (loaded - this.loaded) * (1000 / timeDiff) * 8;
            if (this.bitrate === Number.POSITIVE_INFINITY || this.bitrate === Number.NEGATIVE_INFINITY) {
                this.bitrate = 0;
            }
            this.bitrateSizeContainer.updateDecimal(DecimalByteUnit.Byte, this.bitrate / 8);
            this.displayBitrate = this.bitrateSizeContainer.displaySize + ' ' + this.bitrateSizeContainer.displayUnit + '/s';
            this.bitrateTimestamp = now;
        }
    }
}

class DatatransferStore {
    constructor() {
        this.items = [];
        this.count = 0;
        this.failedCount = 0;
        this.uploadProgress = new ProgressContainer(0);
        this.downloadProgress = new ProgressContainer(0);
    }
    updateCount() {
        this.count = this.items.length;
    }
    updateFailedCount() {
        this.failedCount = this.getByStatus(TransferStatus.Failed).length;
    }
    getItems() {
        return this.items;
    }
    getSelected() {
        return this.items.filter((item) => item.isSelected === true);
    }
    getById(id) {
        return this.items.find((item) => item.id === id);
    }
    getIndexById(id) {
        return this.items.findIndex(i => i.id === id);
    }
    clear() {
        this.items.length = 0;
        this.updateCount();
        this.updateFailedCount();
    }
    addItem(item) {
        this.items.push(item);
        this.updateCount();
    }
    removeById(id) {
        const index = this.getIndexById(id);
        if (index > -1) {
            this.items.splice(index, 1);
            this.updateCount();
        }
    }
    getByStatus(status) {
        return this.items.filter((item) => item.status === status);
    }
}
DatatransferStore.ɵfac = function DatatransferStore_Factory(t) { return new (t || DatatransferStore)(); };
DatatransferStore.ɵprov = ɵɵdefineInjectable({ token: DatatransferStore, factory: DatatransferStore.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(DatatransferStore, [{
        type: Injectable
    }], function () { return []; }, null); })();

class PaginationService {
    constructor(datatransferStore) {
        this.datatransferStore = datatransferStore;
        this.paginatedItems = [];
        this.pagination = new PaginationContainer();
    }
    setRppOptions(rppOptions) {
        this.pagination.rppOptions = rppOptions;
        this.setPaginationContainer();
    }
    update(total) {
        if (total <= 0) {
            this.paginatedItems.length = 0;
        }
        this.pagination.total = total;
        this.setPaginationContainer();
    }
    setPaginationContainer() {
        const pageCount = this.pageCount();
        if (this.pagination.pages.length > pageCount) {
            this.pagination.pages.splice(pageCount);
        }
        else {
            for (let i = this.pagination.pages.length; i < pageCount; i++) {
                this.pagination.pages.push(i + 1);
            }
        }
        if (!this.pagination.pages.includes(this.pagination.page)) {
            this.pagination.page = 1;
        }
        if (!!this.pagination.rppOptions && this.pagination.rppOptions.length > 0
            && !this.pagination.rppOptions.includes(this.pagination.rpp)) {
            this.pagination.rpp = this.pagination.rppOptions[0];
        }
        this.onPaginationChange();
    }
    max() {
        return this.hasNext() ? this.pagination.page * this.pagination.rpp : this.pagination.total;
    }
    min() {
        return this.pagination.total > 0 ? this.pagination.page * this.pagination.rpp - this.pagination.rpp + 1 : 0;
    }
    first() {
        this.pagination.page = 1;
        this.onPaginationChange();
    }
    last() {
        this.pagination.page = this.pageCount();
        this.onPaginationChange();
    }
    hasNext() {
        return this.pagination.page * this.pagination.rpp < this.pagination.total;
    }
    hasPrevious() {
        return this.pagination.page > 1;
    }
    moveNext() {
        this.pagination.page++;
        this.onPaginationChange();
    }
    movePrevious() {
        this.pagination.page--;
        this.onPaginationChange();
    }
    setPage(page) {
        this.pagination.page = page;
        this.onPageChange();
    }
    onPageChange() {
        this.setPaginationContainer();
        this.onPaginationChange();
    }
    onRppChange() {
        this.setPaginationContainer();
        this.pagination.page = 1;
        this.onPaginationChange();
    }
    onPaginationChange() {
        const startIndex = (this.pagination.page - 1) * this.pagination.rpp;
        const endIndex = Math.min(startIndex + this.pagination.rpp, this.pagination.total);
        this.paginatedItems = this.datatransferStore.getItems().slice(startIndex, endIndex);
    }
    pageCount() {
        return this.pagination.total > 0 ? Math.ceil(this.pagination.total / (this.pagination.rpp > 0 ? this.pagination.rpp : 1)) : 1;
    }
    getPageByItemId(id) {
        const index = this.datatransferStore.getIndexById(id);
        if (index > -1) {
            return Math.ceil((index + 1) / this.pagination.rpp);
        }
    }
    setPageByItemId(id) {
        const page = this.getPageByItemId(id);
        if (this.pagination.page !== page) {
            this.setPage(page);
        }
    }
}
PaginationService.ɵfac = function PaginationService_Factory(t) { return new (t || PaginationService)(ɵɵinject(DatatransferStore)); };
PaginationService.ɵprov = ɵɵdefineInjectable({ token: PaginationService, factory: PaginationService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(PaginationService, [{
        type: Injectable
    }], function () { return [{ type: DatatransferStore }]; }, null); })();

// From: https://github.com/angular/angular/issues/5458
class LoggerService {
    constructor() {
        this.noop = () => { };
    }
    get enabled() {
        return !ConfigService.settings.production;
    }
    get debug() {
        if (this.enabled) {
            return console.debug.bind(console);
        }
        return this.noop;
    }
    get error() {
        if (this.enabled) {
            return console.error.bind(console);
        }
        return this.noop;
    }
    get log() {
        if (this.enabled) {
            return console.log.bind(console);
        }
        return this.noop;
    }
    get info() {
        if (this.enabled) {
            return console.info.bind(console);
        }
        return this.noop;
    }
    get warn() {
        if (this.enabled) {
            return console.warn.bind(console);
        }
        return this.noop;
    }
}
LoggerService.ɵfac = function LoggerService_Factory(t) { return new (t || LoggerService)(); };
LoggerService.ɵprov = ɵɵdefineInjectable({ token: LoggerService, factory: LoggerService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(LoggerService, [{
        type: Injectable
    }], function () { return []; }, null); })();

function PaginationComponent_mat_option_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 4);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const p_r2 = ctx.$implicit;
    ɵɵproperty("value", p_r2);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", p_r2, " ");
} }
function PaginationComponent_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 4);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const o_r3 = ctx.$implicit;
    ɵɵproperty("value", o_r3);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", o_r3, " ");
} }
class PaginationComponent {
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
PaginationComponent.ɵfac = function PaginationComponent_Factory(t) { return new (t || PaginationComponent)(ɵɵdirectiveInject(LoggerService)); };
PaginationComponent.ɵcmp = ɵɵdefineComponent({ type: PaginationComponent, selectors: [["amd-pagination"]], inputs: { paginationService: "paginationService" }, decls: 14, vars: 9, consts: [["placeholder", "Page", "aria-label", "Page", 3, "ngModel", "ngModelChange", "change"], [3, "value", 4, "ngFor", "ngForOf"], ["placeholder", "Rows per page", "aria-label", "Rows per page", 3, "ngModel", "ngModelChange", "change"], ["mat-icon-button", "", "mat-button", "", 3, "disabled", "click"], [3, "value"]], template: function PaginationComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-form-field");
        ɵɵelementStart(1, "mat-select", 0);
        ɵɵlistener("ngModelChange", function PaginationComponent_Template_mat_select_ngModelChange_1_listener($event) { return ctx.paginationService.pagination.page = $event; })("change", function PaginationComponent_Template_mat_select_change_1_listener() { return ctx.onPageChange(); });
        ɵɵtemplate(2, PaginationComponent_mat_option_2_Template, 2, 2, "mat-option", 1);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(3, "mat-form-field");
        ɵɵelementStart(4, "mat-select", 2);
        ɵɵlistener("ngModelChange", function PaginationComponent_Template_mat_select_ngModelChange_4_listener($event) { return ctx.paginationService.pagination.rpp = $event; })("change", function PaginationComponent_Template_mat_select_change_4_listener() { return ctx.onRppChange(); });
        ɵɵtemplate(5, PaginationComponent_mat_option_5_Template, 2, 2, "mat-option", 1);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(6, "span");
        ɵɵtext(7);
        ɵɵelementEnd();
        ɵɵelementStart(8, "button", 3);
        ɵɵlistener("click", function PaginationComponent_Template_button_click_8_listener() { return ctx.movePrevious(); });
        ɵɵelementStart(9, "mat-icon");
        ɵɵtext(10, "navigate_before");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(11, "button", 3);
        ɵɵlistener("click", function PaginationComponent_Template_button_click_11_listener() { return ctx.moveNext(); });
        ɵɵelementStart(12, "mat-icon");
        ɵɵtext(13, "navigate_next");
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵproperty("ngModel", ctx.paginationService.pagination.page);
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.paginationService.pagination.pages);
        ɵɵadvance(2);
        ɵɵproperty("ngModel", ctx.paginationService.pagination.rpp);
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.paginationService.pagination.rppOptions);
        ɵɵadvance(2);
        ɵɵtextInterpolate3("", ctx.min(), " - ", ctx.max(), " of ", ctx.paginationService.pagination.total, "");
        ɵɵadvance(1);
        ɵɵproperty("disabled", !ctx.hasPrevious());
        ɵɵadvance(3);
        ɵɵproperty("disabled", !ctx.hasNext());
    } }, directives: [MatFormField, MatSelect, NgControlStatus, NgModel, NgForOf, MatButton, MatIcon, MatOption], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(PaginationComponent, [{
        type: Component,
        args: [{
                // tslint:disable-next-line:component-selector
                selector: 'amd-pagination',
                templateUrl: 'pagination.component.html'
            }]
    }], function () { return [{ type: LoggerService }]; }, { paginationService: [{
            type: Input
        }] }); })();

class DropzoneComponent {
    constructor() { }
}
DropzoneComponent.ɵfac = function DropzoneComponent_Factory(t) { return new (t || DropzoneComponent)(); };
DropzoneComponent.ɵcmp = ɵɵdefineComponent({ type: DropzoneComponent, selectors: [["amd-dropzone"]], decls: 8, vars: 0, consts: [["id", "amd-dropzone-component", 1, "amd-dropzone"], [1, "amd-dropzone-content"], [2, "font-size", "64px", "color", "rgba(255, 255, 255, 1)"], [2, "margin-left", "10px"]], template: function DropzoneComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "div", 1);
        ɵɵelementStart(2, "mat-icon", 2);
        ɵɵtext(3, "insert_drive_file");
        ɵɵelementEnd();
        ɵɵelementStart(4, "mat-icon", 3);
        ɵɵtext(5, "add_circle_outline");
        ɵɵelementEnd();
        ɵɵelementStart(6, "p");
        ɵɵtext(7, "Drop your files/folders here or click to upload.");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } }, directives: [MatIcon], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(DropzoneComponent, [{
        type: Component,
        args: [{
                // tslint:disable-next-line:component-selector
                selector: 'amd-dropzone',
                templateUrl: 'dropzone.component.html'
            }]
    }], function () { return []; }, null); })();

function ProgressComponent_mat_progress_bar_9_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "mat-progress-bar", 5);
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("value", ctx_r0.progressContainer.percent);
} }
class ProgressComponent {
    constructor() { }
}
ProgressComponent.ɵfac = function ProgressComponent_Factory(t) { return new (t || ProgressComponent)(); };
ProgressComponent.ɵcmp = ɵɵdefineComponent({ type: ProgressComponent, selectors: [["amd-progress"]], inputs: { progressContainer: "progressContainer" }, decls: 10, vars: 7, consts: [[2, "font-size", "11px", "margin-top", "10px"], ["fxFlex", "25%", "fxFlex.lt-md", "50%"], ["fxFlex", "25%", "fxHide.lt-md", "", 2, "text-align", "center"], ["fxFlex", "25%", "fxFlex.lt-md", "50%", 2, "text-align", "right"], [3, "value", 4, "ngIf"], [3, "value"]], template: function ProgressComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "div", 1);
        ɵɵtext(2);
        ɵɵelementEnd();
        ɵɵelementStart(3, "div", 2);
        ɵɵtext(4);
        ɵɵelementEnd();
        ɵɵelementStart(5, "div", 2);
        ɵɵtext(6);
        ɵɵelementEnd();
        ɵɵelementStart(7, "div", 3);
        ɵɵtext(8);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵtemplate(9, ProgressComponent_mat_progress_bar_9_Template, 1, 1, "mat-progress-bar", 4);
    } if (rf & 2) {
        ɵɵadvance(2);
        ɵɵtextInterpolate1(" ", ctx.progressContainer.displayBitrate, " ");
        ɵɵadvance(2);
        ɵɵtextInterpolate1(" ", ctx.progressContainer.displayTimeLeft, " ");
        ɵɵadvance(2);
        ɵɵtextInterpolate1(" ", ctx.progressContainer.percent, "% ");
        ɵɵadvance(2);
        ɵɵtextInterpolate3(" ", ctx.progressContainer.loadedSizeContainer.displaySize, " / ", ctx.progressContainer.totalSizeContainer.displaySize, " ", ctx.progressContainer.totalSizeContainer.displayUnit, " ");
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.progressContainer.total > 0);
    } }, directives: [DefaultFlexDirective, DefaultShowHideDirective, NgIf, MatProgressBar], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ProgressComponent, [{
        type: Component,
        args: [{
                // tslint:disable-next-line:component-selector
                selector: 'amd-progress',
                templateUrl: 'progress.component.html'
            }]
    }], function () { return []; }, { progressContainer: [{
            type: Input
        }] }); })();

function MainComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵelement(1, "amd-dropzone");
    ɵɵelementEnd();
} }
function MainComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r13 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 22);
    ɵɵlistener("click", function MainComponent_button_4_Template_button_click_0_listener() { ɵɵrestoreView(_r13); const ctx_r12 = ɵɵnextContext(); return ctx_r12.datatransferFacade.startAll(); });
    ɵɵelementStart(1, "mat-icon");
    ɵɵtext(2, "play_arrow");
    ɵɵelementEnd();
    ɵɵtext(3, " Start ");
    ɵɵelementEnd();
} }
function MainComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r15 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 22);
    ɵɵlistener("click", function MainComponent_button_5_Template_button_click_0_listener() { ɵɵrestoreView(_r15); const ctx_r14 = ɵɵnextContext(); return ctx_r14.datatransferFacade.pauseAll(); });
    ɵɵelementStart(1, "mat-icon");
    ɵɵtext(2, "pause");
    ɵɵelementEnd();
    ɵɵtext(3, " Pause ");
    ɵɵelementEnd();
} }
function MainComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r17 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 22);
    ɵɵlistener("click", function MainComponent_button_6_Template_button_click_0_listener() { ɵɵrestoreView(_r17); const ctx_r16 = ɵɵnextContext(); return ctx_r16.datatransferFacade.removeAll(); });
    ɵɵelementStart(1, "mat-icon");
    ɵɵtext(2, "close");
    ɵɵelementEnd();
    ɵɵtext(3, " Remove all ");
    ɵɵelementEnd();
} }
function MainComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r19 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 22);
    ɵɵlistener("click", function MainComponent_button_7_Template_button_click_0_listener() { ɵɵrestoreView(_r19); const ctx_r18 = ɵɵnextContext(); return ctx_r18.datatransferFacade.retryAll(); });
    ɵɵelementStart(1, "mat-icon");
    ɵɵtext(2, "refresh");
    ɵɵelementEnd();
    ɵɵtext(3);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" Retry (", ctx_r4.datatransferStore.failedCount, ") ");
} }
function MainComponent_button_16_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "button", 23);
    ɵɵtext(1, " Export ");
    ɵɵelementStart(2, "mat-icon");
    ɵɵtext(3, "expand_more");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵnextContext();
    const _r5 = ɵɵreference(9);
    ɵɵproperty("matMenuTriggerFor", _r5);
} }
function MainComponent_mat_checkbox_17_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 26);
    ɵɵelementStart(1, "mat-icon");
    ɵɵtext(2, "info_outline");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r20 = ɵɵnextContext(2);
    ɵɵproperty("matTooltip", ctx_r20.config.core.preprocessHashTooltipContent);
} }
function MainComponent_mat_checkbox_17_Template(rf, ctx) { if (rf & 1) {
    const _r22 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-checkbox", 24);
    ɵɵlistener("ngModelChange", function MainComponent_mat_checkbox_17_Template_mat_checkbox_ngModelChange_0_listener($event) { ɵɵrestoreView(_r22); const ctx_r21 = ɵɵnextContext(); return ctx_r21.config.core.preprocessHashChecked = $event; });
    ɵɵtext(1, " Preprocessing ");
    ɵɵtemplate(2, MainComponent_mat_checkbox_17_span_2_Template, 3, 1, "span", 25);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = ɵɵnextContext();
    ɵɵproperty("ngModel", ctx_r7.config.core.preprocessHashChecked);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r7.datatransferFacade.showPreprocessingTooltip());
} }
function MainComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵelement(1, "amd-progress", 27);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("progressContainer", ctx_r8.uploadProgress);
} }
function MainComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵelement(1, "amd-progress", 27);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("progressContainer", ctx_r9.downloadProgress);
} }
function MainComponent_ng_template_41_div_0_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r38 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 44);
    ɵɵlistener("click", function MainComponent_ng_template_41_div_0_button_11_Template_button_click_0_listener() { ɵɵrestoreView(_r38); const item_r23 = ɵɵnextContext(2).$implicit; const ctx_r36 = ɵɵnextContext(); return ctx_r36.datatransferFacade.openEditPathDialog(item_r23); });
    ɵɵelementStart(1, "mat-icon", 45);
    ɵɵtext(2, "edit");
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
function MainComponent_ng_template_41_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵelementStart(1, "div", 41);
    ɵɵelementStart(2, "div", 42);
    ɵɵelementStart(3, "div", 43);
    ɵɵelementStart(4, "div", 12);
    ɵɵelementStart(5, "mat-icon");
    ɵɵtext(6, "folder_open");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(7, "div", 3);
    ɵɵelementStart(8, "span");
    ɵɵelementStart(9, "b");
    ɵɵtext(10);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtemplate(11, MainComponent_ng_template_41_div_0_button_11_Template, 3, 0, "button", 34);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const item_r23 = ɵɵnextContext().$implicit;
    const ctx_r25 = ɵɵnextContext();
    ɵɵadvance(10);
    ɵɵtextInterpolate(item_r23.displayPath);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r25.datatransferFacade.showEditDialog(item_r23));
} }
function MainComponent_ng_template_41_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r42 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 44);
    ɵɵlistener("click", function MainComponent_ng_template_41_button_10_Template_button_click_0_listener() { ɵɵrestoreView(_r42); const item_r23 = ɵɵnextContext().$implicit; const ctx_r40 = ɵɵnextContext(); return ctx_r40.datatransferFacade.openEditFilenameDialog(item_r23); });
    ɵɵelementStart(1, "mat-icon", 46);
    ɵɵtext(2, "edit");
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
function MainComponent_ng_template_41_div_13_mat_progress_spinner_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "mat-progress-spinner", 49);
} if (rf & 2) {
    const item_r23 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("diameter", 20)("value", item_r23.preprocessContainer.percent);
} }
function MainComponent_ng_template_41_div_13_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 47);
    ɵɵtemplate(1, MainComponent_ng_template_41_div_13_mat_progress_spinner_1_Template, 1, 2, "mat-progress-spinner", 48);
    ɵɵelementEnd();
} if (rf & 2) {
    const item_r23 = ɵɵnextContext().$implicit;
    ɵɵpropertyInterpolate1("matTooltip", "", item_r23.preprocessContainer.percent, "%");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", item_r23.preprocessContainer.percent > 0);
} }
function MainComponent_ng_template_41_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 12);
    ɵɵelementStart(1, "mat-icon");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const item_r23 = ɵɵnextContext().$implicit;
    const ctx_r29 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r29.datatransferFacade.getStatusClass(item_r23.status));
} }
function MainComponent_ng_template_41_div_17_mat_progress_bar_10_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "mat-progress-bar", 55);
} if (rf & 2) {
    const item_r23 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("value", item_r23.progressContainer.percent);
} }
function MainComponent_ng_template_41_div_17_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵelementStart(1, "div", 50);
    ɵɵelementStart(2, "div", 51);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 52);
    ɵɵtext(5);
    ɵɵelementEnd();
    ɵɵelementStart(6, "div", 52);
    ɵɵtext(7);
    ɵɵelementEnd();
    ɵɵelementStart(8, "div", 53);
    ɵɵtext(9);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtemplate(10, MainComponent_ng_template_41_div_17_mat_progress_bar_10_Template, 1, 1, "mat-progress-bar", 54);
    ɵɵelementEnd();
} if (rf & 2) {
    const item_r23 = ɵɵnextContext().$implicit;
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", item_r23.progressContainer.displayBitrate, " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", item_r23.progressContainer.displayTimeLeft, " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", item_r23.progressContainer.percent, "% ");
    ɵɵadvance(2);
    ɵɵtextInterpolate3(" ", item_r23.progressContainer.loadedSizeContainer.displaySize, " / ", item_r23.sizeContainer.displaySize, " ", item_r23.sizeContainer.displayUnit, " ");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", item_r23.progressContainer.total > 0);
} }
function MainComponent_ng_template_41_ng_template_18_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵelementStart(1, "small");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const item_r23 = ɵɵnextContext(2).$implicit;
    const ctx_r50 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r50.datatransferFacade.parseMessage(item_r23));
} }
function MainComponent_ng_template_41_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    ɵɵtext(0);
    ɵɵtemplate(1, MainComponent_ng_template_41_ng_template_18_div_1_Template, 3, 1, "div", 1);
} if (rf & 2) {
    const item_r23 = ɵɵnextContext().$implicit;
    ɵɵtextInterpolate3(" ", item_r23.getStatusName(), " (", item_r23.sizeContainer.displaySize, " ", item_r23.sizeContainer.displayUnit, ") ");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !!item_r23.message);
} }
function MainComponent_ng_template_41_button_23_Template(rf, ctx) { if (rf & 1) {
    const _r55 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 6);
    ɵɵlistener("click", function MainComponent_ng_template_41_button_23_Template_button_click_0_listener() { ɵɵrestoreView(_r55); const item_r23 = ɵɵnextContext().$implicit; const ctx_r53 = ɵɵnextContext(); return ctx_r53.datatransferFacade.retryItem(item_r23); });
    ɵɵelementStart(1, "mat-icon");
    ɵɵtext(2, "refresh");
    ɵɵelementEnd();
    ɵɵelementStart(3, "span");
    ɵɵtext(4, "Retry");
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
const _c0 = function (a0) { return { "selected": a0 }; };
function MainComponent_ng_template_41_Template(rf, ctx) { if (rf & 1) {
    const _r57 = ɵɵgetCurrentView();
    ɵɵtemplate(0, MainComponent_ng_template_41_div_0_Template, 12, 2, "div", 1);
    ɵɵelementStart(1, "div", 28);
    ɵɵlistener("click", function MainComponent_ng_template_41_Template_div_click_1_listener() { ɵɵrestoreView(_r57); const item_r23 = ctx.$implicit; const ctx_r56 = ɵɵnextContext(); return ctx_r56.datatransferFacade.itemClick(item_r23); });
    ɵɵelementStart(2, "div", 29);
    ɵɵelementStart(3, "div", 30);
    ɵɵelementStart(4, "div", 12);
    ɵɵelementStart(5, "mat-checkbox", 31);
    ɵɵlistener("ngModelChange", function MainComponent_ng_template_41_Template_mat_checkbox_ngModelChange_5_listener($event) { const item_r23 = ctx.$implicit; return item_r23.isSelected = $event; });
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(6, "div", 32);
    ɵɵelementStart(7, "div", 33);
    ɵɵelementStart(8, "span");
    ɵɵtext(9);
    ɵɵelementEnd();
    ɵɵtemplate(10, MainComponent_ng_template_41_button_10_Template, 3, 0, "button", 34);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(11, "div", 29);
    ɵɵelementStart(12, "div", 30);
    ɵɵtemplate(13, MainComponent_ng_template_41_div_13_Template, 2, 2, "div", 35);
    ɵɵtemplate(14, MainComponent_ng_template_41_ng_template_14_Template, 3, 1, "ng-template", null, 36, ɵɵtemplateRefExtractor);
    ɵɵelementStart(16, "div", 32);
    ɵɵtemplate(17, MainComponent_ng_template_41_div_17_Template, 11, 7, "div", 37);
    ɵɵtemplate(18, MainComponent_ng_template_41_ng_template_18_Template, 2, 4, "ng-template", null, 38, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
    ɵɵelementStart(20, "div", 16);
    ɵɵelementStart(21, "mat-menu", null, 39);
    ɵɵtemplate(23, MainComponent_ng_template_41_button_23_Template, 5, 0, "button", 40);
    ɵɵelementStart(24, "button", 6);
    ɵɵlistener("click", function MainComponent_ng_template_41_Template_button_click_24_listener() { ɵɵrestoreView(_r57); const item_r23 = ctx.$implicit; const ctx_r59 = ɵɵnextContext(); return ctx_r59.datatransferFacade.removeItem(item_r23); });
    ɵɵelementStart(25, "mat-icon");
    ɵɵtext(26, "close");
    ɵɵelementEnd();
    ɵɵelementStart(27, "span");
    ɵɵtext(28, "Remove");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(29, "button", 18);
    ɵɵelementStart(30, "mat-icon");
    ɵɵtext(31, "more_vert");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const item_r23 = ctx.$implicit;
    const i_r24 = ctx.index;
    const _r28 = ɵɵreference(15);
    const _r31 = ɵɵreference(19);
    const _r33 = ɵɵreference(22);
    const ctx_r11 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r11.datatransferFacade.showPath(ctx_r11.paginationService.paginatedItems, i_r24));
    ɵɵadvance(1);
    ɵɵproperty("ngClass", ɵɵpureFunction1(12, _c0, item_r23.isSelected));
    ɵɵadvance(4);
    ɵɵproperty("ngModel", item_r23.isSelected);
    ɵɵadvance(2);
    ɵɵpropertyInterpolate("matTooltip", item_r23.name);
    ɵɵadvance(2);
    ɵɵtextInterpolate(item_r23.name);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r11.datatransferFacade.showEditDialog(item_r23));
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ctx_r11.datatransferFacade.showSpinner(item_r23))("ngIfElse", _r28);
    ɵɵadvance(4);
    ɵɵproperty("ngIf", ctx_r11.datatransferFacade.showProgressbar(item_r23))("ngIfElse", _r31);
    ɵɵadvance(6);
    ɵɵproperty("ngIf", ctx_r11.datatransferFacade.showRetryButtonByItem(item_r23));
    ɵɵadvance(6);
    ɵɵproperty("matMenuTriggerFor", _r33);
} }
class MainComponent {
    constructor(datatransferStore, paginationService) {
        this.datatransferStore = datatransferStore;
        this.paginationService = paginationService;
        this.config = ConfigService.settings;
        this.uploadProgress = this.datatransferStore.uploadProgress;
        this.downloadProgress = this.datatransferStore.downloadProgress;
    }
    ngAfterViewInit() {
        this.init();
    }
    init() {
        if (this.config.core.showUploadDropzone) {
            const dropzoneElement = document.getElementById('amd-dropzone-component');
            if (dropzoneElement) {
                dropzoneElement.addEventListener('click', this.datatransferFacade.openBrowseDialog.bind(this.datatransferFacade), false);
                this.datatransferFacade.assignUploadDrop(dropzoneElement);
            }
        }
        else {
            if (typeof this.config.core.uploadBrowseElementId !== 'undefined') {
                const uploadBrowseElement = document.getElementById(this.config.core.uploadBrowseElementId);
                if (uploadBrowseElement) {
                    uploadBrowseElement.addEventListener('click', this.datatransferFacade.openBrowseDialog.bind(this.datatransferFacade), false);
                }
            }
            if (typeof this.config.core.uploadDropElementId !== 'undefined') {
                const uploadDropElement = document.getElementById(this.config.core.uploadDropElementId);
                if (uploadDropElement) {
                    this.datatransferFacade.assignUploadDrop(uploadDropElement);
                }
            }
        }
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(ɵɵdirectiveInject(DatatransferStore), ɵɵdirectiveInject(PaginationService)); };
MainComponent.ɵcmp = ɵɵdefineComponent({ type: MainComponent, selectors: [["amd-main"]], inputs: { datatransferFacade: "datatransferFacade" }, decls: 44, vars: 12, consts: [[1, "amd-font"], [4, "ngIf"], ["fxLayout", "row", "fxLayout.lt-sm", "column", 2, "margin-bottom", "10px"], ["fxFlex", ""], ["class", "amd-mr-1", "mat-raised-button", "", 3, "click", 4, "ngIf"], ["exportMenu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["mat-raised-button", "", 3, "matMenuTriggerFor", 4, "ngIf"], ["style", "margin-left: 10px;", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["fxFlex", "70px", "fxFlex.lt-sm", "0px"], [1, "amd-container"], ["fxLayout", "row", 1, "amd-container-header", 2, "align-items", "center"], ["fxFlex", "40px"], [3, "change"], ["fxFlex", "50%", "fxFlex.lt-sm", "100%"], ["fxFlex", "50%", "fxHide.lt-sm", "", 2, "padding-left", "40px"], ["fxFlex", "20px"], ["batchItemMenu", "matMenu"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], ["ngFor", "", 3, "ngForOf"], [2, "font-size", "12px", "margin-top", "20px", "text-align", "right"], [3, "paginationService"], ["mat-raised-button", "", 1, "amd-mr-1", 3, "click"], ["mat-raised-button", "", 3, "matMenuTriggerFor"], [2, "margin-left", "10px", 3, "ngModel", "ngModelChange"], ["class", "amd-vertical-align-middle", "matTooltipPosition", "right", 3, "matTooltip", 4, "ngIf"], ["matTooltipPosition", "right", 1, "amd-vertical-align-middle", 3, "matTooltip"], [3, "progressContainer"], ["fxLayout", "row", "fxLayout.lt-sm", "column", 1, "amd-container-row", 3, "ngClass", "click"], ["fxFlex", "", 1, "amd-container-row-item"], [1, "amd-container-row-item-entry"], [3, "ngModel", "ngModelChange"], ["fxFlex", "100%"], ["matTooltipPosition", "above", 3, "matTooltip"], ["mat-icon-button", "", 3, "click", 4, "ngIf"], ["fxFlex", "40px", 3, "matTooltip", 4, "ngIf", "ngIfElse"], ["showStatusClass", ""], [4, "ngIf", "ngIfElse"], ["showStatusBlock", ""], ["itemMenu", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngIf"], ["fxLayout", "row", 1, "amd-container-headline"], ["fxFlex", "", 1, "amd-container-headline-item"], [1, "amd-container-headline-item-entry"], ["mat-icon-button", "", 3, "click"], ["aria-label", "Edit path"], ["aria-label", "Edit filename"], ["fxFlex", "40px", 3, "matTooltip"], ["mode", "determinate", 3, "diameter", "value", 4, "ngIf"], ["mode", "determinate", 3, "diameter", "value"], [1, "amd-container-row-item-entry-stats"], ["fxFlex", "25%", "fxFlex.lt-md", "50%"], ["fxFlex", "25%", "fxHide.lt-md", "", 2, "text-align", "center"], ["fxFlex", "25%", "fxFlex.lt-md", "50%", 2, "text-align", "right"], ["color", "primary", "mode", "determinate", 3, "value", 4, "ngIf"], ["color", "primary", "mode", "determinate", 3, "value"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵtemplate(1, MainComponent_div_1_Template, 2, 0, "div", 1);
        ɵɵelementStart(2, "div", 2);
        ɵɵelementStart(3, "div", 3);
        ɵɵtemplate(4, MainComponent_button_4_Template, 4, 0, "button", 4);
        ɵɵtemplate(5, MainComponent_button_5_Template, 4, 0, "button", 4);
        ɵɵtemplate(6, MainComponent_button_6_Template, 4, 0, "button", 4);
        ɵɵtemplate(7, MainComponent_button_7_Template, 4, 1, "button", 4);
        ɵɵelementStart(8, "mat-menu", null, 5);
        ɵɵelementStart(10, "button", 6);
        ɵɵlistener("click", function MainComponent_Template_button_click_10_listener() { return ctx.datatransferFacade.export("CSV"); });
        ɵɵelementStart(11, "span");
        ɵɵtext(12, "CSV");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(13, "button", 6);
        ɵɵlistener("click", function MainComponent_Template_button_click_13_listener() { return ctx.datatransferFacade.export("JSON"); });
        ɵɵelementStart(14, "span");
        ɵɵtext(15, "JSON");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵtemplate(16, MainComponent_button_16_Template, 4, 1, "button", 7);
        ɵɵtemplate(17, MainComponent_mat_checkbox_17_Template, 3, 2, "mat-checkbox", 8);
        ɵɵelementEnd();
        ɵɵelement(18, "div", 9);
        ɵɵelementStart(19, "div", 3);
        ɵɵtemplate(20, MainComponent_div_20_Template, 2, 1, "div", 1);
        ɵɵtemplate(21, MainComponent_div_21_Template, 2, 1, "div", 1);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(22, "div", 10);
        ɵɵelementStart(23, "div", 11);
        ɵɵelementStart(24, "div", 12);
        ɵɵelementStart(25, "mat-checkbox", 13);
        ɵɵlistener("change", function MainComponent_Template_mat_checkbox_change_25_listener($event) { return ctx.datatransferFacade.toggleVisible($event.checked); });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(26, "div", 14);
        ɵɵtext(27, " Filename ");
        ɵɵelementEnd();
        ɵɵelementStart(28, "div", 15);
        ɵɵtext(29, " Progress ");
        ɵɵelementEnd();
        ɵɵelementStart(30, "div", 16);
        ɵɵelementStart(31, "mat-menu", null, 17);
        ɵɵelementStart(33, "button", 6);
        ɵɵlistener("click", function MainComponent_Template_button_click_33_listener() { return ctx.datatransferFacade.removeSelected(); });
        ɵɵelementStart(34, "mat-icon");
        ɵɵtext(35, "close");
        ɵɵelementEnd();
        ɵɵelementStart(36, "span");
        ɵɵtext(37, "Remove");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(38, "button", 18);
        ɵɵelementStart(39, "mat-icon");
        ɵɵtext(40, "more_vert");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵtemplate(41, MainComponent_ng_template_41_Template, 32, 14, "ng-template", 19);
        ɵɵelementEnd();
        ɵɵelementStart(42, "div", 20);
        ɵɵelement(43, "amd-pagination", 21);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r10 = ɵɵreference(32);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.config.core.showUploadDropzone);
        ɵɵadvance(3);
        ɵɵproperty("ngIf", ctx.datatransferFacade.showStartButton());
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.datatransferFacade.showPauseButton());
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.datatransferFacade.showRemoveButton());
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.datatransferFacade.showRetryButton());
        ɵɵadvance(9);
        ɵɵproperty("ngIf", ctx.datatransferFacade.showExportButton());
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.datatransferFacade.showPreprocessingCheckbox());
        ɵɵadvance(3);
        ɵɵproperty("ngIf", ctx.uploadProgress.percent > 0);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.downloadProgress.percent > 0);
        ɵɵadvance(17);
        ɵɵproperty("matMenuTriggerFor", _r10);
        ɵɵadvance(3);
        ɵɵproperty("ngForOf", ctx.paginationService.paginatedItems);
        ɵɵadvance(2);
        ɵɵproperty("paginationService", ctx.paginationService);
    } }, directives: [NgIf, DefaultLayoutDirective, DefaultFlexDirective, MatMenu, MatMenuItem, MatCheckbox, DefaultShowHideDirective, MatIcon, MatButton, MatMenuTrigger, NgForOf, PaginationComponent, DropzoneComponent, NgControlStatus, NgModel, MatTooltip, ProgressComponent, NgClass, DefaultClassDirective, MatProgressSpinner, MatProgressBar], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(MainComponent, [{
        type: Component,
        args: [{
                // tslint:disable-next-line:component-selector
                selector: 'amd-main',
                templateUrl: './main.component.html'
            }]
    }], function () { return [{ type: DatatransferStore }, { type: PaginationService }]; }, { datatransferFacade: [{
            type: Input
        }] }); })();

class BaseExporter {
    constructor(logger, store) {
        this.logger = logger;
        this.store = store;
    }
    download(content, fileName, mimeType) {
        let a = document.createElement('a');
        mimeType = mimeType || 'application/octet-stream';
        if (navigator.msSaveBlob) { // IE10
            navigator.msSaveBlob(new Blob([content], {
                type: mimeType
            }), fileName);
        }
        else if (URL && 'download' in a) {
            a.href = URL.createObjectURL(new Blob([content], {
                type: mimeType
            }));
            a.setAttribute('download', fileName);
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
        else {
            location.href = 'data:application/octet-stream,' + encodeURIComponent(content); // only this mime type is supported
        }
    }
}
BaseExporter.ɵfac = function BaseExporter_Factory(t) { return new (t || BaseExporter)(ɵɵinject(LoggerService), ɵɵinject(DatatransferStore)); };
BaseExporter.ɵprov = ɵɵdefineInjectable({ token: BaseExporter, factory: BaseExporter.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(BaseExporter, [{
        type: Injectable
    }], function () { return [{ type: LoggerService }, { type: DatatransferStore }]; }, null); })();

class CsvExporter extends BaseExporter {
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
CsvExporter.ɵfac = function CsvExporter_Factory(t) { return new (t || CsvExporter)(ɵɵinject(LoggerService), ɵɵinject(DatatransferStore)); };
CsvExporter.ɵprov = ɵɵdefineInjectable({ token: CsvExporter, factory: CsvExporter.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(CsvExporter, [{
        type: Injectable
    }], function () { return [{ type: LoggerService }, { type: DatatransferStore }]; }, null); })();

class JsonExporter extends BaseExporter {
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
JsonExporter.ɵfac = function JsonExporter_Factory(t) { return new (t || JsonExporter)(ɵɵinject(LoggerService), ɵɵinject(DatatransferStore)); };
JsonExporter.ɵprov = ɵɵdefineInjectable({ token: JsonExporter, factory: JsonExporter.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(JsonExporter, [{
        type: Injectable
    }], function () { return [{ type: LoggerService }, { type: DatatransferStore }]; }, null); })();

var ExportType;
(function (ExportType) {
    ExportType[ExportType["CSV"] = 0] = "CSV";
    ExportType[ExportType["JSON"] = 1] = "JSON";
})(ExportType || (ExportType = {}));

class ExportService {
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
ExportService.ɵfac = function ExportService_Factory(t) { return new (t || ExportService)(ɵɵinject(CsvExporter), ɵɵinject(JsonExporter)); };
ExportService.ɵprov = ɵɵdefineInjectable({ token: ExportService, factory: ExportService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ExportService, [{
        type: Injectable
    }], function () { return [{ type: CsvExporter }, { type: JsonExporter }]; }, null); })();

class PreprocessContainer {
    constructor(init) {
        this.percent = 0;
        this._isPaused = false;
        this._isCancelled = false;
        Object.assign(this, init);
    }
    pause(pause) {
        this._isPaused = pause;
    }
    isPaused() {
        return this._isPaused;
    }
    cancel(cancel) {
        this._isCancelled = cancel;
    }
    isCancelled() {
        return this._isCancelled;
    }
    doWork() {
    }
    run() {
        this._isPaused = false;
        this.doWork();
    }
}

var HashType;
(function (HashType) {
    HashType[HashType["MD5"] = 0] = "MD5";
    HashType[HashType["SHA1"] = 1] = "SHA1";
})(HashType || (HashType = {}));
var HashTypeImplementation;
(function (HashTypeImplementation) {
    HashTypeImplementation[HashTypeImplementation["Internal"] = 0] = "Internal";
    HashTypeImplementation[HashTypeImplementation["CryptoBrowserify"] = 1] = "CryptoBrowserify";
})(HashTypeImplementation || (HashTypeImplementation = {}));
// tslint:disable-next-line: no-namespace
var HashTypeExtensions;
(function (HashTypeExtensions) {
    function toString(hashTypeImplementation, hashType) {
        switch (hashType) {
            case HashType.MD5:
                return 'md5';
            case HashType.SHA1:
                return 'sha1';
            default:
                return 'sha1';
        }
    }
    HashTypeExtensions.toString = toString;
    function toEnum(hashTypeImplementation, hashType) {
        switch (hashType) {
            case 'md5':
                return HashType.MD5;
            case 'sha1':
                return HashType.SHA1;
            default:
                return HashType.SHA1;
        }
    }
    HashTypeExtensions.toEnum = toEnum;
})(HashTypeExtensions || (HashTypeExtensions = {}));

var EncodingType;
(function (EncodingType) {
    EncodingType[EncodingType["Latin1"] = 0] = "Latin1";
    EncodingType[EncodingType["Hex"] = 1] = "Hex";
    EncodingType[EncodingType["Base64"] = 2] = "Base64";
    EncodingType[EncodingType["UTF8"] = 3] = "UTF8";
})(EncodingType || (EncodingType = {}));
var EncodingTypeImplementation;
(function (EncodingTypeImplementation) {
    EncodingTypeImplementation[EncodingTypeImplementation["Internal"] = 0] = "Internal";
    EncodingTypeImplementation[EncodingTypeImplementation["CryptoBrowserify"] = 1] = "CryptoBrowserify";
})(EncodingTypeImplementation || (EncodingTypeImplementation = {}));
// tslint:disable-next-line: no-namespace
var EncodingTypeExtensions;
(function (EncodingTypeExtensions) {
    function toString(encodingTypeImplementation, encodingType) {
        switch (encodingType) {
            case EncodingType.Latin1:
                return 'latin1';
            case EncodingType.Hex:
                return 'hex';
            case EncodingType.Base64:
                return 'base64';
            case EncodingType.UTF8:
                return 'utf8';
            default:
                return 'hex';
        }
    }
    EncodingTypeExtensions.toString = toString;
    function toEnum(encodingTypeImplementation, encodingType) {
        switch (encodingType) {
            case 'latin1':
                return EncodingType.Latin1;
            case 'hex':
                return EncodingType.Hex;
            case 'base64':
                return EncodingType.Base64;
            case 'utf8':
                return EncodingType.UTF8;
            default:
                return EncodingType.Hex;
        }
    }
    EncodingTypeExtensions.toEnum = toEnum;
})(EncodingTypeExtensions || (EncodingTypeExtensions = {}));

class HashContainer extends PreprocessContainer {
    constructor(file, hashTypeImplementation, encodingTypeImplementation, hashType, encodingType, inputEncodingType) {
        super();
        this.file = file;
        this.hashType = hashType;
        this.hashTypeString = HashTypeExtensions.toString(hashTypeImplementation, hashType);
        this.encodingType = encodingType;
        this.encodingTypeString = EncodingTypeExtensions.toString(encodingTypeImplementation, encodingType);
        this.inputEncodingType = inputEncodingType;
        this.inputEncodingTypeString = EncodingTypeExtensions.toString(encodingTypeImplementation, inputEncodingType);
        this.startDate = new Date();
        this.endDate = new Date();
        this.reader = new FileReader();
    }
}
class StreamHashContainer extends HashContainer {
    constructor(file, hashTypeImplementation, encodingTypeImplementation, hashType, encodingType, inputEncodingType) {
        super(file, hashTypeImplementation, encodingTypeImplementation, hashType, encodingType, inputEncodingType);
        this.chunkSize = 0;
        this.offset = 0;
    }
    cancel(cancel) {
        super.cancel(cancel);
        this.offset = 0;
    }
}

class BaseDatatransfer {
    constructor(logger, guidUtil, cryptoService) {
        this.logger = logger;
        this.guidUtil = guidUtil;
        this.cryptoService = cryptoService;
        this.events = [];
        this._isWorking = false;
    }
    on(event, callback) {
        this.events.push(event.toLowerCase(), callback);
    }
    fire(...args) {
        const event = args[0].toLowerCase();
        // Find event listeners, and support pseudo-event `catchAll`
        for (let i = 0; i <= this.events.length; i += 2) {
            if (this.events[i] === event) {
                this.events[i + 1].apply(this, args.slice(1));
            }
            if (this.events[i] === 'catchall') {
                this.events[i + 1].apply(null, args);
            }
        }
    }
    updateZone() {
        this.fire('zoneUpdated');
    }
    changeItemStatus(item, status, message) {
        this.fire('itemStatusChanged', item, status, message);
    }
    updateItemProgress(item, progress) {
        this.fire('itemProgressUpdated', item, progress);
    }
    updateOverallProgress(transferType, progress) {
        this.fire('overallProgressUpdated', transferType, progress);
    }
    updateOverallSize(size) {
        this.fire('overallSizeUpdated', size);
    }
    isWorking() {
        return this._isWorking;
    }
    addItem(item) {
        this.fire('itemAdded', item);
    }
    generateUniqueIdentifier() {
        return this.guidUtil.createGuid();
    }
    preprocessHash(item, file, continueCallback, cancelCallback) {
        const successCallback = function (container) {
            const that = this;
            if (container.hashString) {
                // const seconds = (container.endDate.getTime() - container.startDate.getTime()) / 1000;
                // console.log('file hashing took ' + seconds + ' seconds');
                const xhr = new XMLHttpRequest();
                const responseHandler = function (e) {
                    // ignore response if container has been cancelled
                    if (!container.isCancelled()) {
                        if (xhr.status === 200) {
                            item.message = xhr.responseText;
                            cancelCallback();
                        }
                        else {
                            continueCallback();
                        }
                    }
                };
                xhr.addEventListener('load', responseHandler, false);
                xhr.addEventListener('error', responseHandler, false);
                xhr.addEventListener('timeout', responseHandler, false);
                let params = [];
                params = params.concat([
                    [ConfigService.settings.core.preprocessHashParameterName, container.hashString],
                    [ConfigService.settings.core.preprocessHashFileNameParameterName, item.name]
                ]
                    .map(function (pair) {
                    return [
                        pair[0], encodeURIComponent(pair[1])
                    ].join('=');
                }));
                xhr.open(ConfigService.settings.core.preprocessHashMethod, ConfigService.settings.core.getTarget('preprocessHash', params));
                xhr.send(null);
            }
            else {
                continueCallback();
            }
        }.bind(this);
        const errorCallback = function (event, container) {
            console.log(event);
            continueCallback();
        };
        if (!item.preprocessContainer.isCancelled() && item.preprocessContainer instanceof StreamHashContainer) {
            // continue
        }
        else {
            const hashType = HashTypeExtensions.toEnum(HashTypeImplementation.Internal, ConfigService.settings.core.preprocessHashFunctionName);
            const encodingType = EncodingTypeExtensions.toEnum(EncodingTypeImplementation.Internal, ConfigService.settings.core.preprocessHashEncodingName);
            const inputEncodingType = EncodingTypeExtensions.toEnum(EncodingTypeImplementation.Internal, ConfigService.settings.core.preprocessHashInputEncodingName);
            item.preprocessContainer = this.cryptoService.createStreamHashContainer(file, hashType, encodingType, inputEncodingType, successCallback, errorCallback);
        }
        // wait for the initial mat-progress-spinner animation to complete
        setTimeout(function () {
            item.preprocessContainer.run();
        }, 1000);
    }
}

class BaseUploader extends BaseDatatransfer {
    constructor(logger, guidUtil, cryptoService) {
        super(logger, guidUtil, cryptoService);
        this.logger = logger;
        this.guidUtil = guidUtil;
        this.cryptoService = cryptoService;
        this.filenameRegExp = new RegExp('[\/\\\\*?"<>:|]');
        this.pathRegExp = new RegExp('[*?"<>:|]');
        this.transferType = TransferType.Upload;
    }
    editPath(oldPath, newPath) {
        if (this.pathRegExp.test(newPath)) {
            throw new Error('A path cannot contain any of the following characters: * ? " < > : |');
        }
    }
    editFilename(item, name) {
        if (!item) {
            throw new Error('Cannot edit the filename.');
        }
        if (!name) {
            throw new Error('Empty filename is not allowed.');
        }
        if (this.filenameRegExp.test(name)) {
            throw new Error('A filename cannot contain any of the following characters: \\ / * ? " < > : |');
        }
    }
}

class GuidUtil {
    createGuid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }
}
GuidUtil.ɵfac = function GuidUtil_Factory(t) { return new (t || GuidUtil)(); };
GuidUtil.ɵprov = ɵɵdefineInjectable({ token: GuidUtil, factory: GuidUtil.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(GuidUtil, [{
        type: Injectable
    }], null, null); })();

class CryptoService {
    constructor(zone) {
        this.zone = zone;
        // hash 4MB at a time
        this.STREAM_HASH_CHUNK_SIZE = 1024 * 1000 * 4;
        this.HASH_TYPE_IMPLEMENTATION = HashTypeImplementation.CryptoBrowserify;
        this.ENCODING_TYPE_IMPLEMENTATION = EncodingTypeImplementation.CryptoBrowserify;
        // Performance remains unchanged by running the hash function outside of Angular.
        // this.zone.runOutsideAngular(() => { }
    }
    createHashContainer(file, hashType, encodingType, inputEncodingType) {
        const container = new HashContainer(file, this.HASH_TYPE_IMPLEMENTATION, this.ENCODING_TYPE_IMPLEMENTATION, hashType, encodingType, inputEncodingType);
        container.hash = createHash(container.hashTypeString);
        container.reader.onload = function (event) {
            container.hashString = container.hash.update(event.target.result, container.inputEncodingTypeString)
                .digest(container.encodingTypeString);
            container.endDate = new Date();
            container.percent = 100;
        }.bind(container);
        container.doWork = function () {
            container.reader.readAsBinaryString(container.file);
        };
        return container;
    }
    createStreamHashContainer(file, hashType, encodingType, inputEncodingType, successCallback, errorCallback) {
        const container = new StreamHashContainer(file, this.HASH_TYPE_IMPLEMENTATION, this.ENCODING_TYPE_IMPLEMENTATION, hashType, encodingType, inputEncodingType);
        container.chunkSize = this.STREAM_HASH_CHUNK_SIZE;
        container.offset = 0;
        container.hash = createHash(container.hashTypeString);
        container.reader.onload = function (event) {
            const binary = event.target.result;
            if (container.offset + container.chunkSize >= container.file.size) {
                container.hash.end(binary, container.inputEncodingTypeString);
            }
            else {
                container.hash.write(binary, container.inputEncodingTypeString);
            }
            container.offset += container.chunkSize;
            container.doWork();
        }.bind(container);
        container.reader.onerror = function (event) {
            errorCallback(event, container);
        };
        container.doWork = function () {
            if (!container.isCancelled() && !container.isPaused()) {
                if (container.offset > container.file.size) {
                    container.hashString = container.hash.read().toString(container.encodingTypeString);
                    container.endDate = new Date();
                    container.percent = 100;
                    successCallback(container);
                    return;
                }
                const slice = container.file.slice(container.offset, container.offset + container.chunkSize);
                container.reader.readAsBinaryString(slice);
                container.percent = Math.round(container.offset / file.size * 100);
            }
        };
        return container;
    }
}
CryptoService.ɵfac = function CryptoService_Factory(t) { return new (t || CryptoService)(ɵɵinject(NgZone)); };
CryptoService.ɵprov = ɵɵdefineInjectable({ token: CryptoService, factory: CryptoService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(CryptoService, [{
        type: Injectable
    }], function () { return [{ type: NgZone }]; }, null); })();

class DatatransferItem {
    constructor(init) {
        this.sizeContainer = new SizeContainer();
        this.preprocessContainer = new PreprocessContainer();
        this.progressContainer = new ProgressContainer(0);
        Object.assign(this, init);
    }
    get path() {
        return this._path;
    }
    set path(newPath) {
        this._path = newPath;
        this.displayPath = newPath;
        if (this.displayPath) {
            // remove last character
            if (this.displayPath.endsWith('/')) {
                this.displayPath = this.displayPath.slice(0, -1);
            }
            // replace all '/' with ' > '
            this.displayPath = this.displayPath.replace(/\//g, ' > ');
        }
    }
    get message() {
        return this._message;
    }
    set message(newMessage) {
        this._message = newMessage.toLowerCase().startsWith('<!doctype html') ? undefined : newMessage;
    }
    getStatusName() {
        return TransferStatus[this.status];
    }
    getTransferTypeName() {
        return TransferType[this.transferType];
    }
}

class ResumableJsUploader extends BaseUploader {
    constructor(logger, guidUtil, cryptoService) {
        super(logger, guidUtil, cryptoService);
        this.logger = logger;
        this.guidUtil = guidUtil;
        this.cryptoService = cryptoService;
        this.r = undefined;
        this.preprocessFileFn = undefined;
        this.preprocessChunkFn = undefined;
        this.initResumable();
    }
    initResumable() {
        function generateId(file, event) {
            const that = this;
            return that.generateUniqueIdentifier();
        }
        function preprocessChunkInlineFn(resumableChunk) {
            const that = this;
            if (typeof that.preprocessChunkFn === 'function') {
                that.preprocessChunkFn(resumableChunk);
            }
            else {
                resumableChunk.preprocessFinished();
            }
        }
        function preprocessFileInlineFn(resumableFile) {
            const that = this;
            if (typeof that.preprocessFileFn === 'function') {
                that.changeItemStatus(resumableFile.internalItem, TransferStatus.Preprocessing);
                that.preprocessFileFn(resumableFile);
            }
            else {
                if (ConfigService.settings.core.preprocessHashEnabled && ConfigService.settings.core.preprocessHashChecked) {
                    that.changeItemStatus(resumableFile.internalItem, TransferStatus.Preprocessing);
                    const continueCallback = function () {
                        resumableFile.preprocessFinished();
                    };
                    const cancelCallback = function () {
                        resumableFile.cancel();
                        that.changeItemStatus(resumableFile.internalItem, TransferStatus.Finished, resumableFile.internalItem.message);
                        that.r.uploadNextChunk();
                    };
                    that.preprocessHash(resumableFile.internalItem, resumableFile.file, continueCallback, cancelCallback);
                }
                else {
                    resumableFile.preprocessFinished();
                }
            }
        }
        ConfigService.settings.resumablejs.generateUniqueIdentifier = generateId.bind(this);
        if (typeof ConfigService.settings.resumablejs.preprocess === 'function') {
            // clones the function with '{}' acting as it's new 'this' parameter
            this.preprocessChunkFn = ConfigService.settings.resumablejs.preprocess.bind({});
        }
        ConfigService.settings.resumablejs.preprocess = preprocessChunkInlineFn.bind(this);
        if (typeof ConfigService.settings.resumablejs.preprocessFile === 'function') {
            // clones the function with '{}' acting as it's new 'this' parameter
            this.preprocessFileFn = ConfigService.settings.resumablejs.preprocessFile.bind({});
        }
        ConfigService.settings.resumablejs.preprocessFile = preprocessFileInlineFn.bind(this);
        // @ts-ignore: ignore type checking
        this.r = new Resumable(ConfigService.settings.resumablejs);
        this.r.on('fileAdded', function (file, event) {
            const that = this;
            // that.logger.log('fileAdded', file);
            const newItem = new DatatransferItem({
                id: file.uniqueIdentifier,
                name: file.fileName,
                path: file.relativePath.substr(0, file.relativePath.length - file.fileName.length),
                sizeContainer: new SizeContainer({ decimalByteUnit: DecimalByteUnit.Byte, decimalByteUnitSize: file.size }),
                progressContainer: new ProgressContainer(file.size),
                transferType: TransferType.Upload,
                status: TransferStatus.Ready,
                externalItem: file
            });
            file.internalItem = newItem;
            that.addItem(newItem);
        }.bind(this));
        this.r.on('fileProgress', function (file, message) {
            const that = this;
            // that.logger.log('fileProgress', file.progress());
            that.changeItemStatus(file.internalItem, TransferStatus.Uploading);
            that.updateItemProgress(file.internalItem, file.progress());
            that.updateOverallProgress(that.transferType, that.r.progress());
        }.bind(this));
        this.r.on('fileSuccess', function (file, message) {
            const that = this;
            // that.logger.log('fileSuccess', file);
            that.changeItemStatus(file.internalItem, TransferStatus.Finished, message);
        }.bind(this));
        this.r.on('fileError', function (file, message) {
            const that = this;
            // that.logger.log('fileError', file, message);
            that.changeItemStatus(file.internalItem, TransferStatus.Failed, message);
        }.bind(this));
        this.r.on('uploadStart', function () {
            const that = this;
            // that.logger.log('uploadStart', that.r);
            that._isWorking = true;
            that.updateZone();
            that.updateOverallProgress(that.transferType, that.r.progress());
            that.updateOverallSize(that.r.getSize());
        }.bind(this));
        this.r.on('chunkingComplete', function () {
            const that = this;
            // that.logger.log('chunkingComplete');
        }.bind(this));
        this.r.on('pause', function () {
            const that = this;
            // that.logger.log('pause');
            that._isWorking = false;
            that.updateZone();
        }.bind(this));
        this.r.on('cancel', function () {
            const that = this;
            // that.logger.log('cancel');
            that._isWorking = false;
            that.updateZone();
        }.bind(this));
        this.r.on('complete', function () {
            const that = this;
            // that.logger.log('complete', that.r);
            that._isWorking = false;
            that.updateZone();
        }.bind(this));
    }
    assignBrowse(element, isDirectory) {
        this.r.assignBrowse(element, isDirectory);
    }
    assignDrop(element) {
        this.r.assignDrop(element);
    }
    editPath(oldPath, newPath) {
        super.editPath(oldPath, newPath);
        this.r.files.forEach((file, index) => {
            const internalItem = file.internalItem;
            if (internalItem.status === TransferStatus.Ready && internalItem.path === oldPath) {
                file.relativePath = newPath + file.fileName;
                internalItem.path = newPath;
            }
        });
    }
    editFilename(item, name) {
        super.editFilename(item, name);
        item.externalItem.fileName = name;
        item.externalItem.relativePath = item.path + name;
        item.name = name;
    }
    startAll() {
        this.r.upload();
    }
    pauseAll() {
        // reset preprocessState
        this.r.files.forEach((file, index) => {
            if (file.preprocessState === 1) {
                file.preprocessState = 0;
            }
        });
        this.r.pause();
    }
    removeAll() {
        const tempFiles = this.r.files.slice();
        tempFiles.forEach((file, index) => {
            const that = this;
            that.r.removeFile(file);
        });
        this._isWorking = false;
    }
    removeItem(item) {
        this.r.removeFile(item.externalItem);
        if (this.r.files.length <= 0) {
            this._isWorking = false;
        }
    }
    retryItem(item) {
        item.externalItem.retry();
    }
}
ResumableJsUploader.ɵfac = function ResumableJsUploader_Factory(t) { return new (t || ResumableJsUploader)(ɵɵinject(LoggerService), ɵɵinject(GuidUtil), ɵɵinject(CryptoService)); };
ResumableJsUploader.ɵprov = ɵɵdefineInjectable({ token: ResumableJsUploader, factory: ResumableJsUploader.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ResumableJsUploader, [{
        type: Injectable
    }], function () { return [{ type: LoggerService }, { type: GuidUtil }, { type: CryptoService }]; }, null); })();

class BaseDownloader extends BaseDatatransfer {
    constructor(logger, guidUtil, cryptoService) {
        super(logger, guidUtil, cryptoService);
        this.logger = logger;
        this.guidUtil = guidUtil;
        this.cryptoService = cryptoService;
        this.transferType = TransferType.Download;
    }
}

class CommonUtil {
    each(o, callback) {
        if (typeof (o.length) !== 'undefined') {
            for (let i = 0; i < o.length; i++) {
                // Array or FileList
                if (callback(o[i]) === false) {
                    return;
                }
            }
        }
        else {
            for (let i in o) {
                // Object
                if (callback(i, o[i]) === false) {
                    return;
                }
            }
        }
    }
}
CommonUtil.ɵfac = function CommonUtil_Factory(t) { return new (t || CommonUtil)(); };
CommonUtil.ɵprov = ɵɵdefineInjectable({ token: CommonUtil, factory: CommonUtil.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(CommonUtil, [{
        type: Injectable
    }], null, null); })();

class BlobDownloader extends BaseDownloader {
    constructor(logger, guidUtil, cryptoService, commonUtil) {
        super(logger, guidUtil, cryptoService);
        this.logger = logger;
        this.guidUtil = guidUtil;
        this.cryptoService = cryptoService;
        this.commonUtil = commonUtil;
        this.throttleProgressCallbacks = 0.1;
        this.files = [];
        this.queue = [];
        this.downloading = [];
    }
    startAll() {
        if (!this.isWorking()) {
            for (let index = 0; index < ConfigService.settings.core.simultaneousDownloads; index++) {
                this.downloadNext();
            }
        }
    }
    pauseAll() { }
    removeAll() {
        this.files.forEach((item, index) => {
            const that = this;
            that.abortDownload(item);
        });
        this.files.length = 0;
        this.queue.length = 0;
        this.downloading.length = 0;
        this._isWorking = false;
        this.updateOverallSize(this.getSize());
        this.updateOverallProgress(this.transferType, this.getProgress());
    }
    removeItem(item) {
        this.abortDownload(item);
        this.removeItemFromArray(item, this.files);
        this.removeItemFromArray(item, this.queue);
        this.removeItemFromArray(item, this.downloading);
        this.downloadNext();
    }
    removeItemFromArray(item, array) {
        for (let i = array.length - 1; i >= 0; i--) {
            if (array[i] === item) {
                array.splice(i, 1);
                break;
            }
        }
    }
    retryItem(item) {
        this.abortDownload(item);
        this.removeItemFromArray(item, this.queue);
        this.removeItemFromArray(item, this.downloading);
        this._isWorking = this.downloading.length > 0;
        item.externalItem.progress = 0;
        this.updateItemProgress(item, item.externalItem.progress);
        this.changeItemStatus(item, TransferStatus.Queued);
        this.queue.push(item);
        this.initDownload(item);
        this.downloadNext();
    }
    download(filename, url, sizeInBytes) {
        const newItem = new DatatransferItem({
            id: this.generateUniqueIdentifier(),
            name: filename,
            sizeContainer: new SizeContainer({
                decimalByteUnit: DecimalByteUnit.Byte,
                decimalByteUnitSize: sizeInBytes,
            }),
            progressContainer: new ProgressContainer(sizeInBytes),
            transferType: TransferType.Download,
            status: TransferStatus.Queued,
            externalItem: {
                url,
                progress: 0,
                size: sizeInBytes,
                lastProgressCallback: new Date(),
            },
        });
        this.addItem(newItem);
        this.files.push(newItem);
        this.queue.push(newItem);
        this.initDownload(newItem);
        this.downloadNext();
    }
    initDownload(item) {
        const xhr = new XMLHttpRequest();
        item.externalItem.xhr = xhr;
        xhr.open(ConfigService.settings.core.downloadMethod, item.externalItem.url);
        xhr.timeout = ConfigService.settings.core.downloadXhrTimeout;
        xhr.withCredentials = ConfigService.settings.core.downloadWithCredentials;
        // Add data from header options
        let customHeaders = ConfigService.settings.core.downloadHeaders;
        if (typeof customHeaders === "function") {
            customHeaders = customHeaders(item);
        }
        this.commonUtil.each(customHeaders, function (k, v) {
            xhr.setRequestHeader(k, v);
        });
        xhr.responseType = "blob";
        xhr.onloadstart = function (e) {
            const that = this;
            that.changeItemStatus(item, TransferStatus.Downloading);
        }.bind(this);
        xhr.onprogress = function (e) {
            const that = this;
            if (new Date().getTime() -
                item.externalItem.lastProgressCallback.getTime() >
                that.throttleProgressCallbacks * 1000) {
                item.externalItem.progress = e.loaded / e.total;
                that.updateItemProgress(item, item.externalItem.progress);
                that.updateOverallProgress(that.transferType, that.getProgress());
                item.externalItem.lastProgressCallback = new Date();
            }
        }.bind(this);
        xhr.onloadend = function (e) {
            /*
                  Value	State	Description
                  0	UNSENT	Client has been created. open() not called yet.
                  1	OPENED	open() has been called.
                  2	HEADERS_RECEIVED	send() has been called, and headers and status are available.
                  3	LOADING	Downloading; responseText holds partial data.
                  4	DONE	The operation is complete.
                  */
            const that = this;
            if (xhr.readyState === 4) {
                item.externalItem.progress = 1;
                that.updateItemProgress(item, item.externalItem.progress);
                if (xhr.status === 200) {
                    that.changeItemStatus(item, TransferStatus.Finished);
                    if (ConfigService.settings.core.saveDownloadFileAs) {
                        ConfigService.settings.core.saveDownloadFileAs(xhr.response, item.name);
                    }
                    else {
                        saveAs(xhr.response, item.name);
                    }
                }
                else if (xhr.status !== 0) {
                    // don't change status for aborted items
                    that.changeItemStatus(item, TransferStatus.Failed);
                }
                that.removeItemFromArray(item, that.downloading);
                that.downloadNext();
            }
        }.bind(this);
    }
    downloadNext() {
        this.updateOverallSize(this.getSize());
        this.updateOverallProgress(this.transferType, this.getProgress());
        if (this.downloading.length <
            ConfigService.settings.core.simultaneousDownloads) {
            const item = this.queue.shift();
            if (!!item && !!item.externalItem && !!item.externalItem.xhr) {
                this.changeItemStatus(item, TransferStatus.Downloading);
                this.downloading.push(item);
                this._isWorking = this.downloading.length > 0;
                item.externalItem.xhr.send();
            }
        }
    }
    abortDownload(item) {
        if (!!item && !!item.externalItem && !!item.externalItem.xhr) {
            item.externalItem.xhr.abort();
            item.externalItem.xhr = null;
        }
    }
    getSize() {
        let totalSize = 0;
        this.files.forEach((file, index) => {
            totalSize += file.externalItem.size;
        });
        return totalSize;
    }
    getProgress() {
        let totalDone = 0;
        let totalSize = 0;
        this.files.forEach((file, index) => {
            let currentFileProgress = file.externalItem.progress;
            if (file.status === TransferStatus.Failed) {
                currentFileProgress = 1;
            }
            totalDone += currentFileProgress * file.externalItem.size;
            totalSize += file.externalItem.size;
        });
        return totalSize > 0 ? totalDone / totalSize : 0;
    }
}
BlobDownloader.ɵfac = function BlobDownloader_Factory(t) { return new (t || BlobDownloader)(ɵɵinject(LoggerService), ɵɵinject(GuidUtil), ɵɵinject(CryptoService), ɵɵinject(CommonUtil)); };
BlobDownloader.ɵprov = ɵɵdefineInjectable({ token: BlobDownloader, factory: BlobDownloader.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(BlobDownloader, [{
        type: Injectable
    }], function () { return [{ type: LoggerService }, { type: GuidUtil }, { type: CryptoService }, { type: CommonUtil }]; }, null); })();

class DatatransferFacadeFactory {
    constructor(logger, zone, store, dateUtil, paginationService, exportService, dialog, resumableUploader, blobDownloader) {
        this.logger = logger;
        this.zone = zone;
        this.store = store;
        this.dateUtil = dateUtil;
        this.paginationService = paginationService;
        this.exportService = exportService;
        this.dialog = dialog;
        this.resumableUploader = resumableUploader;
        this.blobDownloader = blobDownloader;
    }
    // TODO: pass arguments to define which uploader/downloader implementation should be used
    createDatatransferFacade() {
        if (!this.facade1) {
            this.facade1 = new DatatransferFacade(this.logger, this.zone, this.store, this.dateUtil, this.paginationService, this.exportService, this.resumableUploader, this.blobDownloader, this.dialog);
        }
        return this.facade1;
    }
}
DatatransferFacadeFactory.ɵfac = function DatatransferFacadeFactory_Factory(t) { return new (t || DatatransferFacadeFactory)(ɵɵinject(LoggerService), ɵɵinject(NgZone), ɵɵinject(DatatransferStore), ɵɵinject(DateUtil), ɵɵinject(PaginationService), ɵɵinject(ExportService), ɵɵinject(MatDialog), ɵɵinject(ResumableJsUploader), ɵɵinject(BlobDownloader)); };
DatatransferFacadeFactory.ɵprov = ɵɵdefineInjectable({ token: DatatransferFacadeFactory, factory: DatatransferFacadeFactory.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(DatatransferFacadeFactory, [{
        type: Injectable
    }], function () { return [{ type: LoggerService }, { type: NgZone }, { type: DatatransferStore }, { type: DateUtil }, { type: PaginationService }, { type: ExportService }, { type: MatDialog }, { type: ResumableJsUploader }, { type: BlobDownloader }]; }, null); })();

function AngularMaterialDatatransferComponent_ng_template_1_Template(rf, ctx) { }
class AngularMaterialDatatransferComponent {
    constructor(componentFactoryResolver, datatransferFacadeFactory, configService, paginationService) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.datatransferFacadeFactory = datatransferFacadeFactory;
        this.configService = configService;
        this.paginationService = paginationService;
    }
    ngOnInit() {
        document.dispatchEvent(new Event(CustomEventTypeExtensions.toString(CustomEventType.INIT)));
    }
    create(config) {
        this.setConfig(config);
    }
    setConfig(config) {
        this.configService.load(config);
        this.paginationService.setRppOptions(ConfigService.settings.core.paginationRppOptions);
        this.datatransferFacade = this.datatransferFacadeFactory.createDatatransferFacade();
        const viewContainerRef = this.amdHost.viewContainerRef;
        viewContainerRef.clear();
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(MainComponent);
        const componentRef = viewContainerRef.createComponent(componentFactory);
        const componentRefInstance = componentRef.instance;
        componentRefInstance.datatransferFacade = this.datatransferFacade;
    }
    download(filename, url, size) {
        this.datatransferFacade.download(filename, url, size);
    }
}
AngularMaterialDatatransferComponent.ɵfac = function AngularMaterialDatatransferComponent_Factory(t) { return new (t || AngularMaterialDatatransferComponent)(ɵɵdirectiveInject(ComponentFactoryResolver), ɵɵdirectiveInject(DatatransferFacadeFactory), ɵɵdirectiveInject(ConfigService), ɵɵdirectiveInject(PaginationService)); };
AngularMaterialDatatransferComponent.ɵcmp = ɵɵdefineComponent({ type: AngularMaterialDatatransferComponent, selectors: [["angular-material-datatransfer-lib"]], viewQuery: function AngularMaterialDatatransferComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(HostDirective, 3);
    } if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.amdHost = _t.first);
    } }, decls: 2, vars: 0, consts: [[1, "angular-material-datatransfer"], ["amd-host", ""]], template: function AngularMaterialDatatransferComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵtemplate(1, AngularMaterialDatatransferComponent_ng_template_1_Template, 0, 0, "ng-template", 1);
        ɵɵelementEnd();
    } }, directives: [HostDirective], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(AngularMaterialDatatransferComponent, [{
        type: Component,
        args: [{
                // tslint:disable-next-line:component-selector
                selector: 'angular-material-datatransfer-lib',
                templateUrl: './angular-material-datatransfer.component.html'
            }]
    }], function () { return [{ type: ComponentFactoryResolver }, { type: DatatransferFacadeFactory }, { type: ConfigService }, { type: PaginationService }]; }, { amdHost: [{
            type: ViewChild,
            args: [HostDirective, { static: true }]
        }] }); })();

class DemoService {
    constructor() {
        this.title = 'angular-material-datatransfer';
        this.testItems = [
            new DatatransferItem({
                id: '1',
                name: 'DICOM_patientXY_1.dcm',
                path: '/mnt/sdcard/folder1/a/b/',
                sizeContainer: new SizeContainer({ decimalByteUnit: DecimalByteUnit.MB, decimalByteUnitSize: 15 }),
                progressContainer: new ProgressContainer(15 * 1000 * 1000),
                transferType: TransferType.Upload,
                status: TransferStatus.Uploading
            }),
            new DatatransferItem({
                id: '2',
                name: 'DICOM_patientXY_2.dcm',
                path: '/mnt/sdcard/folder1/a/b/',
                sizeContainer: new SizeContainer({ decimalByteUnit: DecimalByteUnit.MB, decimalByteUnitSize: 17 }),
                transferType: TransferType.Upload,
                status: TransferStatus.Failed
            }),
            new DatatransferItem({
                id: '3',
                name: 'DICOM_patientXY_3.dcm',
                path: '/mnt/sdcard/folder1/a/b/',
                preprocessContainer: new PreprocessContainer({ percent: 30 }),
                sizeContainer: new SizeContainer({ decimalByteUnit: DecimalByteUnit.MB, decimalByteUnitSize: 13 }),
                transferType: TransferType.Upload,
                status: TransferStatus.Preprocessing
            }),
            new DatatransferItem({
                id: '4',
                name: 'DICOM_patientXY_4.dcm',
                path: '/mnt/sdcard/folder1/a/b/',
                sizeContainer: new SizeContainer({ decimalByteUnit: DecimalByteUnit.MB, decimalByteUnitSize: 11 }),
                transferType: TransferType.Upload,
                status: TransferStatus.Queued,
            }),
            new DatatransferItem({
                id: '5',
                name: 'SMIR.Thorax.089Y.M.CT.7.000.dcm.zip',
                path: '/',
                sizeContainer: new SizeContainer({ decimalByteUnit: DecimalByteUnit.GB, decimalByteUnitSize: 2 }),
                transferType: TransferType.Download,
                status: TransferStatus.Queued
            }),
            new DatatransferItem({
                id: '6',
                name: 'NIFTI_patientXY.nii',
                path: '/mnt/sdcard/folder2/d/',
                sizeContainer: new SizeContainer({ decimalByteUnit: DecimalByteUnit.GB, decimalByteUnitSize: 12 }),
                transferType: TransferType.Upload,
                status: TransferStatus.Queued,
            })
        ];
    }
}
DemoService.ɵfac = function DemoService_Factory(t) { return new (t || DemoService)(); };
DemoService.ɵprov = ɵɵdefineInjectable({ token: DemoService, factory: DemoService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(DemoService, [{
        type: Injectable
    }], null, null); })();

class AngularMaterialDatatransferModule {
    constructor(appRef) {
        this.appRef = appRef;
    }
}
AngularMaterialDatatransferModule.ɵmod = ɵɵdefineNgModule({ type: AngularMaterialDatatransferModule });
AngularMaterialDatatransferModule.ɵinj = ɵɵdefineInjector({ factory: function AngularMaterialDatatransferModule_Factory(t) { return new (t || AngularMaterialDatatransferModule)(ɵɵinject(ApplicationRef)); }, providers: [
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
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(AngularMaterialDatatransferModule, { declarations: [AngularMaterialDatatransferComponent,
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(AngularMaterialDatatransferModule, [{
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
    }], function () { return [{ type: ApplicationRef }]; }, null); })();

/*
 * Public API Surface of angular-material-datatransfer
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AngularMaterialDatatransferComponent, AngularMaterialDatatransferModule, DatatransferStore };
//# sourceMappingURL=angular-material-datatransfer-lib.js.map
