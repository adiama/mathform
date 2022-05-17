/**
 * @namespace convert
 */

/**
 * Converts degrees to radians
 *
 * @example
 * mathform.convert.degreesToRadians(180) // ~3.14159...
 *
 * @memberof convert
 * @param   {number} degrees
 * @returns {number}            radians
 */
export function degreesToRadians(degrees) {
    return (degrees * Math.PI) / 180;
}

/**
 * Converts radians to degrees
 *
 * @example
 * mathform.convert.radiansToDegrees(Math.PI) // 180
 *
 * @memberof convert
 * @param   {number} radians
 * @returns {number}            degrees
 */
export function radiansToDegrees(radians) {
    return (radians * 180) / Math.PI;
}

/**
 * Normalizes a value
 *
 * @example
 * mathform.convert.normalize(150, 100, 200) // 0.5
 *
 * @memberof convert
 * @param   {number} value
 * @param   {number} min
 * @param   {number} max
 * @returns {number}        float from 0 and 1
 */
export function normalize(value, min, max) {
    return (value - min) / (max - min);
}
