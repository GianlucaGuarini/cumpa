(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.cumpa = {}));
}(this, function (exports) { 'use strict';

  /**
   * Performs left-to-right function composition.
   * @param   {...[function]} fns) - list of unary fynctions
   * @returns {*} result of the computation
   * @link: https://30secondsofcode.org/function#composeright
   */
  const composeRight = (...fns) => compose(...fns.reverse());

  /**
   * Performs right-to-left function composition.
   * Use Array.prototype.reduce() to perform right-to-left function composition.
   * The last (rightmost) function can accept one or more arguments; the remaining functions must be unary.
   * @param   {...[function]} fns) - list of unary fynctions
   * @returns {*} result of the computation
   * @link: https://30secondsofcode.org/function#compose
   */
  function compose(...fns) {
    return fns.reduce((f, g) => (...args) => f(g(...args)))
  }

  exports.composeRight = composeRight;
  exports.default = compose;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
