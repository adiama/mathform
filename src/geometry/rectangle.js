import Triangle from './triangle.js';

/**
 * @namespace geometry
 */

/**
 * Formulas related to rectangles.
 *
 * @class Rectangle
 * @memberof geometry
 */
export default class Rectangle {
    /**
     *
     * @memberof! geometry.Rectangle#
     * @param {number} a    -
     * @param {number} b    -
     * @returns {number}
     * @static
     */
    static area(a, b) {
        return a * b;
    }

    /**
     *
     * @memberof! geometry.Rectangle#
     * @param {number} a    -
     * @param {number} b    -
     * @returns {number}
     * @static
     */
    static circumference(a, b) {
        return a * 2 + b * 2;
    }

    /**
     *
     * @memberof! geometry.Rectangle#
     * @param {number} a    -
     * @param {number} b    -
     * @returns {number}
     * @static
     */
    static diagonal(a, b) {
        return Triangle.Hypotenuse(a, b);
    }

    /**
     *
     * @memberof! geometry.Rectangle#
     * @param {number} a    -
     * @param {number} b    -
     * @returns {boolean}
     * @static
     */
    static isSquare(a, b) {
        return a === b;
    }
}
