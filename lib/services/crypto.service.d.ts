import { NgZone } from '@angular/core';
import { HashType } from '../enums/hash-type.enum';
import { EncodingType } from '../enums/encoding-type.enum';
import { IHashContainer, IStreamHashContainer } from '../models/hash-container.model';
import * as i0 from "@angular/core";
export declare class CryptoService {
    private zone;
    private readonly STREAM_HASH_CHUNK_SIZE;
    private readonly HASH_TYPE_IMPLEMENTATION;
    private readonly ENCODING_TYPE_IMPLEMENTATION;
    constructor(zone: NgZone);
    createHashContainer(file: File, hashType: HashType, encodingType: EncodingType, inputEncodingType: EncodingType): IHashContainer;
    createStreamHashContainer(file: File, hashType: HashType, encodingType: EncodingType, inputEncodingType: EncodingType, successCallback: Function, errorCallback: Function): IStreamHashContainer;
    static ɵfac: i0.ɵɵFactoryDef<CryptoService, never>;
    static ɵprov: i0.ɵɵInjectableDef<CryptoService>;
}
//# sourceMappingURL=crypto.service.d.ts.map