"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enumValues_1 = require("./enumValues");
var chai_1 = require("chai");
describe('EnumValues', function () {
    describe('numeric values', function () {
        var NumericValuesTestEnum;
        (function (NumericValuesTestEnum) {
            NumericValuesTestEnum[NumericValuesTestEnum["A"] = 0] = "A";
            NumericValuesTestEnum[NumericValuesTestEnum["B"] = 1] = "B";
            NumericValuesTestEnum[NumericValuesTestEnum["C"] = 2] = "C";
        })(NumericValuesTestEnum || (NumericValuesTestEnum = {}));
        it('getNames should return correct values', function () {
            chai_1.expect(enumValues_1.EnumValues.getNames(NumericValuesTestEnum)).to.deep.equal(['A', 'B', 'C']);
        });
        it('getValues should return correct values', function () {
            chai_1.expect(enumValues_1.EnumValues.getValues(NumericValuesTestEnum)).to.deep.equal([0, 1, 2]);
        });
        it('getNamesAndValues should return correct values', function () {
            var expectedResult = [
                { name: 'A', value: 0 },
                { name: 'B', value: 1 },
                { name: 'C', value: 2 }
            ];
            chai_1.expect(enumValues_1.EnumValues.getNamesAndValues(NumericValuesTestEnum)).to.deep.equal(expectedResult);
        });
    });
    describe('string values', function () {
        var StringValuesTestEnum;
        (function (StringValuesTestEnum) {
            StringValuesTestEnum["A"] = "AValue";
            StringValuesTestEnum["B"] = "BValue";
            StringValuesTestEnum["C"] = "CValue";
        })(StringValuesTestEnum || (StringValuesTestEnum = {}));
        it('getNames should return correct values', function () {
            chai_1.expect(enumValues_1.EnumValues.getNames(StringValuesTestEnum)).to.deep.equal(['A', 'B', 'C']);
        });
        it('getValues should return correct values', function () {
            chai_1.expect(enumValues_1.EnumValues.getValues(StringValuesTestEnum)).to.deep.equal(['AValue', 'BValue', 'CValue']);
        });
        it('getNamesAndValues should return correct values', function () {
            var expectedResult = [
                { name: 'A', value: 'AValue' },
                { name: 'B', value: 'BValue' },
                { name: 'C', value: 'CValue' }
            ];
            chai_1.expect(enumValues_1.EnumValues.getNamesAndValues(StringValuesTestEnum)).to.deep.equal(expectedResult);
        });
    });
    describe('mixed values', function () {
        var MixedEnum;
        (function (MixedEnum) {
            MixedEnum["A"] = "first";
            MixedEnum[MixedEnum["B"] = 2] = "B";
            MixedEnum["c"] = "third";
        })(MixedEnum || (MixedEnum = {}));
        it('getNames should return correct values', function () {
            chai_1.expect(enumValues_1.EnumValues.getNames(MixedEnum)).to.deep.equal(['A', 'B', 'c']);
        });
        it('getValues should return correct values', function () {
            chai_1.expect(enumValues_1.EnumValues.getValues(MixedEnum)).to.deep.equal(['first', 2, 'third']);
        });
        it('getNamesAndValues should return correct values', function () {
            var expectedResult = [
                { name: 'A', value: 'first' },
                { name: 'B', value: 2 },
                { name: 'c', value: 'third' }
            ];
            chai_1.expect(enumValues_1.EnumValues.getNamesAndValues(MixedEnum)).to.deep.equal(expectedResult);
        });
    });
});
