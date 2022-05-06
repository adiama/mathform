/**
 * @namespace geometry
 */

/**
 * Formulas related to circles.
 *
 * @class Circle
 * @memberof geometry
 */
export default class Circle {
    /**
     * Calculates the area of a circle from its radius.
     *
     * @example
     * // returns 50.26548245743669
     * mathform.geometry.Circle.area(4);
     *
     * @memberof! geometry.Circle#
     * @param   {number} r  -   Radius
     * @returns {number}        &pi;r&#178;
     * @static
     */
    static area(r) {
        return Math.PI * r ** 2;
    }

    /**
     * Calculates the circumference of a circle from its radius.
     *
     * @example
     * // returns 25.132741228718345
     * mathform.geometry.Circle.circumference(4);
     *
     * @memberof! geometry.Circle#
     * @param   {number} r  -   Radius
     * @returns {number}        2&pi;r
     * @static
     */
    static circumference(r) {
        return 2 * Math.PI * r;
    }

    /**
     * Calculates the diameter of a circle from its radius.
     *
     * @example
     * // returns 8
     * mathform.geometry.Circle.diameter(4)
     *
     * @memberof! geometry.Circle#
     * @param   {number} r  -   Radius
     * @returns {number}        2r
     * @static
     */
    static diameter(r) {
        return r * 2;
    }

    /**
     * Calculates the radius of a circle from its area.
     *
     * @example
     * // returns 4
     * mathform.geometry.Circle.radiusFromArea(50.26548245743669);
     *
     * @memberof! geometry.Circle#
     * @param   {number} A  -   Area
     * @returns {number}        &radic;A&frasl;&pi;
     * @static
     */
    static radiusFromArea(A) {
        return Math.sqrt(A / Math.PI);
    }

    /**
     * Calculates the radius of a circle from its circumference.
     *
     * @example
     * // returns 4
     * mathform.geometry.Circle.radiusFromCircumference(25.132741228718345);
     *
     * @memberof! geometry.Circle#
     * @param   {number} C  -   Circumference
     * @returns {number}        C&frasl;2&pi;
     * @static
     */
    static radiusFromCircumference(C) {
        return C / (2 * Math.PI);
    }

    /**
     * Calculates radius of a circle from its diameter.
     *
     * @example
     * // returns 4
     * mathform.geometry.Circle.radiusFromDiameter(8);
     *
     * @memberof! geometry.Circle#
     * @param   {number} d  -   Diameter
     * @returns {number}        <sup>d</sup>&frasl;<sub>2</sub>
     * @static
     */
    static radiusFromDiameter(d) {
        return d / 2;
    }

    /**
     * Checks if the given input is greater than 0.
     *  If not, it throws an error.
     *
     * @example
     * // throws 'Radius must be greater than 0.'
     * this._isGreaterThanZero(-1, 'Radius');
     *
     * // passes
     * this._isGreaterThanZero(1, 'Area');
     *
     * @param   {number}    input   -   Input value
     * @param   {boolean}   strict  -   Check if you need an exception instead
     * @throws  {Error}                 When input < 0
     * @returns {boolean}
     * @private
     */
    _isGreaterThanZero(input, strict = false) {
        if (input < 0) {
            if (strict) {
                throw new Error(`Value must be greater than 0.`);
            }

            return false;
        }

        return true;
    }
}
