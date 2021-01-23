export declare class CoreAppConfig {
    showUploadDropzone: boolean;
    uploadBrowseElementId: any;
    uploadDropElementId: any;
    paginationRppOptions: number[];
    simultaneousDownloads: number;
    downloadMethod: string;
    downloadHeaders: any;
    downloadWithCredentials: boolean;
    downloadXhrTimeout: number;
    preprocessHashEnabled: boolean;
    preprocessHashChecked: boolean;
    preprocessHashTarget: string;
    preprocessHashMethod: string;
    preprocessHashParameterName: string;
    preprocessHashFileNameParameterName: string;
    preprocessHashFunctionName: string;
    preprocessHashEncodingName: string;
    preprocessHashInputEncodingName: string;
    preprocessHashTooltipContent: string;
    saveDownloadFileAs: (response: any, name: string) => void;
    parseMessageCallback: (message: any) => any;
    getTarget: (request: any, params: any) => any;
}
export declare class ResumableJsAppConfig {
    chunkSize: number;
    forceChunkSize: boolean;
    simultaneousUploads: number;
    fileParameterName: string;
    chunkNumberParameterName: string;
    chunkSizeParameterName: string;
    currentChunkSizeParameterName: string;
    totalSizeParameterName: string;
    typeParameterName: string;
    identifierParameterName: string;
    fileNameParameterName: string;
    relativePathParameterName: string;
    totalChunksParameterName: string;
    throttleProgressCallbacks: number;
    query: {};
    headers: {};
    preprocess: any;
    preprocessFile: any;
    method: string;
    uploadMethod: string;
    testMethod: string;
    prioritizeFirstAndLastChunk: false;
    target: string;
    testTarget: any;
    parameterNamespace: string;
    testChunks: boolean;
    generateUniqueIdentifier: any;
    getTarget: any;
    maxChunkRetries: number;
    chunkRetryInterval: any;
    permanentErrors: number[];
    maxFiles: any;
    withCredentials: boolean;
    xhrTimeout: number;
    clearInput: boolean;
    chunkFormat: string;
    minFileSize: number;
    maxFileSize: any;
    fileType: any[];
    maxFilesErrorCallback: (files: any, errorCount: any) => void;
    minFileSizeErrorCallback: (file: any, errorCount: any) => void;
    maxFileSizeErrorCallback: (file: any, errorCount: any) => void;
    fileTypeErrorCallback: (file: any, errorCount: any) => void;
}
export interface IAppConfig {
    production: boolean;
    core: CoreAppConfig;
    resumablejs: ResumableJsAppConfig;
}
export declare class AppConfig implements IAppConfig {
    production: boolean;
    core: CoreAppConfig;
    resumablejs: ResumableJsAppConfig;
}
//# sourceMappingURL=app-config.model.d.ts.map