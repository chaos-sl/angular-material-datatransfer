import { Injectable } from '@angular/core';
import { DatatransferItem } from '../models/datatransfer-item.model';
import { SizeContainer } from '../models/size-container.model';
import { DecimalByteUnit } from '../enums/decimal-byte-unit.enum';
import { ProgressContainer } from '../models/progress-container.model';
import { TransferType } from '../enums/transfer-type.enum';
import { TransferStatus } from '../enums/transfer-status.enum';
import { PreprocessContainer } from '../models/preprocess-container.model';
import * as i0 from "@angular/core";
export class DemoService {
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
DemoService.ɵprov = i0.ɵɵdefineInjectable({ token: DemoService, factory: DemoService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DemoService, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVtby5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYW1kLWxpYi9zcmMvbGliL3NlcnZpY2VzL2RlbW8uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBcUIsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN4RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDL0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDL0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7O0FBRzNFLE1BQU0sT0FBTyxXQUFXO0lBRHhCO1FBRUUsVUFBSyxHQUFHLCtCQUErQixDQUFDO1FBRXhDLGNBQVMsR0FBd0I7WUFDL0IsSUFBSSxnQkFBZ0IsQ0FBQztnQkFDbkIsRUFBRSxFQUFFLEdBQUc7Z0JBQ1AsSUFBSSxFQUFFLHVCQUF1QjtnQkFDN0IsSUFBSSxFQUFFLDBCQUEwQjtnQkFDaEMsYUFBYSxFQUFFLElBQUksYUFBYSxDQUFDLEVBQUUsZUFBZSxFQUFFLGVBQWUsQ0FBQyxFQUFFLEVBQUUsbUJBQW1CLEVBQUUsRUFBRSxFQUFFLENBQUM7Z0JBQ2xHLGlCQUFpQixFQUFFLElBQUksaUJBQWlCLENBQUMsRUFBRSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUM7Z0JBQzFELFlBQVksRUFBRSxZQUFZLENBQUMsTUFBTTtnQkFDakMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxTQUFTO2FBQ2pDLENBQUM7WUFDRixJQUFJLGdCQUFnQixDQUFDO2dCQUNuQixFQUFFLEVBQUUsR0FBRztnQkFDUCxJQUFJLEVBQUUsdUJBQXVCO2dCQUM3QixJQUFJLEVBQUUsMEJBQTBCO2dCQUNoQyxhQUFhLEVBQUUsSUFBSSxhQUFhLENBQUMsRUFBRSxlQUFlLEVBQUUsZUFBZSxDQUFDLEVBQUUsRUFBRSxtQkFBbUIsRUFBRSxFQUFFLEVBQUUsQ0FBQztnQkFDbEcsWUFBWSxFQUFFLFlBQVksQ0FBQyxNQUFNO2dCQUNqQyxNQUFNLEVBQUUsY0FBYyxDQUFDLE1BQU07YUFDOUIsQ0FBQztZQUNGLElBQUksZ0JBQWdCLENBQUM7Z0JBQ25CLEVBQUUsRUFBRSxHQUFHO2dCQUNQLElBQUksRUFBRSx1QkFBdUI7Z0JBQzdCLElBQUksRUFBRSwwQkFBMEI7Z0JBQ2hDLG1CQUFtQixFQUFFLElBQUksbUJBQW1CLENBQUMsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLENBQUM7Z0JBQzdELGFBQWEsRUFBRSxJQUFJLGFBQWEsQ0FBQyxFQUFFLGVBQWUsRUFBRSxlQUFlLENBQUMsRUFBRSxFQUFFLG1CQUFtQixFQUFFLEVBQUUsRUFBRSxDQUFDO2dCQUNsRyxZQUFZLEVBQUUsWUFBWSxDQUFDLE1BQU07Z0JBQ2pDLE1BQU0sRUFBRSxjQUFjLENBQUMsYUFBYTthQUNyQyxDQUFDO1lBQ0YsSUFBSSxnQkFBZ0IsQ0FBQztnQkFDbkIsRUFBRSxFQUFFLEdBQUc7Z0JBQ1AsSUFBSSxFQUFFLHVCQUF1QjtnQkFDN0IsSUFBSSxFQUFFLDBCQUEwQjtnQkFDaEMsYUFBYSxFQUFFLElBQUksYUFBYSxDQUFDLEVBQUUsZUFBZSxFQUFFLGVBQWUsQ0FBQyxFQUFFLEVBQUUsbUJBQW1CLEVBQUUsRUFBRSxFQUFFLENBQUM7Z0JBQ2xHLFlBQVksRUFBRSxZQUFZLENBQUMsTUFBTTtnQkFDakMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxNQUFNO2FBQzlCLENBQUM7WUFDRixJQUFJLGdCQUFnQixDQUFDO2dCQUNuQixFQUFFLEVBQUUsR0FBRztnQkFDUCxJQUFJLEVBQUUscUNBQXFDO2dCQUMzQyxJQUFJLEVBQUUsR0FBRztnQkFDVCxhQUFhLEVBQUUsSUFBSSxhQUFhLENBQUMsRUFBRSxlQUFlLEVBQUUsZUFBZSxDQUFDLEVBQUUsRUFBRSxtQkFBbUIsRUFBRSxDQUFDLEVBQUUsQ0FBQztnQkFDakcsWUFBWSxFQUFFLFlBQVksQ0FBQyxRQUFRO2dCQUNuQyxNQUFNLEVBQUUsY0FBYyxDQUFDLE1BQU07YUFDOUIsQ0FBQztZQUNGLElBQUksZ0JBQWdCLENBQUM7Z0JBQ25CLEVBQUUsRUFBRSxHQUFHO2dCQUNQLElBQUksRUFBRSxxQkFBcUI7Z0JBQzNCLElBQUksRUFBRSx3QkFBd0I7Z0JBQzlCLGFBQWEsRUFBRSxJQUFJLGFBQWEsQ0FBQyxFQUFFLGVBQWUsRUFBRSxlQUFlLENBQUMsRUFBRSxFQUFFLG1CQUFtQixFQUFFLEVBQUUsRUFBRSxDQUFDO2dCQUNsRyxZQUFZLEVBQUUsWUFBWSxDQUFDLE1BQU07Z0JBQ2pDLE1BQU0sRUFBRSxjQUFjLENBQUMsTUFBTTthQUM5QixDQUFDO1NBQ0gsQ0FBQztLQUNIOztzRUF2RFksV0FBVzttREFBWCxXQUFXLFdBQVgsV0FBVzt1RkFBWCxXQUFXO2NBRHZCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElEYXRhdHJhbnNmZXJJdGVtLCBEYXRhdHJhbnNmZXJJdGVtIH0gZnJvbSAnLi4vbW9kZWxzL2RhdGF0cmFuc2Zlci1pdGVtLm1vZGVsJztcclxuaW1wb3J0IHsgU2l6ZUNvbnRhaW5lciB9IGZyb20gJy4uL21vZGVscy9zaXplLWNvbnRhaW5lci5tb2RlbCc7XHJcbmltcG9ydCB7IERlY2ltYWxCeXRlVW5pdCB9IGZyb20gJy4uL2VudW1zL2RlY2ltYWwtYnl0ZS11bml0LmVudW0nO1xyXG5pbXBvcnQgeyBQcm9ncmVzc0NvbnRhaW5lciB9IGZyb20gJy4uL21vZGVscy9wcm9ncmVzcy1jb250YWluZXIubW9kZWwnO1xyXG5pbXBvcnQgeyBUcmFuc2ZlclR5cGUgfSBmcm9tICcuLi9lbnVtcy90cmFuc2Zlci10eXBlLmVudW0nO1xyXG5pbXBvcnQgeyBUcmFuc2ZlclN0YXR1cyB9IGZyb20gJy4uL2VudW1zL3RyYW5zZmVyLXN0YXR1cy5lbnVtJztcclxuaW1wb3J0IHsgUHJlcHJvY2Vzc0NvbnRhaW5lciB9IGZyb20gJy4uL21vZGVscy9wcmVwcm9jZXNzLWNvbnRhaW5lci5tb2RlbCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBEZW1vU2VydmljZSB7XHJcbiAgdGl0bGUgPSAnYW5ndWxhci1tYXRlcmlhbC1kYXRhdHJhbnNmZXInO1xyXG5cclxuICB0ZXN0SXRlbXM6IElEYXRhdHJhbnNmZXJJdGVtW10gPSBbXHJcbiAgICBuZXcgRGF0YXRyYW5zZmVySXRlbSh7XHJcbiAgICAgIGlkOiAnMScsXHJcbiAgICAgIG5hbWU6ICdESUNPTV9wYXRpZW50WFlfMS5kY20nLFxyXG4gICAgICBwYXRoOiAnL21udC9zZGNhcmQvZm9sZGVyMS9hL2IvJyxcclxuICAgICAgc2l6ZUNvbnRhaW5lcjogbmV3IFNpemVDb250YWluZXIoeyBkZWNpbWFsQnl0ZVVuaXQ6IERlY2ltYWxCeXRlVW5pdC5NQiwgZGVjaW1hbEJ5dGVVbml0U2l6ZTogMTUgfSksXHJcbiAgICAgIHByb2dyZXNzQ29udGFpbmVyOiBuZXcgUHJvZ3Jlc3NDb250YWluZXIoMTUgKiAxMDAwICogMTAwMCksXHJcbiAgICAgIHRyYW5zZmVyVHlwZTogVHJhbnNmZXJUeXBlLlVwbG9hZCxcclxuICAgICAgc3RhdHVzOiBUcmFuc2ZlclN0YXR1cy5VcGxvYWRpbmdcclxuICAgIH0pLFxyXG4gICAgbmV3IERhdGF0cmFuc2Zlckl0ZW0oe1xyXG4gICAgICBpZDogJzInLFxyXG4gICAgICBuYW1lOiAnRElDT01fcGF0aWVudFhZXzIuZGNtJyxcclxuICAgICAgcGF0aDogJy9tbnQvc2RjYXJkL2ZvbGRlcjEvYS9iLycsXHJcbiAgICAgIHNpemVDb250YWluZXI6IG5ldyBTaXplQ29udGFpbmVyKHsgZGVjaW1hbEJ5dGVVbml0OiBEZWNpbWFsQnl0ZVVuaXQuTUIsIGRlY2ltYWxCeXRlVW5pdFNpemU6IDE3IH0pLFxyXG4gICAgICB0cmFuc2ZlclR5cGU6IFRyYW5zZmVyVHlwZS5VcGxvYWQsXHJcbiAgICAgIHN0YXR1czogVHJhbnNmZXJTdGF0dXMuRmFpbGVkXHJcbiAgICB9KSxcclxuICAgIG5ldyBEYXRhdHJhbnNmZXJJdGVtKHtcclxuICAgICAgaWQ6ICczJyxcclxuICAgICAgbmFtZTogJ0RJQ09NX3BhdGllbnRYWV8zLmRjbScsXHJcbiAgICAgIHBhdGg6ICcvbW50L3NkY2FyZC9mb2xkZXIxL2EvYi8nLFxyXG4gICAgICBwcmVwcm9jZXNzQ29udGFpbmVyOiBuZXcgUHJlcHJvY2Vzc0NvbnRhaW5lcih7IHBlcmNlbnQ6IDMwIH0pLFxyXG4gICAgICBzaXplQ29udGFpbmVyOiBuZXcgU2l6ZUNvbnRhaW5lcih7IGRlY2ltYWxCeXRlVW5pdDogRGVjaW1hbEJ5dGVVbml0Lk1CLCBkZWNpbWFsQnl0ZVVuaXRTaXplOiAxMyB9KSxcclxuICAgICAgdHJhbnNmZXJUeXBlOiBUcmFuc2ZlclR5cGUuVXBsb2FkLFxyXG4gICAgICBzdGF0dXM6IFRyYW5zZmVyU3RhdHVzLlByZXByb2Nlc3NpbmdcclxuICAgIH0pLFxyXG4gICAgbmV3IERhdGF0cmFuc2Zlckl0ZW0oe1xyXG4gICAgICBpZDogJzQnLFxyXG4gICAgICBuYW1lOiAnRElDT01fcGF0aWVudFhZXzQuZGNtJyxcclxuICAgICAgcGF0aDogJy9tbnQvc2RjYXJkL2ZvbGRlcjEvYS9iLycsXHJcbiAgICAgIHNpemVDb250YWluZXI6IG5ldyBTaXplQ29udGFpbmVyKHsgZGVjaW1hbEJ5dGVVbml0OiBEZWNpbWFsQnl0ZVVuaXQuTUIsIGRlY2ltYWxCeXRlVW5pdFNpemU6IDExIH0pLFxyXG4gICAgICB0cmFuc2ZlclR5cGU6IFRyYW5zZmVyVHlwZS5VcGxvYWQsXHJcbiAgICAgIHN0YXR1czogVHJhbnNmZXJTdGF0dXMuUXVldWVkLFxyXG4gICAgfSksXHJcbiAgICBuZXcgRGF0YXRyYW5zZmVySXRlbSh7XHJcbiAgICAgIGlkOiAnNScsXHJcbiAgICAgIG5hbWU6ICdTTUlSLlRob3JheC4wODlZLk0uQ1QuNy4wMDAuZGNtLnppcCcsXHJcbiAgICAgIHBhdGg6ICcvJyxcclxuICAgICAgc2l6ZUNvbnRhaW5lcjogbmV3IFNpemVDb250YWluZXIoeyBkZWNpbWFsQnl0ZVVuaXQ6IERlY2ltYWxCeXRlVW5pdC5HQiwgZGVjaW1hbEJ5dGVVbml0U2l6ZTogMiB9KSxcclxuICAgICAgdHJhbnNmZXJUeXBlOiBUcmFuc2ZlclR5cGUuRG93bmxvYWQsXHJcbiAgICAgIHN0YXR1czogVHJhbnNmZXJTdGF0dXMuUXVldWVkXHJcbiAgICB9KSxcclxuICAgIG5ldyBEYXRhdHJhbnNmZXJJdGVtKHtcclxuICAgICAgaWQ6ICc2JyxcclxuICAgICAgbmFtZTogJ05JRlRJX3BhdGllbnRYWS5uaWknLFxyXG4gICAgICBwYXRoOiAnL21udC9zZGNhcmQvZm9sZGVyMi9kLycsXHJcbiAgICAgIHNpemVDb250YWluZXI6IG5ldyBTaXplQ29udGFpbmVyKHsgZGVjaW1hbEJ5dGVVbml0OiBEZWNpbWFsQnl0ZVVuaXQuR0IsIGRlY2ltYWxCeXRlVW5pdFNpemU6IDEyIH0pLFxyXG4gICAgICB0cmFuc2ZlclR5cGU6IFRyYW5zZmVyVHlwZS5VcGxvYWQsXHJcbiAgICAgIHN0YXR1czogVHJhbnNmZXJTdGF0dXMuUXVldWVkLFxyXG4gICAgfSlcclxuICBdO1xyXG59XHJcbiJdfQ==