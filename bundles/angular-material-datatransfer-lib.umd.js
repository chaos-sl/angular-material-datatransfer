(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/flex-layout/flex'), require('@angular/material/menu'), require('@angular/material/checkbox'), require('@angular/flex-layout/extended'), require('@angular/material/icon'), require('@angular/material/button'), require('@angular/material/form-field'), require('@angular/material/select'), require('@angular/forms'), require('@angular/material/core'), require('@angular/material/tooltip'), require('@angular/material/progress-bar'), require('@angular/material/progress-spinner'), require('@angular/material/dialog'), require('@angular/material/input'), require('resumablejs'), require('crypto-browserify'), require('file-saver'), require('@angular/platform-browser'), require('@angular/platform-browser/animations'), require('@angular/flex-layout')) :
    typeof define === 'function' && define.amd ? define('angular-material-datatransfer-lib', ['exports', '@angular/core', '@angular/common', '@angular/flex-layout/flex', '@angular/material/menu', '@angular/material/checkbox', '@angular/flex-layout/extended', '@angular/material/icon', '@angular/material/button', '@angular/material/form-field', '@angular/material/select', '@angular/forms', '@angular/material/core', '@angular/material/tooltip', '@angular/material/progress-bar', '@angular/material/progress-spinner', '@angular/material/dialog', '@angular/material/input', 'resumablejs', 'crypto-browserify', 'file-saver', '@angular/platform-browser', '@angular/platform-browser/animations', '@angular/flex-layout'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['angular-material-datatransfer-lib'] = {}, global.ng.core, global.ng.common, global.ng.flexLayout.flex, global.ng.material.menu, global.ng.material.checkbox, global.ng.flexLayout.extended, global.ng.material.icon, global.ng.material.button, global.ng.material.formField, global.ng.material.select, global.ng.forms, global.ng.material.core, global.ng.material.tooltip, global.ng.material.progressBar, global.ng.material.progressSpinner, global.ng.material.dialog, global.ng.material.input, global.Resumable, global.cryptoBrowserify, global.fileSaver, global.ng.platformBrowser, global.ng.platformBrowser.animations, global.ng.flexLayout));
}(this, (function (exports, i0, i3$2, i4$1, i5, i6$1, i7$1, i7, i6, i4, i3, i3$1, i8, i13, i4$2, i15, i1, i5$1, Resumable, cryptoBrowserify, fileSaver, platformBrowser, animations, flexLayout) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var Resumable__namespace = /*#__PURE__*/_interopNamespace(Resumable);

    var CustomEventType;
    (function (CustomEventType) {
        CustomEventType[CustomEventType["UNKNOWN"] = 0] = "UNKNOWN";
        // This event can be used to bootstrap the app module. An IAppConfig can be passed as detail payload.
        CustomEventType[CustomEventType["CREATE"] = 1] = "CREATE";
        // This event can be used to trigger an item download. The filename, url and size can be passed as detail payload.
        CustomEventType[CustomEventType["DOWNLOAD_ITEM"] = 2] = "DOWNLOAD_ITEM";
        // This event can be used to update the app configuration. An IAppConfig can be passed as detail payload.
        CustomEventType[CustomEventType["UPDATE_CONFIG"] = 3] = "UPDATE_CONFIG";
        // Indicates that the app has been initialized.
        CustomEventType[CustomEventType["INIT"] = 4] = "INIT";
        // Indicates that the overall upload has been completed.
        CustomEventType[CustomEventType["UPLOAD_COMPLETED"] = 5] = "UPLOAD_COMPLETED";
        // Indicates that the overall download has been completed.
        CustomEventType[CustomEventType["DOWNLOAD_COMPLETED"] = 6] = "DOWNLOAD_COMPLETED";
        // Indicates that an item has been added. It will be passed a IDatatransferItem as detail payload.
        CustomEventType[CustomEventType["ITEM_ADDED"] = 7] = "ITEM_ADDED";
        // Indicates that an item has been removed. It will be passed a IDatatransferItem as detail payload.
        CustomEventType[CustomEventType["ITEM_REMOVED"] = 8] = "ITEM_REMOVED";
        // Indicates that an item has been completed.
        CustomEventType[CustomEventType["ITEM_COMPLETED"] = 9] = "ITEM_COMPLETED";
        // Indicates that all items have been cleared.
        CustomEventType[CustomEventType["ITEMS_CLEARED"] = 10] = "ITEMS_CLEARED";
        // Indicates that an item have been clicked.
        CustomEventType[CustomEventType["ITEM_CLICKED"] = 11] = "ITEM_CLICKED";
    })(CustomEventType || (CustomEventType = {}));
    // tslint:disable-next-line: no-namespace
    var CustomEventTypeExtensions;
    (function (CustomEventTypeExtensions) {
        var CUSTOM_EVENT_TYPE_NS = 'github:niklr/angular-material-datatransfer.';
        var CUSTOM_EVENT_TYPE_UNKNOWN = CUSTOM_EVENT_TYPE_NS + 'unknown';
        var CUSTOM_EVENT_TYPE_CREATE = CUSTOM_EVENT_TYPE_NS + 'create';
        var CUSTOM_EVENT_TYPE_DOWNLOAD_ITEM = CUSTOM_EVENT_TYPE_NS + 'download-item';
        var CUSTOM_EVENT_TYPE_UPDATE_CONFIG = CUSTOM_EVENT_TYPE_NS + 'update-config';
        var CUSTOM_EVENT_TYPE_INIT = CUSTOM_EVENT_TYPE_NS + 'init';
        var CUSTOM_EVENT_TYPE_UPLOAD_COMPLETED = CUSTOM_EVENT_TYPE_NS + 'upload-completed';
        var CUSTOM_EVENT_TYPE_DOWNLOAD_COMPLETED = CUSTOM_EVENT_TYPE_NS + 'download-completed';
        var CUSTOM_EVENT_TYPE_ITEM_ADDED = CUSTOM_EVENT_TYPE_NS + 'item-added';
        var CUSTOM_EVENT_TYPE_ITEM_REMOVED = CUSTOM_EVENT_TYPE_NS + 'item-removed';
        var CUSTOM_EVENT_TYPE_ITEM_COMPLETED = CUSTOM_EVENT_TYPE_NS + 'item-completed';
        var CUSTOM_EVENT_TYPE_ITEMS_CLEARED = CUSTOM_EVENT_TYPE_NS + 'items-cleared';
        var CUSTOM_EVENT_TYPE_ITEM_CLICKED = CUSTOM_EVENT_TYPE_NS + 'item-clicked';
        function toString(type) {
            switch (type) {
                case CustomEventType.CREATE:
                    return CUSTOM_EVENT_TYPE_CREATE;
                case CustomEventType.DOWNLOAD_ITEM:
                    return CUSTOM_EVENT_TYPE_DOWNLOAD_ITEM;
                case CustomEventType.UPDATE_CONFIG:
                    return CUSTOM_EVENT_TYPE_UPDATE_CONFIG;
                case CustomEventType.INIT:
                    return CUSTOM_EVENT_TYPE_INIT;
                case CustomEventType.UPLOAD_COMPLETED:
                    return CUSTOM_EVENT_TYPE_UPLOAD_COMPLETED;
                case CustomEventType.DOWNLOAD_COMPLETED:
                    return CUSTOM_EVENT_TYPE_DOWNLOAD_COMPLETED;
                case CustomEventType.ITEM_ADDED:
                    return CUSTOM_EVENT_TYPE_ITEM_ADDED;
                case CustomEventType.ITEM_REMOVED:
                    return CUSTOM_EVENT_TYPE_ITEM_REMOVED;
                case CustomEventType.ITEM_COMPLETED:
                    return CUSTOM_EVENT_TYPE_ITEM_COMPLETED;
                case CustomEventType.ITEMS_CLEARED:
                    return CUSTOM_EVENT_TYPE_ITEMS_CLEARED;
                case CustomEventType.ITEM_CLICKED:
                    return CUSTOM_EVENT_TYPE_ITEM_CLICKED;
                default:
                    return CUSTOM_EVENT_TYPE_UNKNOWN;
            }
        }
        CustomEventTypeExtensions.toString = toString;
        function toEnum(type) {
            switch (type) {
                case CUSTOM_EVENT_TYPE_CREATE:
                    return CustomEventType.CREATE;
                case CUSTOM_EVENT_TYPE_DOWNLOAD_ITEM:
                    return CustomEventType.DOWNLOAD_ITEM;
                case CUSTOM_EVENT_TYPE_UPDATE_CONFIG:
                    return CustomEventType.UPDATE_CONFIG;
                case CUSTOM_EVENT_TYPE_INIT:
                    return CustomEventType.INIT;
                case CUSTOM_EVENT_TYPE_UPLOAD_COMPLETED:
                    return CustomEventType.UPLOAD_COMPLETED;
                case CUSTOM_EVENT_TYPE_DOWNLOAD_COMPLETED:
                    return CustomEventType.DOWNLOAD_COMPLETED;
                case CUSTOM_EVENT_TYPE_ITEM_ADDED:
                    return CustomEventType.ITEM_ADDED;
                case CUSTOM_EVENT_TYPE_ITEM_REMOVED:
                    return CustomEventType.ITEM_REMOVED;
                case CUSTOM_EVENT_TYPE_ITEM_COMPLETED:
                    return CustomEventType.ITEM_COMPLETED;
                case CUSTOM_EVENT_TYPE_ITEMS_CLEARED:
                    return CustomEventType.ITEMS_CLEARED;
                case CUSTOM_EVENT_TYPE_ITEM_CLICKED:
                    return CustomEventType.ITEM_CLICKED;
                default:
                    return CustomEventType.UNKNOWN;
            }
        }
        CustomEventTypeExtensions.toEnum = toEnum;
    })(CustomEventTypeExtensions || (CustomEventTypeExtensions = {}));

    var HostDirective = /** @class */ (function () {
        function HostDirective(viewContainerRef) {
            this.viewContainerRef = viewContainerRef;
        }
        return HostDirective;
    }());
    HostDirective.ɵfac = function HostDirective_Factory(t) { return new (t || HostDirective)(i0.ɵɵdirectiveInject(i0.ViewContainerRef)); };
    HostDirective.ɵdir = i0.ɵɵdefineDirective({ type: HostDirective, selectors: [["", "amd-host", ""]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HostDirective, [{
                type: i0.Directive,
                args: [{
                        // tslint:disable-next-line: directive-selector
                        selector: '[amd-host]',
                    }]
            }], function () { return [{ type: i0.ViewContainerRef }]; }, null);
    })();

    var CoreAppConfig = /** @class */ (function () {
        function CoreAppConfig() {
            this.showUploadDropzone = true;
            this.uploadBrowseElementId = undefined;
            this.uploadDropElementId = undefined;
            this.paginationRppOptions = [5, 10, 25];
            this.simultaneousDownloads = 2;
            this.downloadMethod = "GET";
            this.downloadHeaders = {};
            this.downloadWithCredentials = false;
            this.downloadXhrTimeout = 0;
            this.preprocessHashEnabled = false;
            this.preprocessHashChecked = true;
            this.preprocessHashTarget = "https://httpbin.org";
            this.preprocessHashMethod = "GET";
            this.preprocessHashParameterName = "hash";
            this.preprocessHashFileNameParameterName = "filename";
            this.preprocessHashFunctionName = "sha1";
            this.preprocessHashEncodingName = "hex";
            this.preprocessHashInputEncodingName = "latin1";
            this.preprocessHashTooltipContent = "The preprocess option checks if the file is already on the system before uploading.";
            this.saveDownloadFileAs = null;
            this.parseMessageCallback = function (message) {
                return message;
            };
            this.getTarget = function (request, params) {
                var target;
                if (request === "preprocessHash" && this.preprocessHashChecked) {
                    target = this.preprocessHashTarget;
                }
                if (typeof target === "function") {
                    return target(params);
                }
                if (target) {
                    var separator = target.indexOf("?") < 0 ? "?" : "&";
                    var joinedParams = params.join("&");
                    return target + separator + joinedParams;
                }
                else {
                    return;
                }
            };
        }
        return CoreAppConfig;
    }());
    var ResumableJsAppConfig = /** @class */ (function () {
        function ResumableJsAppConfig() {
            this.chunkSize = 1 * 1024 * 1024;
            this.forceChunkSize = false;
            this.simultaneousUploads = 3;
            this.fileParameterName = "file";
            this.chunkNumberParameterName = "resumableChunkNumber";
            this.chunkSizeParameterName = "resumableChunkSize";
            this.currentChunkSizeParameterName = "resumableCurrentChunkSize";
            this.totalSizeParameterName = "resumableTotalSize";
            this.typeParameterName = "resumableType";
            this.identifierParameterName = "resumableIdentifier";
            this.fileNameParameterName = "resumableFilename";
            this.relativePathParameterName = "resumableRelativePath";
            this.totalChunksParameterName = "resumableTotalChunks";
            this.throttleProgressCallbacks = 0.5;
            this.query = {};
            this.headers = {};
            this.preprocess = null;
            this.preprocessFile = null;
            this.method = "multipart";
            this.uploadMethod = "POST";
            this.testMethod = "GET";
            this.target = "https://httpbin.org";
            this.testTarget = null;
            this.parameterNamespace = "";
            this.testChunks = true;
            this.generateUniqueIdentifier = null;
            this.getTarget = null;
            this.maxChunkRetries = 100;
            this.chunkRetryInterval = undefined;
            this.permanentErrors = [400, 404, 405, 415, 501];
            this.maxFiles = undefined;
            this.withCredentials = false;
            this.xhrTimeout = 0;
            this.clearInput = true;
            this.chunkFormat = "blob";
            this.minFileSize = 1;
            this.maxFileSize = undefined;
            this.fileType = [];
            this.maxFilesErrorCallback = function (files, errorCount) {
                alert("Please upload no more than " +
                    this.maxFiles +
                    " file" +
                    (this.maxFiles === 1 ? "" : "s") +
                    " at a time.");
            };
            this.minFileSizeErrorCallback = function (file, errorCount) {
                alert(file.fileName ||
                    file.name +
                        " is too small; please upload files larger than " +
                        this.minFileSize +
                        ".");
            };
            this.maxFileSizeErrorCallback = function (file, errorCount) {
                alert(file.fileName ||
                    file.name +
                        " is too large; please upload files less than " +
                        this.maxFileSize +
                        ".");
            };
            this.fileTypeErrorCallback = function (file, errorCount) {
                alert(file.fileName ||
                    file.name +
                        " has type not allowed; please upload files of type " +
                        this.fileType +
                        ".");
            };
        }
        return ResumableJsAppConfig;
    }());
    var AppConfig = /** @class */ (function () {
        function AppConfig() {
            this.production = true;
            this.core = new CoreAppConfig();
            this.resumablejs = new ResumableJsAppConfig();
        }
        return AppConfig;
    }());

    var ConfigService = /** @class */ (function () {
        function ConfigService() {
        }
        ConfigService.prototype.load = function (config) {
            if (!!config) {
                ConfigService.settings.production = config.production;
                if (!!config.core) {
                    Object.keys(config.core).forEach(function (propertyName) {
                        if (typeof config.core[propertyName] !== 'undefined') {
                            ConfigService.settings.core[propertyName] = config.core[propertyName];
                        }
                    });
                }
                if (!!config.resumablejs) {
                    Object.keys(config.resumablejs).forEach(function (propertyName) {
                        if (typeof config.resumablejs[propertyName] !== 'undefined') {
                            ConfigService.settings.resumablejs[propertyName] = config.resumablejs[propertyName];
                        }
                    });
                }
            }
        };
        return ConfigService;
    }());
    ConfigService.settings = new AppConfig();
    ConfigService.ɵfac = function ConfigService_Factory(t) { return new (t || ConfigService)(); };
    ConfigService.ɵprov = i0.ɵɵdefineInjectable({ token: ConfigService, factory: ConfigService.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ConfigService, [{
                type: i0.Injectable
            }], function () { return []; }, null);
    })();

    var DateUtil = /** @class */ (function () {
        function DateUtil() {
        }
        DateUtil.prototype.now = function () {
            return ((Date.now) ? Date.now() : (new Date()).getTime());
        };
        DateUtil.prototype.format = function (seconds) {
            var date = new Date(seconds * 1000);
            if (isNaN(date.getTime())) {
                return undefined;
            }
            else {
                return ('0' + date.getUTCHours()).slice(-2) + ':' +
                    ('0' + date.getUTCMinutes()).slice(-2) + ':' +
                    ('0' + date.getUTCSeconds()).slice(-2);
            }
        };
        return DateUtil;
    }());
    DateUtil.ɵfac = function DateUtil_Factory(t) { return new (t || DateUtil)(); };
    DateUtil.ɵprov = i0.ɵɵdefineInjectable({ token: DateUtil, factory: DateUtil.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DateUtil, [{
                type: i0.Injectable
            }], null, null);
    })();

    var DecimalByteUnit;
    (function (DecimalByteUnit) {
        /**
         * Byte (B)
         * 1 Byte
         */
        DecimalByteUnit[DecimalByteUnit["Byte"] = 0] = "Byte";
        /**
         * Kilobyte (kB)
         * 10^3 Byte = 1.000 Byte
         */
        DecimalByteUnit[DecimalByteUnit["KB"] = 1] = "KB";
        /**
         * Megabyte (MB)
         * 10^6 Byte = 1.000.000 Byte
         */
        DecimalByteUnit[DecimalByteUnit["MB"] = 2] = "MB";
        /**
         * Gigabyte (GB)
         * 10^9 Byte = 1.000.000.000 Byte
         */
        DecimalByteUnit[DecimalByteUnit["GB"] = 3] = "GB";
        /**
         * Terabyte (TB)
         * 10^12 Byte = 1.000.000.000.000 Byte
         */
        DecimalByteUnit[DecimalByteUnit["TB"] = 4] = "TB";
        /**
         * Petabyte (PB)
         * 10^15 Byte = 1.000.000.000.000.000 Byte
         */
        DecimalByteUnit[DecimalByteUnit["PB"] = 5] = "PB";
    })(DecimalByteUnit || (DecimalByteUnit = {}));

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    ;
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    // @dynamic
    var EnumExtension = /** @class */ (function () {
        function EnumExtension() {
        }
        EnumExtension.getNamesAndValues = function (e) {
            return this.getNames(e).map(function (n) { return ({ name: n, value: e[n] }); });
        };
        EnumExtension.getNames = function (e) {
            return this.getObjValues(e).filter(function (v) { return typeof v === 'string'; });
        };
        EnumExtension.getValues = function (e) {
            return this.getObjValues(e).filter(function (v) { return typeof v === 'number'; });
        };
        EnumExtension.getObjValues = function (e) {
            return Object.keys(e).map(function (k) { return e[k]; });
        };
        return EnumExtension;
    }());

    var DecimalByteUnitUtil = /** @class */ (function () {
        function DecimalByteUnitUtil() {
            this.C_KB = Math.pow(10, 3);
            this.C_MB = Math.pow(10, 6);
            this.C_GB = Math.pow(10, 9);
            this.C_TB = Math.pow(10, 12);
            this.C_PB = Math.pow(10, 15);
            this.MAX = Number.MAX_VALUE;
            this.byteUnits = EnumExtension.getNames(DecimalByteUnit);
        }
        DecimalByteUnitUtil.prototype.multiply = function (number, multiplier) {
            var limit = this.MAX / multiplier;
            if (number > limit) {
                return Number.MAX_VALUE;
            }
            if (number < -limit) {
                return Number.MIN_VALUE;
            }
            return number * multiplier;
        };
        DecimalByteUnitUtil.prototype.convert = function (number, fromUnit, toUnit) {
            var bytes = this.toBytes(number, fromUnit);
            switch (toUnit) {
                case DecimalByteUnit.Byte:
                    return bytes;
                case DecimalByteUnit.KB:
                    return bytes / this.C_KB;
                case DecimalByteUnit.MB:
                    return bytes / this.C_MB;
                case DecimalByteUnit.GB:
                    return bytes / this.C_GB;
                case DecimalByteUnit.TB:
                    return bytes / this.C_TB;
                case DecimalByteUnit.PB:
                    return bytes / this.C_PB;
            }
            return number;
        };
        DecimalByteUnitUtil.prototype.toBytes = function (number, fromUnit) {
            switch (fromUnit) {
                case DecimalByteUnit.Byte:
                    return number;
                case DecimalByteUnit.KB:
                    return this.multiply(number, this.C_KB);
                case DecimalByteUnit.MB:
                    return this.multiply(number, this.C_MB);
                case DecimalByteUnit.GB:
                    return this.multiply(number, this.C_GB);
                case DecimalByteUnit.TB:
                    return this.multiply(number, this.C_TB);
                case DecimalByteUnit.PB:
                    return this.multiply(number, this.C_PB);
            }
            return number;
        };
        DecimalByteUnitUtil.prototype.format = function (number, fromUnit) {
            var e_1, _a;
            var result;
            result = [DecimalByteUnit.Byte, this.toBytes(number, fromUnit)];
            try {
                for (var _b = __values(this.byteUnits), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var currentUnit = _c.value;
                    if (Math.abs(result[1]) < 1000) {
                        result[0] = DecimalByteUnit[currentUnit];
                        break;
                    }
                    else {
                        result[1] /= 1000;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            result[1] = Number(result[1].toFixed(2));
            return result;
        };
        return DecimalByteUnitUtil;
    }());
    DecimalByteUnitUtil.ɵfac = function DecimalByteUnitUtil_Factory(t) { return new (t || DecimalByteUnitUtil)(); };
    DecimalByteUnitUtil.ɵprov = i0.ɵɵdefineInjectable({ token: DecimalByteUnitUtil, factory: DecimalByteUnitUtil.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DecimalByteUnitUtil, [{
                type: i0.Injectable
            }], null, null);
    })();

    var SizeContainer = /** @class */ (function () {
        function SizeContainer(init) {
            this.decimalByteUnit = DecimalByteUnit.MB;
            this.decimalByteUnitSize = 0;
            var injector = i0.ReflectiveInjector.resolveAndCreate([DecimalByteUnitUtil]);
            this.decimalByteUnitUtil = injector.get(DecimalByteUnitUtil);
            this.update(init);
        }
        SizeContainer.prototype.update = function (init) {
            if (!!this.decimalByteUnitUtil && !!init && !!init.decimalByteUnitSize) {
                this.updateDecimal(init.decimalByteUnit, init.decimalByteUnitSize);
            }
        };
        SizeContainer.prototype.updateDecimal = function (decimalByteUnit, decimalByteUnitSize) {
            var convertResult = this.decimalByteUnitUtil.format(decimalByteUnitSize, decimalByteUnit);
            this.decimalByteUnit = convertResult[0];
            this.decimalByteUnitSize = convertResult[1];
            this.displayUnit = DecimalByteUnit[this.decimalByteUnit];
            this.displaySize = !!this.decimalByteUnitSize ? this.decimalByteUnitSize : 0;
        };
        return SizeContainer;
    }());

    var ProgressContainer = /** @class */ (function () {
        function ProgressContainer(total) {
            var injector = i0.ReflectiveInjector.resolveAndCreate([DateUtil]);
            this.dateUtil = injector.get(DateUtil);
            this.bitrateSizeContainer = new SizeContainer();
            this.loadedSizeContainer = new SizeContainer();
            this.totalSizeContainer = new SizeContainer();
            this.reset(total);
        }
        ProgressContainer.prototype.reset = function (total) {
            this.progressTimestamp = this.dateUtil.now();
            this.bitrateTimestamp = this.dateUtil.now();
            this.loaded = 0;
            this.bitrate = 0;
            this.percent = 0;
            this.total = total;
            this.displayBitrate = undefined;
            this.displayTimeLeft = undefined;
            this.bitrateSizeContainer.updateDecimal(DecimalByteUnit.Byte, this.bitrate);
            this.loadedSizeContainer.updateDecimal(DecimalByteUnit.Byte, this.loaded);
            this.totalSizeContainer.updateDecimal(DecimalByteUnit.Byte, this.total);
        };
        ProgressContainer.prototype.updateProgress = function (now, loaded, interval) {
            var timeDiff = now - this.progressTimestamp;
            // console.log('loaded: ' + loaded + ' total: ' + this.total);
            if (!this.percent || timeDiff > interval) {
                this.percent = Number((loaded / this.total * 100).toFixed(2));
                this.loaded = loaded;
                this.loadedSizeContainer.updateDecimal(DecimalByteUnit.Byte, this.loaded);
                this.progressTimestamp = now;
                if (this.bitrate > 0) {
                    this.displayTimeLeft = this.dateUtil.format((this.total - this.loaded) * 8 / this.bitrate);
                }
                else {
                    this.displayTimeLeft = this.dateUtil.format(0);
                }
            }
            else if (loaded >= this.total) {
                this.percent = 100;
                this.loaded = this.total;
            }
        };
        ProgressContainer.prototype.updateBitrate = function (now, loaded, interval) {
            var timeDiff = now - this.bitrateTimestamp;
            if (!this.bitrate || timeDiff > interval) {
                this.bitrate = (loaded - this.loaded) * (1000 / timeDiff) * 8;
                if (this.bitrate === Number.POSITIVE_INFINITY || this.bitrate === Number.NEGATIVE_INFINITY) {
                    this.bitrate = 0;
                }
                this.bitrateSizeContainer.updateDecimal(DecimalByteUnit.Byte, this.bitrate / 8);
                this.displayBitrate = this.bitrateSizeContainer.displaySize + ' ' + this.bitrateSizeContainer.displayUnit + '/s';
                this.bitrateTimestamp = now;
            }
        };
        return ProgressContainer;
    }());

    var TransferStatus;
    (function (TransferStatus) {
        TransferStatus[TransferStatus["Ready"] = 0] = "Ready";
        TransferStatus[TransferStatus["Queued"] = 1] = "Queued";
        TransferStatus[TransferStatus["Preprocessing"] = 2] = "Preprocessing";
        TransferStatus[TransferStatus["Uploading"] = 3] = "Uploading";
        TransferStatus[TransferStatus["Downloading"] = 4] = "Downloading";
        TransferStatus[TransferStatus["Finished"] = 5] = "Finished";
        TransferStatus[TransferStatus["Failed"] = 6] = "Failed";
    })(TransferStatus || (TransferStatus = {}));

    var DatatransferStore = /** @class */ (function () {
        function DatatransferStore() {
            this.items = [];
            this.count = 0;
            this.failedCount = 0;
            this.uploadProgress = new ProgressContainer(0);
            this.downloadProgress = new ProgressContainer(0);
        }
        DatatransferStore.prototype.updateCount = function () {
            this.count = this.items.length;
        };
        DatatransferStore.prototype.updateFailedCount = function () {
            this.failedCount = this.getByStatus(TransferStatus.Failed).length;
        };
        DatatransferStore.prototype.getItems = function () {
            return this.items;
        };
        DatatransferStore.prototype.getSelected = function () {
            return this.items.filter(function (item) { return item.isSelected === true; });
        };
        DatatransferStore.prototype.getById = function (id) {
            return this.items.find(function (item) { return item.id === id; });
        };
        DatatransferStore.prototype.getIndexById = function (id) {
            return this.items.findIndex(function (i) { return i.id === id; });
        };
        DatatransferStore.prototype.clear = function () {
            this.items.length = 0;
            this.updateCount();
            this.updateFailedCount();
        };
        DatatransferStore.prototype.addItem = function (item) {
            this.items.push(item);
            this.updateCount();
        };
        DatatransferStore.prototype.removeById = function (id) {
            var index = this.getIndexById(id);
            if (index > -1) {
                this.items.splice(index, 1);
                this.updateCount();
            }
        };
        DatatransferStore.prototype.getByStatus = function (status) {
            return this.items.filter(function (item) { return item.status === status; });
        };
        return DatatransferStore;
    }());
    DatatransferStore.ɵfac = function DatatransferStore_Factory(t) { return new (t || DatatransferStore)(); };
    DatatransferStore.ɵprov = i0.ɵɵdefineInjectable({ token: DatatransferStore, factory: DatatransferStore.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DatatransferStore, [{
                type: i0.Injectable
            }], function () { return []; }, null);
    })();

    var PaginationContainer = /** @class */ (function () {
        function PaginationContainer() {
            this.pages = [];
            this.page = 1;
            this.rpp = 5;
            this.total = 0;
        }
        return PaginationContainer;
    }());

    var PaginationService = /** @class */ (function () {
        function PaginationService(datatransferStore) {
            this.datatransferStore = datatransferStore;
            this.paginatedItems = [];
            this.pagination = new PaginationContainer();
        }
        PaginationService.prototype.setRppOptions = function (rppOptions) {
            this.pagination.rppOptions = rppOptions;
            this.setPaginationContainer();
        };
        PaginationService.prototype.update = function (total) {
            if (total <= 0) {
                this.paginatedItems.length = 0;
            }
            this.pagination.total = total;
            this.setPaginationContainer();
        };
        PaginationService.prototype.setPaginationContainer = function () {
            var pageCount = this.pageCount();
            if (this.pagination.pages.length > pageCount) {
                this.pagination.pages.splice(pageCount);
            }
            else {
                for (var i = this.pagination.pages.length; i < pageCount; i++) {
                    this.pagination.pages.push(i + 1);
                }
            }
            if (!this.pagination.pages.includes(this.pagination.page)) {
                this.pagination.page = 1;
            }
            if (!!this.pagination.rppOptions && this.pagination.rppOptions.length > 0
                && !this.pagination.rppOptions.includes(this.pagination.rpp)) {
                this.pagination.rpp = this.pagination.rppOptions[0];
            }
            this.onPaginationChange();
        };
        PaginationService.prototype.max = function () {
            return this.hasNext() ? this.pagination.page * this.pagination.rpp : this.pagination.total;
        };
        PaginationService.prototype.min = function () {
            return this.pagination.total > 0 ? this.pagination.page * this.pagination.rpp - this.pagination.rpp + 1 : 0;
        };
        PaginationService.prototype.first = function () {
            this.pagination.page = 1;
            this.onPaginationChange();
        };
        PaginationService.prototype.last = function () {
            this.pagination.page = this.pageCount();
            this.onPaginationChange();
        };
        PaginationService.prototype.hasNext = function () {
            return this.pagination.page * this.pagination.rpp < this.pagination.total;
        };
        PaginationService.prototype.hasPrevious = function () {
            return this.pagination.page > 1;
        };
        PaginationService.prototype.moveNext = function () {
            this.pagination.page++;
            this.onPaginationChange();
        };
        PaginationService.prototype.movePrevious = function () {
            this.pagination.page--;
            this.onPaginationChange();
        };
        PaginationService.prototype.setPage = function (page) {
            this.pagination.page = page;
            this.onPageChange();
        };
        PaginationService.prototype.onPageChange = function () {
            this.setPaginationContainer();
            this.onPaginationChange();
        };
        PaginationService.prototype.onRppChange = function () {
            this.setPaginationContainer();
            this.pagination.page = 1;
            this.onPaginationChange();
        };
        PaginationService.prototype.onPaginationChange = function () {
            var startIndex = (this.pagination.page - 1) * this.pagination.rpp;
            var endIndex = Math.min(startIndex + this.pagination.rpp, this.pagination.total);
            this.paginatedItems = this.datatransferStore.getItems().slice(startIndex, endIndex);
        };
        PaginationService.prototype.pageCount = function () {
            return this.pagination.total > 0 ? Math.ceil(this.pagination.total / (this.pagination.rpp > 0 ? this.pagination.rpp : 1)) : 1;
        };
        PaginationService.prototype.getPageByItemId = function (id) {
            var index = this.datatransferStore.getIndexById(id);
            if (index > -1) {
                return Math.ceil((index + 1) / this.pagination.rpp);
            }
        };
        PaginationService.prototype.setPageByItemId = function (id) {
            var page = this.getPageByItemId(id);
            if (this.pagination.page !== page) {
                this.setPage(page);
            }
        };
        return PaginationService;
    }());
    PaginationService.ɵfac = function PaginationService_Factory(t) { return new (t || PaginationService)(i0.ɵɵinject(DatatransferStore)); };
    PaginationService.ɵprov = i0.ɵɵdefineInjectable({ token: PaginationService, factory: PaginationService.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PaginationService, [{
                type: i0.Injectable
            }], function () { return [{ type: DatatransferStore }]; }, null);
    })();

    // From: https://github.com/angular/angular/issues/5458
    var LoggerService = /** @class */ (function () {
        function LoggerService() {
            this.noop = function () { };
        }
        Object.defineProperty(LoggerService.prototype, "enabled", {
            get: function () {
                return !ConfigService.settings.production;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LoggerService.prototype, "debug", {
            get: function () {
                if (this.enabled) {
                    return console.debug.bind(console);
                }
                return this.noop;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LoggerService.prototype, "error", {
            get: function () {
                if (this.enabled) {
                    return console.error.bind(console);
                }
                return this.noop;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LoggerService.prototype, "log", {
            get: function () {
                if (this.enabled) {
                    return console.log.bind(console);
                }
                return this.noop;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LoggerService.prototype, "info", {
            get: function () {
                if (this.enabled) {
                    return console.info.bind(console);
                }
                return this.noop;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LoggerService.prototype, "warn", {
            get: function () {
                if (this.enabled) {
                    return console.warn.bind(console);
                }
                return this.noop;
            },
            enumerable: false,
            configurable: true
        });
        return LoggerService;
    }());
    LoggerService.ɵfac = function LoggerService_Factory(t) { return new (t || LoggerService)(); };
    LoggerService.ɵprov = i0.ɵɵdefineInjectable({ token: LoggerService, factory: LoggerService.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoggerService, [{
                type: i0.Injectable
            }], function () { return []; }, null);
    })();

    function PaginationComponent_mat_option_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-option", 4);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var p_r2 = ctx.$implicit;
            i0.ɵɵproperty("value", p_r2);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", p_r2, " ");
        }
    }
    function PaginationComponent_mat_option_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-option", 4);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var o_r3 = ctx.$implicit;
            i0.ɵɵproperty("value", o_r3);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", o_r3, " ");
        }
    }
    var PaginationComponent = /** @class */ (function () {
        function PaginationComponent(logger) {
            this.logger = logger;
        }
        PaginationComponent.prototype.max = function () {
            return this.paginationService.max();
        };
        ;
        PaginationComponent.prototype.min = function () {
            return this.paginationService.min();
        };
        ;
        PaginationComponent.prototype.first = function () {
            this.paginationService.first();
        };
        PaginationComponent.prototype.last = function () {
            this.paginationService.last();
        };
        PaginationComponent.prototype.hasNext = function () {
            return this.paginationService.hasNext();
        };
        PaginationComponent.prototype.hasPrevious = function () {
            return this.paginationService.hasPrevious();
        };
        ;
        PaginationComponent.prototype.moveNext = function () {
            this.paginationService.moveNext();
        };
        PaginationComponent.prototype.movePrevious = function () {
            this.paginationService.movePrevious();
        };
        PaginationComponent.prototype.onPageChange = function () {
            this.paginationService.onPageChange();
        };
        PaginationComponent.prototype.onRppChange = function () {
            this.paginationService.onRppChange();
        };
        PaginationComponent.prototype.onPaginationChange = function () {
            this.paginationService.onPaginationChange();
        };
        PaginationComponent.prototype.pageCount = function () {
            return this.paginationService.pageCount();
        };
        return PaginationComponent;
    }());
    PaginationComponent.ɵfac = function PaginationComponent_Factory(t) { return new (t || PaginationComponent)(i0.ɵɵdirectiveInject(LoggerService)); };
    PaginationComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PaginationComponent, selectors: [["amd-pagination"]], inputs: { paginationService: "paginationService" }, decls: 14, vars: 9, consts: [["placeholder", "Page", "aria-label", "Page", 3, "ngModel", "ngModelChange", "change"], [3, "value", 4, "ngFor", "ngForOf"], ["placeholder", "Rows per page", "aria-label", "Rows per page", 3, "ngModel", "ngModelChange", "change"], ["mat-icon-button", "", "mat-button", "", 3, "disabled", "click"], [3, "value"]], template: function PaginationComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-form-field");
                i0.ɵɵelementStart(1, "mat-select", 0);
                i0.ɵɵlistener("ngModelChange", function PaginationComponent_Template_mat_select_ngModelChange_1_listener($event) { return ctx.paginationService.pagination.page = $event; })("change", function PaginationComponent_Template_mat_select_change_1_listener() { return ctx.onPageChange(); });
                i0.ɵɵtemplate(2, PaginationComponent_mat_option_2_Template, 2, 2, "mat-option", 1);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "mat-form-field");
                i0.ɵɵelementStart(4, "mat-select", 2);
                i0.ɵɵlistener("ngModelChange", function PaginationComponent_Template_mat_select_ngModelChange_4_listener($event) { return ctx.paginationService.pagination.rpp = $event; })("change", function PaginationComponent_Template_mat_select_change_4_listener() { return ctx.onRppChange(); });
                i0.ɵɵtemplate(5, PaginationComponent_mat_option_5_Template, 2, 2, "mat-option", 1);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(6, "span");
                i0.ɵɵtext(7);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(8, "button", 3);
                i0.ɵɵlistener("click", function PaginationComponent_Template_button_click_8_listener() { return ctx.movePrevious(); });
                i0.ɵɵelementStart(9, "mat-icon");
                i0.ɵɵtext(10, "navigate_before");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(11, "button", 3);
                i0.ɵɵlistener("click", function PaginationComponent_Template_button_click_11_listener() { return ctx.moveNext(); });
                i0.ɵɵelementStart(12, "mat-icon");
                i0.ɵɵtext(13, "navigate_next");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngModel", ctx.paginationService.pagination.page);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngForOf", ctx.paginationService.pagination.pages);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngModel", ctx.paginationService.pagination.rpp);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngForOf", ctx.paginationService.pagination.rppOptions);
                i0.ɵɵadvance(2);
                i0.ɵɵtextInterpolate3("", ctx.min(), " - ", ctx.max(), " of ", ctx.paginationService.pagination.total, "");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("disabled", !ctx.hasPrevious());
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("disabled", !ctx.hasNext());
            }
        }, directives: [i4.MatFormField, i3.MatSelect, i3$1.NgControlStatus, i3$1.NgModel, i3$2.NgForOf, i6.MatButton, i7.MatIcon, i8.MatOption], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PaginationComponent, [{
                type: i0.Component,
                args: [{
                        // tslint:disable-next-line:component-selector
                        selector: 'amd-pagination',
                        templateUrl: 'pagination.component.html'
                    }]
            }], function () { return [{ type: LoggerService }]; }, { paginationService: [{
                    type: i0.Input
                }] });
    })();

    var DropzoneComponent = /** @class */ (function () {
        function DropzoneComponent() {
        }
        return DropzoneComponent;
    }());
    DropzoneComponent.ɵfac = function DropzoneComponent_Factory(t) { return new (t || DropzoneComponent)(); };
    DropzoneComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DropzoneComponent, selectors: [["amd-dropzone"]], decls: 8, vars: 0, consts: [["id", "amd-dropzone-component", 1, "amd-dropzone"], [1, "amd-dropzone-content"], [2, "font-size", "64px", "color", "rgba(255, 255, 255, 1)"], [2, "margin-left", "10px"]], template: function DropzoneComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "div", 1);
                i0.ɵɵelementStart(2, "mat-icon", 2);
                i0.ɵɵtext(3, "insert_drive_file");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(4, "mat-icon", 3);
                i0.ɵɵtext(5, "add_circle_outline");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(6, "p");
                i0.ɵɵtext(7, "Drop your files/folders here or click to upload.");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
        }, directives: [i7.MatIcon], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DropzoneComponent, [{
                type: i0.Component,
                args: [{
                        // tslint:disable-next-line:component-selector
                        selector: 'amd-dropzone',
                        templateUrl: 'dropzone.component.html'
                    }]
            }], function () { return []; }, null);
    })();

    function ProgressComponent_mat_progress_bar_9_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "mat-progress-bar", 5);
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵproperty("value", ctx_r0.progressContainer.percent);
        }
    }
    var ProgressComponent = /** @class */ (function () {
        function ProgressComponent() {
        }
        return ProgressComponent;
    }());
    ProgressComponent.ɵfac = function ProgressComponent_Factory(t) { return new (t || ProgressComponent)(); };
    ProgressComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ProgressComponent, selectors: [["amd-progress"]], inputs: { progressContainer: "progressContainer" }, decls: 10, vars: 7, consts: [[2, "font-size", "11px", "margin-top", "10px"], ["fxFlex", "25%", "fxFlex.lt-md", "50%"], ["fxFlex", "25%", "fxHide.lt-md", "", 2, "text-align", "center"], ["fxFlex", "25%", "fxFlex.lt-md", "50%", 2, "text-align", "right"], [3, "value", 4, "ngIf"], [3, "value"]], template: function ProgressComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "div", 1);
                i0.ɵɵtext(2);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "div", 2);
                i0.ɵɵtext(4);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(5, "div", 2);
                i0.ɵɵtext(6);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(7, "div", 3);
                i0.ɵɵtext(8);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(9, ProgressComponent_mat_progress_bar_9_Template, 1, 1, "mat-progress-bar", 4);
            }
            if (rf & 2) {
                i0.ɵɵadvance(2);
                i0.ɵɵtextInterpolate1(" ", ctx.progressContainer.displayBitrate, " ");
                i0.ɵɵadvance(2);
                i0.ɵɵtextInterpolate1(" ", ctx.progressContainer.displayTimeLeft, " ");
                i0.ɵɵadvance(2);
                i0.ɵɵtextInterpolate1(" ", ctx.progressContainer.percent, "% ");
                i0.ɵɵadvance(2);
                i0.ɵɵtextInterpolate3(" ", ctx.progressContainer.loadedSizeContainer.displaySize, " / ", ctx.progressContainer.totalSizeContainer.displaySize, " ", ctx.progressContainer.totalSizeContainer.displayUnit, " ");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.progressContainer.total > 0);
            }
        }, directives: [i4$1.DefaultFlexDirective, i7$1.DefaultShowHideDirective, i3$2.NgIf, i4$2.MatProgressBar], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProgressComponent, [{
                type: i0.Component,
                args: [{
                        // tslint:disable-next-line:component-selector
                        selector: 'amd-progress',
                        templateUrl: 'progress.component.html'
                    }]
            }], function () { return []; }, { progressContainer: [{
                    type: i0.Input
                }] });
    })();

    function MainComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelement(1, "amd-dropzone");
            i0.ɵɵelementEnd();
        }
    }
    function MainComponent_button_4_Template(rf, ctx) {
        if (rf & 1) {
            var _r13_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 22);
            i0.ɵɵlistener("click", function MainComponent_button_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r13_1); var ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.datatransferFacade.startAll(); });
            i0.ɵɵelementStart(1, "mat-icon");
            i0.ɵɵtext(2, "play_arrow");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(3, " Start ");
            i0.ɵɵelementEnd();
        }
    }
    function MainComponent_button_5_Template(rf, ctx) {
        if (rf & 1) {
            var _r15_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 22);
            i0.ɵɵlistener("click", function MainComponent_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r15_1); var ctx_r14 = i0.ɵɵnextContext(); return ctx_r14.datatransferFacade.pauseAll(); });
            i0.ɵɵelementStart(1, "mat-icon");
            i0.ɵɵtext(2, "pause");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(3, " Pause ");
            i0.ɵɵelementEnd();
        }
    }
    function MainComponent_button_6_Template(rf, ctx) {
        if (rf & 1) {
            var _r17_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 22);
            i0.ɵɵlistener("click", function MainComponent_button_6_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r17_1); var ctx_r16 = i0.ɵɵnextContext(); return ctx_r16.datatransferFacade.removeAll(); });
            i0.ɵɵelementStart(1, "mat-icon");
            i0.ɵɵtext(2, "close");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(3, " Remove all ");
            i0.ɵɵelementEnd();
        }
    }
    function MainComponent_button_7_Template(rf, ctx) {
        if (rf & 1) {
            var _r19_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 22);
            i0.ɵɵlistener("click", function MainComponent_button_7_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r19_1); var ctx_r18 = i0.ɵɵnextContext(); return ctx_r18.datatransferFacade.retryAll(); });
            i0.ɵɵelementStart(1, "mat-icon");
            i0.ɵɵtext(2, "refresh");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r4 = i0.ɵɵnextContext();
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1(" Retry (", ctx_r4.datatransferStore.failedCount, ") ");
        }
    }
    function MainComponent_button_16_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 23);
            i0.ɵɵtext(1, " Export ");
            i0.ɵɵelementStart(2, "mat-icon");
            i0.ɵɵtext(3, "expand_more");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0.ɵɵnextContext();
            var _r5 = i0.ɵɵreference(9);
            i0.ɵɵproperty("matMenuTriggerFor", _r5);
        }
    }
    function MainComponent_mat_checkbox_17_span_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span", 26);
            i0.ɵɵelementStart(1, "mat-icon");
            i0.ɵɵtext(2, "info_outline");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r20 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("matTooltip", ctx_r20.config.core.preprocessHashTooltipContent);
        }
    }
    function MainComponent_mat_checkbox_17_Template(rf, ctx) {
        if (rf & 1) {
            var _r22_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "mat-checkbox", 24);
            i0.ɵɵlistener("ngModelChange", function MainComponent_mat_checkbox_17_Template_mat_checkbox_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r22_1); var ctx_r21 = i0.ɵɵnextContext(); return ctx_r21.config.core.preprocessHashChecked = $event; });
            i0.ɵɵtext(1, " Preprocessing ");
            i0.ɵɵtemplate(2, MainComponent_mat_checkbox_17_span_2_Template, 3, 1, "span", 25);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r7 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngModel", ctx_r7.config.core.preprocessHashChecked);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx_r7.datatransferFacade.showPreprocessingTooltip());
        }
    }
    function MainComponent_div_20_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelement(1, "amd-progress", 27);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r8 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("progressContainer", ctx_r8.uploadProgress);
        }
    }
    function MainComponent_div_21_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelement(1, "amd-progress", 27);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r9 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("progressContainer", ctx_r9.downloadProgress);
        }
    }
    function MainComponent_ng_template_41_div_0_button_11_Template(rf, ctx) {
        if (rf & 1) {
            var _r38_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 44);
            i0.ɵɵlistener("click", function MainComponent_ng_template_41_div_0_button_11_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r38_1); var item_r23 = i0.ɵɵnextContext(2).$implicit; var ctx_r36 = i0.ɵɵnextContext(); return ctx_r36.datatransferFacade.openEditPathDialog(item_r23); });
            i0.ɵɵelementStart(1, "mat-icon", 45);
            i0.ɵɵtext(2, "edit");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
    }
    function MainComponent_ng_template_41_div_0_Template(rf, ctx) {
        if (rf & 1) {
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
        }
        if (rf & 2) {
            var item_r23 = i0.ɵɵnextContext().$implicit;
            var ctx_r25 = i0.ɵɵnextContext();
            i0.ɵɵadvance(10);
            i0.ɵɵtextInterpolate(item_r23.displayPath);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r25.datatransferFacade.showEditDialog(item_r23));
        }
    }
    function MainComponent_ng_template_41_button_10_Template(rf, ctx) {
        if (rf & 1) {
            var _r42_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 44);
            i0.ɵɵlistener("click", function MainComponent_ng_template_41_button_10_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r42_1); var item_r23 = i0.ɵɵnextContext().$implicit; var ctx_r40 = i0.ɵɵnextContext(); return ctx_r40.datatransferFacade.openEditFilenameDialog(item_r23); });
            i0.ɵɵelementStart(1, "mat-icon", 46);
            i0.ɵɵtext(2, "edit");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
    }
    function MainComponent_ng_template_41_div_13_mat_progress_spinner_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "mat-progress-spinner", 49);
        }
        if (rf & 2) {
            var item_r23 = i0.ɵɵnextContext(2).$implicit;
            i0.ɵɵproperty("diameter", 20)("value", item_r23.preprocessContainer.percent);
        }
    }
    function MainComponent_ng_template_41_div_13_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 47);
            i0.ɵɵtemplate(1, MainComponent_ng_template_41_div_13_mat_progress_spinner_1_Template, 1, 2, "mat-progress-spinner", 48);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var item_r23 = i0.ɵɵnextContext().$implicit;
            i0.ɵɵpropertyInterpolate1("matTooltip", "", item_r23.preprocessContainer.percent, "%");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", item_r23.preprocessContainer.percent > 0);
        }
    }
    function MainComponent_ng_template_41_ng_template_14_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 12);
            i0.ɵɵelementStart(1, "mat-icon");
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var item_r23 = i0.ɵɵnextContext().$implicit;
            var ctx_r29 = i0.ɵɵnextContext();
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx_r29.datatransferFacade.getStatusClass(item_r23.status));
        }
    }
    function MainComponent_ng_template_41_div_17_mat_progress_bar_10_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "mat-progress-bar", 55);
        }
        if (rf & 2) {
            var item_r23 = i0.ɵɵnextContext(2).$implicit;
            i0.ɵɵproperty("value", item_r23.progressContainer.percent);
        }
    }
    function MainComponent_ng_template_41_div_17_Template(rf, ctx) {
        if (rf & 1) {
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
        }
        if (rf & 2) {
            var item_r23 = i0.ɵɵnextContext().$implicit;
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
        }
    }
    function MainComponent_ng_template_41_ng_template_18_div_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelementStart(1, "small");
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var item_r23 = i0.ɵɵnextContext(2).$implicit;
            var ctx_r50 = i0.ɵɵnextContext();
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx_r50.datatransferFacade.parseMessage(item_r23));
        }
    }
    function MainComponent_ng_template_41_ng_template_18_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtext(0);
            i0.ɵɵtemplate(1, MainComponent_ng_template_41_ng_template_18_div_1_Template, 3, 1, "div", 1);
        }
        if (rf & 2) {
            var item_r23 = i0.ɵɵnextContext().$implicit;
            i0.ɵɵtextInterpolate3(" ", item_r23.getStatusName(), " (", item_r23.sizeContainer.displaySize, " ", item_r23.sizeContainer.displayUnit, ") ");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !!item_r23.message);
        }
    }
    function MainComponent_ng_template_41_button_23_Template(rf, ctx) {
        if (rf & 1) {
            var _r55_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 6);
            i0.ɵɵlistener("click", function MainComponent_ng_template_41_button_23_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r55_1); var item_r23 = i0.ɵɵnextContext().$implicit; var ctx_r53 = i0.ɵɵnextContext(); return ctx_r53.datatransferFacade.retryItem(item_r23); });
            i0.ɵɵelementStart(1, "mat-icon");
            i0.ɵɵtext(2, "refresh");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "span");
            i0.ɵɵtext(4, "Retry");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
    }
    var _c0 = function (a0) { return { "selected": a0 }; };
    function MainComponent_ng_template_41_Template(rf, ctx) {
        if (rf & 1) {
            var _r57_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵtemplate(0, MainComponent_ng_template_41_div_0_Template, 12, 2, "div", 1);
            i0.ɵɵelementStart(1, "div", 28);
            i0.ɵɵlistener("click", function MainComponent_ng_template_41_Template_div_click_1_listener() { i0.ɵɵrestoreView(_r57_1); var item_r23 = ctx.$implicit; var ctx_r56 = i0.ɵɵnextContext(); return ctx_r56.datatransferFacade.itemClick(item_r23); });
            i0.ɵɵelementStart(2, "div", 29);
            i0.ɵɵelementStart(3, "div", 30);
            i0.ɵɵelementStart(4, "div", 12);
            i0.ɵɵelementStart(5, "mat-checkbox", 31);
            i0.ɵɵlistener("ngModelChange", function MainComponent_ng_template_41_Template_mat_checkbox_ngModelChange_5_listener($event) { var item_r23 = ctx.$implicit; return item_r23.isSelected = $event; });
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
            i0.ɵɵlistener("click", function MainComponent_ng_template_41_Template_button_click_24_listener() { i0.ɵɵrestoreView(_r57_1); var item_r23 = ctx.$implicit; var ctx_r59 = i0.ɵɵnextContext(); return ctx_r59.datatransferFacade.removeItem(item_r23); });
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
        }
        if (rf & 2) {
            var item_r23 = ctx.$implicit;
            var i_r24 = ctx.index;
            var _r28 = i0.ɵɵreference(15);
            var _r31 = i0.ɵɵreference(19);
            var _r33 = i0.ɵɵreference(22);
            var ctx_r11 = i0.ɵɵnextContext();
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
        }
    }
    var MainComponent = /** @class */ (function () {
        function MainComponent(datatransferStore, paginationService) {
            this.datatransferStore = datatransferStore;
            this.paginationService = paginationService;
            this.config = ConfigService.settings;
            this.uploadProgress = this.datatransferStore.uploadProgress;
            this.downloadProgress = this.datatransferStore.downloadProgress;
        }
        MainComponent.prototype.ngAfterViewInit = function () {
            this.init();
        };
        MainComponent.prototype.init = function () {
            if (this.config.core.showUploadDropzone) {
                var dropzoneElement = document.getElementById('amd-dropzone-component');
                if (dropzoneElement) {
                    dropzoneElement.addEventListener('click', this.datatransferFacade.openBrowseDialog.bind(this.datatransferFacade), false);
                    this.datatransferFacade.assignUploadDrop(dropzoneElement);
                }
            }
            else {
                if (typeof this.config.core.uploadBrowseElementId !== 'undefined') {
                    var uploadBrowseElement = document.getElementById(this.config.core.uploadBrowseElementId);
                    if (uploadBrowseElement) {
                        uploadBrowseElement.addEventListener('click', this.datatransferFacade.openBrowseDialog.bind(this.datatransferFacade), false);
                    }
                }
                if (typeof this.config.core.uploadDropElementId !== 'undefined') {
                    var uploadDropElement = document.getElementById(this.config.core.uploadDropElementId);
                    if (uploadDropElement) {
                        this.datatransferFacade.assignUploadDrop(uploadDropElement);
                    }
                }
            }
        };
        return MainComponent;
    }());
    MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(i0.ɵɵdirectiveInject(DatatransferStore), i0.ɵɵdirectiveInject(PaginationService)); };
    MainComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MainComponent, selectors: [["amd-main"]], inputs: { datatransferFacade: "datatransferFacade" }, decls: 44, vars: 12, consts: [[1, "amd-font"], [4, "ngIf"], ["fxLayout", "row", "fxLayout.lt-sm", "column", 2, "margin-bottom", "10px"], ["fxFlex", ""], ["class", "amd-mr-1", "mat-raised-button", "", 3, "click", 4, "ngIf"], ["exportMenu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["mat-raised-button", "", 3, "matMenuTriggerFor", 4, "ngIf"], ["style", "margin-left: 10px;", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["fxFlex", "70px", "fxFlex.lt-sm", "0px"], [1, "amd-container"], ["fxLayout", "row", 1, "amd-container-header", 2, "align-items", "center"], ["fxFlex", "40px"], [3, "change"], ["fxFlex", "50%", "fxFlex.lt-sm", "100%"], ["fxFlex", "50%", "fxHide.lt-sm", "", 2, "padding-left", "40px"], ["fxFlex", "20px"], ["batchItemMenu", "matMenu"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], ["ngFor", "", 3, "ngForOf"], [2, "font-size", "12px", "margin-top", "20px", "text-align", "right"], [3, "paginationService"], ["mat-raised-button", "", 1, "amd-mr-1", 3, "click"], ["mat-raised-button", "", 3, "matMenuTriggerFor"], [2, "margin-left", "10px", 3, "ngModel", "ngModelChange"], ["class", "amd-vertical-align-middle", "matTooltipPosition", "right", 3, "matTooltip", 4, "ngIf"], ["matTooltipPosition", "right", 1, "amd-vertical-align-middle", 3, "matTooltip"], [3, "progressContainer"], ["fxLayout", "row", "fxLayout.lt-sm", "column", 1, "amd-container-row", 3, "ngClass", "click"], ["fxFlex", "", 1, "amd-container-row-item"], [1, "amd-container-row-item-entry"], [3, "ngModel", "ngModelChange"], ["fxFlex", "100%"], ["matTooltipPosition", "above", 3, "matTooltip"], ["mat-icon-button", "", 3, "click", 4, "ngIf"], ["fxFlex", "40px", 3, "matTooltip", 4, "ngIf", "ngIfElse"], ["showStatusClass", ""], [4, "ngIf", "ngIfElse"], ["showStatusBlock", ""], ["itemMenu", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngIf"], ["fxLayout", "row", 1, "amd-container-headline"], ["fxFlex", "", 1, "amd-container-headline-item"], [1, "amd-container-headline-item-entry"], ["mat-icon-button", "", 3, "click"], ["aria-label", "Edit path"], ["aria-label", "Edit filename"], ["fxFlex", "40px", 3, "matTooltip"], ["mode", "determinate", 3, "diameter", "value", 4, "ngIf"], ["mode", "determinate", 3, "diameter", "value"], [1, "amd-container-row-item-entry-stats"], ["fxFlex", "25%", "fxFlex.lt-md", "50%"], ["fxFlex", "25%", "fxHide.lt-md", "", 2, "text-align", "center"], ["fxFlex", "25%", "fxFlex.lt-md", "50%", 2, "text-align", "right"], ["color", "primary", "mode", "determinate", 3, "value", 4, "ngIf"], ["color", "primary", "mode", "determinate", 3, "value"]], template: function MainComponent_Template(rf, ctx) {
            if (rf & 1) {
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
            }
            if (rf & 2) {
                var _r10 = i0.ɵɵreference(32);
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
            }
        }, directives: [i3$2.NgIf, i4$1.DefaultLayoutDirective, i4$1.DefaultFlexDirective, i5.MatMenu, i5.MatMenuItem, i6$1.MatCheckbox, i7$1.DefaultShowHideDirective, i7.MatIcon, i6.MatButton, i5.MatMenuTrigger, i3$2.NgForOf, PaginationComponent, DropzoneComponent, i3$1.NgControlStatus, i3$1.NgModel, i13.MatTooltip, ProgressComponent, i3$2.NgClass, i7$1.DefaultClassDirective, i15.MatProgressSpinner, i4$2.MatProgressBar], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MainComponent, [{
                type: i0.Component,
                args: [{
                        // tslint:disable-next-line:component-selector
                        selector: 'amd-main',
                        templateUrl: './main.component.html'
                    }]
            }], function () { return [{ type: DatatransferStore }, { type: PaginationService }]; }, { datatransferFacade: [{
                    type: i0.Input
                }] });
    })();

    var TransferType;
    (function (TransferType) {
        TransferType[TransferType["Upload"] = 0] = "Upload";
        TransferType[TransferType["Download"] = 1] = "Download";
    })(TransferType || (TransferType = {}));

    var BrowseDialogComponent = /** @class */ (function () {
        function BrowseDialogComponent(dialogRef, data) {
            this.dialogRef = dialogRef;
            this.data = data;
            this.datatransferFacade = this.data.datatransferFacade;
        }
        BrowseDialogComponent.prototype.ngAfterViewInit = function () {
            this.datatransferFacade.assignUploadBrowse(document.getElementById("amd-browse-files"));
            this.datatransferFacade.assignUploadBrowse(document.getElementById("amd-browse-folder"), true);
        };
        BrowseDialogComponent.prototype.close = function () {
            this.dialogRef.close();
        };
        BrowseDialogComponent.prototype.onNoClick = function () {
            this.close();
        };
        return BrowseDialogComponent;
    }());
    BrowseDialogComponent.ɵfac = function BrowseDialogComponent_Factory(t) { return new (t || BrowseDialogComponent)(i0.ɵɵdirectiveInject(i1.MatDialogRef), i0.ɵɵdirectiveInject(i1.MAT_DIALOG_DATA)); };
    BrowseDialogComponent.ɵcmp = i0.ɵɵdefineComponent({ type: BrowseDialogComponent, selectors: [["amd-browse-dialog"]], decls: 11, vars: 0, consts: [["mat-raised-button", "", "id", "amd-browse-files", "tabindex", "1", 3, "click"], ["mat-raised-button", "", "id", "amd-browse-folder", "tabindex", "2", 3, "click"]], template: function BrowseDialogComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-dialog-content");
                i0.ɵɵtext(1, "Select specific files or a folder");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(2, "mat-dialog-actions");
                i0.ɵɵelementStart(3, "button", 0);
                i0.ɵɵlistener("click", function BrowseDialogComponent_Template_button_click_3_listener() { return ctx.close(); });
                i0.ɵɵelementStart(4, "mat-icon");
                i0.ɵɵtext(5, "insert_drive_file");
                i0.ɵɵelementEnd();
                i0.ɵɵtext(6, " Files");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(7, "button", 1);
                i0.ɵɵlistener("click", function BrowseDialogComponent_Template_button_click_7_listener() { return ctx.close(); });
                i0.ɵɵelementStart(8, "mat-icon");
                i0.ɵɵtext(9, "folder_open");
                i0.ɵɵelementEnd();
                i0.ɵɵtext(10, " Folder");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
        }, directives: [i1.MatDialogContent, i1.MatDialogActions, i6.MatButton, i7.MatIcon], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BrowseDialogComponent, [{
                type: i0.Component,
                args: [{
                        // tslint:disable-next-line:component-selector
                        selector: "amd-browse-dialog",
                        templateUrl: "browse-dialog.component.html",
                    }]
            }], function () {
            return [{ type: i1.MatDialogRef }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i1.MAT_DIALOG_DATA]
                        }] }];
        }, null);
    })();

    function EditDialogComponent_div_0_mat_error_7_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-error");
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", ctx_r2.errorMessage, " ");
        }
    }
    function EditDialogComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
            var _r4_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelementStart(1, "mat-dialog-content");
            i0.ɵɵelementStart(2, "p");
            i0.ɵɵtext(3, "Enter a new path:");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "form");
            i0.ɵɵelementStart(5, "mat-form-field");
            i0.ɵɵelementStart(6, "input", 1);
            i0.ɵɵlistener("input", function EditDialogComponent_div_0_Template_input_input_6_listener($event) { i0.ɵɵrestoreView(_r4_1); var ctx_r3 = i0.ɵɵnextContext(); ctx_r3.itemPath = $event.target.value; return ctx_r3.errorMessage = undefined; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(7, EditDialogComponent_div_0_mat_error_7_Template, 2, 1, "mat-error", 0);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "mat-dialog-actions");
            i0.ɵɵelementStart(9, "button", 2);
            i0.ɵɵlistener("click", function EditDialogComponent_div_0_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r4_1); var ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.editPath(); });
            i0.ɵɵtext(10, "Ok");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "button", 3);
            i0.ɵɵlistener("click", function EditDialogComponent_div_0_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r4_1); var ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.close(); });
            i0.ɵɵtext(12, "Cancel");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("value", ctx_r0.itemPath)("formControl", ctx_r0.editFormControl);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r0.errorMessage);
        }
    }
    function EditDialogComponent_div_1_mat_error_7_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-error");
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r7 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", ctx_r7.errorMessage, " ");
        }
    }
    function EditDialogComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r9_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelementStart(1, "mat-dialog-content");
            i0.ɵɵelementStart(2, "p");
            i0.ɵɵtext(3, "Enter a new filename:");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "form");
            i0.ɵɵelementStart(5, "mat-form-field");
            i0.ɵɵelementStart(6, "input", 1);
            i0.ɵɵlistener("input", function EditDialogComponent_div_1_Template_input_input_6_listener($event) { i0.ɵɵrestoreView(_r9_1); var ctx_r8 = i0.ɵɵnextContext(); ctx_r8.itemName = $event.target.value; return ctx_r8.errorMessage = undefined; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(7, EditDialogComponent_div_1_mat_error_7_Template, 2, 1, "mat-error", 0);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "mat-dialog-actions");
            i0.ɵɵelementStart(9, "button", 2);
            i0.ɵɵlistener("click", function EditDialogComponent_div_1_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r9_1); var ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.editFilename(); });
            i0.ɵɵtext(10, "Ok");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "button", 3);
            i0.ɵɵlistener("click", function EditDialogComponent_div_1_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r9_1); var ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.close(); });
            i0.ɵɵtext(12, "Cancel");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("value", ctx_r1.itemName)("formControl", ctx_r1.editFormControl);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r1.errorMessage);
        }
    }
    var EditDialogComponent = /** @class */ (function () {
        function EditDialogComponent(dialogRef, data) {
            this.dialogRef = dialogRef;
            this.data = data;
            this.datatransferFacade = this.data.datatransferFacade;
            this.mode = this.data.mode;
            this.item = this.data.item;
            this.itemPath = this.item.path;
            this.itemName = this.item.name;
            this.editFormControl = new i3$1.FormControl("", []);
        }
        EditDialogComponent.prototype.ngAfterViewInit = function () { };
        EditDialogComponent.prototype.close = function () {
            this.dialogRef.close();
        };
        EditDialogComponent.prototype.onNoClick = function () {
            this.close();
        };
        EditDialogComponent.prototype.editPath = function () {
            try {
                this.datatransferFacade.editPath(this.item, this.item.path, this.itemPath);
                this.close();
            }
            catch (error) {
                this.errorMessage = error;
            }
        };
        EditDialogComponent.prototype.editFilename = function () {
            try {
                this.datatransferFacade.editFilename(this.item, this.itemName);
                this.close();
            }
            catch (error) {
                this.errorMessage = error;
            }
        };
        return EditDialogComponent;
    }());
    EditDialogComponent.ɵfac = function EditDialogComponent_Factory(t) { return new (t || EditDialogComponent)(i0.ɵɵdirectiveInject(i1.MatDialogRef), i0.ɵɵdirectiveInject(i1.MAT_DIALOG_DATA)); };
    EditDialogComponent.ɵcmp = i0.ɵɵdefineComponent({ type: EditDialogComponent, selectors: [["amd-edit-dialog"]], decls: 2, vars: 2, consts: [[4, "ngIf"], ["matInput", "", "autocomplete", "off", "tabindex", "1", 3, "value", "formControl", "input"], ["mat-raised-button", "", "tabindex", "2", 3, "click"], ["mat-raised-button", "", "tabindex", "-1", 3, "click"]], template: function EditDialogComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, EditDialogComponent_div_0_Template, 13, 3, "div", 0);
                i0.ɵɵtemplate(1, EditDialogComponent_div_1_Template, 13, 3, "div", 0);
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngIf", ctx.mode === "edit-path");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.mode === "edit-filename");
            }
        }, directives: [i3$2.NgIf, i1.MatDialogContent, i3$1.ɵangular_packages_forms_forms_y, i3$1.NgControlStatusGroup, i3$1.NgForm, i4.MatFormField, i5$1.MatInput, i3$1.DefaultValueAccessor, i3$1.NgControlStatus, i3$1.FormControlDirective, i1.MatDialogActions, i6.MatButton, i4.MatError], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EditDialogComponent, [{
                type: i0.Component,
                args: [{
                        // tslint:disable-next-line:component-selector
                        selector: "amd-edit-dialog",
                        templateUrl: "edit-dialog.component.html",
                    }]
            }], function () {
            return [{ type: i1.MatDialogRef }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i1.MAT_DIALOG_DATA]
                        }] }];
        }, null);
    })();

    var DatatransferFacade = /** @class */ (function () {
        function DatatransferFacade(logger, zone, store, dateUtil, paginationService, exportService, uploader, downloader, dialog) {
            this.logger = logger;
            this.zone = zone;
            this.store = store;
            this.dateUtil = dateUtil;
            this.paginationService = paginationService;
            this.exportService = exportService;
            this.uploader = uploader;
            this.downloader = downloader;
            this.dialog = dialog;
            // Interval in milliseconds to calculate progress:
            this.progressInterval = 200;
            // Interval in milliseconds to calculate bitrate:
            this.bitrateInterval = 1000;
            this.uploadProgress = this.store.uploadProgress;
            this.downloadProgress = this.store.downloadProgress;
            this.init(this.uploader, this.uploadProgress);
            this.init(this.downloader, this.downloadProgress);
        }
        DatatransferFacade.prototype.init = function (datatransfer, progressContainer) {
            datatransfer.on("itemAdded", function (item) {
                var that = this;
                that.zone.run(function () {
                    that.addItem(item);
                });
            }.bind(this));
            datatransfer.on("zoneUpdated", function (item, status, message) {
                var that = this;
                that.zone.run(function () {
                    // console.log(that.uploader.isWorking());
                });
            }.bind(this));
            datatransfer.on("itemStatusChanged", function (item, status, message) {
                var that = this;
                that.zone.run(function () {
                    that.changeItemStatus(item, status, message);
                });
            }.bind(this));
            datatransfer.on("itemProgressUpdated", function (item, progress) {
                var that = this;
                that.zone.run(function () {
                    that.updateItemProgress(item, progress);
                });
            }.bind(this));
            datatransfer.on("overallProgressUpdated", function (transferType, progress) {
                var that = this;
                that.zone.run(function () {
                    that.updateOverallProgress(progressContainer, transferType, progress);
                });
            }.bind(this));
            datatransfer.on("overallSizeUpdated", function (size) {
                var that = this;
                that.zone.run(function () {
                    that.updateOverallSize(progressContainer, size);
                });
            }.bind(this));
        };
        DatatransferFacade.prototype.assignUploadBrowse = function (element, isDirectory) {
            if (isDirectory === void 0) { isDirectory = false; }
            this.uploader.assignBrowse(element, isDirectory);
        };
        DatatransferFacade.prototype.assignUploadDrop = function (element) {
            this.uploader.assignDrop(element);
        };
        DatatransferFacade.prototype.openBrowseDialog = function () {
            var dialogRef = this.dialog.open(BrowseDialogComponent, {
                data: {
                    datatransferFacade: this,
                },
            });
        };
        DatatransferFacade.prototype.openEditPathDialog = function (item) {
            var dialogRef = this.dialog.open(EditDialogComponent, {
                data: {
                    datatransferFacade: this,
                    mode: "edit-path",
                    item: item,
                },
            });
        };
        DatatransferFacade.prototype.openEditFilenameDialog = function (item) {
            var dialogRef = this.dialog.open(EditDialogComponent, {
                data: {
                    datatransferFacade: this,
                    mode: "edit-filename",
                    item: item,
                },
            });
        };
        DatatransferFacade.prototype.toggleVisible = function (checked) {
            this.paginationService.paginatedItems.forEach(function (item, index) {
                item.isSelected = checked;
            });
        };
        DatatransferFacade.prototype.startAll = function () {
            var _this = this;
            this.store.getItems().forEach(function (item, index) {
                var that = _this;
                if (item.transferType === TransferType.Upload &&
                    item.status === TransferStatus.Ready) {
                    that.changeItemStatus(item, TransferStatus.Queued);
                }
            });
            this.uploader.startAll();
        };
        DatatransferFacade.prototype.pauseAll = function () {
            this.store.getItems().forEach(function (item, index) {
                item.preprocessContainer.pause(true);
            });
            this.uploader.pauseAll();
            this.downloader.pauseAll();
        };
        DatatransferFacade.prototype.removeAll = function () {
            this.store.getItems().forEach(function (item, index) {
                item.preprocessContainer.cancel(true);
            });
            this.uploader.removeAll();
            this.downloader.removeAll();
            this.store.clear();
            this.uploadProgress.reset(0);
            this.paginationService.update(0);
            document.dispatchEvent(new CustomEvent(CustomEventTypeExtensions.toString(CustomEventType.ITEMS_CLEARED)));
        };
        DatatransferFacade.prototype.retryAll = function () {
            var _this = this;
            this.store.getByStatus(TransferStatus.Failed).forEach(function (item, index) {
                var that = _this;
                that.retryItem(item);
            });
        };
        DatatransferFacade.prototype.removeSelected = function () {
            var _this = this;
            var temp = this.store.getSelected().slice();
            temp.forEach(function (item, index) {
                var that = _this;
                that.removeItem(item);
            });
        };
        DatatransferFacade.prototype.addItem = function (item) {
            if (!!item) {
                this.store.addItem(item);
                this.paginationService.update(this.store.count);
                document.dispatchEvent(new CustomEvent(CustomEventTypeExtensions.toString(CustomEventType.ITEM_ADDED), { detail: item }));
            }
        };
        DatatransferFacade.prototype.removeItem = function (item) {
            if (!!item) {
                item.preprocessContainer.cancel(true);
                switch (item.transferType) {
                    case TransferType.Upload:
                        this.uploader.removeItem(item);
                        break;
                    case TransferType.Download:
                        this.downloader.removeItem(item);
                        break;
                    default:
                        break;
                }
                this.store.removeById(item.id);
                this.paginationService.update(this.store.count);
                document.dispatchEvent(new CustomEvent(CustomEventTypeExtensions.toString(CustomEventType.ITEM_REMOVED), { detail: item }));
            }
        };
        DatatransferFacade.prototype.retryItem = function (item) {
            if (!!item) {
                item.preprocessContainer.cancel(true);
                switch (item.transferType) {
                    case TransferType.Upload:
                        this.uploader.retryItem(item);
                        break;
                    case TransferType.Download:
                        this.downloader.retryItem(item);
                        break;
                    default:
                        break;
                }
            }
        };
        DatatransferFacade.prototype.itemClick = function (item) {
            document.dispatchEvent(new CustomEvent(CustomEventTypeExtensions.toString(CustomEventType.ITEM_CLICKED), { detail: item }));
        };
        DatatransferFacade.prototype.changeItemStatus = function (item, status, message) {
            if (!!item && !!status) {
                if (item.status !== status) {
                    this.paginationService.setPageByItemId(item.id);
                    item.status = status;
                    if (!!message) {
                        item.message = message;
                    }
                    this.store.updateFailedCount();
                    if (status === TransferStatus.Finished) {
                        document.dispatchEvent(new CustomEvent(CustomEventTypeExtensions.toString(CustomEventType.ITEM_COMPLETED), { detail: item }));
                    }
                }
            }
        };
        DatatransferFacade.prototype.updateItemProgress = function (item, progress) {
            if (!!item) {
                var now = this.dateUtil.now();
                var loaded = item.progressContainer.total * progress;
                item.progressContainer.updateBitrate(now, loaded, this.bitrateInterval);
                item.progressContainer.updateProgress(now, loaded, this.progressInterval);
            }
        };
        DatatransferFacade.prototype.updateOverallProgress = function (progressContainer, transferType, progress) {
            var now = this.dateUtil.now();
            var loaded = progressContainer.total * progress;
            // this.logger.log('total: ' + progressContainer.total + ' progress: ' + progress + ' loaded: ' + loaded);
            progressContainer.updateBitrate(now, loaded, this.bitrateInterval);
            progressContainer.updateProgress(now, loaded, this.progressInterval);
            if (progressContainer.total > 0 && loaded >= progressContainer.total) {
                switch (transferType) {
                    case TransferType.Upload:
                        document.dispatchEvent(new CustomEvent(CustomEventTypeExtensions.toString(CustomEventType.UPLOAD_COMPLETED)));
                        break;
                    case TransferType.Download:
                        document.dispatchEvent(new CustomEvent(CustomEventTypeExtensions.toString(CustomEventType.DOWNLOAD_COMPLETED)));
                        break;
                    default:
                        break;
                }
            }
        };
        DatatransferFacade.prototype.updateOverallSize = function (progressContainer, size) {
            progressContainer.reset(size);
        };
        DatatransferFacade.prototype.download = function (filename, url, sizeInBytes) {
            this.downloader.download(filename, url, sizeInBytes);
        };
        DatatransferFacade.prototype.export = function (exportType) {
            this.exportService.export(exportType);
        };
        DatatransferFacade.prototype.getStatusClass = function (status) {
            switch (status) {
                case TransferStatus.Ready:
                    return "add_circle_outline";
                case TransferStatus.Uploading:
                    return "arrow_upward";
                case TransferStatus.Downloading:
                    return "arrow_downward";
                case TransferStatus.Failed:
                    return "error_outline";
                case TransferStatus.Queued:
                case TransferStatus.Preprocessing:
                    return "schedule";
                case TransferStatus.Finished:
                    return "done_all";
                default:
                    return "";
            }
        };
        DatatransferFacade.prototype.showStartButton = function () {
            return (this.store.count > 0 &&
                !this.uploader.isWorking() &&
                !this.downloader.isWorking());
        };
        DatatransferFacade.prototype.showPauseButton = function () {
            return this.uploader.isWorking();
        };
        DatatransferFacade.prototype.showRemoveButton = function () {
            return this.store.count > 0;
        };
        DatatransferFacade.prototype.showRetryButton = function () {
            return (this.store.failedCount > 0 &&
                !this.uploader.isWorking() &&
                !this.downloader.isWorking());
        };
        DatatransferFacade.prototype.showRetryButtonByItem = function (item) {
            return item.status === TransferStatus.Failed;
        };
        DatatransferFacade.prototype.showExportButton = function () {
            return this.store.count > 0;
        };
        DatatransferFacade.prototype.showPreprocessingCheckbox = function () {
            return (this.store.count > 0 && ConfigService.settings.core.preprocessHashEnabled);
        };
        DatatransferFacade.prototype.showPreprocessingTooltip = function () {
            return (this.showPreprocessingCheckbox() &&
                !!ConfigService.settings.core.preprocessHashTooltipContent);
        };
        DatatransferFacade.prototype.showSpinner = function (item) {
            return (item.preprocessContainer.percent > 0 &&
                item.status === TransferStatus.Preprocessing);
        };
        DatatransferFacade.prototype.showProgressbar = function (item) {
            return (item.progressContainer.percent > 0 &&
                (item.status === TransferStatus.Uploading ||
                    item.status === TransferStatus.Downloading));
        };
        DatatransferFacade.prototype.showPath = function (items, index) {
            if (index > 0 && items.length > index) {
                var currentPath = items[index].path;
                // don't show if previous path is same as current
                return items[index - 1].path !== currentPath;
            }
            return true;
        };
        DatatransferFacade.prototype.showEditDialog = function (item) {
            var result = false;
            if (item) {
                switch (item.transferType) {
                    case TransferType.Upload:
                        if (item.status === TransferStatus.Ready) {
                            result = true;
                        }
                        break;
                    default:
                        break;
                }
            }
            return result;
        };
        DatatransferFacade.prototype.editPath = function (item, oldPath, newPath) {
            switch (item.transferType) {
                case TransferType.Upload:
                    // replace all \ with /
                    var cleanedPath = newPath.replace(/\\/g, "/");
                    // replace repeated / with one
                    cleanedPath = cleanedPath.replace(/\/+/g, "/");
                    if (cleanedPath.startsWith("/")) {
                        cleanedPath = cleanedPath.slice(1);
                    }
                    if (cleanedPath && !cleanedPath.endsWith("/")) {
                        cleanedPath += "/";
                    }
                    this.uploader.editPath(oldPath, cleanedPath);
                    break;
                default:
                    break;
            }
        };
        DatatransferFacade.prototype.editFilename = function (item, name) {
            switch (item.transferType) {
                case TransferType.Upload:
                    this.uploader.editFilename(item, name);
                    break;
                default:
                    break;
            }
        };
        DatatransferFacade.prototype.parseMessage = function (item) {
            if (ConfigService.settings.core.parseMessageCallback instanceof Function) {
                return ConfigService.settings.core.parseMessageCallback(item.message);
            }
            else {
                return undefined;
            }
        };
        return DatatransferFacade;
    }());

    var ExportType;
    (function (ExportType) {
        ExportType[ExportType["CSV"] = 0] = "CSV";
        ExportType[ExportType["JSON"] = 1] = "JSON";
    })(ExportType || (ExportType = {}));

    var BaseExporter = /** @class */ (function () {
        function BaseExporter(logger, store) {
            this.logger = logger;
            this.store = store;
        }
        BaseExporter.prototype.download = function (content, fileName, mimeType) {
            var a = document.createElement('a');
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
        };
        return BaseExporter;
    }());
    BaseExporter.ɵfac = function BaseExporter_Factory(t) { return new (t || BaseExporter)(i0.ɵɵinject(LoggerService), i0.ɵɵinject(DatatransferStore)); };
    BaseExporter.ɵprov = i0.ɵɵdefineInjectable({ token: BaseExporter, factory: BaseExporter.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseExporter, [{
                type: i0.Injectable
            }], function () { return [{ type: LoggerService }, { type: DatatransferStore }]; }, null);
    })();

    var CsvExporter = /** @class */ (function (_super) {
        __extends(CsvExporter, _super);
        function CsvExporter(logger, store) {
            var _this = _super.call(this, logger, store) || this;
            _this.logger = logger;
            _this.store = store;
            return _this;
        }
        CsvExporter.prototype.export = function () {
            var csvContent = "id,name,path,status,size,message\n";
            var items = this.store.getItems();
            items.forEach(function (item, index) {
                var itemString = item.id +
                    "," +
                    item.name +
                    "," +
                    item.path +
                    "," +
                    item.getStatusName() +
                    "," +
                    item.sizeContainer.displaySize +
                    " " +
                    item.sizeContainer.displayUnit +
                    "," +
                    item.message;
                csvContent += index < items.length ? itemString + "\n" : itemString;
            });
            this.download(csvContent, "export.csv", "text/csv;encoding:utf-8");
        };
        return CsvExporter;
    }(BaseExporter));
    CsvExporter.ɵfac = function CsvExporter_Factory(t) { return new (t || CsvExporter)(i0.ɵɵinject(LoggerService), i0.ɵɵinject(DatatransferStore)); };
    CsvExporter.ɵprov = i0.ɵɵdefineInjectable({ token: CsvExporter, factory: CsvExporter.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CsvExporter, [{
                type: i0.Injectable
            }], function () { return [{ type: LoggerService }, { type: DatatransferStore }]; }, null);
    })();

    var JsonExporter = /** @class */ (function (_super) {
        __extends(JsonExporter, _super);
        function JsonExporter(logger, store) {
            var _this = _super.call(this, logger, store) || this;
            _this.logger = logger;
            _this.store = store;
            return _this;
        }
        JsonExporter.prototype.export = function () {
            var content = [];
            var items = this.store.getItems();
            items.forEach(function (item, index) {
                content.push({
                    id: item.id,
                    name: item.name,
                    path: item.path,
                    status: item.getStatusName(),
                    size: item.sizeContainer.displaySize + " " + item.sizeContainer.displayUnit,
                    message: item.message,
                });
            });
            this.download(JSON.stringify(content, null, "\t"), "export.json", "text/json;encoding:utf-8");
        };
        return JsonExporter;
    }(BaseExporter));
    JsonExporter.ɵfac = function JsonExporter_Factory(t) { return new (t || JsonExporter)(i0.ɵɵinject(LoggerService), i0.ɵɵinject(DatatransferStore)); };
    JsonExporter.ɵprov = i0.ɵɵdefineInjectable({ token: JsonExporter, factory: JsonExporter.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(JsonExporter, [{
                type: i0.Injectable
            }], function () { return [{ type: LoggerService }, { type: DatatransferStore }]; }, null);
    })();

    var ExportService = /** @class */ (function () {
        function ExportService(csvExporter, jsonExporter) {
            this.csvExporter = csvExporter;
            this.jsonExporter = jsonExporter;
        }
        ExportService.prototype.export = function (exportType) {
            var castedExportType = ExportType[exportType];
            switch (castedExportType) {
                case ExportType.CSV:
                    this.csvExporter.export();
                    break;
                case ExportType.JSON:
                    this.jsonExporter.export();
                    break;
                default:
                    break;
            }
        };
        return ExportService;
    }());
    ExportService.ɵfac = function ExportService_Factory(t) { return new (t || ExportService)(i0.ɵɵinject(CsvExporter), i0.ɵɵinject(JsonExporter)); };
    ExportService.ɵprov = i0.ɵɵdefineInjectable({ token: ExportService, factory: ExportService.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ExportService, [{
                type: i0.Injectable
            }], function () { return [{ type: CsvExporter }, { type: JsonExporter }]; }, null);
    })();

    var PreprocessContainer = /** @class */ (function () {
        function PreprocessContainer(init) {
            this.percent = 0;
            this._isPaused = false;
            this._isCancelled = false;
            Object.assign(this, init);
        }
        PreprocessContainer.prototype.pause = function (pause) {
            this._isPaused = pause;
        };
        PreprocessContainer.prototype.isPaused = function () {
            return this._isPaused;
        };
        PreprocessContainer.prototype.cancel = function (cancel) {
            this._isCancelled = cancel;
        };
        PreprocessContainer.prototype.isCancelled = function () {
            return this._isCancelled;
        };
        PreprocessContainer.prototype.doWork = function () {
        };
        PreprocessContainer.prototype.run = function () {
            this._isPaused = false;
            this.doWork();
        };
        return PreprocessContainer;
    }());

    var HashType;
    (function (HashType) {
        HashType[HashType["MD5"] = 0] = "MD5";
        HashType[HashType["SHA1"] = 1] = "SHA1";
    })(HashType || (HashType = {}));
    var HashTypeImplementation;
    (function (HashTypeImplementation) {
        HashTypeImplementation[HashTypeImplementation["Internal"] = 0] = "Internal";
        HashTypeImplementation[HashTypeImplementation["CryptoBrowserify"] = 1] = "CryptoBrowserify";
    })(HashTypeImplementation || (HashTypeImplementation = {}));
    // tslint:disable-next-line: no-namespace
    var HashTypeExtensions;
    (function (HashTypeExtensions) {
        function toString(hashTypeImplementation, hashType) {
            switch (hashType) {
                case HashType.MD5:
                    return 'md5';
                case HashType.SHA1:
                    return 'sha1';
                default:
                    return 'sha1';
            }
        }
        HashTypeExtensions.toString = toString;
        function toEnum(hashTypeImplementation, hashType) {
            switch (hashType) {
                case 'md5':
                    return HashType.MD5;
                case 'sha1':
                    return HashType.SHA1;
                default:
                    return HashType.SHA1;
            }
        }
        HashTypeExtensions.toEnum = toEnum;
    })(HashTypeExtensions || (HashTypeExtensions = {}));

    var EncodingType;
    (function (EncodingType) {
        EncodingType[EncodingType["Latin1"] = 0] = "Latin1";
        EncodingType[EncodingType["Hex"] = 1] = "Hex";
        EncodingType[EncodingType["Base64"] = 2] = "Base64";
        EncodingType[EncodingType["UTF8"] = 3] = "UTF8";
    })(EncodingType || (EncodingType = {}));
    var EncodingTypeImplementation;
    (function (EncodingTypeImplementation) {
        EncodingTypeImplementation[EncodingTypeImplementation["Internal"] = 0] = "Internal";
        EncodingTypeImplementation[EncodingTypeImplementation["CryptoBrowserify"] = 1] = "CryptoBrowserify";
    })(EncodingTypeImplementation || (EncodingTypeImplementation = {}));
    // tslint:disable-next-line: no-namespace
    var EncodingTypeExtensions;
    (function (EncodingTypeExtensions) {
        function toString(encodingTypeImplementation, encodingType) {
            switch (encodingType) {
                case EncodingType.Latin1:
                    return 'latin1';
                case EncodingType.Hex:
                    return 'hex';
                case EncodingType.Base64:
                    return 'base64';
                case EncodingType.UTF8:
                    return 'utf8';
                default:
                    return 'hex';
            }
        }
        EncodingTypeExtensions.toString = toString;
        function toEnum(encodingTypeImplementation, encodingType) {
            switch (encodingType) {
                case 'latin1':
                    return EncodingType.Latin1;
                case 'hex':
                    return EncodingType.Hex;
                case 'base64':
                    return EncodingType.Base64;
                case 'utf8':
                    return EncodingType.UTF8;
                default:
                    return EncodingType.Hex;
            }
        }
        EncodingTypeExtensions.toEnum = toEnum;
    })(EncodingTypeExtensions || (EncodingTypeExtensions = {}));

    var HashContainer = /** @class */ (function (_super) {
        __extends(HashContainer, _super);
        function HashContainer(file, hashTypeImplementation, encodingTypeImplementation, hashType, encodingType, inputEncodingType) {
            var _this = _super.call(this) || this;
            _this.file = file;
            _this.hashType = hashType;
            _this.hashTypeString = HashTypeExtensions.toString(hashTypeImplementation, hashType);
            _this.encodingType = encodingType;
            _this.encodingTypeString = EncodingTypeExtensions.toString(encodingTypeImplementation, encodingType);
            _this.inputEncodingType = inputEncodingType;
            _this.inputEncodingTypeString = EncodingTypeExtensions.toString(encodingTypeImplementation, inputEncodingType);
            _this.startDate = new Date();
            _this.endDate = new Date();
            _this.reader = new FileReader();
            return _this;
        }
        return HashContainer;
    }(PreprocessContainer));
    var StreamHashContainer = /** @class */ (function (_super) {
        __extends(StreamHashContainer, _super);
        function StreamHashContainer(file, hashTypeImplementation, encodingTypeImplementation, hashType, encodingType, inputEncodingType) {
            var _this = _super.call(this, file, hashTypeImplementation, encodingTypeImplementation, hashType, encodingType, inputEncodingType) || this;
            _this.chunkSize = 0;
            _this.offset = 0;
            return _this;
        }
        StreamHashContainer.prototype.cancel = function (cancel) {
            _super.prototype.cancel.call(this, cancel);
            this.offset = 0;
        };
        return StreamHashContainer;
    }(HashContainer));

    var BaseDatatransfer = /** @class */ (function () {
        function BaseDatatransfer(logger, guidUtil, cryptoService) {
            this.logger = logger;
            this.guidUtil = guidUtil;
            this.cryptoService = cryptoService;
            this.events = [];
            this._isWorking = false;
        }
        BaseDatatransfer.prototype.on = function (event, callback) {
            this.events.push(event.toLowerCase(), callback);
        };
        BaseDatatransfer.prototype.fire = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var event = args[0].toLowerCase();
            // Find event listeners, and support pseudo-event `catchAll`
            for (var i = 0; i <= this.events.length; i += 2) {
                if (this.events[i] === event) {
                    this.events[i + 1].apply(this, args.slice(1));
                }
                if (this.events[i] === 'catchall') {
                    this.events[i + 1].apply(null, args);
                }
            }
        };
        BaseDatatransfer.prototype.updateZone = function () {
            this.fire('zoneUpdated');
        };
        BaseDatatransfer.prototype.changeItemStatus = function (item, status, message) {
            this.fire('itemStatusChanged', item, status, message);
        };
        BaseDatatransfer.prototype.updateItemProgress = function (item, progress) {
            this.fire('itemProgressUpdated', item, progress);
        };
        BaseDatatransfer.prototype.updateOverallProgress = function (transferType, progress) {
            this.fire('overallProgressUpdated', transferType, progress);
        };
        BaseDatatransfer.prototype.updateOverallSize = function (size) {
            this.fire('overallSizeUpdated', size);
        };
        BaseDatatransfer.prototype.isWorking = function () {
            return this._isWorking;
        };
        BaseDatatransfer.prototype.addItem = function (item) {
            this.fire('itemAdded', item);
        };
        BaseDatatransfer.prototype.generateUniqueIdentifier = function () {
            return this.guidUtil.createGuid();
        };
        BaseDatatransfer.prototype.preprocessHash = function (item, file, continueCallback, cancelCallback) {
            var successCallback = function (container) {
                var that = this;
                if (container.hashString) {
                    // const seconds = (container.endDate.getTime() - container.startDate.getTime()) / 1000;
                    // console.log('file hashing took ' + seconds + ' seconds');
                    var xhr_1 = new XMLHttpRequest();
                    var responseHandler = function (e) {
                        // ignore response if container has been cancelled
                        if (!container.isCancelled()) {
                            if (xhr_1.status === 200) {
                                item.message = xhr_1.responseText;
                                cancelCallback();
                            }
                            else {
                                continueCallback();
                            }
                        }
                    };
                    xhr_1.addEventListener('load', responseHandler, false);
                    xhr_1.addEventListener('error', responseHandler, false);
                    xhr_1.addEventListener('timeout', responseHandler, false);
                    var params = [];
                    params = params.concat([
                        [ConfigService.settings.core.preprocessHashParameterName, container.hashString],
                        [ConfigService.settings.core.preprocessHashFileNameParameterName, item.name]
                    ]
                        .map(function (pair) {
                        return [
                            pair[0], encodeURIComponent(pair[1])
                        ].join('=');
                    }));
                    xhr_1.open(ConfigService.settings.core.preprocessHashMethod, ConfigService.settings.core.getTarget('preprocessHash', params));
                    xhr_1.send(null);
                }
                else {
                    continueCallback();
                }
            }.bind(this);
            var errorCallback = function (event, container) {
                console.log(event);
                continueCallback();
            };
            if (!item.preprocessContainer.isCancelled() && item.preprocessContainer instanceof StreamHashContainer) {
                // continue
            }
            else {
                var hashType = HashTypeExtensions.toEnum(HashTypeImplementation.Internal, ConfigService.settings.core.preprocessHashFunctionName);
                var encodingType = EncodingTypeExtensions.toEnum(EncodingTypeImplementation.Internal, ConfigService.settings.core.preprocessHashEncodingName);
                var inputEncodingType = EncodingTypeExtensions.toEnum(EncodingTypeImplementation.Internal, ConfigService.settings.core.preprocessHashInputEncodingName);
                item.preprocessContainer = this.cryptoService.createStreamHashContainer(file, hashType, encodingType, inputEncodingType, successCallback, errorCallback);
            }
            // wait for the initial mat-progress-spinner animation to complete
            setTimeout(function () {
                item.preprocessContainer.run();
            }, 1000);
        };
        return BaseDatatransfer;
    }());

    var BaseUploader = /** @class */ (function (_super) {
        __extends(BaseUploader, _super);
        function BaseUploader(logger, guidUtil, cryptoService) {
            var _this = _super.call(this, logger, guidUtil, cryptoService) || this;
            _this.logger = logger;
            _this.guidUtil = guidUtil;
            _this.cryptoService = cryptoService;
            _this.filenameRegExp = new RegExp('[\/\\\\*?"<>:|]');
            _this.pathRegExp = new RegExp('[*?"<>:|]');
            _this.transferType = TransferType.Upload;
            return _this;
        }
        BaseUploader.prototype.editPath = function (oldPath, newPath) {
            if (this.pathRegExp.test(newPath)) {
                throw new Error('A path cannot contain any of the following characters: * ? " < > : |');
            }
        };
        BaseUploader.prototype.editFilename = function (item, name) {
            if (!item) {
                throw new Error('Cannot edit the filename.');
            }
            if (!name) {
                throw new Error('Empty filename is not allowed.');
            }
            if (this.filenameRegExp.test(name)) {
                throw new Error('A filename cannot contain any of the following characters: \\ / * ? " < > : |');
            }
        };
        return BaseUploader;
    }(BaseDatatransfer));

    var DatatransferItem = /** @class */ (function () {
        function DatatransferItem(init) {
            this.sizeContainer = new SizeContainer();
            this.preprocessContainer = new PreprocessContainer();
            this.progressContainer = new ProgressContainer(0);
            Object.assign(this, init);
        }
        Object.defineProperty(DatatransferItem.prototype, "path", {
            get: function () {
                return this._path;
            },
            set: function (newPath) {
                this._path = newPath;
                this.displayPath = newPath;
                if (this.displayPath) {
                    // remove last character
                    if (this.displayPath.endsWith('/')) {
                        this.displayPath = this.displayPath.slice(0, -1);
                    }
                    // replace all '/' with ' > '
                    this.displayPath = this.displayPath.replace(/\//g, ' > ');
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DatatransferItem.prototype, "message", {
            get: function () {
                return this._message;
            },
            set: function (newMessage) {
                this._message = newMessage.toLowerCase().startsWith('<!doctype html') ? undefined : newMessage;
            },
            enumerable: false,
            configurable: true
        });
        DatatransferItem.prototype.getStatusName = function () {
            return TransferStatus[this.status];
        };
        DatatransferItem.prototype.getTransferTypeName = function () {
            return TransferType[this.transferType];
        };
        return DatatransferItem;
    }());

    var GuidUtil = /** @class */ (function () {
        function GuidUtil() {
        }
        GuidUtil.prototype.createGuid = function () {
            function s4() {
                return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
            }
            return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
        };
        return GuidUtil;
    }());
    GuidUtil.ɵfac = function GuidUtil_Factory(t) { return new (t || GuidUtil)(); };
    GuidUtil.ɵprov = i0.ɵɵdefineInjectable({ token: GuidUtil, factory: GuidUtil.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GuidUtil, [{
                type: i0.Injectable
            }], null, null);
    })();

    var CryptoService = /** @class */ (function () {
        function CryptoService(zone) {
            this.zone = zone;
            // hash 4MB at a time
            this.STREAM_HASH_CHUNK_SIZE = 1024 * 1000 * 4;
            this.HASH_TYPE_IMPLEMENTATION = HashTypeImplementation.CryptoBrowserify;
            this.ENCODING_TYPE_IMPLEMENTATION = EncodingTypeImplementation.CryptoBrowserify;
            // Performance remains unchanged by running the hash function outside of Angular.
            // this.zone.runOutsideAngular(() => { }
        }
        CryptoService.prototype.createHashContainer = function (file, hashType, encodingType, inputEncodingType) {
            var container = new HashContainer(file, this.HASH_TYPE_IMPLEMENTATION, this.ENCODING_TYPE_IMPLEMENTATION, hashType, encodingType, inputEncodingType);
            container.hash = cryptoBrowserify.createHash(container.hashTypeString);
            container.reader.onload = function (event) {
                container.hashString = container.hash.update(event.target.result, container.inputEncodingTypeString)
                    .digest(container.encodingTypeString);
                container.endDate = new Date();
                container.percent = 100;
            }.bind(container);
            container.doWork = function () {
                container.reader.readAsBinaryString(container.file);
            };
            return container;
        };
        CryptoService.prototype.createStreamHashContainer = function (file, hashType, encodingType, inputEncodingType, successCallback, errorCallback) {
            var container = new StreamHashContainer(file, this.HASH_TYPE_IMPLEMENTATION, this.ENCODING_TYPE_IMPLEMENTATION, hashType, encodingType, inputEncodingType);
            container.chunkSize = this.STREAM_HASH_CHUNK_SIZE;
            container.offset = 0;
            container.hash = cryptoBrowserify.createHash(container.hashTypeString);
            container.reader.onload = function (event) {
                var binary = event.target.result;
                if (container.offset + container.chunkSize >= container.file.size) {
                    container.hash.end(binary, container.inputEncodingTypeString);
                }
                else {
                    container.hash.write(binary, container.inputEncodingTypeString);
                }
                container.offset += container.chunkSize;
                container.doWork();
            }.bind(container);
            container.reader.onerror = function (event) {
                errorCallback(event, container);
            };
            container.doWork = function () {
                if (!container.isCancelled() && !container.isPaused()) {
                    if (container.offset > container.file.size) {
                        container.hashString = container.hash.read().toString(container.encodingTypeString);
                        container.endDate = new Date();
                        container.percent = 100;
                        successCallback(container);
                        return;
                    }
                    var slice = container.file.slice(container.offset, container.offset + container.chunkSize);
                    container.reader.readAsBinaryString(slice);
                    container.percent = Math.round(container.offset / file.size * 100);
                }
            };
            return container;
        };
        return CryptoService;
    }());
    CryptoService.ɵfac = function CryptoService_Factory(t) { return new (t || CryptoService)(i0.ɵɵinject(i0.NgZone)); };
    CryptoService.ɵprov = i0.ɵɵdefineInjectable({ token: CryptoService, factory: CryptoService.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CryptoService, [{
                type: i0.Injectable
            }], function () { return [{ type: i0.NgZone }]; }, null);
    })();

    var ResumableJsUploader = /** @class */ (function (_super) {
        __extends(ResumableJsUploader, _super);
        function ResumableJsUploader(logger, guidUtil, cryptoService) {
            var _this = _super.call(this, logger, guidUtil, cryptoService) || this;
            _this.logger = logger;
            _this.guidUtil = guidUtil;
            _this.cryptoService = cryptoService;
            _this.r = undefined;
            _this.preprocessFileFn = undefined;
            _this.preprocessChunkFn = undefined;
            _this.initResumable();
            return _this;
        }
        ResumableJsUploader.prototype.initResumable = function () {
            function generateId(file, event) {
                var that = this;
                return that.generateUniqueIdentifier();
            }
            function preprocessChunkInlineFn(resumableChunk) {
                var that = this;
                if (typeof that.preprocessChunkFn === 'function') {
                    that.preprocessChunkFn(resumableChunk);
                }
                else {
                    resumableChunk.preprocessFinished();
                }
            }
            function preprocessFileInlineFn(resumableFile) {
                var that = this;
                if (typeof that.preprocessFileFn === 'function') {
                    that.changeItemStatus(resumableFile.internalItem, TransferStatus.Preprocessing);
                    that.preprocessFileFn(resumableFile);
                }
                else {
                    if (ConfigService.settings.core.preprocessHashEnabled && ConfigService.settings.core.preprocessHashChecked) {
                        that.changeItemStatus(resumableFile.internalItem, TransferStatus.Preprocessing);
                        var continueCallback = function () {
                            resumableFile.preprocessFinished();
                        };
                        var cancelCallback = function () {
                            resumableFile.cancel();
                            that.changeItemStatus(resumableFile.internalItem, TransferStatus.Finished, resumableFile.internalItem.message);
                            that.r.uploadNextChunk();
                        };
                        that.preprocessHash(resumableFile.internalItem, resumableFile.file, continueCallback, cancelCallback);
                    }
                    else {
                        resumableFile.preprocessFinished();
                    }
                }
            }
            ConfigService.settings.resumablejs.generateUniqueIdentifier = generateId.bind(this);
            if (typeof ConfigService.settings.resumablejs.preprocess === 'function') {
                // clones the function with '{}' acting as it's new 'this' parameter
                this.preprocessChunkFn = ConfigService.settings.resumablejs.preprocess.bind({});
            }
            ConfigService.settings.resumablejs.preprocess = preprocessChunkInlineFn.bind(this);
            if (typeof ConfigService.settings.resumablejs.preprocessFile === 'function') {
                // clones the function with '{}' acting as it's new 'this' parameter
                this.preprocessFileFn = ConfigService.settings.resumablejs.preprocessFile.bind({});
            }
            ConfigService.settings.resumablejs.preprocessFile = preprocessFileInlineFn.bind(this);
            // @ts-ignore: ignore type checking
            this.r = new Resumable__namespace(ConfigService.settings.resumablejs);
            this.r.on('fileAdded', function (file, event) {
                var that = this;
                // that.logger.log('fileAdded', file);
                var newItem = new DatatransferItem({
                    id: file.uniqueIdentifier,
                    name: file.fileName,
                    path: file.relativePath.substr(0, file.relativePath.length - file.fileName.length),
                    sizeContainer: new SizeContainer({ decimalByteUnit: DecimalByteUnit.Byte, decimalByteUnitSize: file.size }),
                    progressContainer: new ProgressContainer(file.size),
                    transferType: TransferType.Upload,
                    status: TransferStatus.Ready,
                    externalItem: file
                });
                file.internalItem = newItem;
                that.addItem(newItem);
            }.bind(this));
            this.r.on('fileProgress', function (file, message) {
                var that = this;
                // that.logger.log('fileProgress', file.progress());
                that.changeItemStatus(file.internalItem, TransferStatus.Uploading);
                that.updateItemProgress(file.internalItem, file.progress());
                that.updateOverallProgress(that.transferType, that.r.progress());
            }.bind(this));
            this.r.on('fileSuccess', function (file, message) {
                var that = this;
                // that.logger.log('fileSuccess', file);
                that.changeItemStatus(file.internalItem, TransferStatus.Finished, message);
            }.bind(this));
            this.r.on('fileError', function (file, message) {
                var that = this;
                // that.logger.log('fileError', file, message);
                that.changeItemStatus(file.internalItem, TransferStatus.Failed, message);
            }.bind(this));
            this.r.on('uploadStart', function () {
                var that = this;
                // that.logger.log('uploadStart', that.r);
                that._isWorking = true;
                that.updateZone();
                that.updateOverallProgress(that.transferType, that.r.progress());
                that.updateOverallSize(that.r.getSize());
            }.bind(this));
            this.r.on('chunkingComplete', function () {
                var that = this;
                // that.logger.log('chunkingComplete');
            }.bind(this));
            this.r.on('pause', function () {
                var that = this;
                // that.logger.log('pause');
                that._isWorking = false;
                that.updateZone();
            }.bind(this));
            this.r.on('cancel', function () {
                var that = this;
                // that.logger.log('cancel');
                that._isWorking = false;
                that.updateZone();
            }.bind(this));
            this.r.on('complete', function () {
                var that = this;
                // that.logger.log('complete', that.r);
                that._isWorking = false;
                that.updateZone();
            }.bind(this));
        };
        ResumableJsUploader.prototype.assignBrowse = function (element, isDirectory) {
            this.r.assignBrowse(element, isDirectory);
        };
        ResumableJsUploader.prototype.assignDrop = function (element) {
            this.r.assignDrop(element);
        };
        ResumableJsUploader.prototype.editPath = function (oldPath, newPath) {
            _super.prototype.editPath.call(this, oldPath, newPath);
            this.r.files.forEach(function (file, index) {
                var internalItem = file.internalItem;
                if (internalItem.status === TransferStatus.Ready && internalItem.path === oldPath) {
                    file.relativePath = newPath + file.fileName;
                    internalItem.path = newPath;
                }
            });
        };
        ResumableJsUploader.prototype.editFilename = function (item, name) {
            _super.prototype.editFilename.call(this, item, name);
            item.externalItem.fileName = name;
            item.externalItem.relativePath = item.path + name;
            item.name = name;
        };
        ResumableJsUploader.prototype.startAll = function () {
            this.r.upload();
        };
        ResumableJsUploader.prototype.pauseAll = function () {
            // reset preprocessState
            this.r.files.forEach(function (file, index) {
                if (file.preprocessState === 1) {
                    file.preprocessState = 0;
                }
            });
            this.r.pause();
        };
        ResumableJsUploader.prototype.removeAll = function () {
            var _this = this;
            var tempFiles = this.r.files.slice();
            tempFiles.forEach(function (file, index) {
                var that = _this;
                that.r.removeFile(file);
            });
            this._isWorking = false;
        };
        ResumableJsUploader.prototype.removeItem = function (item) {
            this.r.removeFile(item.externalItem);
            if (this.r.files.length <= 0) {
                this._isWorking = false;
            }
        };
        ResumableJsUploader.prototype.retryItem = function (item) {
            item.externalItem.retry();
        };
        return ResumableJsUploader;
    }(BaseUploader));
    ResumableJsUploader.ɵfac = function ResumableJsUploader_Factory(t) { return new (t || ResumableJsUploader)(i0.ɵɵinject(LoggerService), i0.ɵɵinject(GuidUtil), i0.ɵɵinject(CryptoService)); };
    ResumableJsUploader.ɵprov = i0.ɵɵdefineInjectable({ token: ResumableJsUploader, factory: ResumableJsUploader.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ResumableJsUploader, [{
                type: i0.Injectable
            }], function () { return [{ type: LoggerService }, { type: GuidUtil }, { type: CryptoService }]; }, null);
    })();

    var BaseDownloader = /** @class */ (function (_super) {
        __extends(BaseDownloader, _super);
        function BaseDownloader(logger, guidUtil, cryptoService) {
            var _this = _super.call(this, logger, guidUtil, cryptoService) || this;
            _this.logger = logger;
            _this.guidUtil = guidUtil;
            _this.cryptoService = cryptoService;
            _this.transferType = TransferType.Download;
            return _this;
        }
        return BaseDownloader;
    }(BaseDatatransfer));

    var CommonUtil = /** @class */ (function () {
        function CommonUtil() {
        }
        CommonUtil.prototype.each = function (o, callback) {
            if (typeof (o.length) !== 'undefined') {
                for (var i = 0; i < o.length; i++) {
                    // Array or FileList
                    if (callback(o[i]) === false) {
                        return;
                    }
                }
            }
            else {
                for (var i in o) {
                    // Object
                    if (callback(i, o[i]) === false) {
                        return;
                    }
                }
            }
        };
        return CommonUtil;
    }());
    CommonUtil.ɵfac = function CommonUtil_Factory(t) { return new (t || CommonUtil)(); };
    CommonUtil.ɵprov = i0.ɵɵdefineInjectable({ token: CommonUtil, factory: CommonUtil.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CommonUtil, [{
                type: i0.Injectable
            }], null, null);
    })();

    var BlobDownloader = /** @class */ (function (_super) {
        __extends(BlobDownloader, _super);
        function BlobDownloader(logger, guidUtil, cryptoService, commonUtil) {
            var _this = _super.call(this, logger, guidUtil, cryptoService) || this;
            _this.logger = logger;
            _this.guidUtil = guidUtil;
            _this.cryptoService = cryptoService;
            _this.commonUtil = commonUtil;
            _this.throttleProgressCallbacks = 0.1;
            _this.files = [];
            _this.queue = [];
            _this.downloading = [];
            return _this;
        }
        BlobDownloader.prototype.startAll = function () {
            if (!this.isWorking()) {
                for (var index = 0; index < ConfigService.settings.core.simultaneousDownloads; index++) {
                    this.downloadNext();
                }
            }
        };
        BlobDownloader.prototype.pauseAll = function () { };
        BlobDownloader.prototype.removeAll = function () {
            var _this = this;
            this.files.forEach(function (item, index) {
                var that = _this;
                that.abortDownload(item);
            });
            this.files.length = 0;
            this.queue.length = 0;
            this.downloading.length = 0;
            this._isWorking = false;
            this.updateOverallSize(this.getSize());
            this.updateOverallProgress(this.transferType, this.getProgress());
        };
        BlobDownloader.prototype.removeItem = function (item) {
            this.abortDownload(item);
            this.removeItemFromArray(item, this.files);
            this.removeItemFromArray(item, this.queue);
            this.removeItemFromArray(item, this.downloading);
            this.downloadNext();
        };
        BlobDownloader.prototype.removeItemFromArray = function (item, array) {
            for (var i = array.length - 1; i >= 0; i--) {
                if (array[i] === item) {
                    array.splice(i, 1);
                    break;
                }
            }
        };
        BlobDownloader.prototype.retryItem = function (item) {
            this.abortDownload(item);
            this.removeItemFromArray(item, this.queue);
            this.removeItemFromArray(item, this.downloading);
            this._isWorking = this.downloading.length > 0;
            item.externalItem.progress = 0;
            this.updateItemProgress(item, item.externalItem.progress);
            this.changeItemStatus(item, TransferStatus.Queued);
            this.queue.push(item);
            this.initDownload(item);
            this.downloadNext();
        };
        BlobDownloader.prototype.download = function (filename, url, sizeInBytes) {
            var newItem = new DatatransferItem({
                id: this.generateUniqueIdentifier(),
                name: filename,
                sizeContainer: new SizeContainer({
                    decimalByteUnit: DecimalByteUnit.Byte,
                    decimalByteUnitSize: sizeInBytes,
                }),
                progressContainer: new ProgressContainer(sizeInBytes),
                transferType: TransferType.Download,
                status: TransferStatus.Queued,
                externalItem: {
                    url: url,
                    progress: 0,
                    size: sizeInBytes,
                    lastProgressCallback: new Date(),
                },
            });
            this.addItem(newItem);
            this.files.push(newItem);
            this.queue.push(newItem);
            this.initDownload(newItem);
            this.downloadNext();
        };
        BlobDownloader.prototype.initDownload = function (item) {
            var xhr = new XMLHttpRequest();
            item.externalItem.xhr = xhr;
            xhr.open(ConfigService.settings.core.downloadMethod, item.externalItem.url);
            xhr.timeout = ConfigService.settings.core.downloadXhrTimeout;
            xhr.withCredentials = ConfigService.settings.core.downloadWithCredentials;
            // Add data from header options
            var customHeaders = ConfigService.settings.core.downloadHeaders;
            if (typeof customHeaders === "function") {
                customHeaders = customHeaders(item);
            }
            this.commonUtil.each(customHeaders, function (k, v) {
                xhr.setRequestHeader(k, v);
            });
            xhr.responseType = "blob";
            xhr.onloadstart = function (e) {
                var that = this;
                that.changeItemStatus(item, TransferStatus.Downloading);
            }.bind(this);
            xhr.onprogress = function (e) {
                var that = this;
                if (new Date().getTime() -
                    item.externalItem.lastProgressCallback.getTime() >
                    that.throttleProgressCallbacks * 1000) {
                    item.externalItem.progress = e.loaded / e.total;
                    that.updateItemProgress(item, item.externalItem.progress);
                    that.updateOverallProgress(that.transferType, that.getProgress());
                    item.externalItem.lastProgressCallback = new Date();
                }
            }.bind(this);
            xhr.onloadend = function (e) {
                /*
                      Value	State	Description
                      0	UNSENT	Client has been created. open() not called yet.
                      1	OPENED	open() has been called.
                      2	HEADERS_RECEIVED	send() has been called, and headers and status are available.
                      3	LOADING	Downloading; responseText holds partial data.
                      4	DONE	The operation is complete.
                      */
                var that = this;
                if (xhr.readyState === 4) {
                    item.externalItem.progress = 1;
                    that.updateItemProgress(item, item.externalItem.progress);
                    if (xhr.status === 200) {
                        that.changeItemStatus(item, TransferStatus.Finished);
                        if (ConfigService.settings.core.saveDownloadFileAs) {
                            ConfigService.settings.core.saveDownloadFileAs(xhr.response, item.name);
                        }
                        else {
                            fileSaver.saveAs(xhr.response, item.name);
                        }
                    }
                    else if (xhr.status !== 0) {
                        // don't change status for aborted items
                        that.changeItemStatus(item, TransferStatus.Failed);
                    }
                    that.removeItemFromArray(item, that.downloading);
                    that.downloadNext();
                }
            }.bind(this);
        };
        BlobDownloader.prototype.downloadNext = function () {
            this.updateOverallSize(this.getSize());
            this.updateOverallProgress(this.transferType, this.getProgress());
            if (this.downloading.length <
                ConfigService.settings.core.simultaneousDownloads) {
                var item = this.queue.shift();
                if (!!item && !!item.externalItem && !!item.externalItem.xhr) {
                    this.changeItemStatus(item, TransferStatus.Downloading);
                    this.downloading.push(item);
                    this._isWorking = this.downloading.length > 0;
                    item.externalItem.xhr.send();
                }
            }
        };
        BlobDownloader.prototype.abortDownload = function (item) {
            if (!!item && !!item.externalItem && !!item.externalItem.xhr) {
                item.externalItem.xhr.abort();
                item.externalItem.xhr = null;
            }
        };
        BlobDownloader.prototype.getSize = function () {
            var totalSize = 0;
            this.files.forEach(function (file, index) {
                totalSize += file.externalItem.size;
            });
            return totalSize;
        };
        BlobDownloader.prototype.getProgress = function () {
            var totalDone = 0;
            var totalSize = 0;
            this.files.forEach(function (file, index) {
                var currentFileProgress = file.externalItem.progress;
                if (file.status === TransferStatus.Failed) {
                    currentFileProgress = 1;
                }
                totalDone += currentFileProgress * file.externalItem.size;
                totalSize += file.externalItem.size;
            });
            return totalSize > 0 ? totalDone / totalSize : 0;
        };
        return BlobDownloader;
    }(BaseDownloader));
    BlobDownloader.ɵfac = function BlobDownloader_Factory(t) { return new (t || BlobDownloader)(i0.ɵɵinject(LoggerService), i0.ɵɵinject(GuidUtil), i0.ɵɵinject(CryptoService), i0.ɵɵinject(CommonUtil)); };
    BlobDownloader.ɵprov = i0.ɵɵdefineInjectable({ token: BlobDownloader, factory: BlobDownloader.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BlobDownloader, [{
                type: i0.Injectable
            }], function () { return [{ type: LoggerService }, { type: GuidUtil }, { type: CryptoService }, { type: CommonUtil }]; }, null);
    })();

    var DatatransferFacadeFactory = /** @class */ (function () {
        function DatatransferFacadeFactory(logger, zone, store, dateUtil, paginationService, exportService, dialog, resumableUploader, blobDownloader) {
            this.logger = logger;
            this.zone = zone;
            this.store = store;
            this.dateUtil = dateUtil;
            this.paginationService = paginationService;
            this.exportService = exportService;
            this.dialog = dialog;
            this.resumableUploader = resumableUploader;
            this.blobDownloader = blobDownloader;
        }
        // TODO: pass arguments to define which uploader/downloader implementation should be used
        DatatransferFacadeFactory.prototype.createDatatransferFacade = function () {
            if (!this.facade1) {
                this.facade1 = new DatatransferFacade(this.logger, this.zone, this.store, this.dateUtil, this.paginationService, this.exportService, this.resumableUploader, this.blobDownloader, this.dialog);
            }
            return this.facade1;
        };
        return DatatransferFacadeFactory;
    }());
    DatatransferFacadeFactory.ɵfac = function DatatransferFacadeFactory_Factory(t) { return new (t || DatatransferFacadeFactory)(i0.ɵɵinject(LoggerService), i0.ɵɵinject(i0.NgZone), i0.ɵɵinject(DatatransferStore), i0.ɵɵinject(DateUtil), i0.ɵɵinject(PaginationService), i0.ɵɵinject(ExportService), i0.ɵɵinject(i1.MatDialog), i0.ɵɵinject(ResumableJsUploader), i0.ɵɵinject(BlobDownloader)); };
    DatatransferFacadeFactory.ɵprov = i0.ɵɵdefineInjectable({ token: DatatransferFacadeFactory, factory: DatatransferFacadeFactory.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DatatransferFacadeFactory, [{
                type: i0.Injectable
            }], function () { return [{ type: LoggerService }, { type: i0.NgZone }, { type: DatatransferStore }, { type: DateUtil }, { type: PaginationService }, { type: ExportService }, { type: i1.MatDialog }, { type: ResumableJsUploader }, { type: BlobDownloader }]; }, null);
    })();

    function AngularMaterialDatatransferComponent_ng_template_1_Template(rf, ctx) { }
    var AngularMaterialDatatransferComponent = /** @class */ (function () {
        function AngularMaterialDatatransferComponent(componentFactoryResolver, datatransferFacadeFactory, configService, paginationService) {
            this.componentFactoryResolver = componentFactoryResolver;
            this.datatransferFacadeFactory = datatransferFacadeFactory;
            this.configService = configService;
            this.paginationService = paginationService;
        }
        AngularMaterialDatatransferComponent.prototype.ngOnInit = function () {
            document.dispatchEvent(new Event(CustomEventTypeExtensions.toString(CustomEventType.INIT)));
        };
        AngularMaterialDatatransferComponent.prototype.create = function (config) {
            this.setConfig(config);
        };
        AngularMaterialDatatransferComponent.prototype.setConfig = function (config) {
            this.configService.load(config);
            this.paginationService.setRppOptions(ConfigService.settings.core.paginationRppOptions);
            this.datatransferFacade = this.datatransferFacadeFactory.createDatatransferFacade();
            var viewContainerRef = this.amdHost.viewContainerRef;
            viewContainerRef.clear();
            var componentFactory = this.componentFactoryResolver.resolveComponentFactory(MainComponent);
            var componentRef = viewContainerRef.createComponent(componentFactory);
            var componentRefInstance = componentRef.instance;
            componentRefInstance.datatransferFacade = this.datatransferFacade;
        };
        AngularMaterialDatatransferComponent.prototype.download = function (filename, url, size) {
            this.datatransferFacade.download(filename, url, size);
        };
        return AngularMaterialDatatransferComponent;
    }());
    AngularMaterialDatatransferComponent.ɵfac = function AngularMaterialDatatransferComponent_Factory(t) { return new (t || AngularMaterialDatatransferComponent)(i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver), i0.ɵɵdirectiveInject(DatatransferFacadeFactory), i0.ɵɵdirectiveInject(ConfigService), i0.ɵɵdirectiveInject(PaginationService)); };
    AngularMaterialDatatransferComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AngularMaterialDatatransferComponent, selectors: [["angular-material-datatransfer-lib"]], viewQuery: function AngularMaterialDatatransferComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(HostDirective, 3);
            }
            if (rf & 2) {
                var _t = void 0;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.amdHost = _t.first);
            }
        }, decls: 2, vars: 0, consts: [[1, "angular-material-datatransfer"], ["amd-host", ""]], template: function AngularMaterialDatatransferComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵtemplate(1, AngularMaterialDatatransferComponent_ng_template_1_Template, 0, 0, "ng-template", 1);
                i0.ɵɵelementEnd();
            }
        }, directives: [HostDirective], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AngularMaterialDatatransferComponent, [{
                type: i0.Component,
                args: [{
                        // tslint:disable-next-line:component-selector
                        selector: 'angular-material-datatransfer-lib',
                        templateUrl: './angular-material-datatransfer.component.html'
                    }]
            }], function () { return [{ type: i0.ComponentFactoryResolver }, { type: DatatransferFacadeFactory }, { type: ConfigService }, { type: PaginationService }]; }, { amdHost: [{
                    type: i0.ViewChild,
                    args: [HostDirective, { static: true }]
                }] });
    })();

    var DemoService = /** @class */ (function () {
        function DemoService() {
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
        return DemoService;
    }());
    DemoService.ɵfac = function DemoService_Factory(t) { return new (t || DemoService)(); };
    DemoService.ɵprov = i0.ɵɵdefineInjectable({ token: DemoService, factory: DemoService.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DemoService, [{
                type: i0.Injectable
            }], null, null);
    })();

    var AngularMaterialDatatransferModule = /** @class */ (function () {
        function AngularMaterialDatatransferModule(appRef) {
            this.appRef = appRef;
        }
        return AngularMaterialDatatransferModule;
    }());
    AngularMaterialDatatransferModule.ɵmod = i0.ɵɵdefineNgModule({ type: AngularMaterialDatatransferModule });
    AngularMaterialDatatransferModule.ɵinj = i0.ɵɵdefineInjector({ factory: function AngularMaterialDatatransferModule_Factory(t) { return new (t || AngularMaterialDatatransferModule)(i0.ɵɵinject(i0.ApplicationRef)); }, providers: [
            ConfigService,
            LoggerService,
            PaginationService,
            ExportService,
            DemoService,
            CryptoService,
            DatatransferStore,
            DatatransferFacadeFactory,
            CommonUtil,
            DateUtil,
            DecimalByteUnitUtil,
            GuidUtil,
            CsvExporter,
            JsonExporter,
            ResumableJsUploader,
            BlobDownloader,
        ], imports: [[
                platformBrowser.BrowserModule,
                animations.BrowserAnimationsModule,
                i3$1.FormsModule,
                i3$1.ReactiveFormsModule,
                i6.MatButtonModule,
                i6$1.MatCheckboxModule,
                i1.MatDialogModule,
                i4.MatFormFieldModule,
                i7.MatIconModule,
                i5$1.MatInputModule,
                i5.MatMenuModule,
                i4$2.MatProgressBarModule,
                i15.MatProgressSpinnerModule,
                i3.MatSelectModule,
                i13.MatTooltipModule,
                flexLayout.FlexLayoutModule,
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AngularMaterialDatatransferModule, { declarations: [AngularMaterialDatatransferComponent,
                MainComponent,
                BrowseDialogComponent,
                DropzoneComponent,
                EditDialogComponent,
                PaginationComponent,
                ProgressComponent,
                HostDirective], imports: [platformBrowser.BrowserModule,
                animations.BrowserAnimationsModule,
                i3$1.FormsModule,
                i3$1.ReactiveFormsModule,
                i6.MatButtonModule,
                i6$1.MatCheckboxModule,
                i1.MatDialogModule,
                i4.MatFormFieldModule,
                i7.MatIconModule,
                i5$1.MatInputModule,
                i5.MatMenuModule,
                i4$2.MatProgressBarModule,
                i15.MatProgressSpinnerModule,
                i3.MatSelectModule,
                i13.MatTooltipModule,
                flexLayout.FlexLayoutModule], exports: [AngularMaterialDatatransferComponent] });
    })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AngularMaterialDatatransferModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            AngularMaterialDatatransferComponent,
                            MainComponent,
                            BrowseDialogComponent,
                            DropzoneComponent,
                            EditDialogComponent,
                            PaginationComponent,
                            ProgressComponent,
                            HostDirective,
                        ],
                        imports: [
                            platformBrowser.BrowserModule,
                            animations.BrowserAnimationsModule,
                            i3$1.FormsModule,
                            i3$1.ReactiveFormsModule,
                            i6.MatButtonModule,
                            i6$1.MatCheckboxModule,
                            i1.MatDialogModule,
                            i4.MatFormFieldModule,
                            i7.MatIconModule,
                            i5$1.MatInputModule,
                            i5.MatMenuModule,
                            i4$2.MatProgressBarModule,
                            i15.MatProgressSpinnerModule,
                            i3.MatSelectModule,
                            i13.MatTooltipModule,
                            flexLayout.FlexLayoutModule,
                        ],
                        exports: [AngularMaterialDatatransferComponent],
                        entryComponents: [MainComponent, BrowseDialogComponent, EditDialogComponent],
                        providers: [
                            ConfigService,
                            LoggerService,
                            PaginationService,
                            ExportService,
                            DemoService,
                            CryptoService,
                            DatatransferStore,
                            DatatransferFacadeFactory,
                            CommonUtil,
                            DateUtil,
                            DecimalByteUnitUtil,
                            GuidUtil,
                            CsvExporter,
                            JsonExporter,
                            ResumableJsUploader,
                            BlobDownloader,
                        ],
                    }]
            }], function () { return [{ type: i0.ApplicationRef }]; }, null);
    })();

    /*
     * Public API Surface of angular-material-datatransfer
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.AngularMaterialDatatransferComponent = AngularMaterialDatatransferComponent;
    exports.AngularMaterialDatatransferModule = AngularMaterialDatatransferModule;
    exports.DatatransferStore = DatatransferStore;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular-material-datatransfer-lib.umd.js.map
