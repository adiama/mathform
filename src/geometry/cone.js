import Circle from './circle.js';
import Triangle from './triangle.js';

/**
 * @namespace geometry
 */

/**
 * Formulas related to cones.
 *
 * @class Cone
 * @memberof geometry
 */
export default class Cone {
    /**
     *
     * @memberof! geometry.Cone#
     * @param {number} r    -
     * @param {number} h    -
     * @returns {number}
     * @static
     */
    static slantHeight(r, h) {
        return Triangle.Hypotenuse(r, h);
    }

    /**
     *
     * @memberof! geometry.Cone#
     * @param {number} r    -
     * @param {number} h    -
     * @returns {number}
     * @static
     */
    static lateralArea(r, h) {
        return Math.PI * r * this.SlantHeight(r, h);
    }

    /**
     *
     * @memberof! geometry.Cone#
     * @param {number} r    -
     * @param {number} h    -
     * @returns {number}
     * @static
     */
    static totalArea(r, h) {
        return this.LateralArea(r, h) + Circle.Area(r);
    }

    /**
     *
     * @memberof! geometry.Cone#
     * @param {number} r    -
     * @param {number} h    -
     * @returns {number}
     * @static
     */
    static volume(r, h) {
        return (1 / 3) * Math.PI * r ** 2 * h;
    }

    /**
     * TODO: add functions for finding
     *  - radius
     */
}
