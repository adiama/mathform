import Circle from './circle.js';

/**
 * Formulas related to cylinders.
 *
 * @class Cylinder
 * @memberof geometry
 */
export default class Cylinder {
    /**
     * Calculates the lateral area of a cylinder
     *
     * @example
     * mathform.geometry.Cylinder.lateralArea(); // ~6.28
     *
     * @memberof! geometry.Cylinder#
     * @param   {number} r    - radius
     * @param   {number} h    - height
     * @returns {number}        2&pi;rh
     * @static
     */
    static lateralArea(r, h) {
        return 2 * Math.PI * r * h;
    }

    /**
     * Calculates the lateral area of a cylinder
     *
     * @example
     * mathform.geometry.Cylinder.totalArea(1, 1); // ~12.57
     *
     * @memberof! geometry.Cylinder#
     * @param   {number} r    - radius
     * @param   {number} h    - height
     * @returns {number}        2&pi;rh+2&pi;r&#178;
     * @static
     */
    static totalArea(r, h) {
        return Cylinder.lateralArea(r, h) + 2 * Circle.area(r);
    }

    /**
     * Calculates the lateral area of a cylinder
     *
     * @example
     * mathform.geometry.Cylinder.volume(1, 1); // ~3.14
     *
     * @memberof! geometry.Cylinder#
     * @param   {number} r    - radius
     * @param   {number} h    - height
     * @returns {number}        &pi;r&#178;h
     * @static
     */
    static volume(r, h) {
        return Math.PI * r ** 2 * h;
    }

    /**
     * TODO: add functions for finding radius
     */
}
