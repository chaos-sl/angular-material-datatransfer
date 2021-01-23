import { AfterViewInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { DatatransferFacade } from "../facades/datatransfer.facade";
import * as i0 from "@angular/core";
export declare class BrowseDialogComponent implements AfterViewInit {
    dialogRef: MatDialogRef<BrowseDialogComponent>;
    data: any;
    datatransferFacade: DatatransferFacade;
    constructor(dialogRef: MatDialogRef<BrowseDialogComponent>, data: any);
    ngAfterViewInit(): void;
    close(): void;
    onNoClick(): void;
    static ɵfac: i0.ɵɵFactoryDef<BrowseDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<BrowseDialogComponent, "amd-browse-dialog", never, {}, {}, never, never>;
}
//# sourceMappingURL=browse-dialog.component.d.ts.map