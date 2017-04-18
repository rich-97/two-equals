# two-equals

[![npm](https://img.shields.io/npm/v/two-equals.svg)](https://www.npmjs.com/package/two-equals)
[![npm](https://img.shields.io/npm/dm/two-equals.svg)](https://www.npmjs.com/package/two-equals)

Function for check if two values are equals.

## Installation

With the simple command `npm install two-equals`.

## Usage

The function takes only two arguments.

Example:

```js
const equals = require('two-equals');

equals({}, { bar: 12}); // false
equals([], [1, 33.2]); // false
equals({ foo: 12 }, { foo: 12 }); // true
equals([1, 33, false], [1, 33, false]); // true
```

## Test

You should have installed globaly `jasmine-node` for test this package, then execute `npm run test`.

## License

[MIT](https://github.com/rich-97/two-values/blob/master/LICENSE)

