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
     * Calculates the surface area of a sphere
     *
     * @example
     * mathform.geometry.Sphere.area(2) // ~50.27
     *
     * @memberof! geometry.Sphere#
     * @param   {number} r    - radius
     * @returns {number}        4&pi;r&#178;
     * @static
     */
    static area(r) {
        return 4 * Math.PI * r ** 2;
    }

    /**
     * Calculates the volume of a sphere
     *
     * @example
     * mathform.geometry.Sphere.volume(2) // ~33.51
     *
     * @memberof! geometry.Sphere#
     * @param   {number} r    - radius
     * @returns {number}        (<sup>4</sup>&frasl;<sub>3</sub>)&pi;r&#179;
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
