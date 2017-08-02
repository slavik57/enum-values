export class EnumValues {
  static getNamesAndValues(e: any) {
    return this.getNames(e).map(_name => { return { name: _name, value: e[_name] as number }; });
  }

  static getNames(e: any) {
    return Object.keys(e).filter(key => isNaN(+key))
  }

  static getValues(e: any) {
    return this.getNames(e).map(name => e[name]) as (number | string)[];
  }
}
