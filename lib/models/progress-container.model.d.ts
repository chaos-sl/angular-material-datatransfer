import { ISizeContainer } from './size-container.model';
export interface IProgressContainer {
    total: number;
    progressTimestamp: number;
    bitrateTimestamp: number;
    bitrate: number;
    percent: number;
    displayBitrate: string;
    displayTimeLeft: string;
    loadedSizeContainer: ISizeContainer;
    totalSizeContainer: ISizeContainer;
    reset(total: number): void;
    updateProgress(now: number, loaded: number, interval: number): void;
    updateBitrate(now: number, loaded: number, interval: number): void;
}
export declare class ProgressContainer implements IProgressContainer {
    private dateUtil;
    private loaded;
    private bitrateSizeContainer;
    total: number;
    progressTimestamp: number;
    bitrateTimestamp: number;
    bitrate: number;
    percent: number;
    displayBitrate: string;
    displayTimeLeft: string;
    loadedSizeContainer: ISizeContainer;
    totalSizeContainer: ISizeContainer;
    constructor(total: number);
    reset(total: number): void;
    updateProgress(now: number, loaded: number, interval: number): void;
    updateBitrate(now: number, loaded: number, interval: number): void;
}
//# sourceMappingURL=progress-container.model.d.ts.map