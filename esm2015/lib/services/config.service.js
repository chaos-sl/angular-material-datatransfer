import { Injectable } from '@angular/core';
import { AppConfig } from '../models/app-config.model';
import * as i0 from "@angular/core";
export class ConfigService {
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
ConfigService.ɵprov = i0.ɵɵdefineInjectable({ token: ConfigService, factory: ConfigService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ConfigService, [{
        type: Injectable
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hbWQtbGliL3NyYy9saWIvc2VydmljZXMvY29uZmlnLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsU0FBUyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7O0FBR25FLE1BQU0sT0FBTyxhQUFhO0lBSXRCO0lBRUEsQ0FBQztJQUVNLElBQUksQ0FBQyxNQUFrQjtRQUMxQixJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUU7WUFDVixhQUFhLENBQUMsUUFBUSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDO1lBQ3RELElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7Z0JBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFO29CQUM1QyxJQUFJLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxXQUFXLEVBQUU7d0JBQ2xELGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7cUJBQ3pFO2dCQUNMLENBQUMsQ0FBQyxDQUFDO2FBQ047WUFDRCxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFO2dCQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUU7b0JBQ25ELElBQUksT0FBTyxNQUFNLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxLQUFLLFdBQVcsRUFBRTt3QkFDekQsYUFBYSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztxQkFDdkY7Z0JBQ0wsQ0FBQyxDQUFDLENBQUM7YUFDTjtTQUNKO0lBQ0wsQ0FBQzs7QUF4QmEsc0JBQVEsR0FBZSxJQUFJLFNBQVMsRUFBRSxDQUFDOzBFQUY1QyxhQUFhO3FEQUFiLGFBQWEsV0FBYixhQUFhO3VGQUFiLGFBQWE7Y0FEekIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSUFwcENvbmZpZywgQXBwQ29uZmlnIH0gZnJvbSAnLi4vbW9kZWxzL2FwcC1jb25maWcubW9kZWwnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ29uZmlnU2VydmljZSB7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzZXR0aW5nczogSUFwcENvbmZpZyA9IG5ldyBBcHBDb25maWcoKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvYWQoY29uZmlnOiBJQXBwQ29uZmlnKSB7XHJcbiAgICAgICAgaWYgKCEhY29uZmlnKSB7XHJcbiAgICAgICAgICAgIENvbmZpZ1NlcnZpY2Uuc2V0dGluZ3MucHJvZHVjdGlvbiA9IGNvbmZpZy5wcm9kdWN0aW9uO1xyXG4gICAgICAgICAgICBpZiAoISFjb25maWcuY29yZSkge1xyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoY29uZmlnLmNvcmUpLmZvckVhY2gocHJvcGVydHlOYW1lID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbmZpZy5jb3JlW3Byb3BlcnR5TmFtZV0gIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpZ1NlcnZpY2Uuc2V0dGluZ3MuY29yZVtwcm9wZXJ0eU5hbWVdID0gY29uZmlnLmNvcmVbcHJvcGVydHlOYW1lXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoISFjb25maWcucmVzdW1hYmxlanMpIHtcclxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGNvbmZpZy5yZXN1bWFibGVqcykuZm9yRWFjaChwcm9wZXJ0eU5hbWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY29uZmlnLnJlc3VtYWJsZWpzW3Byb3BlcnR5TmFtZV0gIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpZ1NlcnZpY2Uuc2V0dGluZ3MucmVzdW1hYmxlanNbcHJvcGVydHlOYW1lXSA9IGNvbmZpZy5yZXN1bWFibGVqc1twcm9wZXJ0eU5hbWVdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==