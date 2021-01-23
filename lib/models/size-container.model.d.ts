import { DecimalByteUnit } from '../enums/decimal-byte-unit.enum';
export interface ISizeContainer {
    displayUnit: string;
    displaySize: number;
    decimalByteUnit: DecimalByteUnit;
    decimalByteUnitSize: number;
    update(init?: Partial<SizeContainer>): void;
    updateDecimal(decimalByteUnit: DecimalByteUnit, decimalByteUnitSize: number): void;
}
export declare class SizeContainer implements ISizeContainer {
    private decimalByteUnitUtil;
    displayUnit: string;
    displaySize: number;
    decimalByteUnit: DecimalByteUnit;
    decimalByteUnitSize: number;
    constructor(init?: Partial<SizeContainer>);
    update(init?: Partial<SizeContainer>): void;
    updateDecimal(decimalByteUnit: DecimalByteUnit, decimalByteUnitSize: number): void;
}
//# sourceMappingURL=size-container.model.d.ts.map