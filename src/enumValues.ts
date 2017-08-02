export class EnumValues {
  static getNamesAndValues(e: any) {
    return this.getNames(e).map(_name => { return { name: _name, value: e[_name] as number }; });
  }

  static getNames(e: any) {
    const skinnyE = this.removeNumberKeys(e);

    return Object.keys(skinnyE);
  }

  private static removeNumberKeys(e: any) {
    return Object.keys(e).reduce((result, key) => {
      if (!isNaN(parseInt(key))) {
        return result;
      }
      result[key] = e[key];
      return result
    }, {});
  }

  static getValues(e: any) {
    return this.getNames(e).map(name => e[name]) as (number | string)[];
  }
}
