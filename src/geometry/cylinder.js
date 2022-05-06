import Circle from './circle.js';

/**
 * @namespace geometry
 */

/**
 * Formulas related to cylinders.
 *
 * @class Cylinder
 * @memberof geometry
 */
export default class Cylinder {
    /**
     *
     * @memberof! geometry.Cylinder#
     * @param {number} r    -
     * @param {number} h    -
     * @returns {number}
     * @static
     */
    static lateralArea(r, h) {
        return 2 * Math.PI * r * h;
    }

    /**
     *
     * @memberof! geometry.Cylinder#
     * @param {number} r    -
     * @param {number} h    -
     * @returns {number}
     * @static
     */
    static totalArea(r, h) {
        return Cylinder.Area(r, h) + 2 * Circle.Area(r);
    }

    /**
     *
     * @memberof! geometry.Cylinder#
     * @param {number} r    -
     * @param {number} h    -
     * @returns {number}
     * @static
     */
    static volume(r, h) {
        return Math.PI * r ** 2 * h;
    }
}
