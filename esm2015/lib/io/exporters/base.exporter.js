import { Injectable } from '@angular/core';
import { LoggerService } from '../../services/logger.service';
import { DatatransferStore } from '../../stores/datatransfer.store';
import * as i0 from "@angular/core";
import * as i1 from "../../services/logger.service";
import * as i2 from "../../stores/datatransfer.store";
export class BaseExporter {
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
BaseExporter.ɵfac = function BaseExporter_Factory(t) { return new (t || BaseExporter)(i0.ɵɵinject(i1.LoggerService), i0.ɵɵinject(i2.DatatransferStore)); };
BaseExporter.ɵprov = i0.ɵɵdefineInjectable({ token: BaseExporter, factory: BaseExporter.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseExporter, [{
        type: Injectable
    }], function () { return [{ type: i1.LoggerService }, { type: i2.DatatransferStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5leHBvcnRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FtZC1saWIvc3JjL2xpYi9pby9leHBvcnRlcnMvYmFzZS5leHBvcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7OztBQU9wRSxNQUFNLE9BQWdCLFlBQVk7SUFFOUIsWUFBc0IsTUFBcUIsRUFBWSxLQUF3QjtRQUF6RCxXQUFNLEdBQU4sTUFBTSxDQUFlO1FBQVksVUFBSyxHQUFMLEtBQUssQ0FBbUI7SUFFL0UsQ0FBQztJQUlTLFFBQVEsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVE7UUFDMUMsSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwQyxRQUFRLEdBQUcsUUFBUSxJQUFJLDBCQUEwQixDQUFDO1FBRWxELElBQUksU0FBUyxDQUFDLFVBQVUsRUFBRSxFQUFFLE9BQU87WUFDL0IsU0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNyQyxJQUFJLEVBQUUsUUFBUTthQUNqQixDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDakI7YUFBTSxJQUFJLEdBQUcsSUFBSSxVQUFVLElBQUksQ0FBQyxFQUFFO1lBQy9CLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLGVBQWUsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUM3QyxJQUFJLEVBQUUsUUFBUTthQUNqQixDQUFDLENBQUMsQ0FBQztZQUNKLENBQUMsQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ3JDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdCLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNWLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2hDO2FBQU07WUFDSCxRQUFRLENBQUMsSUFBSSxHQUFHLGdDQUFnQyxHQUFHLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsbUNBQW1DO1NBQ3RIO0lBQ0wsQ0FBQzs7d0VBM0JpQixZQUFZO29EQUFaLFlBQVksV0FBWixZQUFZO3VGQUFaLFlBQVk7Y0FEakMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTG9nZ2VyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2xvZ2dlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRGF0YXRyYW5zZmVyU3RvcmUgfSBmcm9tICcuLi8uLi9zdG9yZXMvZGF0YXRyYW5zZmVyLnN0b3JlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUV4cG9ydGVyIHtcclxuICAgIGV4cG9ydCgpOiB2b2lkO1xyXG59XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlRXhwb3J0ZXIgaW1wbGVtZW50cyBJRXhwb3J0ZXIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBsb2dnZXI6IExvZ2dlclNlcnZpY2UsIHByb3RlY3RlZCBzdG9yZTogRGF0YXRyYW5zZmVyU3RvcmUpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFic3RyYWN0IGV4cG9ydCgpOiB2b2lkO1xyXG5cclxuICAgIHByb3RlY3RlZCBkb3dubG9hZChjb250ZW50LCBmaWxlTmFtZSwgbWltZVR5cGUpOiB2b2lkIHtcclxuICAgICAgICBsZXQgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgICAgICBtaW1lVHlwZSA9IG1pbWVUeXBlIHx8ICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nO1xyXG5cclxuICAgICAgICBpZiAobmF2aWdhdG9yLm1zU2F2ZUJsb2IpIHsgLy8gSUUxMFxyXG4gICAgICAgICAgICBuYXZpZ2F0b3IubXNTYXZlQmxvYihuZXcgQmxvYihbY29udGVudF0sIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IG1pbWVUeXBlXHJcbiAgICAgICAgICAgIH0pLCBmaWxlTmFtZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChVUkwgJiYgJ2Rvd25sb2FkJyBpbiBhKSB7XHJcbiAgICAgICAgICAgIGEuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwobmV3IEJsb2IoW2NvbnRlbnRdLCB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBtaW1lVHlwZVxyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgIGEuc2V0QXR0cmlidXRlKCdkb3dubG9hZCcsIGZpbGVOYW1lKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhKTtcclxuICAgICAgICAgICAgYS5jbGljaygpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGEpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxvY2F0aW9uLmhyZWYgPSAnZGF0YTphcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0sJyArIGVuY29kZVVSSUNvbXBvbmVudChjb250ZW50KTsgLy8gb25seSB0aGlzIG1pbWUgdHlwZSBpcyBzdXBwb3J0ZWRcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==