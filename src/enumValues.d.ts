export declare class EnumValues {
    static getNamesAndValues(e: any): {
        name: string;
        value: number;
    }[];
    static getNames(e: any): string[];
    static getNameFromValue(e: any, l: (number | string)): string;
    static getValues(e: any): (string | number)[];
}
