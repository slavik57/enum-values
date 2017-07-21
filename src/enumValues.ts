export class EnumValues {
  static getNamesAndValues(e: any) {
    return this.getNames(e).map(_name => { return { name: _name, value: e[_name] as number }; });
  }

  static getNames(e: any) {
    if (this.isNumericEnum(e)){
      return this.getObjectValues(e).filter(v => typeof v === "string") as string[];
    }

    return Object.keys(e);
  }

  static getValues(e: any) {
    return this.getNames(e).map(name => e[name]) as number[];
  }

  private static isNumericEnum(e: any): boolean {
    // NOTE:
    // numeric enum like 
    // enum A { a: 1 }
    // is built like an object { a: 1, '1': 'a' }
    // string enum like
    // enum B { b: 'b' }
    // is build like an object { b: 'b' }

    const objectValues: any[] = this.getObjectValues(e);
    const mappedFromValues: any[] = objectValues.map(value => e[value]);
    const types: string[] = mappedFromValues.map(x => typeof x);
    const undefinedTypes: string[] = types.filter(type => type === 'undefined');

    return undefinedTypes.length < 1;
  }
  
  private static getObjectValues(e: any): (number | string)[] {
    return Object.keys(e).map(k => e[k]);
  }
}
