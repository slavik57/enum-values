export type EnumValueType = string | number;

export class EnumValues {
  static getNamesAndValues<T extends EnumValueType>(e: any): { name: string, value: T }[] {
    return this.getNames(e).map(_name => { return { name: _name, value: e[_name] as T }; });
  }

  static getNames(e: any): string[] {
    return Object.keys(e).filter(key => isNaN(+key))
  }

  static getNameFromValue<T extends EnumValueType>(e: any, value: T): string | null {
    const all = this.getNamesAndValues(e).filter(pair => pair.value === value);
    return all.length == 1 ? all[0].name : null;
  }

  static getValues<T extends EnumValueType>(e: any): T[] {
    return this.getNames(e).map(name => e[name]) as T[];
  }
}

// Also re-export as ES-2015 default export
export default EnumValues;
