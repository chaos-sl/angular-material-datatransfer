import { AfterViewInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { DatatransferFacade } from "../facades/datatransfer.facade";
import { IDatatransferItem } from "../models/datatransfer-item.model";
import * as i0 from "@angular/core";
export declare class EditDialogComponent implements AfterViewInit {
    dialogRef: MatDialogRef<EditDialogComponent>;
    data: any;
    datatransferFacade: DatatransferFacade;
    mode: string;
    item: IDatatransferItem;
    itemPath: string;
    itemName: string;
    errorMessage: string;
    editFormControl: FormControl;
    constructor(dialogRef: MatDialogRef<EditDialogComponent>, data: any);
    ngAfterViewInit(): void;
    close(): void;
    onNoClick(): void;
    editPath(): void;
    editFilename(): void;
    static ɵfac: i0.ɵɵFactoryDef<EditDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<EditDialogComponent, "amd-edit-dialog", never, {}, {}, never, never>;
}
//# sourceMappingURL=edit-dialog.component.d.ts.map