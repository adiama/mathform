/**
 * @namespace geometry
 */

/**
 * Formulas related to spheres.
 *
 * @class Sphere
 * @memberof geometry
 */
export default class Sphere {
    /**
     *
     * @memberof! geometry.Sphere#
     * @param {number} r    -
     * @returns {number}
     * @static
     */
    static area(r) {
        return 4 * Math.PI * r ** 2;
    }

    /**
     *
     * @memberof! geometry.Sphere#
     * @param {number} r    -
     * @returns {number}
     * @static
     */
    static volume(r) {
        return (4 / 3) * Math.PI * r ** 3;
    }

    /**
     * TODO: add functions for
     *  - diameter
     *  - radiusFrom
     *      - volume
     *      - area
     *      - diameter
     */
}
