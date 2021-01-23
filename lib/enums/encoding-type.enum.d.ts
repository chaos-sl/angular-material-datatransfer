export declare enum EncodingType {
    Latin1 = 0,
    Hex = 1,
    Base64 = 2,
    UTF8 = 3
}
export declare enum EncodingTypeImplementation {
    Internal = 0,
    CryptoBrowserify = 1
}
export declare namespace EncodingTypeExtensions {
    function toString(encodingTypeImplementation: EncodingTypeImplementation, encodingType: EncodingType): string;
    function toEnum(encodingTypeImplementation: EncodingTypeImplementation, encodingType: string): EncodingType;
}
//# sourceMappingURL=encoding-type.enum.d.ts.map