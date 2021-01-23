export interface FileReaderEventTarget extends EventTarget {
    result: string;
}
export interface FileReaderEvent extends Event {
    target: FileReaderEventTarget;
    getMessage(): string;
}
//# sourceMappingURL=file-reader.extension.d.ts.map