export declare type EnumValueType = string | number;
export declare class EnumValues {
    static getNamesAndValues<T extends EnumValueType>(e: any): {
        name: string;
        value: T;
    }[];
    static getNames(e: any): string[];
    static getNameFromValue<T extends EnumValueType>(e: any, value: T): string | null;
    static getValues<T extends EnumValueType>(e: any): T[];
}
