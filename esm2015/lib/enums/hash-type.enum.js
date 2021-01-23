export var HashType;
(function (HashType) {
    HashType[HashType["MD5"] = 0] = "MD5";
    HashType[HashType["SHA1"] = 1] = "SHA1";
})(HashType || (HashType = {}));
export var HashTypeImplementation;
(function (HashTypeImplementation) {
    HashTypeImplementation[HashTypeImplementation["Internal"] = 0] = "Internal";
    HashTypeImplementation[HashTypeImplementation["CryptoBrowserify"] = 1] = "CryptoBrowserify";
})(HashTypeImplementation || (HashTypeImplementation = {}));
// tslint:disable-next-line: no-namespace
export var HashTypeExtensions;
(function (HashTypeExtensions) {
    function toString(hashTypeImplementation, hashType) {
        switch (hashType) {
            case HashType.MD5:
                return 'md5';
            case HashType.SHA1:
                return 'sha1';
            default:
                return 'sha1';
        }
    }
    HashTypeExtensions.toString = toString;
    function toEnum(hashTypeImplementation, hashType) {
        switch (hashType) {
            case 'md5':
                return HashType.MD5;
            case 'sha1':
                return HashType.SHA1;
            default:
                return HashType.SHA1;
        }
    }
    HashTypeExtensions.toEnum = toEnum;
})(HashTypeExtensions || (HashTypeExtensions = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFzaC10eXBlLmVudW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hbWQtbGliL3NyYy9saWIvZW51bXMvaGFzaC10eXBlLmVudW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxDQUFOLElBQVksUUFHWDtBQUhELFdBQVksUUFBUTtJQUNoQixxQ0FBRyxDQUFBO0lBQ0gsdUNBQUksQ0FBQTtBQUNSLENBQUMsRUFIVyxRQUFRLEtBQVIsUUFBUSxRQUduQjtBQUVELE1BQU0sQ0FBTixJQUFZLHNCQUdYO0FBSEQsV0FBWSxzQkFBc0I7SUFDOUIsMkVBQVEsQ0FBQTtJQUNSLDJGQUFnQixDQUFBO0FBQ3BCLENBQUMsRUFIVyxzQkFBc0IsS0FBdEIsc0JBQXNCLFFBR2pDO0FBRUQseUNBQXlDO0FBQ3pDLE1BQU0sS0FBVyxrQkFBa0IsQ0FxQmxDO0FBckJELFdBQWlCLGtCQUFrQjtJQUMvQixTQUFnQixRQUFRLENBQUMsc0JBQThDLEVBQUUsUUFBa0I7UUFDdkYsUUFBUSxRQUFRLEVBQUU7WUFDZCxLQUFLLFFBQVEsQ0FBQyxHQUFHO2dCQUNiLE9BQU8sS0FBSyxDQUFDO1lBQ2pCLEtBQUssUUFBUSxDQUFDLElBQUk7Z0JBQ2QsT0FBTyxNQUFNLENBQUM7WUFDbEI7Z0JBQ0ksT0FBTyxNQUFNLENBQUM7U0FDckI7SUFDTCxDQUFDO0lBVGUsMkJBQVEsV0FTdkIsQ0FBQTtJQUNELFNBQWdCLE1BQU0sQ0FBQyxzQkFBOEMsRUFBRSxRQUFnQjtRQUNuRixRQUFRLFFBQVEsRUFBRTtZQUNkLEtBQUssS0FBSztnQkFDTixPQUFPLFFBQVEsQ0FBQyxHQUFHLENBQUM7WUFDeEIsS0FBSyxNQUFNO2dCQUNQLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQztZQUN6QjtnQkFDSSxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUM7U0FDNUI7SUFDTCxDQUFDO0lBVGUseUJBQU0sU0FTckIsQ0FBQTtBQUNMLENBQUMsRUFyQmdCLGtCQUFrQixLQUFsQixrQkFBa0IsUUFxQmxDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGVudW0gSGFzaFR5cGUge1xyXG4gICAgTUQ1LFxyXG4gICAgU0hBMVxyXG59XHJcblxyXG5leHBvcnQgZW51bSBIYXNoVHlwZUltcGxlbWVudGF0aW9uIHtcclxuICAgIEludGVybmFsLFxyXG4gICAgQ3J5cHRvQnJvd3NlcmlmeVxyXG59XHJcblxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLW5hbWVzcGFjZVxyXG5leHBvcnQgbmFtZXNwYWNlIEhhc2hUeXBlRXh0ZW5zaW9ucyB7XHJcbiAgICBleHBvcnQgZnVuY3Rpb24gdG9TdHJpbmcoaGFzaFR5cGVJbXBsZW1lbnRhdGlvbjogSGFzaFR5cGVJbXBsZW1lbnRhdGlvbiwgaGFzaFR5cGU6IEhhc2hUeXBlKTogc3RyaW5nIHtcclxuICAgICAgICBzd2l0Y2ggKGhhc2hUeXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgSGFzaFR5cGUuTUQ1OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdtZDUnO1xyXG4gICAgICAgICAgICBjYXNlIEhhc2hUeXBlLlNIQTE6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3NoYTEnO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdzaGExJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBleHBvcnQgZnVuY3Rpb24gdG9FbnVtKGhhc2hUeXBlSW1wbGVtZW50YXRpb246IEhhc2hUeXBlSW1wbGVtZW50YXRpb24sIGhhc2hUeXBlOiBzdHJpbmcpOiBIYXNoVHlwZSB7XHJcbiAgICAgICAgc3dpdGNoIChoYXNoVHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlICdtZDUnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEhhc2hUeXBlLk1ENTtcclxuICAgICAgICAgICAgY2FzZSAnc2hhMSc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gSGFzaFR5cGUuU0hBMTtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBIYXNoVHlwZS5TSEExO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=