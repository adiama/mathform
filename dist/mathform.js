
/*!
@fileoverview mathform - A collection of mathematical formulas, constants and algorithms
@author Alexandros Diamantonis <asdiamantonis@gmail.com>
@version 0.0.1

Copyright (c) 2022, Alexandros Diamantonis <asdiamantonis@gmail.com>.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
associated documentation files (the "Software"), to deal in the Software without restriction,
including without limitation the rights to use, copy, modify, merge, publish, distribute,
sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or
substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT
NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
/**
 * @namespace geometry
 */

/**
 * Formulas related to circles.
 *
 * @class Circle
 * @memberof geometry
 */
class Circle {
    /**
     * Area of a circle.
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
     * Circumference of a circle.
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
     * Diameter of a circle.
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
     * Calculates the radius from area.
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
     * Calculates the radius from circumference.
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
     * Calculates radius from diameter.
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
     * @param   {number} input  -   Input value
     * @param   {string} name   -   Variable name to be tested
     * @throws  {Error}             When input < 0
     * @private
     */
    _isGreaterThanZero(input, name) {
        if (input < 0) {
            throw new Error(`${name} must be greater than 0.`);
        }
    }
}

/**
 * @namespace geometry
 */

/**
 * Formulas related to triangles.
 *
 * @class Triangle
 * @memberof geometry
 */
class Triangle {
    /**
     * Area of a Triangle.
     *
     * @memberof! geometry.Triangle#
     * @param   {number} h  -   Height
     * @param   {number} b  -   Base
     * @returns {number}        <sup>1</sup>&frasl;<sub>2</sub>hb
     * @static
     */
    static area(h, b) {
        return (1 / 2) * h * b;
    }

    /**
     * Calculate the hypotenuse of a right triangle.
     *
     * @memberof! geometry.Triangle#
     * @param   {number} a  -   Length of side a
     * @param   {number} b  -   Length of side b
     * @returns {number}        &radic;a&#178;+b&#178;
     * @static
     */
    static hypotenuse(a, b) {
        return Math.sqrt(a ** 2 + b ** 2);
    }

    /**
     * Uses Pythagorean Theorem to determine if a triangle of sides a, b, c is a right triangle.
     * The side c is should be the longest as it is considered the hypotenuse.
     *
     * @memberof! geometry.Triangle#
     * @param   {number} a  -   Side of length a
     * @param   {number} b  -   Side of length b
     * @param   {number} c  -   Side of length c
     * @returns {boolean}       c&#178;&equiv;a&#178;+b&#178;
     * @static
     */
    static isRight(a, b, c) {
        return c ** 2 === a ** 2 + b ** 2;
    }
}

/**
 * @namespace geometry
 */

/**
 * Formulas related to rectangles.
 *
 * @class Rectangle
 * @memberof geometry
 */
