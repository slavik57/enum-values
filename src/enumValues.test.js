"use strict";
var enumValues_1 = require("./enumValues");
var chai_1 = require('chai');
var TestEnum;
(function (TestEnum) {
    TestEnum[TestEnum["A"] = 0] = "A";
    TestEnum[TestEnum["B"] = 1] = "B";
    TestEnum[TestEnum["C"] = 2] = "C";
})(TestEnum || (TestEnum = {}));
describe('EnumValues', function () {
    it('getNames should return correct values', function () {
        chai_1.expect(enumValues_1.EnumValues.getNames(TestEnum)).to.deep.equal(['A', 'B', 'C']);
    });
    it('getValues should return correct values', function () {
        chai_1.expect(enumValues_1.EnumValues.getValues(TestEnum)).to.deep.equal([0, 1, 2]);
    });
    it('getNamesAndValues should return correct values', function () {
        var expectedResult = [
            { name: 'A', value: 0 },
            { name: 'B', value: 1 },
            { name: 'C', value: 2 }
        ];
        chai_1.expect(enumValues_1.EnumValues.getNamesAndValues(TestEnum)).to.deep.equal(expectedResult);
    });
});
