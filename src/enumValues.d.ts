export declare class EnumValues {
    static getNamesAndValues(e: any): {
        name: string;
        value: number;
    }[];
    static getNames(e: any): string[];
    private static removeNumberKeys(e);
    static getValues(e: any): (string | number)[];
}
