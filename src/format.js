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
 * @param   {number} value      -   The value to be formatted.
 * @param   {number} precision  -   0 to 100 number of floating point digits. Default 2.
 * @returns {number}                The formatted number.
 */
export default function format(value, precision = 2) {
    return parseFloat(parseFloat(value).toFixed(precision));
}
