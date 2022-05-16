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
            throw new Error(`${name ? name : 'Value'} must be greater than 0.`);
        }

        return false;
    }

    return true;
}
