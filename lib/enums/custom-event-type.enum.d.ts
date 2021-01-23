export declare enum CustomEventType {
    UNKNOWN = 0,
    CREATE = 1,
    DOWNLOAD_ITEM = 2,
    UPDATE_CONFIG = 3,
    INIT = 4,
    UPLOAD_COMPLETED = 5,
    DOWNLOAD_COMPLETED = 6,
    ITEM_ADDED = 7,
    ITEM_REMOVED = 8,
    ITEM_COMPLETED = 9,
    ITEMS_CLEARED = 10,
    ITEM_CLICKED = 11
}
export declare namespace CustomEventTypeExtensions {
    function toString(type: CustomEventType): string;
    function toEnum(type: string): CustomEventType;
}
//# sourceMappingURL=custom-event-type.enum.d.ts.map