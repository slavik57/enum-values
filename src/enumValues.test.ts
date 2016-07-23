import {EnumValues} from "./enumValues";
import {expect} from 'chai';

enum TestEnum {
  A,
  B,
  C
}

describe('EnumValues', () => {

  it('getNames should return correct values', () => {
    expect(EnumValues.getNames(TestEnum)).to.deep.equal(['A', 'B', 'C']);
  });

  it('getValues should return correct values', () => {
    expect(EnumValues.getValues(TestEnum)).to.deep.equal([0, 1, 2]);
  });

  it('getNamesAndValues should return correct values', () => {
    var expectedResult = [
      { name: 'A', value: 0 },
      { name: 'B', value: 1 },
      { name: 'C', value: 2 }
    ];

    expect(EnumValues.getNamesAndValues(TestEnum)).to.deep.equal(expectedResult);
  });

});
