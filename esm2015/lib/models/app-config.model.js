export class CoreAppConfig {
    constructor() {
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
            let target;
            if (request === "preprocessHash" && this.preprocessHashChecked) {
                target = this.preprocessHashTarget;
            }
            if (typeof target === "function") {
                return target(params);
            }
            if (target) {
                const separator = target.indexOf("?") < 0 ? "?" : "&";
                const joinedParams = params.join("&");
                return target + separator + joinedParams;
            }
            else {
                return;
            }
        };
    }
}
export class ResumableJsAppConfig {
    constructor() {
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
}
export class AppConfig {
    constructor() {
        this.production = true;
        this.core = new CoreAppConfig();
        this.resumablejs = new ResumableJsAppConfig();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWNvbmZpZy5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FtZC1saWIvc3JjL2xpYi9tb2RlbHMvYXBwLWNvbmZpZy5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLE9BQU8sYUFBYTtJQUExQjtRQUNFLHVCQUFrQixHQUFHLElBQUksQ0FBQztRQUMxQiwwQkFBcUIsR0FBRyxTQUFTLENBQUM7UUFDbEMsd0JBQW1CLEdBQUcsU0FBUyxDQUFDO1FBQ2hDLHlCQUFvQixHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNuQywwQkFBcUIsR0FBRyxDQUFDLENBQUM7UUFDMUIsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFDdkIsb0JBQWUsR0FBUSxFQUFFLENBQUM7UUFDMUIsNEJBQXVCLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLHVCQUFrQixHQUFHLENBQUMsQ0FBQztRQUN2QiwwQkFBcUIsR0FBRyxLQUFLLENBQUM7UUFDOUIsMEJBQXFCLEdBQUcsSUFBSSxDQUFDO1FBQzdCLHlCQUFvQixHQUFHLHFCQUFxQixDQUFDO1FBQzdDLHlCQUFvQixHQUFHLEtBQUssQ0FBQztRQUM3QixnQ0FBMkIsR0FBRyxNQUFNLENBQUM7UUFDckMsd0NBQW1DLEdBQUcsVUFBVSxDQUFDO1FBQ2pELCtCQUEwQixHQUFHLE1BQU0sQ0FBQztRQUNwQywrQkFBMEIsR0FBRyxLQUFLLENBQUM7UUFDbkMsb0NBQStCLEdBQUcsUUFBUSxDQUFDO1FBQzNDLGlDQUE0QixHQUMxQixxRkFBcUYsQ0FBQztRQUN4Rix1QkFBa0IsR0FBMEMsSUFBSSxDQUFDO1FBQ2pFLHlCQUFvQixHQUFHLFVBQVUsT0FBTztZQUN0QyxPQUFPLE9BQU8sQ0FBQztRQUNqQixDQUFDLENBQUM7UUFDRixjQUFTLEdBQUcsVUFBVSxPQUFPLEVBQUUsTUFBTTtZQUNuQyxJQUFJLE1BQU0sQ0FB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Q0osQ0FBQyxDQUFDO1FBQ0YsNkJBQXdCLEdBQUcsVUFBVSxJQUFJLEVBQUUsVUFBVTtZQUNuRCxLQUFLLENBQ0gsSUFBSSxDQUFDLFFBQVE7Z0JBQ1gsSUFBSSxDQUFDLElBQUk7b0JBQ1AsaURBQWlEO29CQUNqRCxJQUFJLENBQUMsV0FBVztvQkFDaEIsR0FBRyxDQUNSLENBQUM7UUFDSixDQUFDLENBQUM7UUFDRiw2QkFBd0IsR0FBRyxVQUFVLElBQUksRUFBRSxVQUFVO1lBQ25ELEtBQUssQ0FDSCxJQUFJLENBQUMsUUFBUTtnQkFDWCxJQUFJLENBQUMsSUFBSTtvQkFDUCwrQ0FBK0M7b0JBQy9DLElBQUksQ0FBQyxXQUFXO29CQUNoQixHQUFHLENBQ1IsQ0FBQztRQUNKLENBQUMsQ0FBQztRQUNGLDBCQUFxQixHQUFHLFVBQVUsSUFBSSxFQUFFLFVBQVU7WUFDaEQsS0FBSyxDQUNILElBQUksQ0FBQyxRQUFRO2dCQUNYLElBQUksQ0FBQyxJQUFJO29CQUNQLHFEQUFxRDtvQkFDckQsSUFBSSxDQUFDLFFBQVE7b0JBQ2IsR0FBRyxDQUNSLENBQUM7UUFDSixDQUFDLENBQUM7SUFDSixDQUFDO0NBQUE7QUFRRCxNQUFNLE9BQU8sU0FBUztJQUF0QjtRQUNFLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsU0FBSSxHQUFHLElBQUksYUFBYSxFQUFFLENBQUM7UUFDM0IsZ0JBQVcsR0FBRyxJQUFJLG9CQUFvQixFQUFFLENBQUM7SUFDM0MsQ0FBQztDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIENvcmVBcHBDb25maWcge1xyXG4gIHNob3dVcGxvYWREcm9wem9uZSA9IHRydWU7XHJcbiAgdXBsb2FkQnJvd3NlRWxlbWVudElkID0gdW5kZWZpbmVkO1xyXG4gIHVwbG9hZERyb3BFbGVtZW50SWQgPSB1bmRlZmluZWQ7XHJcbiAgcGFnaW5hdGlvblJwcE9wdGlvbnMgPSBbNSwgMTAsIDI1XTtcclxuICBzaW11bHRhbmVvdXNEb3dubG9hZHMgPSAyO1xyXG4gIGRvd25sb2FkTWV0aG9kID0gXCJHRVRcIjtcclxuICBkb3dubG9hZEhlYWRlcnM6IGFueSA9IHt9O1xyXG4gIGRvd25sb2FkV2l0aENyZWRlbnRpYWxzID0gZmFsc2U7XHJcbiAgZG93bmxvYWRYaHJUaW1lb3V0ID0gMDtcclxuICBwcmVwcm9jZXNzSGFzaEVuYWJsZWQgPSBmYWxzZTtcclxuICBwcmVwcm9jZXNzSGFzaENoZWNrZWQgPSB0cnVlO1xyXG4gIHByZXByb2Nlc3NIYXNoVGFyZ2V0ID0gXCJodHRwczovL2h0dHBiaW4ub3JnXCI7XHJcbiAgcHJlcHJvY2Vzc0hhc2hNZXRob2QgPSBcIkdFVFwiO1xyXG4gIHByZXByb2Nlc3NIYXNoUGFyYW1ldGVyTmFtZSA9IFwiaGFzaFwiO1xyXG4gIHByZXByb2Nlc3NIYXNoRmlsZU5hbWVQYXJhbWV0ZXJOYW1lID0gXCJmaWxlbmFtZVwiO1xyXG4gIHByZXByb2Nlc3NIYXNoRnVuY3Rpb25OYW1lID0gXCJzaGExXCI7XHJcbiAgcHJlcHJvY2Vzc0hhc2hFbmNvZGluZ05hbWUgPSBcImhleFwiO1xyXG4gIHByZXByb2Nlc3NIYXNoSW5wdXRFbmNvZGluZ05hbWUgPSBcImxhdGluMVwiO1xyXG4gIHByZXByb2Nlc3NIYXNoVG9vbHRpcENvbnRlbnQgPVxyXG4gICAgXCJUaGUgcHJlcHJvY2VzcyBvcHRpb24gY2hlY2tzIGlmIHRoZSBmaWxlIGlzIGFscmVhZHkgb24gdGhlIHN5c3RlbSBiZWZvcmUgdXBsb2FkaW5nLlwiO1xyXG4gIHNhdmVEb3dubG9hZEZpbGVBczogKHJlc3BvbnNlOiBhbnksIG5hbWU6IHN0cmluZykgPT4gdm9pZCA9IG51bGw7XHJcbiAgcGFyc2VNZXNzYWdlQ2FsbGJhY2sgPSBmdW5jdGlvbiAobWVzc2FnZSkge1xyXG4gICAgcmV0dXJuIG1lc3NhZ2U7XHJcbiAgfTtcclxuICBnZXRUYXJnZXQgPSBmdW5jdGlvbiAocmVxdWVzdCwgcGFyYW1zKSB7XHJcbiAgICBsZXQgdGFyZ2V0O1xyXG5cclxuICAgIGlmIChyZXF1ZXN0ID09PSBcInByZXByb2Nlc3NIYXNoXCIgJiYgdGhpcy5wcmVwcm9jZXNzSGFzaENoZWNrZWQpIHtcclxuICAgICAgdGFyZ2V0ID0gdGhpcy5wcmVwcm9jZXNzSGFzaFRhcmdldDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgIHJldHVybiB0YXJnZXQocGFyYW1zKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGFyZ2V0KSB7XHJcbiAgICAgIGNvbnN0IHNlcGFyYXRvciA9IHRhcmdldC5pbmRleE9mKFwiP1wiKSA8IDAgPyBcIj9cIiA6IFwiJlwiO1xyXG4gICAgICBjb25zdCBqb2luZWRQYXJhbXMgPSBwYXJhbXMuam9pbihcIiZcIik7XHJcblxyXG4gICAgICByZXR1cm4gdGFyZ2V0ICsgc2VwYXJhdG9yICsgam9pbmVkUGFyYW1zO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBSZXN1bWFibGVKc0FwcENvbmZpZyB7XHJcbiAgY2h1bmtTaXplID0gMSAqIDEwMjQgKiAxMDI0O1xyXG4gIGZvcmNlQ2h1bmtTaXplID0gZmFsc2U7XHJcbiAgc2ltdWx0YW5lb3VzVXBsb2FkcyA9IDM7XHJcbiAgZmlsZVBhcmFtZXRlck5hbWUgPSBcImZpbGVcIjtcclxuICBjaHVua051bWJlclBhcmFtZXRlck5hbWUgPSBcInJlc3VtYWJsZUNodW5rTnVtYmVyXCI7XHJcbiAgY2h1bmtTaXplUGFyYW1ldGVyTmFtZSA9IFwicmVzdW1hYmxlQ2h1bmtTaXplXCI7XHJcbiAgY3VycmVudENodW5rU2l6ZVBhcmFtZXRlck5hbWUgPSBcInJlc3VtYWJsZUN1cnJlbnRDaHVua1NpemVcIjtcclxuICB0b3RhbFNpemVQYXJhbWV0ZXJOYW1lID0gXCJyZXN1bWFibGVUb3RhbFNpemVcIjtcclxuICB0eXBlUGFyYW1ldGVyTmFtZSA9IFwicmVzdW1hYmxlVHlwZVwiO1xyXG4gIGlkZW50aWZpZXJQYXJhbWV0ZXJOYW1lID0gXCJyZXN1bWFibGVJZGVudGlmaWVyXCI7XHJcbiAgZmlsZU5hbWVQYXJhbWV0ZXJOYW1lID0gXCJyZXN1bWFibGVGaWxlbmFtZVwiO1xyXG4gIHJlbGF0aXZlUGF0aFBhcmFtZXRlck5hbWUgPSBcInJlc3VtYWJsZVJlbGF0aXZlUGF0aFwiO1xyXG4gIHRvdGFsQ2h1bmtzUGFyYW1ldGVyTmFtZSA9IFwicmVzdW1hYmxlVG90YWxDaHVua3NcIjtcclxuICB0aHJvdHRsZVByb2dyZXNzQ2FsbGJhY2tzID0gMC41O1xyXG4gIHF1ZXJ5ID0ge307XHJcbiAgaGVhZGVycyA9IHt9O1xyXG4gIHByZXByb2Nlc3MgPSBudWxsO1xyXG4gIHByZXByb2Nlc3NGaWxlID0gbnVsbDtcclxuICBtZXRob2QgPSBcIm11bHRpcGFydFwiO1xyXG4gIHVwbG9hZE1ldGhvZCA9IFwiUE9TVFwiO1xyXG4gIHRlc3RNZXRob2QgPSBcIkdFVFwiO1xyXG4gIHByaW9yaXRpemVGaXJzdEFuZExhc3RDaHVuazogZmFsc2U7XHJcbiAgdGFyZ2V0ID0gXCJodHRwczovL2h0dHBiaW4ub3JnXCI7XHJcbiAgdGVzdFRhcmdldCA9IG51bGw7XHJcbiAgcGFyYW1ldGVyTmFtZXNwYWNlID0gXCJcIjtcclxuICB0ZXN0Q2h1bmtzID0gdHJ1ZTtcclxuICBnZW5lcmF0ZVVuaXF1ZUlkZW50aWZpZXIgPSBudWxsO1xyXG4gIGdldFRhcmdldCA9IG51bGw7XHJcbiAgbWF4Q2h1bmtSZXRyaWVzID0gMTAwO1xyXG4gIGNodW5rUmV0cnlJbnRlcnZhbCA9IHVuZGVmaW5lZDtcclxuICBwZXJtYW5lbnRFcnJvcnMgPSBbNDAwLCA0MDQsIDQwNSwgNDE1LCA1MDFdO1xyXG4gIG1heEZpbGVzID0gdW5kZWZpbmVkO1xyXG4gIHdpdGhDcmVkZW50aWFscyA9IGZhbHNlO1xyXG4gIHhoclRpbWVvdXQgPSAwO1xyXG4gIGNsZWFySW5wdXQgPSB0cnVlO1xyXG4gIGNodW5rRm9ybWF0ID0gXCJibG9iXCI7XHJcbiAgbWluRmlsZVNpemUgPSAxO1xyXG4gIG1heEZpbGVTaXplID0gdW5kZWZpbmVkO1xyXG4gIGZpbGVUeXBlID0gW107XHJcbiAgbWF4RmlsZXNFcnJvckNhbGxiYWNrID0gZnVuY3Rpb24gKGZpbGVzLCBlcnJvckNvdW50KSB7XHJcbiAgICBhbGVydChcclxuICAgICAgXCJQbGVhc2UgdXBsb2FkIG5vIG1vcmUgdGhhbiBcIiArXHJcbiAgICAgICAgdGhpcy5tYXhGaWxlcyArXHJcbiAgICAgICAgXCIgZmlsZVwiICtcclxuICAgICAgICAodGhpcy5tYXhGaWxlcyA9PT0gMSA/IFwiXCIgOiBcInNcIikgK1xyXG4gICAgICAgIFwiIGF0IGEgdGltZS5cIlxyXG4gICAgKTtcclxuICB9O1xyXG4gIG1pbkZpbGVTaXplRXJyb3JDYWxsYmFjayA9IGZ1bmN0aW9uIChmaWxlLCBlcnJvckNvdW50KSB7XHJcbiAgICBhbGVydChcclxuICAgICAgZmlsZS5maWxlTmFtZSB8fFxyXG4gICAgICAgIGZpbGUubmFtZSArXHJcbiAgICAgICAgICBcIiBpcyB0b28gc21hbGw7IHBsZWFzZSB1cGxvYWQgZmlsZXMgbGFyZ2VyIHRoYW4gXCIgK1xyXG4gICAgICAgICAgdGhpcy5taW5GaWxlU2l6ZSArXHJcbiAgICAgICAgICBcIi5cIlxyXG4gICAgKTtcclxuICB9O1xyXG4gIG1heEZpbGVTaXplRXJyb3JDYWxsYmFjayA9IGZ1bmN0aW9uIChmaWxlLCBlcnJvckNvdW50KSB7XHJcbiAgICBhbGVydChcclxuICAgICAgZmlsZS5maWxlTmFtZSB8fFxyXG4gICAgICAgIGZpbGUubmFtZSArXHJcbiAgICAgICAgICBcIiBpcyB0b28gbGFyZ2U7IHBsZWFzZSB1cGxvYWQgZmlsZXMgbGVzcyB0aGFuIFwiICtcclxuICAgICAgICAgIHRoaXMubWF4RmlsZVNpemUgK1xyXG4gICAgICAgICAgXCIuXCJcclxuICAgICk7XHJcbiAgfTtcclxuICBmaWxlVHlwZUVycm9yQ2FsbGJhY2sgPSBmdW5jdGlvbiAoZmlsZSwgZXJyb3JDb3VudCkge1xyXG4gICAgYWxlcnQoXHJcbiAgICAgIGZpbGUuZmlsZU5hbWUgfHxcclxuICAgICAgICBmaWxlLm5hbWUgK1xyXG4gICAgICAgICAgXCIgaGFzIHR5cGUgbm90IGFsbG93ZWQ7IHBsZWFzZSB1cGxvYWQgZmlsZXMgb2YgdHlwZSBcIiArXHJcbiAgICAgICAgICB0aGlzLmZpbGVUeXBlICtcclxuICAgICAgICAgIFwiLlwiXHJcbiAgICApO1xyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUFwcENvbmZpZyB7XHJcbiAgcHJvZHVjdGlvbjogYm9vbGVhbjtcclxuICBjb3JlOiBDb3JlQXBwQ29uZmlnO1xyXG4gIHJlc3VtYWJsZWpzOiBSZXN1bWFibGVKc0FwcENvbmZpZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFwcENvbmZpZyBpbXBsZW1lbnRzIElBcHBDb25maWcge1xyXG4gIHByb2R1Y3Rpb24gPSB0cnVlO1xyXG4gIGNvcmUgPSBuZXcgQ29yZUFwcENvbmZpZygpO1xyXG4gIHJlc3VtYWJsZWpzID0gbmV3IFJlc3VtYWJsZUpzQXBwQ29uZmlnKCk7XHJcbn1cclxuIl19