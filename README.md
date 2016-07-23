# enum-values
===
Library for getting the names and values of typescript enum

## Installation
```
npm install enum-values --save
```
===

### Example in TypeScript
```javascript
  import { EnumValues } from 'enum-values';

  // Suppose we have an enum
  enum SomeEnum {
    VALUE1,
    VALUE2,
    VALUE3
  }

  // names will be equal to: ['VALUE1', 'VALUE2', 'VALUE3']
  var names = EnumValues.getNames(SomeEnum);

  // values will be equal to: [0, 1, 2]
  var values = EnumValues.getValues(SomeEnum);

  // namesAndValues will be equal to:
  // [
  //  { name: 'VALUE1', value: 0 },
  //  { name: 'VALUE2', value: 1 },
  //  { name: 'VALUE3', value: 2 }
  // ]
  var namesAndValues = EnumValues.getNamesAndValues(SomeEnum);
```
