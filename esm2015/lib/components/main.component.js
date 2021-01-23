import { Component, Input } from '@angular/core';
import { DatatransferFacade } from '../facades/datatransfer.facade';
import { ConfigService } from '../services/config.service';
import { PaginationService } from '../services/pagination.service';
import { DatatransferStore } from '../stores/datatransfer.store';
import * as i0 from "@angular/core";
import * as i1 from "../stores/datatransfer.store";
import * as i2 from "../services/pagination.service";
import * as i3 from "@angular/common";
import * as i4 from "@angular/flex-layout/flex";
import * as i5 from "@angular/material/menu";
import * as i6 from "@angular/material/checkbox";
import * as i7 from "@angular/flex-layout/extended";
import * as i8 from "@angular/material/icon";
import * as i9 from "@angular/material/button";
import * as i10 from "./pagination.component";
import * as i11 from "./dropzone.component";
import * as i12 from "@angular/forms";
import * as i13 from "@angular/material/tooltip";
import * as i14 from "./progress.component";
import * as i15 from "@angular/material/progress-spinner";
import * as i16 from "@angular/material/progress-bar";
function MainComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "amd-dropzone");
    i0.ɵɵelementEnd();
} }
function MainComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 22);
    i0.ɵɵlistener("click", function MainComponent_button_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r13); const ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.datatransferFacade.startAll(); });
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2, "play_arrow");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, " Start ");
    i0.ɵɵelementEnd();
} }
function MainComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 22);
    i0.ɵɵlistener("click", function MainComponent_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r15); const ctx_r14 = i0.ɵɵnextContext(); return ctx_r14.datatransferFacade.pauseAll(); });
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2, "pause");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, " Pause ");
    i0.ɵɵelementEnd();
} }
function MainComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 22);
    i0.ɵɵlistener("click", function MainComponent_button_6_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r17); const ctx_r16 = i0.ɵɵnextContext(); return ctx_r16.datatransferFacade.removeAll(); });
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2, "close");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, " Remove all ");
    i0.ɵɵelementEnd();
} }
function MainComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 22);
    i0.ɵɵlistener("click", function MainComponent_button_7_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r19); const ctx_r18 = i0.ɵɵnextContext(); return ctx_r18.datatransferFacade.retryAll(); });
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2, "refresh");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" Retry (", ctx_r4.datatransferStore.failedCount, ") ");
} }
function MainComponent_button_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 23);
    i0.ɵɵtext(1, " Export ");
    i0.ɵɵelementStart(2, "mat-icon");
    i0.ɵɵtext(3, "expand_more");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r5 = i0.ɵɵreference(9);
    i0.ɵɵproperty("matMenuTriggerFor", _r5);
} }
function MainComponent_mat_checkbox_17_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 26);
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2, "info_outline");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r20 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("matTooltip", ctx_r20.config.core.preprocessHashTooltipContent);
} }
function MainComponent_mat_checkbox_17_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-checkbox", 24);
    i0.ɵɵlistener("ngModelChange", function MainComponent_mat_checkbox_17_Template_mat_checkbox_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r22); const ctx_r21 = i0.ɵɵnextContext(); return ctx_r21.config.core.preprocessHashChecked = $event; });
    i0.ɵɵtext(1, " Preprocessing ");
    i0.ɵɵtemplate(2, MainComponent_mat_checkbox_17_span_2_Template, 3, 1, "span", 25);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngModel", ctx_r7.config.core.preprocessHashChecked);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r7.datatransferFacade.showPreprocessingTooltip());
} }
function MainComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "amd-progress", 27);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("progressContainer", ctx_r8.uploadProgress);
} }
function MainComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "amd-progress", 27);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("progressContainer", ctx_r9.downloadProgress);
} }
function MainComponent_ng_template_41_div_0_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r38 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 44);
    i0.ɵɵlistener("click", function MainComponent_ng_template_41_div_0_button_11_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r38); const item_r23 = i0.ɵɵnextContext(2).$implicit; const ctx_r36 = i0.ɵɵnextContext(); return ctx_r36.datatransferFacade.openEditPathDialog(item_r23); });
    i0.ɵɵelementStart(1, "mat-icon", 45);
    i0.ɵɵtext(2, "edit");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function MainComponent_ng_template_41_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "div", 41);
    i0.ɵɵelementStart(2, "div", 42);
    i0.ɵɵelementStart(3, "div", 43);
    i0.ɵɵelementStart(4, "div", 12);
    i0.ɵɵelementStart(5, "mat-icon");
    i0.ɵɵtext(6, "folder_open");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 3);
    i0.ɵɵelementStart(8, "span");
    i0.ɵɵelementStart(9, "b");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(11, MainComponent_ng_template_41_div_0_button_11_Template, 3, 0, "button", 34);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r23 = i0.ɵɵnextContext().$implicit;
    const ctx_r25 = i0.ɵɵnextContext();
    i0.ɵɵadvance(10);
    i0.ɵɵtextInterpolate(item_r23.displayPath);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r25.datatransferFacade.showEditDialog(item_r23));
} }
function MainComponent_ng_template_41_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r42 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 44);
    i0.ɵɵlistener("click", function MainComponent_ng_template_41_button_10_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r42); const item_r23 = i0.ɵɵnextContext().$implicit; const ctx_r40 = i0.ɵɵnextContext(); return ctx_r40.datatransferFacade.openEditFilenameDialog(item_r23); });
    i0.ɵɵelementStart(1, "mat-icon", 46);
    i0.ɵɵtext(2, "edit");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function MainComponent_ng_template_41_div_13_mat_progress_spinner_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mat-progress-spinner", 49);
} if (rf & 2) {
    const item_r23 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("diameter", 20)("value", item_r23.preprocessContainer.percent);
} }
function MainComponent_ng_template_41_div_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 47);
    i0.ɵɵtemplate(1, MainComponent_ng_template_41_div_13_mat_progress_spinner_1_Template, 1, 2, "mat-progress-spinner", 48);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r23 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵpropertyInterpolate1("matTooltip", "", item_r23.preprocessContainer.percent, "%");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r23.preprocessContainer.percent > 0);
} }
function MainComponent_ng_template_41_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r23 = i0.ɵɵnextContext().$implicit;
    const ctx_r29 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r29.datatransferFacade.getStatusClass(item_r23.status));
} }
function MainComponent_ng_template_41_div_17_mat_progress_bar_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mat-progress-bar", 55);
} if (rf & 2) {
    const item_r23 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("value", item_r23.progressContainer.percent);
} }
function MainComponent_ng_template_41_div_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "div", 50);
    i0.ɵɵelementStart(2, "div", 51);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 52);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 52);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 53);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(10, MainComponent_ng_template_41_div_17_mat_progress_bar_10_Template, 1, 1, "mat-progress-bar", 54);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r23 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", item_r23.progressContainer.displayBitrate, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", item_r23.progressContainer.displayTimeLeft, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", item_r23.progressContainer.percent, "% ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate3(" ", item_r23.progressContainer.loadedSizeContainer.displaySize, " / ", item_r23.sizeContainer.displaySize, " ", item_r23.sizeContainer.displayUnit, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r23.progressContainer.total > 0);
} }
function MainComponent_ng_template_41_ng_template_18_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "small");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r23 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r50 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r50.datatransferFacade.parseMessage(item_r23));
} }
function MainComponent_ng_template_41_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
    i0.ɵɵtemplate(1, MainComponent_ng_template_41_ng_template_18_div_1_Template, 3, 1, "div", 1);
} if (rf & 2) {
    const item_r23 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵtextInterpolate3(" ", item_r23.getStatusName(), " (", item_r23.sizeContainer.displaySize, " ", item_r23.sizeContainer.displayUnit, ") ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !!item_r23.message);
} }
function MainComponent_ng_template_41_button_23_Template(rf, ctx) { if (rf & 1) {
    const _r55 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 6);
    i0.ɵɵlistener("click", function MainComponent_ng_template_41_button_23_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r55); const item_r23 = i0.ɵɵnextContext().$implicit; const ctx_r53 = i0.ɵɵnextContext(); return ctx_r53.datatransferFacade.retryItem(item_r23); });
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2, "refresh");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4, "Retry");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
const _c0 = function (a0) { return { "selected": a0 }; };
function MainComponent_ng_template_41_Template(rf, ctx) { if (rf & 1) {
    const _r57 = i0.ɵɵgetCurrentView();
    i0.ɵɵtemplate(0, MainComponent_ng_template_41_div_0_Template, 12, 2, "div", 1);
    i0.ɵɵelementStart(1, "div", 28);
    i0.ɵɵlistener("click", function MainComponent_ng_template_41_Template_div_click_1_listener() { i0.ɵɵrestoreView(_r57); const item_r23 = ctx.$implicit; const ctx_r56 = i0.ɵɵnextContext(); return ctx_r56.datatransferFacade.itemClick(item_r23); });
    i0.ɵɵelementStart(2, "div", 29);
    i0.ɵɵelementStart(3, "div", 30);
    i0.ɵɵelementStart(4, "div", 12);
    i0.ɵɵelementStart(5, "mat-checkbox", 31);
    i0.ɵɵlistener("ngModelChange", function MainComponent_ng_template_41_Template_mat_checkbox_ngModelChange_5_listener($event) { const item_r23 = ctx.$implicit; return item_r23.isSelected = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 32);
    i0.ɵɵelementStart(7, "div", 33);
    i0.ɵɵelementStart(8, "span");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(10, MainComponent_ng_template_41_button_10_Template, 3, 0, "button", 34);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 29);
    i0.ɵɵelementStart(12, "div", 30);
    i0.ɵɵtemplate(13, MainComponent_ng_template_41_div_13_Template, 2, 2, "div", 35);
    i0.ɵɵtemplate(14, MainComponent_ng_template_41_ng_template_14_Template, 3, 1, "ng-template", null, 36, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementStart(16, "div", 32);
    i0.ɵɵtemplate(17, MainComponent_ng_template_41_div_17_Template, 11, 7, "div", 37);
    i0.ɵɵtemplate(18, MainComponent_ng_template_41_ng_template_18_Template, 2, 4, "ng-template", null, 38, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "div", 16);
    i0.ɵɵelementStart(21, "mat-menu", null, 39);
    i0.ɵɵtemplate(23, MainComponent_ng_template_41_button_23_Template, 5, 0, "button", 40);
    i0.ɵɵelementStart(24, "button", 6);
    i0.ɵɵlistener("click", function MainComponent_ng_template_41_Template_button_click_24_listener() { i0.ɵɵrestoreView(_r57); const item_r23 = ctx.$implicit; const ctx_r59 = i0.ɵɵnextContext(); return ctx_r59.datatransferFacade.removeItem(item_r23); });
    i0.ɵɵelementStart(25, "mat-icon");
    i0.ɵɵtext(26, "close");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "span");
    i0.ɵɵtext(28, "Remove");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "button", 18);
    i0.ɵɵelementStart(30, "mat-icon");
    i0.ɵɵtext(31, "more_vert");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r23 = ctx.$implicit;
    const i_r24 = ctx.index;
    const _r28 = i0.ɵɵreference(15);
    const _r31 = i0.ɵɵreference(19);
    const _r33 = i0.ɵɵreference(22);
    const ctx_r11 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r11.datatransferFacade.showPath(ctx_r11.paginationService.paginatedItems, i_r24));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(12, _c0, item_r23.isSelected));
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", item_r23.isSelected);
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("matTooltip", item_r23.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r23.name);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r11.datatransferFacade.showEditDialog(item_r23));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r11.datatransferFacade.showSpinner(item_r23))("ngIfElse", _r28);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r11.datatransferFacade.showProgressbar(item_r23))("ngIfElse", _r31);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngIf", ctx_r11.datatransferFacade.showRetryButtonByItem(item_r23));
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("matMenuTriggerFor", _r33);
} }
export class MainComponent {
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
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(i0.ɵɵdirectiveInject(i1.DatatransferStore), i0.ɵɵdirectiveInject(i2.PaginationService)); };
MainComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MainComponent, selectors: [["amd-main"]], inputs: { datatransferFacade: "datatransferFacade" }, decls: 44, vars: 12, consts: [[1, "amd-font"], [4, "ngIf"], ["fxLayout", "row", "fxLayout.lt-sm", "column", 2, "margin-bottom", "10px"], ["fxFlex", ""], ["class", "amd-mr-1", "mat-raised-button", "", 3, "click", 4, "ngIf"], ["exportMenu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["mat-raised-button", "", 3, "matMenuTriggerFor", 4, "ngIf"], ["style", "margin-left: 10px;", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["fxFlex", "70px", "fxFlex.lt-sm", "0px"], [1, "amd-container"], ["fxLayout", "row", 1, "amd-container-header", 2, "align-items", "center"], ["fxFlex", "40px"], [3, "change"], ["fxFlex", "50%", "fxFlex.lt-sm", "100%"], ["fxFlex", "50%", "fxHide.lt-sm", "", 2, "padding-left", "40px"], ["fxFlex", "20px"], ["batchItemMenu", "matMenu"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], ["ngFor", "", 3, "ngForOf"], [2, "font-size", "12px", "margin-top", "20px", "text-align", "right"], [3, "paginationService"], ["mat-raised-button", "", 1, "amd-mr-1", 3, "click"], ["mat-raised-button", "", 3, "matMenuTriggerFor"], [2, "margin-left", "10px", 3, "ngModel", "ngModelChange"], ["class", "amd-vertical-align-middle", "matTooltipPosition", "right", 3, "matTooltip", 4, "ngIf"], ["matTooltipPosition", "right", 1, "amd-vertical-align-middle", 3, "matTooltip"], [3, "progressContainer"], ["fxLayout", "row", "fxLayout.lt-sm", "column", 1, "amd-container-row", 3, "ngClass", "click"], ["fxFlex", "", 1, "amd-container-row-item"], [1, "amd-container-row-item-entry"], [3, "ngModel", "ngModelChange"], ["fxFlex", "100%"], ["matTooltipPosition", "above", 3, "matTooltip"], ["mat-icon-button", "", 3, "click", 4, "ngIf"], ["fxFlex", "40px", 3, "matTooltip", 4, "ngIf", "ngIfElse"], ["showStatusClass", ""], [4, "ngIf", "ngIfElse"], ["showStatusBlock", ""], ["itemMenu", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngIf"], ["fxLayout", "row", 1, "amd-container-headline"], ["fxFlex", "", 1, "amd-container-headline-item"], [1, "amd-container-headline-item-entry"], ["mat-icon-button", "", 3, "click"], ["aria-label", "Edit path"], ["aria-label", "Edit filename"], ["fxFlex", "40px", 3, "matTooltip"], ["mode", "determinate", 3, "diameter", "value", 4, "ngIf"], ["mode", "determinate", 3, "diameter", "value"], [1, "amd-container-row-item-entry-stats"], ["fxFlex", "25%", "fxFlex.lt-md", "50%"], ["fxFlex", "25%", "fxHide.lt-md", "", 2, "text-align", "center"], ["fxFlex", "25%", "fxFlex.lt-md", "50%", 2, "text-align", "right"], ["color", "primary", "mode", "determinate", 3, "value", 4, "ngIf"], ["color", "primary", "mode", "determinate", 3, "value"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, MainComponent_div_1_Template, 2, 0, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵtemplate(4, MainComponent_button_4_Template, 4, 0, "button", 4);
        i0.ɵɵtemplate(5, MainComponent_button_5_Template, 4, 0, "button", 4);
        i0.ɵɵtemplate(6, MainComponent_button_6_Template, 4, 0, "button", 4);
        i0.ɵɵtemplate(7, MainComponent_button_7_Template, 4, 1, "button", 4);
        i0.ɵɵelementStart(8, "mat-menu", null, 5);
        i0.ɵɵelementStart(10, "button", 6);
        i0.ɵɵlistener("click", function MainComponent_Template_button_click_10_listener() { return ctx.datatransferFacade.export("CSV"); });
        i0.ɵɵelementStart(11, "span");
        i0.ɵɵtext(12, "CSV");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "button", 6);
        i0.ɵɵlistener("click", function MainComponent_Template_button_click_13_listener() { return ctx.datatransferFacade.export("JSON"); });
        i0.ɵɵelementStart(14, "span");
        i0.ɵɵtext(15, "JSON");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(16, MainComponent_button_16_Template, 4, 1, "button", 7);
        i0.ɵɵtemplate(17, MainComponent_mat_checkbox_17_Template, 3, 2, "mat-checkbox", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(18, "div", 9);
        i0.ɵɵelementStart(19, "div", 3);
        i0.ɵɵtemplate(20, MainComponent_div_20_Template, 2, 1, "div", 1);
        i0.ɵɵtemplate(21, MainComponent_div_21_Template, 2, 1, "div", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(22, "div", 10);
        i0.ɵɵelementStart(23, "div", 11);
        i0.ɵɵelementStart(24, "div", 12);
        i0.ɵɵelementStart(25, "mat-checkbox", 13);
        i0.ɵɵlistener("change", function MainComponent_Template_mat_checkbox_change_25_listener($event) { return ctx.datatransferFacade.toggleVisible($event.checked); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(26, "div", 14);
        i0.ɵɵtext(27, " Filename ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(28, "div", 15);
        i0.ɵɵtext(29, " Progress ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(30, "div", 16);
        i0.ɵɵelementStart(31, "mat-menu", null, 17);
        i0.ɵɵelementStart(33, "button", 6);
        i0.ɵɵlistener("click", function MainComponent_Template_button_click_33_listener() { return ctx.datatransferFacade.removeSelected(); });
        i0.ɵɵelementStart(34, "mat-icon");
        i0.ɵɵtext(35, "close");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(36, "span");
        i0.ɵɵtext(37, "Remove");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(38, "button", 18);
        i0.ɵɵelementStart(39, "mat-icon");
        i0.ɵɵtext(40, "more_vert");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(41, MainComponent_ng_template_41_Template, 32, 14, "ng-template", 19);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(42, "div", 20);
        i0.ɵɵelement(43, "amd-pagination", 21);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r10 = i0.ɵɵreference(32);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.config.core.showUploadDropzone);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.datatransferFacade.showStartButton());
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.datatransferFacade.showPauseButton());
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.datatransferFacade.showRemoveButton());
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.datatransferFacade.showRetryButton());
        i0.ɵɵadvance(9);
        i0.ɵɵproperty("ngIf", ctx.datatransferFacade.showExportButton());
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.datatransferFacade.showPreprocessingCheckbox());
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.uploadProgress.percent > 0);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.downloadProgress.percent > 0);
        i0.ɵɵadvance(17);
        i0.ɵɵproperty("matMenuTriggerFor", _r10);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.paginationService.paginatedItems);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("paginationService", ctx.paginationService);
    } }, directives: [i3.NgIf, i4.DefaultLayoutDirective, i4.DefaultFlexDirective, i5.MatMenu, i5.MatMenuItem, i6.MatCheckbox, i7.DefaultShowHideDirective, i8.MatIcon, i9.MatButton, i5.MatMenuTrigger, i3.NgForOf, i10.PaginationComponent, i11.DropzoneComponent, i12.NgControlStatus, i12.NgModel, i13.MatTooltip, i14.ProgressComponent, i3.NgClass, i7.DefaultClassDirective, i15.MatProgressSpinner, i16.MatProgressBar], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MainComponent, [{
        type: Component,
        args: [{
                // tslint:disable-next-line:component-selector
                selector: 'amd-main',
                templateUrl: './main.component.html'
            }]
    }], function () { return [{ type: i1.DatatransferStore }, { type: i2.PaginationService }]; }, { datatransferFacade: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hbWQtbGliL3NyYy9saWIvY29tcG9uZW50cy9tYWluLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FtZC1saWIvc3JjL2xpYi9jb21wb25lbnRzL21haW4uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRWhFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRXBFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNuRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0w3RCwyQkFDSTtJQUFBLCtCQUE2QjtJQUNqQyxpQkFBTTs7OztJQUlFLGtDQUVJO0lBREEsK0pBQVMscUNBQTZCLElBQUM7SUFDdkMsZ0NBQVU7SUFBQSwwQkFBVTtJQUFBLGlCQUFXO0lBQUMsdUJBQ3BDO0lBQUEsaUJBQVM7Ozs7SUFDVCxrQ0FFSTtJQURBLCtKQUFTLHFDQUE2QixJQUFDO0lBQ3ZDLGdDQUFVO0lBQUEscUJBQUs7SUFBQSxpQkFBVztJQUFDLHVCQUMvQjtJQUFBLGlCQUFTOzs7O0lBQ1Qsa0NBRUk7SUFEQSwrSkFBUyxzQ0FBOEIsSUFBQztJQUN4QyxnQ0FBVTtJQUFBLHFCQUFLO0lBQUEsaUJBQVc7SUFBQyw0QkFDL0I7SUFBQSxpQkFBUzs7OztJQUNULGtDQUVJO0lBREEsK0pBQVMscUNBQTZCLElBQUM7SUFDdkMsZ0NBQVU7SUFBQSx1QkFBTztJQUFBLGlCQUFXO0lBQUMsWUFDakM7SUFBQSxpQkFBUzs7O0lBRHdCLGVBQ2pDO0lBRGlDLDZFQUNqQzs7O0lBU0Esa0NBQ0k7SUFBQSx3QkFDQTtJQUFBLGdDQUFVO0lBQUEsMkJBQVc7SUFBQSxpQkFBVztJQUNwQyxpQkFBUzs7OztJQUgrRCx1Q0FBZ0M7OztJQU10RixnQ0FHVjtJQUFBLGdDQUFVO0lBQUEsNEJBQVk7SUFBQSxpQkFBVztJQUNyQyxpQkFBTzs7O0lBSCtCLDZFQUF1RDs7OztJQUhqRyx3Q0FFSTtJQURBLHdQQUErQztJQUMvQywrQkFBYztJQUFBLGlGQUlQO0lBQ1gsaUJBQWU7OztJQU5YLGtFQUErQztJQUMxQixlQUFtRDtJQUFuRCwyRUFBbUQ7OztJQVU1RSwyQkFDSTtJQUFBLG1DQUFrRTtJQUN0RSxpQkFBTTs7O0lBRFksZUFBb0M7SUFBcEMseURBQW9DOzs7SUFFdEQsMkJBQ0k7SUFBQSxtQ0FBb0U7SUFDeEUsaUJBQU07OztJQURZLGVBQXNDO0lBQXRDLDJEQUFzQzs7OztJQXdDcEMsa0NBRUk7SUFGb0IscU9BQVMsdURBQTJDLElBQUM7SUFFekUsb0NBQWlDO0lBQUEsb0JBQUk7SUFBQSxpQkFBVztJQUNwRCxpQkFBUzs7O0lBZDdCLDJCQUNJO0lBQUEsK0JBQ0k7SUFBQSwrQkFDSTtJQUFBLCtCQUNJO0lBQUEsK0JBQ0k7SUFBQSxnQ0FBVTtJQUFBLDJCQUFXO0lBQUEsaUJBQVc7SUFDcEMsaUJBQU07SUFDTiw4QkFDSTtJQUFBLDRCQUNJO0lBQUEseUJBQUc7SUFBQSxhQUFvQjtJQUFBLGlCQUFJO0lBQy9CLGlCQUFPO0lBQ1AsNEZBR1M7SUFDYixpQkFBTTtJQUNWLGlCQUFNO0lBQ1YsaUJBQU07SUFDVixpQkFBTTtJQUNWLGlCQUFNOzs7O0lBVnFCLGdCQUFvQjtJQUFwQiwwQ0FBb0I7SUFHdEIsZUFBNkM7SUFBN0MsMEVBQTZDOzs7O0lBa0JsRCxrQ0FFSTtJQUZvQiw4TkFBUywyREFBK0MsSUFBQztJQUU3RSxvQ0FBcUM7SUFBQSxvQkFBSTtJQUFBLGlCQUFXO0lBQ3hELGlCQUFTOzs7SUFTYiwyQ0FDeUY7OztJQUR0Qiw2QkFBZSwrQ0FBQTs7O0lBRnRGLCtCQUVJO0lBQUEsdUhBQ3lGO0lBQzdGLGlCQUFNOzs7SUFKYSxzRkFBa0Q7SUFFMUMsZUFBMEM7SUFBMUMsK0RBQTBDOzs7SUFJakUsK0JBQ0k7SUFBQSxnQ0FBVTtJQUFBLFlBQWtEO0lBQUEsaUJBQVc7SUFDM0UsaUJBQU07Ozs7SUFEUSxlQUFrRDtJQUFsRCxnRkFBa0Q7OztJQXFCNUQsdUNBRW1COzs7SUFESSwwREFBd0M7OztJQWxCbkUsMkJBQ0k7SUFBQSwrQkFDSTtJQUFBLCtCQUNJO0lBQUEsWUFDSjtJQUFBLGlCQUFNO0lBQ04sK0JBQ0k7SUFBQSxZQUNKO0lBQUEsaUJBQU07SUFDTiwrQkFDSTtJQUFBLFlBQ0o7SUFBQSxpQkFBTTtJQUNOLCtCQUNJO0lBQUEsWUFHSjtJQUFBLGlCQUFNO0lBQ1YsaUJBQU07SUFDTixpSEFFbUI7SUFDdkIsaUJBQU07OztJQWpCTSxlQUNKO0lBREksMEVBQ0o7SUFFSSxlQUNKO0lBREksMkVBQ0o7SUFFSSxlQUNKO0lBREksb0VBQ0o7SUFFSSxlQUdKO0lBSEksK0tBR0o7SUFFZSxlQUFzQztJQUF0QywyREFBc0M7OztJQU96RCwyQkFDSTtJQUFBLDZCQUFPO0lBQUEsWUFBeUM7SUFBQSxpQkFBUTtJQUM1RCxpQkFBTTs7OztJQURLLGVBQXlDO0lBQXpDLHVFQUF5Qzs7O0lBSHBELFlBRUE7SUFBQSw0RkFFTTs7O0lBSk4sNklBRUE7SUFBTSxlQUFvQjtJQUFwQix5Q0FBb0I7Ozs7SUFPMUIsaUNBRUk7SUFGa0IsOE5BQVMsOENBQWtDLElBQUM7SUFFOUQsZ0NBQVU7SUFBQSx1QkFBTztJQUFBLGlCQUFXO0lBQzVCLDRCQUFNO0lBQUEscUJBQUs7SUFBQSxpQkFBTztJQUN0QixpQkFBUzs7Ozs7SUF0RjdCLDhFQW1CTTtJQUNOLCtCQUVJO0lBRDBDLGtNQUFTLDhDQUFrQyxJQUFDO0lBQ3RGLCtCQUNJO0lBQUEsK0JBQ0k7SUFBQSwrQkFDSTtJQUFBLHdDQUE0QztJQUE5QixxTUFBNkI7SUFBQyxpQkFBZTtJQUMvRCxpQkFBTTtJQUNOLCtCQUNJO0lBQUEsK0JBQ0k7SUFBQSw0QkFBTTtJQUFBLFlBQWE7SUFBQSxpQkFBTztJQUMxQixzRkFHUztJQUNiLGlCQUFNO0lBQ1YsaUJBQU07SUFDVixpQkFBTTtJQUNWLGlCQUFNO0lBQ04sZ0NBQ0k7SUFBQSxnQ0FDSTtJQUFBLGdGQUlNO0lBQ04saUlBSWM7SUFDZCxnQ0FDSTtJQUFBLGlGQW9CTTtJQUNOLGlJQU1jO0lBQ2xCLGlCQUFNO0lBQ04sZ0NBQ0k7SUFBQSwyQ0FDSTtJQUFBLHNGQUlTO0lBQ1Qsa0NBQ0k7SUFEa0Isc01BQVMsK0NBQW1DLElBQUM7SUFDL0QsaUNBQVU7SUFBQSxzQkFBSztJQUFBLGlCQUFXO0lBQzFCLDZCQUFNO0lBQUEsdUJBQU07SUFBQSxpQkFBTztJQUN2QixpQkFBUztJQUNiLGlCQUFXO0lBQ1gsbUNBQ0k7SUFBQSxpQ0FBVTtJQUFBLDBCQUFTO0lBQUEsaUJBQVc7SUFDbEMsaUJBQVM7SUFDYixpQkFBTTtJQUNWLGlCQUFNO0lBQ1YsaUJBQU07SUFDVixpQkFBTTs7Ozs7Ozs7SUFsR0EsMkdBQXNFO0lBcUJ4RSxlQUF5QztJQUF6QywwRUFBeUM7SUFJZixlQUE2QjtJQUE3Qiw2Q0FBNkI7SUFHdEMsZUFBMEI7SUFBMUIscURBQTBCO0lBQ3JCLGVBQWE7SUFBYixtQ0FBYTtJQUVkLGVBQTZDO0lBQTdDLDBFQUE2QztJQVVyRCxlQUE0QztJQUE1Qyx1RUFBNEMsa0JBQUE7SUFVdkMsZUFBZ0Q7SUFBaEQsMkVBQWdELGtCQUFBO0lBZ0M3QyxlQUFvRDtJQUFwRCxpRkFBb0Q7SUFTckMsZUFBOEI7SUFBOUIsd0NBQThCOztBRC9KbEYsTUFBTSxPQUFPLGFBQWE7SUFTeEIsWUFBbUIsaUJBQW9DLEVBQVMsaUJBQW9DO1FBQWpGLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFBUyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ2xHLElBQUksQ0FBQyxNQUFNLEdBQUcsYUFBYSxDQUFDLFFBQVEsQ0FBQztRQUNyQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUM7UUFDNUQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQztJQUNsRSxDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFFTyxJQUFJO1FBQ1YsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUN2QyxNQUFNLGVBQWUsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLHdCQUF3QixDQUFDLENBQUM7WUFDMUUsSUFBSSxlQUFlLEVBQUU7Z0JBQ25CLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDekgsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxDQUFDO2FBQzNEO1NBQ0Y7YUFBTTtZQUNMLElBQUksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsS0FBSyxXQUFXLEVBQUU7Z0JBQ2pFLE1BQU0sbUJBQW1CLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO2dCQUM1RixJQUFJLG1CQUFtQixFQUFFO29CQUN2QixtQkFBbUIsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztpQkFDOUg7YUFDRjtZQUNELElBQUksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsS0FBSyxXQUFXLEVBQUU7Z0JBQy9ELE1BQU0saUJBQWlCLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO2dCQUN4RixJQUFJLGlCQUFpQixFQUFFO29CQUNyQixJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsQ0FBQztpQkFDN0Q7YUFDRjtTQUNGO0lBQ0gsQ0FBQzs7MEVBeENVLGFBQWE7a0RBQWIsYUFBYTtRQ2IxQiw4QkFDSTtRQUFBLDhEQUVNO1FBRU4sOEJBQ0k7UUFBQSw4QkFDSTtRQUFBLG9FQUdTO1FBQ1Qsb0VBR1M7UUFDVCxvRUFHUztRQUNULG9FQUdTO1FBQ1QseUNBQ0k7UUFBQSxrQ0FDSTtRQURrQiwyRkFBUyw4QkFBMEIsS0FBSyxDQUFDLElBQUM7UUFDNUQsNkJBQU07UUFBQSxvQkFBRztRQUFBLGlCQUFPO1FBQ3BCLGlCQUFTO1FBQ1Qsa0NBQ0k7UUFEa0IsMkZBQVMsOEJBQTBCLE1BQU0sQ0FBQyxJQUFDO1FBQzdELDZCQUFNO1FBQUEscUJBQUk7UUFBQSxpQkFBTztRQUNyQixpQkFBUztRQUNiLGlCQUFXO1FBQ1gsc0VBR1M7UUFDVCxrRkFPZTtRQUNuQixpQkFBTTtRQUNOLDBCQUNNO1FBQ04sK0JBQ0k7UUFBQSxnRUFFTTtRQUNOLGdFQUVNO1FBQ1YsaUJBQU07UUFDVixpQkFBTTtRQUVOLGdDQUNJO1FBQUEsZ0NBQ0k7UUFBQSxnQ0FDSTtRQUFBLHlDQUEwRTtRQUE1RCx5R0FBVSxvREFBZ0QsSUFBQztRQUFDLGlCQUFlO1FBQzdGLGlCQUFNO1FBQ04sZ0NBQ0k7UUFBQSwyQkFDSjtRQUFBLGlCQUFNO1FBQ04sZ0NBQ0k7UUFBQSwyQkFDSjtRQUFBLGlCQUFNO1FBQ04sZ0NBQ0k7UUFBQSwyQ0FDSTtRQUFBLGtDQUNJO1FBRGtCLDJGQUFTLHVDQUFtQyxJQUFDO1FBQy9ELGlDQUFVO1FBQUEsc0JBQUs7UUFBQSxpQkFBVztRQUMxQiw2QkFBTTtRQUFBLHVCQUFNO1FBQUEsaUJBQU87UUFDdkIsaUJBQVM7UUFDYixpQkFBVztRQUNYLG1DQUNJO1FBQUEsaUNBQVU7UUFBQSwwQkFBUztRQUFBLGlCQUFXO1FBQ2xDLGlCQUFTO1FBQ2IsaUJBQU07UUFDVixpQkFBTTtRQUNOLG1GQW9HYztRQUNsQixpQkFBTTtRQUVOLGdDQUNJO1FBQUEsc0NBQXlFO1FBQzdFLGlCQUFNO1FBQ1YsaUJBQU07OztRQXhMSSxlQUFvQztRQUFwQyx5REFBb0M7UUFNVSxlQUEwQztRQUExQywrREFBMEM7UUFJMUMsZUFBMEM7UUFBMUMsK0RBQTBDO1FBSTFDLGVBQTJDO1FBQTNDLGdFQUEyQztRQUkzQyxlQUEwQztRQUExQywrREFBMEM7UUFZM0QsZUFBMkM7UUFBM0MsZ0VBQTJDO1FBSXZELGVBQW9EO1FBQXBELHlFQUFvRDtRQVk3RCxlQUFnQztRQUFoQyxxREFBZ0M7UUFHaEMsZUFBa0M7UUFBbEMsdURBQWtDO1FBd0JaLGdCQUFtQztRQUFuQyx3Q0FBbUM7UUFLdkMsZUFBNEM7UUFBNUMsOERBQTRDO1FBd0d4RCxlQUF1QztRQUF2Qyx5REFBdUM7O3VGRDFLbEQsYUFBYTtjQUx6QixTQUFTO2VBQUM7Z0JBQ1QsOENBQThDO2dCQUM5QyxRQUFRLEVBQUUsVUFBVTtnQkFDcEIsV0FBVyxFQUFFLHVCQUF1QjthQUNyQztvR0FJQyxrQkFBa0I7a0JBRGpCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElBcHBDb25maWcgfSBmcm9tICcuLi9tb2RlbHMvYXBwLWNvbmZpZy5tb2RlbCc7XHJcbmltcG9ydCB7IERhdGF0cmFuc2ZlckZhY2FkZSB9IGZyb20gJy4uL2ZhY2FkZXMvZGF0YXRyYW5zZmVyLmZhY2FkZSc7XHJcbmltcG9ydCB7IElQcm9ncmVzc0NvbnRhaW5lciB9IGZyb20gJy4uL21vZGVscy9wcm9ncmVzcy1jb250YWluZXIubW9kZWwnO1xyXG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY29uZmlnLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQYWdpbmF0aW9uU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3BhZ2luYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IERhdGF0cmFuc2ZlclN0b3JlIH0gZnJvbSAnLi4vc3RvcmVzL2RhdGF0cmFuc2Zlci5zdG9yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdhbWQtbWFpbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL21haW4uY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYWluQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZGF0YXRyYW5zZmVyRmFjYWRlOiBEYXRhdHJhbnNmZXJGYWNhZGU7XHJcblxyXG4gIGNvbmZpZzogSUFwcENvbmZpZztcclxuICB1cGxvYWRQcm9ncmVzczogSVByb2dyZXNzQ29udGFpbmVyO1xyXG4gIGRvd25sb2FkUHJvZ3Jlc3M6IElQcm9ncmVzc0NvbnRhaW5lcjtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIGRhdGF0cmFuc2ZlclN0b3JlOiBEYXRhdHJhbnNmZXJTdG9yZSwgcHVibGljIHBhZ2luYXRpb25TZXJ2aWNlOiBQYWdpbmF0aW9uU2VydmljZSkge1xyXG4gICAgdGhpcy5jb25maWcgPSBDb25maWdTZXJ2aWNlLnNldHRpbmdzO1xyXG4gICAgdGhpcy51cGxvYWRQcm9ncmVzcyA9IHRoaXMuZGF0YXRyYW5zZmVyU3RvcmUudXBsb2FkUHJvZ3Jlc3M7XHJcbiAgICB0aGlzLmRvd25sb2FkUHJvZ3Jlc3MgPSB0aGlzLmRhdGF0cmFuc2ZlclN0b3JlLmRvd25sb2FkUHJvZ3Jlc3M7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmluaXQoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmNvbmZpZy5jb3JlLnNob3dVcGxvYWREcm9wem9uZSkge1xyXG4gICAgICBjb25zdCBkcm9wem9uZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYW1kLWRyb3B6b25lLWNvbXBvbmVudCcpO1xyXG4gICAgICBpZiAoZHJvcHpvbmVFbGVtZW50KSB7XHJcbiAgICAgICAgZHJvcHpvbmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5kYXRhdHJhbnNmZXJGYWNhZGUub3BlbkJyb3dzZURpYWxvZy5iaW5kKHRoaXMuZGF0YXRyYW5zZmVyRmFjYWRlKSwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuZGF0YXRyYW5zZmVyRmFjYWRlLmFzc2lnblVwbG9hZERyb3AoZHJvcHpvbmVFbGVtZW50KTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHR5cGVvZiB0aGlzLmNvbmZpZy5jb3JlLnVwbG9hZEJyb3dzZUVsZW1lbnRJZCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICBjb25zdCB1cGxvYWRCcm93c2VFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5jb25maWcuY29yZS51cGxvYWRCcm93c2VFbGVtZW50SWQpO1xyXG4gICAgICAgIGlmICh1cGxvYWRCcm93c2VFbGVtZW50KSB7XHJcbiAgICAgICAgICB1cGxvYWRCcm93c2VFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5kYXRhdHJhbnNmZXJGYWNhZGUub3BlbkJyb3dzZURpYWxvZy5iaW5kKHRoaXMuZGF0YXRyYW5zZmVyRmFjYWRlKSwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAodHlwZW9mIHRoaXMuY29uZmlnLmNvcmUudXBsb2FkRHJvcEVsZW1lbnRJZCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICBjb25zdCB1cGxvYWREcm9wRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuY29uZmlnLmNvcmUudXBsb2FkRHJvcEVsZW1lbnRJZCk7XHJcbiAgICAgICAgaWYgKHVwbG9hZERyb3BFbGVtZW50KSB7XHJcbiAgICAgICAgICB0aGlzLmRhdGF0cmFuc2ZlckZhY2FkZS5hc3NpZ25VcGxvYWREcm9wKHVwbG9hZERyb3BFbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJhbWQtZm9udFwiPlxyXG4gICAgPGRpdiAqbmdJZj1cImNvbmZpZy5jb3JlLnNob3dVcGxvYWREcm9wem9uZVwiPlxyXG4gICAgICAgIDxhbWQtZHJvcHpvbmU+PC9hbWQtZHJvcHpvbmU+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXQubHQtc209XCJjb2x1bW5cIiBzdHlsZT1cIm1hcmdpbi1ib3R0b206IDEwcHhcIj5cclxuICAgICAgICA8ZGl2IGZ4RmxleD5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImFtZC1tci0xXCIgbWF0LXJhaXNlZC1idXR0b24gKm5nSWY9XCJkYXRhdHJhbnNmZXJGYWNhZGUuc2hvd1N0YXJ0QnV0dG9uKClcIlxyXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImRhdGF0cmFuc2ZlckZhY2FkZS5zdGFydEFsbCgpXCI+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWljb24+cGxheV9hcnJvdzwvbWF0LWljb24+IFN0YXJ0XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYW1kLW1yLTFcIiBtYXQtcmFpc2VkLWJ1dHRvbiAqbmdJZj1cImRhdGF0cmFuc2ZlckZhY2FkZS5zaG93UGF1c2VCdXR0b24oKVwiXHJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwiZGF0YXRyYW5zZmVyRmFjYWRlLnBhdXNlQWxsKClcIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtaWNvbj5wYXVzZTwvbWF0LWljb24+IFBhdXNlXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYW1kLW1yLTFcIiBtYXQtcmFpc2VkLWJ1dHRvbiAqbmdJZj1cImRhdGF0cmFuc2ZlckZhY2FkZS5zaG93UmVtb3ZlQnV0dG9uKClcIlxyXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImRhdGF0cmFuc2ZlckZhY2FkZS5yZW1vdmVBbGwoKVwiPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1pY29uPmNsb3NlPC9tYXQtaWNvbj4gUmVtb3ZlIGFsbFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImFtZC1tci0xXCIgbWF0LXJhaXNlZC1idXR0b24gKm5nSWY9XCJkYXRhdHJhbnNmZXJGYWNhZGUuc2hvd1JldHJ5QnV0dG9uKClcIlxyXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImRhdGF0cmFuc2ZlckZhY2FkZS5yZXRyeUFsbCgpXCI+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWljb24+cmVmcmVzaDwvbWF0LWljb24+IFJldHJ5ICh7e2RhdGF0cmFuc2ZlclN0b3JlLmZhaWxlZENvdW50fX0pXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8bWF0LW1lbnUgI2V4cG9ydE1lbnU9XCJtYXRNZW51XCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0gKGNsaWNrKT1cImRhdGF0cmFuc2ZlckZhY2FkZS5leHBvcnQoJ0NTVicpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+Q1NWPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0gKGNsaWNrKT1cImRhdGF0cmFuc2ZlckZhY2FkZS5leHBvcnQoJ0pTT04nKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPkpTT048L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9tYXQtbWVudT5cclxuICAgICAgICAgICAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiAqbmdJZj1cImRhdGF0cmFuc2ZlckZhY2FkZS5zaG93RXhwb3J0QnV0dG9uKClcIiBbbWF0TWVudVRyaWdnZXJGb3JdPVwiZXhwb3J0TWVudVwiPlxyXG4gICAgICAgICAgICAgICAgRXhwb3J0XHJcbiAgICAgICAgICAgICAgICA8bWF0LWljb24+ZXhwYW5kX21vcmU8L21hdC1pY29uPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPG1hdC1jaGVja2JveCAqbmdJZj1cImRhdGF0cmFuc2ZlckZhY2FkZS5zaG93UHJlcHJvY2Vzc2luZ0NoZWNrYm94KClcIlxyXG4gICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJjb25maWcuY29yZS5wcmVwcm9jZXNzSGFzaENoZWNrZWRcIiBzdHlsZT1cIm1hcmdpbi1sZWZ0OiAxMHB4O1wiPlxyXG4gICAgICAgICAgICAgICAgUHJlcHJvY2Vzc2luZyA8c3BhbiAqbmdJZj1cImRhdGF0cmFuc2ZlckZhY2FkZS5zaG93UHJlcHJvY2Vzc2luZ1Rvb2x0aXAoKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJhbWQtdmVydGljYWwtYWxpZ24tbWlkZGxlXCIgW21hdFRvb2x0aXBdPVwiY29uZmlnLmNvcmUucHJlcHJvY2Vzc0hhc2hUb29sdGlwQ29udGVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbWF0VG9vbHRpcFBvc2l0aW9uPVwicmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24+aW5mb19vdXRsaW5lPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9tYXQtY2hlY2tib3g+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBmeEZsZXg9XCI3MHB4XCIgZnhGbGV4Lmx0LXNtPVwiMHB4XCI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBmeEZsZXg+XHJcbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJ1cGxvYWRQcm9ncmVzcy5wZXJjZW50ID4gMFwiPlxyXG4gICAgICAgICAgICAgICAgPGFtZC1wcm9ncmVzcyBbcHJvZ3Jlc3NDb250YWluZXJdPVwidXBsb2FkUHJvZ3Jlc3NcIj48L2FtZC1wcm9ncmVzcz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJkb3dubG9hZFByb2dyZXNzLnBlcmNlbnQgPiAwXCI+XHJcbiAgICAgICAgICAgICAgICA8YW1kLXByb2dyZXNzIFtwcm9ncmVzc0NvbnRhaW5lcl09XCJkb3dubG9hZFByb2dyZXNzXCI+PC9hbWQtcHJvZ3Jlc3M+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImFtZC1jb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGZ4TGF5b3V0PVwicm93XCIgY2xhc3M9XCJhbWQtY29udGFpbmVyLWhlYWRlclwiIHN0eWxlPVwiYWxpZ24taXRlbXM6IGNlbnRlcjtcIj5cclxuICAgICAgICAgICAgPGRpdiBmeEZsZXg9XCI0MHB4XCI+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWNoZWNrYm94IChjaGFuZ2UpPVwiZGF0YXRyYW5zZmVyRmFjYWRlLnRvZ2dsZVZpc2libGUoJGV2ZW50LmNoZWNrZWQpXCI+PC9tYXQtY2hlY2tib3g+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGZ4RmxleD1cIjUwJVwiIGZ4RmxleC5sdC1zbT1cIjEwMCVcIj5cclxuICAgICAgICAgICAgICAgIEZpbGVuYW1lXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGZ4RmxleD1cIjUwJVwiIHN0eWxlPVwicGFkZGluZy1sZWZ0OiA0MHB4O1wiIGZ4SGlkZS5sdC1zbT5cclxuICAgICAgICAgICAgICAgIFByb2dyZXNzXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGZ4RmxleD1cIjIwcHhcIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtbWVudSAjYmF0Y2hJdGVtTWVudT1cIm1hdE1lbnVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0gKGNsaWNrKT1cImRhdGF0cmFuc2ZlckZhY2FkZS5yZW1vdmVTZWxlY3RlZCgpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbj5jbG9zZTwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlJlbW92ZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvbWF0LW1lbnU+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBbbWF0TWVudVRyaWdnZXJGb3JdPVwiYmF0Y2hJdGVtTWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbj5tb3JlX3ZlcnQ8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxuZy10ZW1wbGF0ZSBuZ0ZvciBsZXQtaXRlbSBbbmdGb3JPZl09XCJwYWdpbmF0aW9uU2VydmljZS5wYWdpbmF0ZWRJdGVtc1wiIGxldC1pPVwiaW5kZXhcIj5cclxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cImRhdGF0cmFuc2ZlckZhY2FkZS5zaG93UGF0aChwYWdpbmF0aW9uU2VydmljZS5wYWdpbmF0ZWRJdGVtcywgaSlcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgZnhMYXlvdXQ9XCJyb3dcIiBjbGFzcz1cImFtZC1jb250YWluZXItaGVhZGxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGZ4RmxleCBjbGFzcz1cImFtZC1jb250YWluZXItaGVhZGxpbmUtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYW1kLWNvbnRhaW5lci1oZWFkbGluZS1pdGVtLWVudHJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGZ4RmxleD1cIjQwcHhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24+Zm9sZGVyX29wZW48L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGZ4RmxleD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+e3tpdGVtLmRpc3BsYXlQYXRofX08L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIChjbGljayk9XCJkYXRhdHJhbnNmZXJGYWNhZGUub3BlbkVkaXRQYXRoRGlhbG9nKGl0ZW0pXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJkYXRhdHJhbnNmZXJGYWNhZGUuc2hvd0VkaXREaWFsb2coaXRlbSlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uIGFyaWEtbGFiZWw9XCJFZGl0IHBhdGhcIj5lZGl0PC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0Lmx0LXNtPVwiY29sdW1uXCIgY2xhc3M9XCJhbWQtY29udGFpbmVyLXJvd1wiXHJcbiAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7J3NlbGVjdGVkJzogaXRlbS5pc1NlbGVjdGVkfVwiIChjbGljayk9XCJkYXRhdHJhbnNmZXJGYWNhZGUuaXRlbUNsaWNrKGl0ZW0pXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGZ4RmxleCBjbGFzcz1cImFtZC1jb250YWluZXItcm93LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYW1kLWNvbnRhaW5lci1yb3ctaXRlbS1lbnRyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGZ4RmxleD1cIjQwcHhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtY2hlY2tib3ggWyhuZ01vZGVsKV09XCJpdGVtLmlzU2VsZWN0ZWRcIj48L21hdC1jaGVja2JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZnhGbGV4PVwiMTAwJVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBtYXRUb29sdGlwPVwie3tpdGVtLm5hbWV9fVwiIG1hdFRvb2x0aXBQb3NpdGlvbj1cImFib3ZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3tpdGVtLm5hbWV9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiAoY2xpY2spPVwiZGF0YXRyYW5zZmVyRmFjYWRlLm9wZW5FZGl0RmlsZW5hbWVEaWFsb2coaXRlbSlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImRhdGF0cmFuc2ZlckZhY2FkZS5zaG93RWRpdERpYWxvZyhpdGVtKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24gYXJpYS1sYWJlbD1cIkVkaXQgZmlsZW5hbWVcIj5lZGl0PC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBmeEZsZXggY2xhc3M9XCJhbWQtY29udGFpbmVyLXJvdy1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFtZC1jb250YWluZXItcm93LWl0ZW0tZW50cnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBmeEZsZXg9XCI0MHB4XCIgbWF0VG9vbHRpcD1cInt7aXRlbS5wcmVwcm9jZXNzQ29udGFpbmVyLnBlcmNlbnR9fSVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJkYXRhdHJhbnNmZXJGYWNhZGUuc2hvd1NwaW5uZXIoaXRlbSk7IGVsc2Ugc2hvd1N0YXR1c0NsYXNzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LXByb2dyZXNzLXNwaW5uZXIgKm5nSWY9XCJpdGVtLnByZXByb2Nlc3NDb250YWluZXIucGVyY2VudCA+IDBcIiBbZGlhbWV0ZXJdPVwiMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU9XCJkZXRlcm1pbmF0ZVwiIFt2YWx1ZV09XCJpdGVtLnByZXByb2Nlc3NDb250YWluZXIucGVyY2VudFwiPjwvbWF0LXByb2dyZXNzLXNwaW5uZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI3Nob3dTdGF0dXNDbGFzcz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZnhGbGV4PVwiNDBweFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbj57e2RhdGF0cmFuc2ZlckZhY2FkZS5nZXRTdGF0dXNDbGFzcyhpdGVtLnN0YXR1cyl9fTwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBmeEZsZXg9XCIxMDAlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiZGF0YXRyYW5zZmVyRmFjYWRlLnNob3dQcm9ncmVzc2JhcihpdGVtKTsgZWxzZSBzaG93U3RhdHVzQmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYW1kLWNvbnRhaW5lci1yb3ctaXRlbS1lbnRyeS1zdGF0c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGZ4RmxleD1cIjI1JVwiIGZ4RmxleC5sdC1tZD1cIjUwJVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tpdGVtLnByb2dyZXNzQ29udGFpbmVyLmRpc3BsYXlCaXRyYXRlfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZnhGbGV4PVwiMjUlXCIgZnhIaWRlLmx0LW1kIHN0eWxlPVwidGV4dC1hbGlnbjogY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2l0ZW0ucHJvZ3Jlc3NDb250YWluZXIuZGlzcGxheVRpbWVMZWZ0fX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZnhGbGV4PVwiMjUlXCIgZnhIaWRlLmx0LW1kIHN0eWxlPVwidGV4dC1hbGlnbjogY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2l0ZW0ucHJvZ3Jlc3NDb250YWluZXIucGVyY2VudH19JVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBmeEZsZXg9XCIyNSVcIiBmeEZsZXgubHQtbWQ9XCI1MCVcIiBzdHlsZT1cInRleHQtYWxpZ246IHJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2l0ZW0ucHJvZ3Jlc3NDb250YWluZXIubG9hZGVkU2l6ZUNvbnRhaW5lci5kaXNwbGF5U2l6ZX19IC9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7aXRlbS5zaXplQ29udGFpbmVyLmRpc3BsYXlTaXplfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7aXRlbS5zaXplQ29udGFpbmVyLmRpc3BsYXlVbml0fX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1wcm9ncmVzcy1iYXIgKm5nSWY9XCJpdGVtLnByb2dyZXNzQ29udGFpbmVyLnRvdGFsID4gMFwiIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU9XCJkZXRlcm1pbmF0ZVwiIFt2YWx1ZV09XCJpdGVtLnByb2dyZXNzQ29udGFpbmVyLnBlcmNlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21hdC1wcm9ncmVzcy1iYXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjc2hvd1N0YXR1c0Jsb2NrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7aXRlbS5nZXRTdGF0dXNOYW1lKCl9fSAoe3tpdGVtLnNpemVDb250YWluZXIuZGlzcGxheVNpemV9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7aXRlbS5zaXplQ29udGFpbmVyLmRpc3BsYXlVbml0fX0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cIiEhaXRlbS5tZXNzYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD57e2RhdGF0cmFuc2ZlckZhY2FkZS5wYXJzZU1lc3NhZ2UoaXRlbSl9fTwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBmeEZsZXg9XCIyMHB4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LW1lbnUgI2l0ZW1NZW51PVwibWF0TWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LW1lbnUtaXRlbSAoY2xpY2spPVwiZGF0YXRyYW5zZmVyRmFjYWRlLnJldHJ5SXRlbShpdGVtKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiZGF0YXRyYW5zZmVyRmFjYWRlLnNob3dSZXRyeUJ1dHRvbkJ5SXRlbShpdGVtKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24+cmVmcmVzaDwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlJldHJ5PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LW1lbnUtaXRlbSAoY2xpY2spPVwiZGF0YXRyYW5zZmVyRmFjYWRlLnJlbW92ZUl0ZW0oaXRlbSlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uPmNsb3NlPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+UmVtb3ZlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXQtbWVudT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIFttYXRNZW51VHJpZ2dlckZvcl09XCJpdGVtTWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbj5tb3JlX3ZlcnQ8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IHN0eWxlPVwiZm9udC1zaXplOiAxMnB4OyBtYXJnaW4tdG9wOiAyMHB4OyB0ZXh0LWFsaWduOiByaWdodDtcIj5cclxuICAgICAgICA8YW1kLXBhZ2luYXRpb24gW3BhZ2luYXRpb25TZXJ2aWNlXT1cInBhZ2luYXRpb25TZXJ2aWNlXCI+PC9hbWQtcGFnaW5hdGlvbj5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuIl19