export var EncodingType;
(function (EncodingType) {
    EncodingType[EncodingType["Latin1"] = 0] = "Latin1";
    EncodingType[EncodingType["Hex"] = 1] = "Hex";
    EncodingType[EncodingType["Base64"] = 2] = "Base64";
    EncodingType[EncodingType["UTF8"] = 3] = "UTF8";
})(EncodingType || (EncodingType = {}));
export var EncodingTypeImplementation;
(function (EncodingTypeImplementation) {
    EncodingTypeImplementation[EncodingTypeImplementation["Internal"] = 0] = "Internal";
    EncodingTypeImplementation[EncodingTypeImplementation["CryptoBrowserify"] = 1] = "CryptoBrowserify";
})(EncodingTypeImplementation || (EncodingTypeImplementation = {}));
// tslint:disable-next-line: no-namespace
export var EncodingTypeExtensions;
(function (EncodingTypeExtensions) {
    function toString(encodingTypeImplementation, encodingType) {
        switch (encodingType) {
            case EncodingType.Latin1:
                return 'latin1';
            case EncodingType.Hex:
                return 'hex';
            case EncodingType.Base64:
                return 'base64';
            case EncodingType.UTF8:
                return 'utf8';
            default:
                return 'hex';
        }
    }
    EncodingTypeExtensions.toString = toString;
    function toEnum(encodingTypeImplementation, encodingType) {
        switch (encodingType) {
            case 'latin1':
                return EncodingType.Latin1;
            case 'hex':
                return EncodingType.Hex;
            case 'base64':
                return EncodingType.Base64;
            case 'utf8':
                return EncodingType.UTF8;
            default:
                return EncodingType.Hex;
        }
    }
    EncodingTypeExtensions.toEnum = toEnum;
})(EncodingTypeExtensions || (EncodingTypeExtensions = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5jb2RpbmctdHlwZS5lbnVtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYW1kLWxpYi9zcmMvbGliL2VudW1zL2VuY29kaW5nLXR5cGUuZW51bS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLENBQU4sSUFBWSxZQUtYO0FBTEQsV0FBWSxZQUFZO0lBQ3BCLG1EQUFNLENBQUE7SUFDTiw2Q0FBRyxDQUFBO0lBQ0gsbURBQU0sQ0FBQTtJQUNOLCtDQUFJLENBQUE7QUFDUixDQUFDLEVBTFcsWUFBWSxLQUFaLFlBQVksUUFLdkI7QUFFRCxNQUFNLENBQU4sSUFBWSwwQkFHWDtBQUhELFdBQVksMEJBQTBCO0lBQ2xDLG1GQUFRLENBQUE7SUFDUixtR0FBZ0IsQ0FBQTtBQUNwQixDQUFDLEVBSFcsMEJBQTBCLEtBQTFCLDBCQUEwQixRQUdyQztBQUVELHlDQUF5QztBQUN6QyxNQUFNLEtBQVcsc0JBQXNCLENBNkJ0QztBQTdCRCxXQUFpQixzQkFBc0I7SUFDbkMsU0FBZ0IsUUFBUSxDQUFDLDBCQUFzRCxFQUFFLFlBQTBCO1FBQ3ZHLFFBQVEsWUFBWSxFQUFFO1lBQ2xCLEtBQUssWUFBWSxDQUFDLE1BQU07Z0JBQ3BCLE9BQU8sUUFBUSxDQUFDO1lBQ3BCLEtBQUssWUFBWSxDQUFDLEdBQUc7Z0JBQ2pCLE9BQU8sS0FBSyxDQUFDO1lBQ2pCLEtBQUssWUFBWSxDQUFDLE1BQU07Z0JBQ3BCLE9BQU8sUUFBUSxDQUFDO1lBQ3BCLEtBQUssWUFBWSxDQUFDLElBQUk7Z0JBQ2xCLE9BQU8sTUFBTSxDQUFDO1lBQ2xCO2dCQUNJLE9BQU8sS0FBSyxDQUFDO1NBQ3BCO0lBQ0wsQ0FBQztJQWJlLCtCQUFRLFdBYXZCLENBQUE7SUFDRCxTQUFnQixNQUFNLENBQUMsMEJBQXNELEVBQUUsWUFBb0I7UUFDL0YsUUFBUSxZQUFZLEVBQUU7WUFDbEIsS0FBSyxRQUFRO2dCQUNULE9BQU8sWUFBWSxDQUFDLE1BQU0sQ0FBQztZQUMvQixLQUFLLEtBQUs7Z0JBQ04sT0FBTyxZQUFZLENBQUMsR0FBRyxDQUFDO1lBQzVCLEtBQUssUUFBUTtnQkFDVCxPQUFPLFlBQVksQ0FBQyxNQUFNLENBQUM7WUFDL0IsS0FBSyxNQUFNO2dCQUNQLE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQztZQUM3QjtnQkFDSSxPQUFPLFlBQVksQ0FBQyxHQUFHLENBQUM7U0FDL0I7SUFDTCxDQUFDO0lBYmUsNkJBQU0sU0FhckIsQ0FBQTtBQUNMLENBQUMsRUE3QmdCLHNCQUFzQixLQUF0QixzQkFBc0IsUUE2QnRDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGVudW0gRW5jb2RpbmdUeXBlIHtcclxuICAgIExhdGluMSxcclxuICAgIEhleCxcclxuICAgIEJhc2U2NCxcclxuICAgIFVURjhcclxufVxyXG5cclxuZXhwb3J0IGVudW0gRW5jb2RpbmdUeXBlSW1wbGVtZW50YXRpb24ge1xyXG4gICAgSW50ZXJuYWwsXHJcbiAgICBDcnlwdG9Ccm93c2VyaWZ5XHJcbn1cclxuXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tbmFtZXNwYWNlXHJcbmV4cG9ydCBuYW1lc3BhY2UgRW5jb2RpbmdUeXBlRXh0ZW5zaW9ucyB7XHJcbiAgICBleHBvcnQgZnVuY3Rpb24gdG9TdHJpbmcoZW5jb2RpbmdUeXBlSW1wbGVtZW50YXRpb246IEVuY29kaW5nVHlwZUltcGxlbWVudGF0aW9uLCBlbmNvZGluZ1R5cGU6IEVuY29kaW5nVHlwZSk6IHN0cmluZyB7XHJcbiAgICAgICAgc3dpdGNoIChlbmNvZGluZ1R5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBFbmNvZGluZ1R5cGUuTGF0aW4xOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdsYXRpbjEnO1xyXG4gICAgICAgICAgICBjYXNlIEVuY29kaW5nVHlwZS5IZXg6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2hleCc7XHJcbiAgICAgICAgICAgIGNhc2UgRW5jb2RpbmdUeXBlLkJhc2U2NDpcclxuICAgICAgICAgICAgICAgIHJldHVybiAnYmFzZTY0JztcclxuICAgICAgICAgICAgY2FzZSBFbmNvZGluZ1R5cGUuVVRGODpcclxuICAgICAgICAgICAgICAgIHJldHVybiAndXRmOCc7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2hleCc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIHRvRW51bShlbmNvZGluZ1R5cGVJbXBsZW1lbnRhdGlvbjogRW5jb2RpbmdUeXBlSW1wbGVtZW50YXRpb24sIGVuY29kaW5nVHlwZTogc3RyaW5nKTogRW5jb2RpbmdUeXBlIHtcclxuICAgICAgICBzd2l0Y2ggKGVuY29kaW5nVHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlICdsYXRpbjEnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEVuY29kaW5nVHlwZS5MYXRpbjE7XHJcbiAgICAgICAgICAgIGNhc2UgJ2hleCc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gRW5jb2RpbmdUeXBlLkhleDtcclxuICAgICAgICAgICAgY2FzZSAnYmFzZTY0JzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBFbmNvZGluZ1R5cGUuQmFzZTY0O1xyXG4gICAgICAgICAgICBjYXNlICd1dGY4JzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBFbmNvZGluZ1R5cGUuVVRGODtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBFbmNvZGluZ1R5cGUuSGV4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=