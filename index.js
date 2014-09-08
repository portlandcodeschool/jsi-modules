
/**
 * Create a new array by applying `fn` to each element in `array`
 * and using each result as the items of the new array.
 *
 * @function
 * @param {array} array - Input array
 * @param {function} fn - Mapping function
 * @returns {function} A new array
 * @example
 *
 * // create an array of squares
 * map([1,2,3], function(n) {
 *   return n * n;
 * });
 * //=> [1, 4, 9]
 *
 * @example
 *
 * // make all words plural (simple logic)
 * var pluralize = function(word) {
 *   return word + 's';
 * }
 * map(['dog','cat'], pluralize);
 * //=> ['dogs', 'cats']
 *
 */
module.exports.map = function(arr, fn) {
};
