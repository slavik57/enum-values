"use strict";
var EnumValues = (function () {
    function EnumValues() {
    }
    EnumValues.getNamesAndValues = function (e) {
        return this.getNames(e).map(function (_name) { return { name: _name, value: e[_name] }; });
    };
    EnumValues.getNames = function (e) {
        return this.getObjectValues(e).filter(function (v) { return typeof v === "string"; });
    };
    EnumValues.getValues = function (e) {
        return this.getObjectValues(e).filter(function (v) { return typeof v === "number"; });
    };
    EnumValues.getObjectValues = function (e) {
        return Object.keys(e).map(function (k) { return e[k]; });
    };
    return EnumValues;
}());
exports.EnumValues = EnumValues;
