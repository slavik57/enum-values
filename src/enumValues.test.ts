import { EnumValues } from "./enumValues";
import { expect } from 'chai';



describe('EnumValues', () => {
  describe('numeric values', () => {
    enum NumericValuesTestEnum {
      A,
      B,
      C
    }

    it('getNames should return correct values', () => {
      expect(EnumValues.getNames(NumericValuesTestEnum)).to.deep.equal(['A', 'B', 'C']);
    });

    it('getValues should return correct values', () => {
      expect(EnumValues.getValues(NumericValuesTestEnum)).to.deep.equal([0, 1, 2]);
    });

    it('getNamesAndValues should return correct values', () => {
      var expectedResult = [
        { name: 'A', value: 0 },
        { name: 'B', value: 1 },
        { name: 'C', value: 2 }
      ];

      expect(EnumValues.getNamesAndValues(NumericValuesTestEnum)).to.deep.equal(expectedResult);
    });
  })

  describe('string values', () => {
    enum StringValuesTestEnum {
      A = 'AValue',
      B = 'BValue',
      C = 'CValue'
    }

    it('getNames should return correct values', () => {
      expect(EnumValues.getNames(StringValuesTestEnum)).to.deep.equal(['A', 'B', 'C']);
    });

    it('getValues should return correct values', () => {
      expect(EnumValues.getValues(StringValuesTestEnum)).to.deep.equal(['AValue', 'BValue', 'CValue']);
    });

    it('getNamesAndValues should return correct values', () => {
      var expectedResult = [
        { name: 'A', value: 'AValue' },
        { name: 'B', value: 'BValue' },
        { name: 'C', value: 'CValue' }
      ];

      expect(EnumValues.getNamesAndValues(StringValuesTestEnum)).to.deep.equal(expectedResult);
    });
  })

  describe('mixed values', () => {
    enum MixedEnum {
      A = 'first',
      B = 2,
      c = 'third'
    }

    it('getNames should return correct values', () => {
      expect(EnumValues.getNames(MixedEnum)).to.deep.equal(['A', 'B', 'c']);
    });

    it('getValues should return correct values', () => {
      expect(EnumValues.getValues(MixedEnum)).to.deep.equal(['first', 2, 'third']);
    });

    it('getNamesAndValues should return correct values', () => {
      const expectedResult = [
        { name: 'A', value: 'first' },
        { name: 'B', value: 2 },
        { name: 'c', value: 'third' }
      ];

      expect(EnumValues.getNamesAndValues(MixedEnum)).to.deep.equal(expectedResult);
    });
  })
});
