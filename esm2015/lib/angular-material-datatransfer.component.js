import { Component, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { CustomEventType, CustomEventTypeExtensions } from './enums/custom-event-type.enum';
import { HostDirective } from './directives/host.directive';
import { MainComponent } from './components/main.component';
import { DatatransferFacadeFactory } from './factories/datatransfer-facade.factory';
import { ConfigService } from './services/config.service';
import { PaginationService } from './services/pagination.service';
import * as i0 from "@angular/core";
import * as i1 from "./factories/datatransfer-facade.factory";
import * as i2 from "./services/config.service";
import * as i3 from "./services/pagination.service";
import * as i4 from "./directives/host.directive";
function AngularMaterialDatatransferComponent_ng_template_1_Template(rf, ctx) { }
export class AngularMaterialDatatransferComponent {
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
AngularMaterialDatatransferComponent.ɵfac = function AngularMaterialDatatransferComponent_Factory(t) { return new (t || AngularMaterialDatatransferComponent)(i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver), i0.ɵɵdirectiveInject(i1.DatatransferFacadeFactory), i0.ɵɵdirectiveInject(i2.ConfigService), i0.ɵɵdirectiveInject(i3.PaginationService)); };
AngularMaterialDatatransferComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AngularMaterialDatatransferComponent, selectors: [["angular-material-datatransfer-lib"]], viewQuery: function AngularMaterialDatatransferComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(HostDirective, 3);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.amdHost = _t.first);
    } }, decls: 2, vars: 0, consts: [[1, "angular-material-datatransfer"], ["amd-host", ""]], template: function AngularMaterialDatatransferComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, AngularMaterialDatatransferComponent_ng_template_1_Template, 0, 0, "ng-template", 1);
        i0.ɵɵelementEnd();
    } }, directives: [i4.HostDirective], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AngularMaterialDatatransferComponent, [{
        type: Component,
        args: [{
                // tslint:disable-next-line:component-selector
                selector: 'angular-material-datatransfer-lib',
                templateUrl: './angular-material-datatransfer.component.html'
            }]
    }], function () { return [{ type: i0.ComponentFactoryResolver }, { type: i1.DatatransferFacadeFactory }, { type: i2.ConfigService }, { type: i3.PaginationService }]; }, { amdHost: [{
            type: ViewChild,
            args: [HostDirective, { static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1tYXRlcmlhbC1kYXRhdHJhbnNmZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvYW1kLWxpYi9zcmMvbGliL2FuZ3VsYXItbWF0ZXJpYWwtZGF0YXRyYW5zZmVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3Byb2plY3RzL2FtZC1saWIvc3JjL2xpYi9hbmd1bGFyLW1hdGVyaWFsLWRhdGF0cmFuc2Zlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFNBQVMsRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RixPQUFPLEVBQUUsZUFBZSxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDNUYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzVELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUU1RCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNwRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0JBQStCLENBQUM7Ozs7Ozs7QUFPbEUsTUFBTSxPQUFPLG9DQUFvQztJQU0vQyxZQUFvQix3QkFBa0QsRUFDbEQseUJBQW9ELEVBQ3BELGFBQTRCLEVBQzVCLGlCQUFvQztRQUhwQyw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ2xELDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMkI7UUFDcEQsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtJQUN4RCxDQUFDO0lBRUQsUUFBUTtRQUNOLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUYsQ0FBQztJQUVNLE1BQU0sQ0FBQyxNQUFXO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVNLFNBQVMsQ0FBQyxNQUFXO1FBQzFCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUN2RixJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixDQUFDLHdCQUF3QixFQUFFLENBQUM7UUFFcEYsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDO1FBQ3ZELGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDO1FBRXpCLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLHVCQUF1QixDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzlGLE1BQU0sWUFBWSxHQUFHLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3hFLE1BQU0sb0JBQW9CLEdBQUcsWUFBWSxDQUFDLFFBQXlCLENBQUM7UUFDcEUsb0JBQW9CLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDO0lBQ3BFLENBQUM7SUFFTSxRQUFRLENBQUMsUUFBZ0IsRUFBRSxHQUFXLEVBQUUsSUFBWTtRQUN6RCxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7d0hBcENVLG9DQUFvQzt5RUFBcEMsb0NBQW9DO3VCQUVwQyxhQUFhOzs7OztRQ2hCMUIsOEJBQ0k7UUFBQSxxR0FBb0M7UUFDeEMsaUJBQU07O3VGRFlPLG9DQUFvQztjQUxoRCxTQUFTO2VBQUM7Z0JBQ1QsOENBQThDO2dCQUM5QyxRQUFRLEVBQUUsbUNBQW1DO2dCQUM3QyxXQUFXLEVBQUUsZ0RBQWdEO2FBQzlEOytLQUc2QyxPQUFPO2tCQUFsRCxTQUFTO21CQUFDLGFBQWEsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ3VzdG9tRXZlbnRUeXBlLCBDdXN0b21FdmVudFR5cGVFeHRlbnNpb25zIH0gZnJvbSAnLi9lbnVtcy9jdXN0b20tZXZlbnQtdHlwZS5lbnVtJztcclxuaW1wb3J0IHsgSG9zdERpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9ob3N0LmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IE1haW5Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbWFpbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEYXRhdHJhbnNmZXJGYWNhZGUgfSBmcm9tICcuL2ZhY2FkZXMvZGF0YXRyYW5zZmVyLmZhY2FkZSc7XHJcbmltcG9ydCB7IERhdGF0cmFuc2ZlckZhY2FkZUZhY3RvcnkgfSBmcm9tICcuL2ZhY3Rvcmllcy9kYXRhdHJhbnNmZXItZmFjYWRlLmZhY3RvcnknO1xyXG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9jb25maWcuc2VydmljZSc7XHJcbmltcG9ydCB7IFBhZ2luYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9wYWdpbmF0aW9uLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnYW5ndWxhci1tYXRlcmlhbC1kYXRhdHJhbnNmZXItbGliJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYW5ndWxhci1tYXRlcmlhbC1kYXRhdHJhbnNmZXIuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBbmd1bGFyTWF0ZXJpYWxEYXRhdHJhbnNmZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBAVmlld0NoaWxkKEhvc3REaXJlY3RpdmUsIHsgc3RhdGljOiB0cnVlIH0pIGFtZEhvc3Q6IEhvc3REaXJlY3RpdmU7XHJcblxyXG4gIHByaXZhdGUgZGF0YXRyYW5zZmVyRmFjYWRlOiBEYXRhdHJhbnNmZXJGYWNhZGU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBkYXRhdHJhbnNmZXJGYWNhZGVGYWN0b3J5OiBEYXRhdHJhbnNmZXJGYWNhZGVGYWN0b3J5LFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgY29uZmlnU2VydmljZTogQ29uZmlnU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIHBhZ2luYXRpb25TZXJ2aWNlOiBQYWdpbmF0aW9uU2VydmljZSkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChDdXN0b21FdmVudFR5cGVFeHRlbnNpb25zLnRvU3RyaW5nKEN1c3RvbUV2ZW50VHlwZS5JTklUKSkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNyZWF0ZShjb25maWc6IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRDb25maWcoY29uZmlnKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRDb25maWcoY29uZmlnOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMuY29uZmlnU2VydmljZS5sb2FkKGNvbmZpZyk7XHJcbiAgICB0aGlzLnBhZ2luYXRpb25TZXJ2aWNlLnNldFJwcE9wdGlvbnMoQ29uZmlnU2VydmljZS5zZXR0aW5ncy5jb3JlLnBhZ2luYXRpb25ScHBPcHRpb25zKTtcclxuICAgIHRoaXMuZGF0YXRyYW5zZmVyRmFjYWRlID0gdGhpcy5kYXRhdHJhbnNmZXJGYWNhZGVGYWN0b3J5LmNyZWF0ZURhdGF0cmFuc2ZlckZhY2FkZSgpO1xyXG5cclxuICAgIGNvbnN0IHZpZXdDb250YWluZXJSZWYgPSB0aGlzLmFtZEhvc3Qudmlld0NvbnRhaW5lclJlZjtcclxuICAgIHZpZXdDb250YWluZXJSZWYuY2xlYXIoKTtcclxuXHJcbiAgICBjb25zdCBjb21wb25lbnRGYWN0b3J5ID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoTWFpbkNvbXBvbmVudCk7XHJcbiAgICBjb25zdCBjb21wb25lbnRSZWYgPSB2aWV3Q29udGFpbmVyUmVmLmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnRGYWN0b3J5KTtcclxuICAgIGNvbnN0IGNvbXBvbmVudFJlZkluc3RhbmNlID0gY29tcG9uZW50UmVmLmluc3RhbmNlIGFzIE1haW5Db21wb25lbnQ7XHJcbiAgICBjb21wb25lbnRSZWZJbnN0YW5jZS5kYXRhdHJhbnNmZXJGYWNhZGUgPSB0aGlzLmRhdGF0cmFuc2ZlckZhY2FkZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkb3dubG9hZChmaWxlbmFtZTogc3RyaW5nLCB1cmw6IHN0cmluZywgc2l6ZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLmRhdGF0cmFuc2ZlckZhY2FkZS5kb3dubG9hZChmaWxlbmFtZSwgdXJsLCBzaXplKTtcclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cImFuZ3VsYXItbWF0ZXJpYWwtZGF0YXRyYW5zZmVyXCI+XHJcbiAgICA8bmctdGVtcGxhdGUgYW1kLWhvc3Q+PC9uZy10ZW1wbGF0ZT5cclxuPC9kaXY+Il19