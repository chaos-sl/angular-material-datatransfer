import { BaseDatatransfer } from '../datatransfer.io';
import { TransferType } from '../../enums/transfer-type.enum';
export class BaseUploader extends BaseDatatransfer {
    constructor(logger, guidUtil, cryptoService) {
        super(logger, guidUtil, cryptoService);
        this.logger = logger;
        this.guidUtil = guidUtil;
        this.cryptoService = cryptoService;
        this.filenameRegExp = new RegExp('[\/\\\\*?"<>:|]');
        this.pathRegExp = new RegExp('[*?"<>:|]');
        this.transferType = TransferType.Upload;
    }
    editPath(oldPath, newPath) {
        if (this.pathRegExp.test(newPath)) {
            throw new Error('A path cannot contain any of the following characters: * ? " < > : |');
        }
    }
    editFilename(item, name) {
        if (!item) {
            throw new Error('Cannot edit the filename.');
        }
        if (!name) {
            throw new Error('Empty filename is not allowed.');
        }
        if (this.filenameRegExp.test(name)) {
            throw new Error('A filename cannot contain any of the following characters: \\ / * ? " < > : |');
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS51cGxvYWRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FtZC1saWIvc3JjL2xpYi9pby91cGxvYWRlcnMvYmFzZS51cGxvYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWlCLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFckUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBWTlELE1BQU0sT0FBZ0IsWUFBYSxTQUFRLGdCQUFnQjtJQU12RCxZQUFzQixNQUFxQixFQUNyQixRQUFrQixFQUNsQixhQUE0QjtRQUM5QyxLQUFLLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUhyQixXQUFNLEdBQU4sTUFBTSxDQUFlO1FBQ3JCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFOMUMsbUJBQWMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQy9DLGVBQVUsR0FBRyxJQUFJLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNuQyxpQkFBWSxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUM7SUFNN0MsQ0FBQztJQU1NLFFBQVEsQ0FBQyxPQUFlLEVBQUUsT0FBZTtRQUM1QyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQy9CLE1BQU0sSUFBSSxLQUFLLENBQUMsc0VBQXNFLENBQUMsQ0FBQztTQUMzRjtJQUNMLENBQUM7SUFFTSxZQUFZLENBQUMsSUFBdUIsRUFBRSxJQUFZO1FBQ3JELElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDUCxNQUFNLElBQUksS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUM7U0FDaEQ7UUFDRCxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1AsTUFBTSxJQUFJLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1NBQ3JEO1FBQ0QsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNoQyxNQUFNLElBQUksS0FBSyxDQUFDLCtFQUErRSxDQUFDLENBQUM7U0FDcEc7SUFDTCxDQUFDO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJRGF0YXRyYW5zZmVyLCBCYXNlRGF0YXRyYW5zZmVyIH0gZnJvbSAnLi4vZGF0YXRyYW5zZmVyLmlvJztcclxuaW1wb3J0IHsgSURhdGF0cmFuc2Zlckl0ZW0gfSBmcm9tICcuLi8uLi9tb2RlbHMvZGF0YXRyYW5zZmVyLWl0ZW0ubW9kZWwnO1xyXG5pbXBvcnQgeyBUcmFuc2ZlclR5cGUgfSBmcm9tICcuLi8uLi9lbnVtcy90cmFuc2Zlci10eXBlLmVudW0nO1xyXG5pbXBvcnQgeyBMb2dnZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbG9nZ2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBHdWlkVXRpbCB9IGZyb20gJy4uLy4uL3V0aWxzL2d1aWQudXRpbCc7XHJcbmltcG9ydCB7IENyeXB0b1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jcnlwdG8uc2VydmljZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElVcGxvYWRlciBleHRlbmRzIElEYXRhdHJhbnNmZXIge1xyXG4gICAgYXNzaWduQnJvd3NlKGVsZW1lbnQ6IGFueSwgaXNEaXJlY3Rvcnk6IGFueSk6IHZvaWQ7XHJcbiAgICBhc3NpZ25Ecm9wKGVsZW1lbnQ6IGFueSk6IHZvaWQ7XHJcbiAgICBlZGl0UGF0aChvbGRQYXRoOiBzdHJpbmcsIG5ld1BhdGg6IHN0cmluZyk6IHZvaWQ7XHJcbiAgICBlZGl0RmlsZW5hbWUoaXRlbTogSURhdGF0cmFuc2Zlckl0ZW0sIG5hbWU6IHN0cmluZyk6IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlVXBsb2FkZXIgZXh0ZW5kcyBCYXNlRGF0YXRyYW5zZmVyIHtcclxuXHJcbiAgICBwcml2YXRlIGZpbGVuYW1lUmVnRXhwID0gbmV3IFJlZ0V4cCgnW1xcL1xcXFxcXFxcKj9cIjw+OnxdJyk7XHJcbiAgICBwcml2YXRlIHBhdGhSZWdFeHAgPSBuZXcgUmVnRXhwKCdbKj9cIjw+OnxdJyk7XHJcbiAgICBwcm90ZWN0ZWQgdHJhbnNmZXJUeXBlID0gVHJhbnNmZXJUeXBlLlVwbG9hZDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgbG9nZ2VyOiBMb2dnZXJTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJvdGVjdGVkIGd1aWRVdGlsOiBHdWlkVXRpbCxcclxuICAgICAgICAgICAgICAgIHByb3RlY3RlZCBjcnlwdG9TZXJ2aWNlOiBDcnlwdG9TZXJ2aWNlKSB7XHJcbiAgICAgICAgc3VwZXIobG9nZ2VyLCBndWlkVXRpbCwgY3J5cHRvU2VydmljZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFic3RyYWN0IGFzc2lnbkJyb3dzZShlbGVtZW50OiBhbnksIGlzRGlyZWN0b3J5OiBhbnkpOiB2b2lkO1xyXG5cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBhc3NpZ25Ecm9wKGVsZW1lbnQ6IGFueSk6IHZvaWQ7XHJcblxyXG4gICAgcHVibGljIGVkaXRQYXRoKG9sZFBhdGg6IHN0cmluZywgbmV3UGF0aDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMucGF0aFJlZ0V4cC50ZXN0KG5ld1BhdGgpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQSBwYXRoIGNhbm5vdCBjb250YWluIGFueSBvZiB0aGUgZm9sbG93aW5nIGNoYXJhY3RlcnM6ICogPyBcIiA8ID4gOiB8Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlZGl0RmlsZW5hbWUoaXRlbTogSURhdGF0cmFuc2Zlckl0ZW0sIG5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGlmICghaXRlbSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBlZGl0IHRoZSBmaWxlbmFtZS4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFuYW1lKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRW1wdHkgZmlsZW5hbWUgaXMgbm90IGFsbG93ZWQuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmZpbGVuYW1lUmVnRXhwLnRlc3QobmFtZSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBIGZpbGVuYW1lIGNhbm5vdCBjb250YWluIGFueSBvZiB0aGUgZm9sbG93aW5nIGNoYXJhY3RlcnM6IFxcXFwgLyAqID8gXCIgPCA+IDogfCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=