class Rectangle {
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

/**
 * @namespace geometry
 */

/**
 * Formulas related to cones.
 *
 * @class Cone
 * @memberof geometry
 */
class Cone {
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
}

/**
 * @namespace geometry
 */

/**
 * Formulas related to cylinders.
 *
 * @class Cylinder
 * @memberof geometry
 */
class Cylinder {
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

/**
 * @namespace geometry
 */

/**
 * Formulas related to spheres.
 *
 * @class Sphere
 * @memberof geometry
 */
class Sphere {
    /**
     *
     * @memberof! geometry.Sphere#
     * @param {number} r    -
     * @returns {number}
     * @static
     */
    static surfaceArea(r) {
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
}

var index = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Circle: Circle,
    Triangle: Triangle,
    Rectangle: Rectangle,
    Cone: Cone,
    Cylinder: Cylinder,
    Sphere: Sphere
});

/**
 * Formats and rounds a number to the required precision.
 *
 * @example
 * format(1.434);       // 1.43
 * format(1.436);       // 1.44
 * format("1.432");     // 1.43
 * format("1.432", 1);  // 1.4
 * format("1.432", 0);  // 1
 * format("1.6", 0);    // 2
 * format(1, 100);      // 1
 *
 * @param   {number} value      -   The value to be formatted.
 * @param   {number} precision  -   0 to 100 number of floating point digits. Default 2.
 * @returns {number}                The formatted number.
 */
function format(value, precision = 2) {
    return parseFloat(parseFloat(value).toFixed(precision));
}

export { format, index as geometry };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0aGZvcm0uanMiLCJzb3VyY2VzIjpbIi4uL3NyYy9nZW9tZXRyeS9jaXJjbGUuanMiLCIuLi9zcmMvZ2VvbWV0cnkvdHJpYW5nbGUuanMiLCIuLi9zcmMvZ2VvbWV0cnkvcmVjdGFuZ2xlLmpzIiwiLi4vc3JjL2dlb21ldHJ5L2NvbmUuanMiLCIuLi9zcmMvZ2VvbWV0cnkvY3lsaW5kZXIuanMiLCIuLi9zcmMvZ2VvbWV0cnkvc3BoZXJlLmpzIiwiLi4vc3JjL2Zvcm1hdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQG5hbWVzcGFjZSBnZW9tZXRyeVxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBGb3JtdWxhcyByZWxhdGVkIHRvIGNpcmNsZXMuXHJcbiAqXHJcbiAqIEBjbGFzcyBDaXJjbGVcclxuICogQG1lbWJlcm9mIGdlb21ldHJ5XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaXJjbGUge1xyXG4gICAgLyoqXHJcbiAgICAgKiBBcmVhIG9mIGEgY2lyY2xlLlxyXG4gICAgICpcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiAvLyByZXR1cm5zIDUwLjI2NTQ4MjQ1NzQzNjY5XHJcbiAgICAgKiBtYXRoZm9ybS5nZW9tZXRyeS5DaXJjbGUuYXJlYSg0KTtcclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YhIGdlb21ldHJ5LkNpcmNsZSNcclxuICAgICAqIEBwYXJhbSAgIHtudW1iZXJ9IHIgIC0gICBSYWRpdXNcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9ICAgICAgICAmcGk7ciYjMTc4O1xyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICovXHJcbiAgICBzdGF0aWMgYXJlYShyKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguUEkgKiByICoqIDI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaXJjdW1mZXJlbmNlIG9mIGEgY2lyY2xlLlxyXG4gICAgICpcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiAvLyByZXR1cm5zIDI1LjEzMjc0MTIyODcxODM0NVxyXG4gICAgICogbWF0aGZvcm0uZ2VvbWV0cnkuQ2lyY2xlLmNpcmN1bWZlcmVuY2UoNCk7XHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mISBnZW9tZXRyeS5DaXJjbGUjXHJcbiAgICAgKiBAcGFyYW0gICB7bnVtYmVyfSByICAtICAgUmFkaXVzXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfSAgICAgICAgMiZwaTtyXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjaXJjdW1mZXJlbmNlKHIpIHtcclxuICAgICAgICByZXR1cm4gMiAqIE1hdGguUEkgKiByO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGlhbWV0ZXIgb2YgYSBjaXJjbGUuXHJcbiAgICAgKlxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIC8vIHJldHVybnMgOFxyXG4gICAgICogbWF0aGZvcm0uZ2VvbWV0cnkuQ2lyY2xlLmRpYW1ldGVyKDQpXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mISBnZW9tZXRyeS5DaXJjbGUjXHJcbiAgICAgKiBAcGFyYW0gICB7bnVtYmVyfSByICAtICAgUmFkaXVzXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfSAgICAgICAgMnJcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGRpYW1ldGVyKHIpIHtcclxuICAgICAgICByZXR1cm4gciAqIDI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxjdWxhdGVzIHRoZSByYWRpdXMgZnJvbSBhcmVhLlxyXG4gICAgICpcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiAvLyByZXR1cm5zIDRcclxuICAgICAqIG1hdGhmb3JtLmdlb21ldHJ5LkNpcmNsZS5yYWRpdXNGcm9tQXJlYSg1MC4yNjU0ODI0NTc0MzY2OSk7XHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mISBnZW9tZXRyeS5DaXJjbGUjXHJcbiAgICAgKiBAcGFyYW0gICB7bnVtYmVyfSBBICAtICAgQXJlYVxyXG4gICAgICogQHJldHVybnMge251bWJlcn0gICAgICAgICZyYWRpYztBJmZyYXNsOyZwaTtcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqL1xyXG4gICAgc3RhdGljIHJhZGl1c0Zyb21BcmVhKEEpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KEEgLyBNYXRoLlBJKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGN1bGF0ZXMgdGhlIHJhZGl1cyBmcm9tIGNpcmN1bWZlcmVuY2UuXHJcbiAgICAgKlxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIC8vIHJldHVybnMgNFxyXG4gICAgICogbWF0aGZvcm0uZ2VvbWV0cnkuQ2lyY2xlLnJhZGl1c0Zyb21DaXJjdW1mZXJlbmNlKDI1LjEzMjc0MTIyODcxODM0NSk7XHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mISBnZW9tZXRyeS5DaXJjbGUjXHJcbiAgICAgKiBAcGFyYW0gICB7bnVtYmVyfSBDICAtICAgQ2lyY3VtZmVyZW5jZVxyXG4gICAgICogQHJldHVybnMge251bWJlcn0gICAgICAgIEMmZnJhc2w7MiZwaTtcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqL1xyXG4gICAgc3RhdGljIHJhZGl1c0Zyb21DaXJjdW1mZXJlbmNlKEMpIHtcclxuICAgICAgICByZXR1cm4gQyAvICgyICogTWF0aC5QSSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxjdWxhdGVzIHJhZGl1cyBmcm9tIGRpYW1ldGVyLlxyXG4gICAgICpcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiAvLyByZXR1cm5zIDRcclxuICAgICAqIG1hdGhmb3JtLmdlb21ldHJ5LkNpcmNsZS5yYWRpdXNGcm9tRGlhbWV0ZXIoOCk7XHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mISBnZW9tZXRyeS5DaXJjbGUjXHJcbiAgICAgKiBAcGFyYW0gICB7bnVtYmVyfSBkICAtICAgRGlhbWV0ZXJcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9ICAgICAgICA8c3VwPmQ8L3N1cD4mZnJhc2w7PHN1Yj4yPC9zdWI+XHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyByYWRpdXNGcm9tRGlhbWV0ZXIoZCkge1xyXG4gICAgICAgIHJldHVybiBkIC8gMjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENoZWNrcyBpZiB0aGUgZ2l2ZW4gaW5wdXQgaXMgZ3JlYXRlciB0aGFuIDAuXHJcbiAgICAgKiAgSWYgbm90LCBpdCB0aHJvd3MgYW4gZXJyb3IuXHJcbiAgICAgKlxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIC8vIHRocm93cyAnUmFkaXVzIG11c3QgYmUgZ3JlYXRlciB0aGFuIDAuJ1xyXG4gICAgICogdGhpcy5faXNHcmVhdGVyVGhhblplcm8oLTEsICdSYWRpdXMnKTtcclxuICAgICAqXHJcbiAgICAgKiAvLyBwYXNzZXNcclxuICAgICAqIHRoaXMuX2lzR3JlYXRlclRoYW5aZXJvKDEsICdBcmVhJyk7XHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtICAge251bWJlcn0gaW5wdXQgIC0gICBJbnB1dCB2YWx1ZVxyXG4gICAgICogQHBhcmFtICAge3N0cmluZ30gbmFtZSAgIC0gICBWYXJpYWJsZSBuYW1lIHRvIGJlIHRlc3RlZFxyXG4gICAgICogQHRocm93cyAge0Vycm9yfSAgICAgICAgICAgICBXaGVuIGlucHV0IDwgMFxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgX2lzR3JlYXRlclRoYW5aZXJvKGlucHV0LCBuYW1lKSB7XHJcbiAgICAgICAgaWYgKGlucHV0IDwgMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7bmFtZX0gbXVzdCBiZSBncmVhdGVyIHRoYW4gMC5gKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqIEBuYW1lc3BhY2UgZ2VvbWV0cnlcclxuICovXHJcblxyXG4vKipcclxuICogRm9ybXVsYXMgcmVsYXRlZCB0byB0cmlhbmdsZXMuXHJcbiAqXHJcbiAqIEBjbGFzcyBUcmlhbmdsZVxyXG4gKiBAbWVtYmVyb2YgZ2VvbWV0cnlcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyaWFuZ2xlIHtcclxuICAgIC8qKlxyXG4gICAgICogQXJlYSBvZiBhIFRyaWFuZ2xlLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiEgZ2VvbWV0cnkuVHJpYW5nbGUjXHJcbiAgICAgKiBAcGFyYW0gICB7bnVtYmVyfSBoICAtICAgSGVpZ2h0XHJcbiAgICAgKiBAcGFyYW0gICB7bnVtYmVyfSBiICAtICAgQmFzZVxyXG4gICAgICogQHJldHVybnMge251bWJlcn0gICAgICAgIDxzdXA+MTwvc3VwPiZmcmFzbDs8c3ViPjI8L3N1Yj5oYlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICovXHJcbiAgICBzdGF0aWMgYXJlYShoLCBiKSB7XHJcbiAgICAgICAgcmV0dXJuICgxIC8gMikgKiBoICogYjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGN1bGF0ZSB0aGUgaHlwb3RlbnVzZSBvZiBhIHJpZ2h0IHRyaWFuZ2xlLlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiEgZ2VvbWV0cnkuVHJpYW5nbGUjXHJcbiAgICAgKiBAcGFyYW0gICB7bnVtYmVyfSBhICAtICAgTGVuZ3RoIG9mIHNpZGUgYVxyXG4gICAgICogQHBhcmFtICAge251bWJlcn0gYiAgLSAgIExlbmd0aCBvZiBzaWRlIGJcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9ICAgICAgICAmcmFkaWM7YSYjMTc4OytiJiMxNzg7XHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBoeXBvdGVudXNlKGEsIGIpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KGEgKiogMiArIGIgKiogMik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVc2VzIFB5dGhhZ29yZWFuIFRoZW9yZW0gdG8gZGV0ZXJtaW5lIGlmIGEgdHJpYW5nbGUgb2Ygc2lkZXMgYSwgYiwgYyBpcyBhIHJpZ2h0IHRyaWFuZ2xlLlxyXG4gICAgICogVGhlIHNpZGUgYyBpcyBzaG91bGQgYmUgdGhlIGxvbmdlc3QgYXMgaXQgaXMgY29uc2lkZXJlZCB0aGUgaHlwb3RlbnVzZS5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YhIGdlb21ldHJ5LlRyaWFuZ2xlI1xyXG4gICAgICogQHBhcmFtICAge251bWJlcn0gYSAgLSAgIFNpZGUgb2YgbGVuZ3RoIGFcclxuICAgICAqIEBwYXJhbSAgIHtudW1iZXJ9IGIgIC0gICBTaWRlIG9mIGxlbmd0aCBiXHJcbiAgICAgKiBAcGFyYW0gICB7bnVtYmVyfSBjICAtICAgU2lkZSBvZiBsZW5ndGggY1xyXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59ICAgICAgIGMmIzE3ODsmZXF1aXY7YSYjMTc4OytiJiMxNzg7XHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc1JpZ2h0KGEsIGIsIGMpIHtcclxuICAgICAgICByZXR1cm4gYyAqKiAyID09PSBhICoqIDIgKyBiICoqIDI7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IFRyaWFuZ2xlIGZyb20gJy4vdHJpYW5nbGUuanMnO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lc3BhY2UgZ2VvbWV0cnlcclxuICovXHJcblxyXG4vKipcclxuICogRm9ybXVsYXMgcmVsYXRlZCB0byByZWN0YW5nbGVzLlxyXG4gKlxyXG4gKiBAY2xhc3MgUmVjdGFuZ2xlXHJcbiAqIEBtZW1iZXJvZiBnZW9tZXRyeVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVjdGFuZ2xlIHtcclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiEgZ2VvbWV0cnkuUmVjdGFuZ2xlI1xyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGEgICAgLVxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGIgICAgLVxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGFyZWEoYSwgYikge1xyXG4gICAgICAgIHJldHVybiBhICogYjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YhIGdlb21ldHJ5LlJlY3RhbmdsZSNcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBhICAgIC1cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBiICAgIC1cclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjaXJjdW1mZXJlbmNlKGEsIGIpIHtcclxuICAgICAgICByZXR1cm4gYSAqIDIgKyBiICogMjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YhIGdlb21ldHJ5LlJlY3RhbmdsZSNcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBhICAgIC1cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBiICAgIC1cclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBkaWFnb25hbChhLCBiKSB7XHJcbiAgICAgICAgcmV0dXJuIFRyaWFuZ2xlLkh5cG90ZW51c2UoYSwgYik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mISBnZW9tZXRyeS5SZWN0YW5nbGUjXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gYSAgICAtXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gYiAgICAtXHJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzU3F1YXJlKGEsIGIpIHtcclxuICAgICAgICByZXR1cm4gYSA9PT0gYjtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgQ2lyY2xlIGZyb20gJy4vY2lyY2xlLmpzJztcclxuaW1wb3J0IFRyaWFuZ2xlIGZyb20gJy4vdHJpYW5nbGUuanMnO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lc3BhY2UgZ2VvbWV0cnlcclxuICovXHJcblxyXG4vKipcclxuICogRm9ybXVsYXMgcmVsYXRlZCB0byBjb25lcy5cclxuICpcclxuICogQGNsYXNzIENvbmVcclxuICogQG1lbWJlcm9mIGdlb21ldHJ5XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25lIHtcclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiEgZ2VvbWV0cnkuQ29uZSNcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSByICAgIC1cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBoICAgIC1cclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBzbGFudEhlaWdodChyLCBoKSB7XHJcbiAgICAgICAgcmV0dXJuIFRyaWFuZ2xlLkh5cG90ZW51c2UociwgaCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mISBnZW9tZXRyeS5Db25lI1xyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHIgICAgLVxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGggICAgLVxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGxhdGVyYWxBcmVhKHIsIGgpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5QSSAqIHIgKiB0aGlzLlNsYW50SGVpZ2h0KHIsIGgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiEgZ2VvbWV0cnkuQ29uZSNcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSByICAgIC1cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBoICAgIC1cclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyB0b3RhbEFyZWEociwgaCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkxhdGVyYWxBcmVhKHIsIGgpICsgQ2lyY2xlLkFyZWEocik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mISBnZW9tZXRyeS5Db25lI1xyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHIgICAgLVxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGggICAgLVxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqL1xyXG4gICAgc3RhdGljIHZvbHVtZShyLCBoKSB7XHJcbiAgICAgICAgcmV0dXJuICgxIC8gMykgKiBNYXRoLlBJICogciAqKiAyICogaDtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgQ2lyY2xlIGZyb20gJy4vY2lyY2xlLmpzJztcclxuXHJcbi8qKlxyXG4gKiBAbmFtZXNwYWNlIGdlb21ldHJ5XHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEZvcm11bGFzIHJlbGF0ZWQgdG8gY3lsaW5kZXJzLlxyXG4gKlxyXG4gKiBAY2xhc3MgQ3lsaW5kZXJcclxuICogQG1lbWJlcm9mIGdlb21ldHJ5XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDeWxpbmRlciB7XHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YhIGdlb21ldHJ5LkN5bGluZGVyI1xyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHIgICAgLVxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGggICAgLVxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGxhdGVyYWxBcmVhKHIsIGgpIHtcclxuICAgICAgICByZXR1cm4gMiAqIE1hdGguUEkgKiByICogaDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YhIGdlb21ldHJ5LkN5bGluZGVyI1xyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHIgICAgLVxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGggICAgLVxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqL1xyXG4gICAgc3RhdGljIHRvdGFsQXJlYShyLCBoKSB7XHJcbiAgICAgICAgcmV0dXJuIEN5bGluZGVyLkFyZWEociwgaCkgKyAyICogQ2lyY2xlLkFyZWEocik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mISBnZW9tZXRyeS5DeWxpbmRlciNcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSByICAgIC1cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBoICAgIC1cclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyB2b2x1bWUociwgaCkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLlBJICogciAqKiAyICogaDtcclxuICAgIH1cclxufVxyXG4iLCIvKipcclxuICogQG5hbWVzcGFjZSBnZW9tZXRyeVxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBGb3JtdWxhcyByZWxhdGVkIHRvIHNwaGVyZXMuXHJcbiAqXHJcbiAqIEBjbGFzcyBTcGhlcmVcclxuICogQG1lbWJlcm9mIGdlb21ldHJ5XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTcGhlcmUge1xyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mISBnZW9tZXRyeS5TcGhlcmUjXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gciAgICAtXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICovXHJcbiAgICBzdGF0aWMgc3VyZmFjZUFyZWEocikge1xyXG4gICAgICAgIHJldHVybiA0ICogTWF0aC5QSSAqIHIgKiogMjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YhIGdlb21ldHJ5LlNwaGVyZSNcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSByICAgIC1cclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyB2b2x1bWUocikge1xyXG4gICAgICAgIHJldHVybiAoNCAvIDMpICogTWF0aC5QSSAqIHIgKiogMztcclxuICAgIH1cclxufVxyXG4iLCIvKipcclxuICogRm9ybWF0cyBhbmQgcm91bmRzIGEgbnVtYmVyIHRvIHRoZSByZXF1aXJlZCBwcmVjaXNpb24uXHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqIGZvcm1hdCgxLjQzNCk7ICAgICAgIC8vIDEuNDNcclxuICogZm9ybWF0KDEuNDM2KTsgICAgICAgLy8gMS40NFxyXG4gKiBmb3JtYXQoXCIxLjQzMlwiKTsgICAgIC8vIDEuNDNcclxuICogZm9ybWF0KFwiMS40MzJcIiwgMSk7ICAvLyAxLjRcclxuICogZm9ybWF0KFwiMS40MzJcIiwgMCk7ICAvLyAxXHJcbiAqIGZvcm1hdChcIjEuNlwiLCAwKTsgICAgLy8gMlxyXG4gKiBmb3JtYXQoMSwgMTAwKTsgICAgICAvLyAxXHJcbiAqXHJcbiAqIEBwYXJhbSAgIHtudW1iZXJ9IHZhbHVlICAgICAgLSAgIFRoZSB2YWx1ZSB0byBiZSBmb3JtYXR0ZWQuXHJcbiAqIEBwYXJhbSAgIHtudW1iZXJ9IHByZWNpc2lvbiAgLSAgIDAgdG8gMTAwIG51bWJlciBvZiBmbG9hdGluZyBwb2ludCBkaWdpdHMuIERlZmF1bHQgMi5cclxuICogQHJldHVybnMge251bWJlcn0gICAgICAgICAgICAgICAgVGhlIGZvcm1hdHRlZCBudW1iZXIuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXQodmFsdWUsIHByZWNpc2lvbiA9IDIpIHtcclxuICAgIHJldHVybiBwYXJzZUZsb2F0KHBhcnNlRmxvYXQodmFsdWUpLnRvRml4ZWQocHJlY2lzaW9uKSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZSxNQUFNLE1BQU0sQ0FBQztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLE9BQU8sSUFBSSxDQUFDLENBQUMsRUFBRTtBQUNuQixRQUFRLE9BQU8sSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2hDLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksT0FBTyxhQUFhLENBQUMsQ0FBQyxFQUFFO0FBQzVCLFFBQVEsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDL0IsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxPQUFPLFFBQVEsQ0FBQyxDQUFDLEVBQUU7QUFDdkIsUUFBUSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDckIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxPQUFPLGNBQWMsQ0FBQyxDQUFDLEVBQUU7QUFDN0IsUUFBUSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUN0QyxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLE9BQU8sdUJBQXVCLENBQUMsQ0FBQyxFQUFFO0FBQ3RDLFFBQVEsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNqQyxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLE9BQU8sa0JBQWtCLENBQUMsQ0FBQyxFQUFFO0FBQ2pDLFFBQVEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3JCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFO0FBQ3BDLFFBQVEsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO0FBQ3ZCLFlBQVksTUFBTSxJQUFJLEtBQUssQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQztBQUMvRCxTQUFTO0FBQ1QsS0FBSztBQUNMOztBQ2hJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlLE1BQU0sUUFBUSxDQUFDO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksT0FBTyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUN0QixRQUFRLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDL0IsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxPQUFPLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQzVCLFFBQVEsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQzFDLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLE9BQU8sT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQzVCLFFBQVEsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMxQyxLQUFLO0FBQ0w7O0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2UsTUFBTSxTQUFTLENBQUM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksT0FBTyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUN0QixRQUFRLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNyQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxPQUFPLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQy9CLFFBQVEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDN0IsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksT0FBTyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUMxQixRQUFRLE9BQU8sUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDekMsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksT0FBTyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUMxQixRQUFRLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN2QixLQUFLO0FBQ0w7O0FDekRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2UsTUFBTSxJQUFJLENBQUM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksT0FBTyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUM3QixRQUFRLE9BQU8sUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDekMsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksT0FBTyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUM3QixRQUFRLE9BQU8sSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDcEQsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksT0FBTyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUMzQixRQUFRLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN2RCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxPQUFPLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ3hCLFFBQVEsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUM5QyxLQUFLO0FBQ0w7O0FDM0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2UsTUFBTSxRQUFRLENBQUM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksT0FBTyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUM3QixRQUFRLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNuQyxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxPQUFPLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQzNCLFFBQVEsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN4RCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxPQUFPLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ3hCLFFBQVEsT0FBTyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3BDLEtBQUs7QUFDTDs7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZSxNQUFNLE1BQU0sQ0FBQztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksT0FBTyxXQUFXLENBQUMsQ0FBQyxFQUFFO0FBQzFCLFFBQVEsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3BDLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxPQUFPLE1BQU0sQ0FBQyxDQUFDLEVBQUU7QUFDckIsUUFBUSxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDMUMsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZSxTQUFTLE1BQU0sQ0FBQyxLQUFLLEVBQUUsU0FBUyxHQUFHLENBQUMsRUFBRTtBQUNyRCxJQUFJLE9BQU8sVUFBVSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztBQUM1RDs7OzsifQ==
