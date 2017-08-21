"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EnumValues = (function () {
    function EnumValues() {
    }
    EnumValues.getNamesAndValues = function (e) {
        return this.getNames(e).map(function (_name) { return { name: _name, value: e[_name] }; });
    };
    EnumValues.getNames = function (e) {
        return Object.keys(e).filter(function (key) { return isNaN(+key); });
    };
    EnumValues.getNameFromValue = function (e, l) {
        var all = this.getNamesAndValues(e).filter(function (val) { return val.value == l; });
        return all.length == 1 ? all[0].name : undefined;
    };
    EnumValues.getValues = function (e) {
        return this.getNames(e).map(function (name) { return e[name]; });
    };
    return EnumValues;
}());
exports.EnumValues = EnumValues;
