"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EnumValues = (function () {
    function EnumValues() {
    }
    EnumValues.getNamesAndValues = function (e) {
        return this.getNames(e).map(function (_name) { return { name: _name, value: e[_name] }; });
    };
    EnumValues.getNames = function (e) {
        var skinnyE = this.removeNumberKeys(e);
        return Object.keys(skinnyE);
    };
    EnumValues.removeNumberKeys = function (e) {
        return Object.keys(e).reduce(function (result, key) {
            if (!isNaN(parseInt(key))) {
                return result;
            }
            result[key] = e[key];
            return result;
        }, {});
    };
    EnumValues.getValues = function (e) {
        return this.getNames(e).map(function (name) { return e[name]; });
    };
    return EnumValues;
}());
exports.EnumValues = EnumValues;
