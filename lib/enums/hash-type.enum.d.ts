export declare enum HashType {
    MD5 = 0,
    SHA1 = 1
}
export declare enum HashTypeImplementation {
    Internal = 0,
    CryptoBrowserify = 1
}
export declare namespace HashTypeExtensions {
    function toString(hashTypeImplementation: HashTypeImplementation, hashType: HashType): string;
    function toEnum(hashTypeImplementation: HashTypeImplementation, hashType: string): HashType;
}
//# sourceMappingURL=hash-type.enum.d.ts.map