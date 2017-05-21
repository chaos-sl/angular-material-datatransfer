import { Injectable } from '@angular/core';
import { IDatatransferItem } from '../models';

@Injectable()
export class DatatransferItemStore {

    private static instance: DatatransferItemStore = null;
    private items: IDatatransferItem[] = [];

    public count = 0;

    constructor() {
        // ensure singleton
        return DatatransferItemStore.instance = DatatransferItemStore.instance || this;
    }

    private updateCount(): void {
        this.count = this.items.length;
    }

    public getItems(): IDatatransferItem[] {
        return this.items;
    }

    public clear(): void {
        this.items.length = 0;
        this.updateCount();
    }

    public addItem(item: IDatatransferItem): void {
        this.items.push(item);
        this.updateCount();
    }
}
