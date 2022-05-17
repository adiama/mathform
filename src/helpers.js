/**
 * @namespace helpers
 */

/**
 * Checks if the given input is greater than 0.
 *  Throws an error or returns boolean if strict parameter is passed as false.
 *
 * @example
 * // throws 'Radius must be greater than 0.'
 * this._isGreaterThanZero(-1, 'Radius');
 *
 * // returns false
 * this._isGreaterThanZero(-1, 'Radius', false);
 *
 * // passes
 * this._isGreaterThanZero(1, 'Area');
 *
 * // returns true
 * this._isGreaterThanZero(1, 'Area', false);
 *
 * @memberof! helpers
 * @param   {number}    input   -   Input value
 * @param   {string}    name    -   Variable name
 * @param   {boolean}   strict  -   Set to false if you need an exception instead. Default true
 * @throws  {Error}                 When input < 0
 * @returns {boolean}
 */
export function isGreaterThanZero(input, name, strict = true) {
    if (input <= 0) {
        if (strict) {
            throw new Error(`${name || 'Value'} must be greater than 0.`);
        }

        return false;
    }

    return true;
}

/**
 * Formats and rounds a number to the required precision.
 *
 * @example
 * format(1.434);       // 1.43
 * format(1.436);       // 1.44
 * format("1.432");     // 1.43
 * format("1.432", 1);  // 1.4
 * format("1.432", 0);  // 1
 * format("1.6", 0);    // 2
 * format(1, 100);      // 1
 *
 * @memberof! helpers
 * @param   {number} value      -   The value to be formatted.
 * @param   {number} precision  -   0 to 100 number of floating point digits. Default 2.
 * @returns {number}                The formatted number.
 */
export function format(value, precision = 2) {
    return parseFloat(parseFloat(value).toFixed(precision));
}
