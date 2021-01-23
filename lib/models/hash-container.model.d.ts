import { IPreprocessContainer, PreprocessContainer } from './preprocess-container.model';
import { HashType, HashTypeImplementation } from '../enums/hash-type.enum';
import { EncodingType, EncodingTypeImplementation } from '../enums/encoding-type.enum';
export interface IHashContainer extends IPreprocessContainer {
    file: File;
    hashType: HashType;
    hashTypeString: string;
    encodingType: EncodingType;
    encodingTypeString: string;
    inputEncodingType: EncodingType;
    inputEncodingTypeString: string;
    startDate: Date;
    endDate: Date;
    hash: any;
    hashString: string;
    reader: FileReader;
}
export interface IStreamHashContainer extends IHashContainer {
    chunkSize: number;
    offset: number;
}
export declare class HashContainer extends PreprocessContainer implements IHashContainer {
    file: File;
    hashType: HashType;
    hashTypeString: string;
    encodingType: EncodingType;
    encodingTypeString: string;
    inputEncodingType: EncodingType;
    inputEncodingTypeString: string;
    startDate: Date;
    endDate: Date;
    hash: any;
    hashString: string;
    reader: FileReader;
    constructor(file: File, hashTypeImplementation: HashTypeImplementation, encodingTypeImplementation: EncodingTypeImplementation, hashType: HashType, encodingType: EncodingType, inputEncodingType: EncodingType);
}
export declare class StreamHashContainer extends HashContainer implements IStreamHashContainer {
    chunkSize: number;
    offset: number;
    constructor(file: File, hashTypeImplementation: HashTypeImplementation, encodingTypeImplementation: EncodingTypeImplementation, hashType: HashType, encodingType: EncodingType, inputEncodingType: EncodingType);
    cancel(cancel: boolean): void;
}
//# sourceMappingURL=hash-container.model.d.ts.map