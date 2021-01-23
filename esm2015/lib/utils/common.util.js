import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class CommonUtil {
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
CommonUtil.ɵprov = i0.ɵɵdefineInjectable({ token: CommonUtil, factory: CommonUtil.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CommonUtil, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLnV0aWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hbWQtbGliL3NyYy9saWIvdXRpbHMvY29tbW9uLnV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFHM0MsTUFBTSxPQUFPLFVBQVU7SUFDWixJQUFJLENBQUMsQ0FBTSxFQUFFLFFBQWtCO1FBQ2xDLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxXQUFXLEVBQUU7WUFDbkMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQy9CLG9CQUFvQjtnQkFDcEIsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxFQUFFO29CQUMxQixPQUFPO2lCQUNWO2FBQ0o7U0FDSjthQUFNO1lBQ0gsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ2IsU0FBUztnQkFDVCxJQUFJLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxFQUFFO29CQUM3QixPQUFPO2lCQUNWO2FBQ0o7U0FDSjtJQUNMLENBQUM7O29FQWpCUSxVQUFVO2tEQUFWLFVBQVUsV0FBVixVQUFVO3VGQUFWLFVBQVU7Y0FEdEIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENvbW1vblV0aWwge1xyXG4gICAgcHVibGljIGVhY2gobzogYW55LCBjYWxsYmFjazogRnVuY3Rpb24pOiB2b2lkIHtcclxuICAgICAgICBpZiAodHlwZW9mIChvLmxlbmd0aCkgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgby5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgLy8gQXJyYXkgb3IgRmlsZUxpc3RcclxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjayhvW2ldKSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpIGluIG8pIHtcclxuICAgICAgICAgICAgICAgIC8vIE9iamVjdFxyXG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKGksIG9baV0pID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=