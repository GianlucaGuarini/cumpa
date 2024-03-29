# cumpa

Minimal function composition implementation

<img alt="cumpa" src="./cumpa.gif" width="50%"/>

> `cumpá` in some Italian :it: dialects means `fellow`

[![Build Status][ci-image]][ci-url]

[![NPM version][npm-version-image]][npm-url]
[![NPM downloads][npm-downloads-image]][npm-url]
[![MIT License][license-image]][license-url]

## Usage

```js
import compose from 'cumpa'

const add2 = x => x + 2
const multiplyBy3 = x => x * 3

const add2AndMultiplyBy3 = compose(multiplyBy3, add2)

console.log(add2AndMultiplyBy3(1)) // ((1 + 2) * 3) = 9
```

[ci-image]: https://img.shields.io/github/actions/workflow/status/gianlucaguarini/cumpa/test.yml?style=flat-square
[ci-url]: https://github.com/gianlucaguarini/cumpa/actions

[license-image]: http://img.shields.io/badge/license-MIT-000000.svg?style=flat-square

[license-url]: LICENSE

[npm-version-image]: http://img.shields.io/npm/v/cumpa.svg?style=flat-square

[npm-downloads-image]: http://img.shields.io/npm/dm/cumpa.svg?style=flat-square

[npm-url]: https://npmjs.org/package/cumpa

## API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

#### Table of Contents

-   [composeRight](#composeright)
    -   [Parameters](#parameters)
-   [compose](#compose)
    -   [Parameters](#parameters-1)

### composeRight

Similar to compose but performs from left-to-right function composition.<br/>
[see also](https://30secondsofcode.org/function#composeright)

#### Parameters

-   `fns` **...\[[function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)]** ) - list of unary fynctions

Returns **any** result of the computation

### compose

Performs right-to-left function composition.
Use Array.prototype.reduce() to perform right-to-left function composition.
The last (rightmost) function can accept one or more arguments; the remaining functions must be unary.<br/>
[source code](https://30secondsofcode.org/function#compose)

#### Parameters

-   `fns` **...\[[function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)]** ) - list of unary fynctions

Returns **any** result of the computation
