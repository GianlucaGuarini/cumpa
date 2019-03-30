/**
 * Performs left-to-right function composition.
 * @param   {...[function]} fns) - list of unary fynctions
 * @returns {*} result of the computation
 * @link: https://30secondsofcode.org/function#composeright
 */
export const composeRight = (...fns) => compose(...fns.reverse())

/**
 * Performs right-to-left function composition.
 * Use Array.prototype.reduce() to perform right-to-left function composition.
 * The last (rightmost) function can accept one or more arguments; the remaining functions must be unary.
 * @param   {...[function]} fns) - list of unary fynctions
 * @returns {*} result of the computation
 * @link: https://30secondsofcode.org/function#compose
 */
export default function compose(...fns) {
  return fns.reduce((f, g) => (...args) => f(g(...args)))
}