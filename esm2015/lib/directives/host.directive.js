import { Directive, ViewContainerRef } from '@angular/core';
import * as i0 from "@angular/core";
export class HostDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
}
HostDirective.ɵfac = function HostDirective_Factory(t) { return new (t || HostDirective)(i0.ɵɵdirectiveInject(i0.ViewContainerRef)); };
HostDirective.ɵdir = i0.ɵɵdefineDirective({ type: HostDirective, selectors: [["", "amd-host", ""]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HostDirective, [{
        type: Directive,
        args: [{
                // tslint:disable-next-line: directive-selector
                selector: '[amd-host]',
            }]
    }], function () { return [{ type: i0.ViewContainerRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9zdC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hbWQtbGliL3NyYy9saWIvZGlyZWN0aXZlcy9ob3N0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU01RCxNQUFNLE9BQU8sYUFBYTtJQUN0QixZQUFtQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUFJLENBQUM7OzBFQURqRCxhQUFhO2tEQUFiLGFBQWE7dUZBQWIsYUFBYTtjQUp6QixTQUFTO2VBQUM7Z0JBQ1AsK0NBQStDO2dCQUMvQyxRQUFRLEVBQUUsWUFBWTthQUN6QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGRpcmVjdGl2ZS1zZWxlY3RvclxyXG4gICAgc2VsZWN0b3I6ICdbYW1kLWhvc3RdJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIEhvc3REaXJlY3RpdmUge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpIHsgfVxyXG59XHJcbiJdfQ==