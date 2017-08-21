export class EnumValues {
  static getNamesAndValues(e: any) {
    return this.getNames(e).map(_name => { return { name: _name, value: e[_name] as number }; });
  }

  static getNames(e: any) {
    return Object.keys(e).filter(key => isNaN(+key))
  }

  static getNameFromValue(e:any, l:(number|string)) {
    var all= this.getNamesAndValues(e).filter(val=> { return val.value == l});
    return all.length==1 ? all[0].name : undefined;
  }

  static getValues(e: any) {
    return this.getNames(e).map(name => e[name]) as (number | string)[];
  }
}
