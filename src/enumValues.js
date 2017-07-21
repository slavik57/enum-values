"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EnumValues = (function () {
    function EnumValues() {
    }
    EnumValues.getNamesAndValues = function (e) {
        return this.getNames(e).map(function (_name) { return { name: _name, value: e[_name] }; });
    };
    EnumValues.getNames = function (e) {
        if (this.isNumericEnum(e)) {
            return this.getObjectValues(e).filter(function (v) { return typeof v === "string"; });
        }
        return Object.keys(e);
    };
    EnumValues.getValues = function (e) {
        return this.getNames(e).map(function (name) { return e[name]; });
    };
    EnumValues.isNumericEnum = function (e) {
        var objectValues = this.getObjectValues(e);
        var mappedFromValues = objectValues.map(function (value) { return e[value]; });
        var types = mappedFromValues.map(function (x) { return typeof x; });
        var undefinedTypes = types.filter(function (type) { return type === 'undefined'; });
        return undefinedTypes.length < 1;
    };
    EnumValues.getObjectValues = function (e) {
        return Object.keys(e).map(function (k) { return e[k]; });
    };
    return EnumValues;
}());
exports.EnumValues = EnumValues;
