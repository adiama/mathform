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
     * Calculates the slant height of a cone
     *
     * @example
     * mathform.geometry.Cone.slantHeight(1, 2); // ~2.24
     *
     * @memberof! geometry.Cone#
     * @param   {number} r    - radius
     * @param   {number} h    - height
     * @returns {number}        &radic;r&#178;+h&#178;
     * @static
     */
    static slantHeight(r, h) {
        return Triangle.hypotenuse(r, h);
    }

    /**
     * Calculates the lateral area of a cone
     *
     * @example
     * mathform.geometry.Cone.lateralArea(1, 2); // ~7.02
     *
     * @memberof! geometry.Cone#
     * @param   {number} r    - radius
     * @param   {number} h    - height
     * @returns {number}        &pi;r(&radic;r&#178;+h&#178;)
     * @static
     */
    static lateralArea(r, h) {
        return Math.PI * r * this.slantHeight(r, h);
    }

    /**
     * Calculates the total area of a cone
     *
     * @example
     * mathform.geometry.Cone.totalArea(1, 2); // ~10.17
     *
     * @memberof! geometry.Cone#
     * @param   {number} r    - radius
     * @param   {number} h    - height
     * @returns {number}        &pi;r(&radic;r&#178;+h&#178;)+&pi;r&#178;
     * @static
     */
    static totalArea(r, h) {
        // factored
        // return Math.PI * r * (r + Math.sqrt(h ** 2 + r ** 2));
        return this.lateralArea(r, h) + Circle.area(r);
    }

    /**
     * Calculates the volume of a cone
     *
     * @example
     * mathform.geometry.Cone.volume(1, 2); // ~2.09
     *
     * @memberof! geometry.Cone#
     * @param   {number} r    - radius
     * @param   {number} h    - height
     * @returns {number}        (<sup>1</sup>&frasl;<sub>3</sub>)&pi;r&#178h;
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
