export interface IPreprocessContainer {
    percent: number;
    pause(pause: boolean): void;
    isPaused(): boolean;
    cancel(cancel: boolean): void;
    isCancelled(): boolean;
    doWork(): void;
    run(): void;
}
export declare class PreprocessContainer implements IPreprocessContainer {
    percent: number;
    private _isPaused;
    private _isCancelled;
    constructor(init?: Partial<PreprocessContainer>);
    pause(pause: boolean): void;
    isPaused(): boolean;
    cancel(cancel: boolean): void;
    isCancelled(): boolean;
    doWork(): void;
    run(): void;
}
//# sourceMappingURL=preprocess-container.model.d.ts.map