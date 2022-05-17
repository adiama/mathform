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
     * Calculates the area of a rectangle from width and height
     *
     * @example
     * mathform.geometry.Rectangle.area(2, 2); // 4
     *
     * @memberof! geometry.Rectangle#
     * @param   {number} w    - width
     * @param   {number} h    - height
     * @returns {number}        wh
     * @static
     */
    static area(w, h) {
        return w * h;
    }

    /**
     * Calculates the area of a rectangle from width and height
     *
     * @example
     * mathform.geometry.Rectangle.circumference(2, 2); // 8
     *
     * @memberof! geometry.Rectangle#
     * @param   {number} w    - width
     * @param   {number} h    - height
     * @returns {number}        2w+2h
     * @static
     */
    static circumference(w, h) {
        return w * 2 + h * 2;
    }

    /**
     * Calculates the area of a rectangle from width and height
     *
     * @example
     * mathform.geometry.Rectangle.diagonal(1, 1); // sqrt(2)
     *
     * @memberof! geometry.Rectangle#
     * @param   {number} w    - width
     * @param   {number} h    - height
     * @returns {number}        &radic;w&#178;+h&#178;
     * @static
     */
    static diagonal(w, h) {
        return Triangle.hypotenuse(w, h);
    }

    /**
     * Evaluates if a rectangle is a square based on its width and height
     *
     * @example
     * mathform.geometry.Rectangle.isSquare(2, 2); // true
     * mathform.geometry.Rectangle.isSquare(1, 2); // false
     *
     * @memberof! geometry.Rectangle#
     * @param   {number} w    - width
     * @param   {number} h    - height
     * @returns {boolean}       w&equiv;h
     * @static
     */
    static isSquare(w, h) {
        return w === h;
    }
}
