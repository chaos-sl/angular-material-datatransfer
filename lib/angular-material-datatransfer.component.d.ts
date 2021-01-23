import { OnInit, ComponentFactoryResolver } from '@angular/core';
import { HostDirective } from './directives/host.directive';
import { DatatransferFacadeFactory } from './factories/datatransfer-facade.factory';
import { ConfigService } from './services/config.service';
import { PaginationService } from './services/pagination.service';
import * as i0 from "@angular/core";
export declare class AngularMaterialDatatransferComponent implements OnInit {
    private componentFactoryResolver;
    private datatransferFacadeFactory;
    private configService;
    private paginationService;
    amdHost: HostDirective;
    private datatransferFacade;
    constructor(componentFactoryResolver: ComponentFactoryResolver, datatransferFacadeFactory: DatatransferFacadeFactory, configService: ConfigService, paginationService: PaginationService);
    ngOnInit(): void;
    create(config: any): void;
    setConfig(config: any): void;
    download(filename: string, url: string, size: number): void;
    static ɵfac: i0.ɵɵFactoryDef<AngularMaterialDatatransferComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<AngularMaterialDatatransferComponent, "angular-material-datatransfer-lib", never, {}, {}, never, never>;
}
//# sourceMappingURL=angular-material-datatransfer.component.d.ts.map