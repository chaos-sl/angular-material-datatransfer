import { DecimalByteUnit } from '../enums/decimal-byte-unit.enum';
import * as i0 from "@angular/core";
export declare class DecimalByteUnitUtil {
    C_KB: number;
    C_MB: number;
    C_GB: number;
    C_TB: number;
    C_PB: number;
    MAX: number;
    byteUnits: string[];
    private multiply;
    convert(number: number, fromUnit: DecimalByteUnit, toUnit: DecimalByteUnit): number;
    toBytes(number: number, fromUnit: DecimalByteUnit): number;
    format(number: number, fromUnit: DecimalByteUnit): [DecimalByteUnit, number];
    static ɵfac: i0.ɵɵFactoryDef<DecimalByteUnitUtil, never>;
    static ɵprov: i0.ɵɵInjectableDef<DecimalByteUnitUtil>;
}
//# sourceMappingURL=decimal-byte-unit.util.d.ts.map