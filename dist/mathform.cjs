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
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

Object.defineProperty(exports, '__esModule', {
  value: true
});
/**
 * @namespace geometry
 */

/**
 * Formulas related to circles.
 *
 * @class Circle
 * @memberof geometry
 */

var Circle = /*#__PURE__*/function () {
  function Circle() {
    _classCallCheck(this, Circle);
  }

  _createClass(Circle, [{
    key: "_isGreaterThanZero",
    value:
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
    function _isGreaterThanZero(input, name) {
      if (input < 0) {
        throw new Error("".concat(name, " must be greater than 0."));
      }
    }
  }], [{
    key: "area",
    value:
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
    function area(r) {
      return Math.PI * Math.pow(r, 2);
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

  }, {
    key: "circumference",
    value: function circumference(r) {
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

  }, {
    key: "diameter",
    value: function diameter(r) {
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

  }, {
    key: "radiusFromArea",
    value: function radiusFromArea(A) {
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

  }, {
    key: "radiusFromCircumference",
    value: function radiusFromCircumference(C) {
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

  }, {
    key: "radiusFromDiameter",
    value: function radiusFromDiameter(d) {
      return d / 2;
    }
  }]);

  return Circle;
}();
/**
 * @namespace geometry
 */

/**
 * Formulas related to triangles.
 *
 * @class Triangle
 * @memberof geometry
 */


var Triangle = /*#__PURE__*/function () {
  function Triangle() {
    _classCallCheck(this, Triangle);
  }

  _createClass(Triangle, null, [{
    key: "area",
    value:
    /**
     * Area of a Triangle.
     *
     * @memberof! geometry.Triangle#
     * @param   {number} h  -   Height
     * @param   {number} b  -   Base
     * @returns {number}        <sup>1</sup>&frasl;<sub>2</sub>hb
     * @static
     */
    function area(h, b) {
      return 1 / 2 * h * b;
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

  }, {
    key: "hypotenuse",
    value: function hypotenuse(a, b) {
      return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
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

  }, {
    key: "isRight",
    value: function isRight(a, b, c) {
      return Math.pow(c, 2) === Math.pow(a, 2) + Math.pow(b, 2);
    }
  }]);

  return Triangle;
}();
/**
 * @namespace geometry
 */

/**
 * Formulas related to rectangles.
 *
 * @class Rectangle
 * @memberof geometry
 */


var Rectangle = /*#__PURE__*/function () {
  function Rectangle() {
    _classCallCheck(this, Rectangle);
  }

  _createClass(Rectangle, null, [{
    key: "area",
    value:
    /**
     *
     * @memberof! geometry.Rectangle#
     * @param {number} a    -
     * @param {number} b    -
     * @returns {number}
     * @static
     */
    function area(a, b) {
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

  }, {
    key: "circumference",
    value: function circumference(a, b) {
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

  }, {
    key: "diagonal",
    value: function diagonal(a, b) {
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

  }, {
    key: "isSquare",
    value: function isSquare(a, b) {
      return a === b;
    }
  }]);

  return Rectangle;
}();
/**
 * @namespace geometry
 */

/**
 * Formulas related to cones.
 *
 * @class Cone
 * @memberof geometry
 */


var Cone = /*#__PURE__*/function () {
  function Cone() {
    _classCallCheck(this, Cone);
  }

  _createClass(Cone, null, [{
    key: "slantHeight",
    value:
    /**
     *
     * @memberof! geometry.Cone#
     * @param {number} r    -
     * @param {number} h    -
     * @returns {number}
     * @static
     */
    function slantHeight(r, h) {
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

  }, {
    key: "lateralArea",
    value: function lateralArea(r, h) {
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

  }, {
    key: "totalArea",
    value: function totalArea(r, h) {
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

  }, {
    key: "volume",
    value: function volume(r, h) {
      return 1 / 3 * Math.PI * Math.pow(r, 2) * h;
    }
  }]);

  return Cone;
}();
/**
 * @namespace geometry
 */

/**
 * Formulas related to cylinders.
 *
 * @class Cylinder
 * @memberof geometry
 */


var Cylinder = /*#__PURE__*/function () {
  function Cylinder() {
    _classCallCheck(this, Cylinder);
  }

  _createClass(Cylinder, null, [{
    key: "lateralArea",
    value:
    /**
     *
     * @memberof! geometry.Cylinder#
     * @param {number} r    -
     * @param {number} h    -
     * @returns {number}
     * @static
     */
    function lateralArea(r, h) {
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

  }, {
    key: "totalArea",
    value: function totalArea(r, h) {
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

  }, {
    key: "volume",
    value: function volume(r, h) {
      return Math.PI * Math.pow(r, 2) * h;
    }
  }]);

  return Cylinder;
}();
/**
 * @namespace geometry
 */

/**
 * Formulas related to spheres.
 *
 * @class Sphere
 * @memberof geometry
 */


var Sphere = /*#__PURE__*/function () {
  function Sphere() {
    _classCallCheck(this, Sphere);
  }

  _createClass(Sphere, null, [{
    key: "surfaceArea",
    value:
    /**
     *
     * @memberof! geometry.Sphere#
     * @param {number} r    -
     * @returns {number}
     * @static
     */
    function surfaceArea(r) {
      return 4 * Math.PI * Math.pow(r, 2);
    }
    /**
     *
     * @memberof! geometry.Sphere#
     * @param {number} r    -
     * @returns {number}
     * @static
     */

  }, {
    key: "volume",
    value: function volume(r) {
      return 4 / 3 * Math.PI * Math.pow(r, 3);
    }
  }]);

  return Sphere;
}();

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

function format(value) {
  var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  return parseFloat(parseFloat(value).toFixed(precision));
}

exports.format = format;
exports.geometry = index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0aGZvcm0uY2pzIiwic291cmNlcyI6WyIuLi9zcmMvZ2VvbWV0cnkvY2lyY2xlLmpzIiwiLi4vc3JjL2dlb21ldHJ5L3RyaWFuZ2xlLmpzIiwiLi4vc3JjL2dlb21ldHJ5L3JlY3RhbmdsZS5qcyIsIi4uL3NyYy9nZW9tZXRyeS9jb25lLmpzIiwiLi4vc3JjL2dlb21ldHJ5L2N5bGluZGVyLmpzIiwiLi4vc3JjL2dlb21ldHJ5L3NwaGVyZS5qcyIsIi4uL3NyYy9mb3JtYXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBuYW1lc3BhY2UgZ2VvbWV0cnlcclxuICovXHJcblxyXG4vKipcclxuICogRm9ybXVsYXMgcmVsYXRlZCB0byBjaXJjbGVzLlxyXG4gKlxyXG4gKiBAY2xhc3MgQ2lyY2xlXHJcbiAqIEBtZW1iZXJvZiBnZW9tZXRyeVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2lyY2xlIHtcclxuICAgIC8qKlxyXG4gICAgICogQXJlYSBvZiBhIGNpcmNsZS5cclxuICAgICAqXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogLy8gcmV0dXJucyA1MC4yNjU0ODI0NTc0MzY2OVxyXG4gICAgICogbWF0aGZvcm0uZ2VvbWV0cnkuQ2lyY2xlLmFyZWEoNCk7XHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mISBnZW9tZXRyeS5DaXJjbGUjXHJcbiAgICAgKiBAcGFyYW0gICB7bnVtYmVyfSByICAtICAgUmFkaXVzXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfSAgICAgICAgJnBpO3ImIzE3ODtcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGFyZWEocikge1xyXG4gICAgICAgIHJldHVybiBNYXRoLlBJICogciAqKiAyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2lyY3VtZmVyZW5jZSBvZiBhIGNpcmNsZS5cclxuICAgICAqXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogLy8gcmV0dXJucyAyNS4xMzI3NDEyMjg3MTgzNDVcclxuICAgICAqIG1hdGhmb3JtLmdlb21ldHJ5LkNpcmNsZS5jaXJjdW1mZXJlbmNlKDQpO1xyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiEgZ2VvbWV0cnkuQ2lyY2xlI1xyXG4gICAgICogQHBhcmFtICAge251bWJlcn0gciAgLSAgIFJhZGl1c1xyXG4gICAgICogQHJldHVybnMge251bWJlcn0gICAgICAgIDImcGk7clxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY2lyY3VtZmVyZW5jZShyKSB7XHJcbiAgICAgICAgcmV0dXJuIDIgKiBNYXRoLlBJICogcjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERpYW1ldGVyIG9mIGEgY2lyY2xlLlxyXG4gICAgICpcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiAvLyByZXR1cm5zIDhcclxuICAgICAqIG1hdGhmb3JtLmdlb21ldHJ5LkNpcmNsZS5kaWFtZXRlcig0KVxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiEgZ2VvbWV0cnkuQ2lyY2xlI1xyXG4gICAgICogQHBhcmFtICAge251bWJlcn0gciAgLSAgIFJhZGl1c1xyXG4gICAgICogQHJldHVybnMge251bWJlcn0gICAgICAgIDJyXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBkaWFtZXRlcihyKSB7XHJcbiAgICAgICAgcmV0dXJuIHIgKiAyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsY3VsYXRlcyB0aGUgcmFkaXVzIGZyb20gYXJlYS5cclxuICAgICAqXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogLy8gcmV0dXJucyA0XHJcbiAgICAgKiBtYXRoZm9ybS5nZW9tZXRyeS5DaXJjbGUucmFkaXVzRnJvbUFyZWEoNTAuMjY1NDgyNDU3NDM2NjkpO1xyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiEgZ2VvbWV0cnkuQ2lyY2xlI1xyXG4gICAgICogQHBhcmFtICAge251bWJlcn0gQSAgLSAgIEFyZWFcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9ICAgICAgICAmcmFkaWM7QSZmcmFzbDsmcGk7XHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyByYWRpdXNGcm9tQXJlYShBKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChBIC8gTWF0aC5QSSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxjdWxhdGVzIHRoZSByYWRpdXMgZnJvbSBjaXJjdW1mZXJlbmNlLlxyXG4gICAgICpcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiAvLyByZXR1cm5zIDRcclxuICAgICAqIG1hdGhmb3JtLmdlb21ldHJ5LkNpcmNsZS5yYWRpdXNGcm9tQ2lyY3VtZmVyZW5jZSgyNS4xMzI3NDEyMjg3MTgzNDUpO1xyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiEgZ2VvbWV0cnkuQ2lyY2xlI1xyXG4gICAgICogQHBhcmFtICAge251bWJlcn0gQyAgLSAgIENpcmN1bWZlcmVuY2VcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9ICAgICAgICBDJmZyYXNsOzImcGk7XHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyByYWRpdXNGcm9tQ2lyY3VtZmVyZW5jZShDKSB7XHJcbiAgICAgICAgcmV0dXJuIEMgLyAoMiAqIE1hdGguUEkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsY3VsYXRlcyByYWRpdXMgZnJvbSBkaWFtZXRlci5cclxuICAgICAqXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogLy8gcmV0dXJucyA0XHJcbiAgICAgKiBtYXRoZm9ybS5nZW9tZXRyeS5DaXJjbGUucmFkaXVzRnJvbURpYW1ldGVyKDgpO1xyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiEgZ2VvbWV0cnkuQ2lyY2xlI1xyXG4gICAgICogQHBhcmFtICAge251bWJlcn0gZCAgLSAgIERpYW1ldGVyXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfSAgICAgICAgPHN1cD5kPC9zdXA+JmZyYXNsOzxzdWI+Mjwvc3ViPlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICovXHJcbiAgICBzdGF0aWMgcmFkaXVzRnJvbURpYW1ldGVyKGQpIHtcclxuICAgICAgICByZXR1cm4gZCAvIDI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVja3MgaWYgdGhlIGdpdmVuIGlucHV0IGlzIGdyZWF0ZXIgdGhhbiAwLlxyXG4gICAgICogIElmIG5vdCwgaXQgdGhyb3dzIGFuIGVycm9yLlxyXG4gICAgICpcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiAvLyB0aHJvd3MgJ1JhZGl1cyBtdXN0IGJlIGdyZWF0ZXIgdGhhbiAwLidcclxuICAgICAqIHRoaXMuX2lzR3JlYXRlclRoYW5aZXJvKC0xLCAnUmFkaXVzJyk7XHJcbiAgICAgKlxyXG4gICAgICogLy8gcGFzc2VzXHJcbiAgICAgKiB0aGlzLl9pc0dyZWF0ZXJUaGFuWmVybygxLCAnQXJlYScpO1xyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSAgIHtudW1iZXJ9IGlucHV0ICAtICAgSW5wdXQgdmFsdWVcclxuICAgICAqIEBwYXJhbSAgIHtzdHJpbmd9IG5hbWUgICAtICAgVmFyaWFibGUgbmFtZSB0byBiZSB0ZXN0ZWRcclxuICAgICAqIEB0aHJvd3MgIHtFcnJvcn0gICAgICAgICAgICAgV2hlbiBpbnB1dCA8IDBcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIF9pc0dyZWF0ZXJUaGFuWmVybyhpbnB1dCwgbmFtZSkge1xyXG4gICAgICAgIGlmIChpbnB1dCA8IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke25hbWV9IG11c3QgYmUgZ3JlYXRlciB0aGFuIDAuYCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKiBAbmFtZXNwYWNlIGdlb21ldHJ5XHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEZvcm11bGFzIHJlbGF0ZWQgdG8gdHJpYW5nbGVzLlxyXG4gKlxyXG4gKiBAY2xhc3MgVHJpYW5nbGVcclxuICogQG1lbWJlcm9mIGdlb21ldHJ5XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmlhbmdsZSB7XHJcbiAgICAvKipcclxuICAgICAqIEFyZWEgb2YgYSBUcmlhbmdsZS5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YhIGdlb21ldHJ5LlRyaWFuZ2xlI1xyXG4gICAgICogQHBhcmFtICAge251bWJlcn0gaCAgLSAgIEhlaWdodFxyXG4gICAgICogQHBhcmFtICAge251bWJlcn0gYiAgLSAgIEJhc2VcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9ICAgICAgICA8c3VwPjE8L3N1cD4mZnJhc2w7PHN1Yj4yPC9zdWI+aGJcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGFyZWEoaCwgYikge1xyXG4gICAgICAgIHJldHVybiAoMSAvIDIpICogaCAqIGI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxjdWxhdGUgdGhlIGh5cG90ZW51c2Ugb2YgYSByaWdodCB0cmlhbmdsZS5cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YhIGdlb21ldHJ5LlRyaWFuZ2xlI1xyXG4gICAgICogQHBhcmFtICAge251bWJlcn0gYSAgLSAgIExlbmd0aCBvZiBzaWRlIGFcclxuICAgICAqIEBwYXJhbSAgIHtudW1iZXJ9IGIgIC0gICBMZW5ndGggb2Ygc2lkZSBiXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfSAgICAgICAgJnJhZGljO2EmIzE3ODsrYiYjMTc4O1xyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaHlwb3RlbnVzZShhLCBiKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChhICoqIDIgKyBiICoqIDIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXNlcyBQeXRoYWdvcmVhbiBUaGVvcmVtIHRvIGRldGVybWluZSBpZiBhIHRyaWFuZ2xlIG9mIHNpZGVzIGEsIGIsIGMgaXMgYSByaWdodCB0cmlhbmdsZS5cclxuICAgICAqIFRoZSBzaWRlIGMgaXMgc2hvdWxkIGJlIHRoZSBsb25nZXN0IGFzIGl0IGlzIGNvbnNpZGVyZWQgdGhlIGh5cG90ZW51c2UuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mISBnZW9tZXRyeS5UcmlhbmdsZSNcclxuICAgICAqIEBwYXJhbSAgIHtudW1iZXJ9IGEgIC0gICBTaWRlIG9mIGxlbmd0aCBhXHJcbiAgICAgKiBAcGFyYW0gICB7bnVtYmVyfSBiICAtICAgU2lkZSBvZiBsZW5ndGggYlxyXG4gICAgICogQHBhcmFtICAge251bWJlcn0gYyAgLSAgIFNpZGUgb2YgbGVuZ3RoIGNcclxuICAgICAqIEByZXR1cm5zIHtib29sZWFufSAgICAgICBjJiMxNzg7JmVxdWl2O2EmIzE3ODsrYiYjMTc4O1xyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNSaWdodChhLCBiLCBjKSB7XHJcbiAgICAgICAgcmV0dXJuIGMgKiogMiA9PT0gYSAqKiAyICsgYiAqKiAyO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBUcmlhbmdsZSBmcm9tICcuL3RyaWFuZ2xlLmpzJztcclxuXHJcbi8qKlxyXG4gKiBAbmFtZXNwYWNlIGdlb21ldHJ5XHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEZvcm11bGFzIHJlbGF0ZWQgdG8gcmVjdGFuZ2xlcy5cclxuICpcclxuICogQGNsYXNzIFJlY3RhbmdsZVxyXG4gKiBAbWVtYmVyb2YgZ2VvbWV0cnlcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY3RhbmdsZSB7XHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YhIGdlb21ldHJ5LlJlY3RhbmdsZSNcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBhICAgIC1cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBiICAgIC1cclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBhcmVhKGEsIGIpIHtcclxuICAgICAgICByZXR1cm4gYSAqIGI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mISBnZW9tZXRyeS5SZWN0YW5nbGUjXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gYSAgICAtXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gYiAgICAtXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY2lyY3VtZmVyZW5jZShhLCBiKSB7XHJcbiAgICAgICAgcmV0dXJuIGEgKiAyICsgYiAqIDI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mISBnZW9tZXRyeS5SZWN0YW5nbGUjXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gYSAgICAtXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gYiAgICAtXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZGlhZ29uYWwoYSwgYikge1xyXG4gICAgICAgIHJldHVybiBUcmlhbmdsZS5IeXBvdGVudXNlKGEsIGIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiEgZ2VvbWV0cnkuUmVjdGFuZ2xlI1xyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGEgICAgLVxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGIgICAgLVxyXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc1NxdWFyZShhLCBiKSB7XHJcbiAgICAgICAgcmV0dXJuIGEgPT09IGI7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IENpcmNsZSBmcm9tICcuL2NpcmNsZS5qcyc7XHJcbmltcG9ydCBUcmlhbmdsZSBmcm9tICcuL3RyaWFuZ2xlLmpzJztcclxuXHJcbi8qKlxyXG4gKiBAbmFtZXNwYWNlIGdlb21ldHJ5XHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEZvcm11bGFzIHJlbGF0ZWQgdG8gY29uZXMuXHJcbiAqXHJcbiAqIEBjbGFzcyBDb25lXHJcbiAqIEBtZW1iZXJvZiBnZW9tZXRyeVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uZSB7XHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YhIGdlb21ldHJ5LkNvbmUjXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gciAgICAtXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaCAgICAtXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICovXHJcbiAgICBzdGF0aWMgc2xhbnRIZWlnaHQociwgaCkge1xyXG4gICAgICAgIHJldHVybiBUcmlhbmdsZS5IeXBvdGVudXNlKHIsIGgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiEgZ2VvbWV0cnkuQ29uZSNcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSByICAgIC1cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBoICAgIC1cclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBsYXRlcmFsQXJlYShyLCBoKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguUEkgKiByICogdGhpcy5TbGFudEhlaWdodChyLCBoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YhIGdlb21ldHJ5LkNvbmUjXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gciAgICAtXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaCAgICAtXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICovXHJcbiAgICBzdGF0aWMgdG90YWxBcmVhKHIsIGgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5MYXRlcmFsQXJlYShyLCBoKSArIENpcmNsZS5BcmVhKHIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiEgZ2VvbWV0cnkuQ29uZSNcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSByICAgIC1cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBoICAgIC1cclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyB2b2x1bWUociwgaCkge1xyXG4gICAgICAgIHJldHVybiAoMSAvIDMpICogTWF0aC5QSSAqIHIgKiogMiAqIGg7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IENpcmNsZSBmcm9tICcuL2NpcmNsZS5qcyc7XHJcblxyXG4vKipcclxuICogQG5hbWVzcGFjZSBnZW9tZXRyeVxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBGb3JtdWxhcyByZWxhdGVkIHRvIGN5bGluZGVycy5cclxuICpcclxuICogQGNsYXNzIEN5bGluZGVyXHJcbiAqIEBtZW1iZXJvZiBnZW9tZXRyeVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3lsaW5kZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mISBnZW9tZXRyeS5DeWxpbmRlciNcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSByICAgIC1cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBoICAgIC1cclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBsYXRlcmFsQXJlYShyLCBoKSB7XHJcbiAgICAgICAgcmV0dXJuIDIgKiBNYXRoLlBJICogciAqIGg7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mISBnZW9tZXRyeS5DeWxpbmRlciNcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSByICAgIC1cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBoICAgIC1cclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyB0b3RhbEFyZWEociwgaCkge1xyXG4gICAgICAgIHJldHVybiBDeWxpbmRlci5BcmVhKHIsIGgpICsgMiAqIENpcmNsZS5BcmVhKHIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiEgZ2VvbWV0cnkuQ3lsaW5kZXIjXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gciAgICAtXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaCAgICAtXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICovXHJcbiAgICBzdGF0aWMgdm9sdW1lKHIsIGgpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5QSSAqIHIgKiogMiAqIGg7XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqIEBuYW1lc3BhY2UgZ2VvbWV0cnlcclxuICovXHJcblxyXG4vKipcclxuICogRm9ybXVsYXMgcmVsYXRlZCB0byBzcGhlcmVzLlxyXG4gKlxyXG4gKiBAY2xhc3MgU3BoZXJlXHJcbiAqIEBtZW1iZXJvZiBnZW9tZXRyeVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3BoZXJlIHtcclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiEgZ2VvbWV0cnkuU3BoZXJlI1xyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHIgICAgLVxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqL1xyXG4gICAgc3RhdGljIHN1cmZhY2VBcmVhKHIpIHtcclxuICAgICAgICByZXR1cm4gNCAqIE1hdGguUEkgKiByICoqIDI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mISBnZW9tZXRyeS5TcGhlcmUjXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gciAgICAtXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICovXHJcbiAgICBzdGF0aWMgdm9sdW1lKHIpIHtcclxuICAgICAgICByZXR1cm4gKDQgLyAzKSAqIE1hdGguUEkgKiByICoqIDM7XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqIEZvcm1hdHMgYW5kIHJvdW5kcyBhIG51bWJlciB0byB0aGUgcmVxdWlyZWQgcHJlY2lzaW9uLlxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiBmb3JtYXQoMS40MzQpOyAgICAgICAvLyAxLjQzXHJcbiAqIGZvcm1hdCgxLjQzNik7ICAgICAgIC8vIDEuNDRcclxuICogZm9ybWF0KFwiMS40MzJcIik7ICAgICAvLyAxLjQzXHJcbiAqIGZvcm1hdChcIjEuNDMyXCIsIDEpOyAgLy8gMS40XHJcbiAqIGZvcm1hdChcIjEuNDMyXCIsIDApOyAgLy8gMVxyXG4gKiBmb3JtYXQoXCIxLjZcIiwgMCk7ICAgIC8vIDJcclxuICogZm9ybWF0KDEsIDEwMCk7ICAgICAgLy8gMVxyXG4gKlxyXG4gKiBAcGFyYW0gICB7bnVtYmVyfSB2YWx1ZSAgICAgIC0gICBUaGUgdmFsdWUgdG8gYmUgZm9ybWF0dGVkLlxyXG4gKiBAcGFyYW0gICB7bnVtYmVyfSBwcmVjaXNpb24gIC0gICAwIHRvIDEwMCBudW1iZXIgb2YgZmxvYXRpbmcgcG9pbnQgZGlnaXRzLiBEZWZhdWx0IDIuXHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9ICAgICAgICAgICAgICAgIFRoZSBmb3JtYXR0ZWQgbnVtYmVyLlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0KHZhbHVlLCBwcmVjaXNpb24gPSAyKSB7XHJcbiAgICByZXR1cm4gcGFyc2VGbG9hdChwYXJzZUZsb2F0KHZhbHVlKS50b0ZpeGVkKHByZWNpc2lvbikpO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJDaXJjbGUiLCJpbnB1dCIsIm5hbWUiLCJFcnJvciIsInIiLCJNYXRoIiwiUEkiLCJBIiwic3FydCIsIkMiLCJkIiwiVHJpYW5nbGUiLCJoIiwiYiIsImEiLCJjIiwiUmVjdGFuZ2xlIiwiSHlwb3RlbnVzZSIsIkNvbmUiLCJTbGFudEhlaWdodCIsIkxhdGVyYWxBcmVhIiwiQXJlYSIsIkN5bGluZGVyIiwiU3BoZXJlIiwiZm9ybWF0IiwidmFsdWUiLCJwcmVjaXNpb24iLCJwYXJzZUZsb2F0IiwidG9GaXhlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFDcUJBOzs7Ozs7OztJQWlHckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFDSSw0QkFBbUJDLEtBQW5CLEVBQTBCQyxJQUExQixFQUFnQztNQUM1QixJQUFJRCxLQUFLLEdBQUcsQ0FBWixFQUFlO1FBQ1gsTUFBTSxJQUFJRSxLQUFKLFdBQWFELElBQWIsOEJBQU47TUFDSDtJQUNKOzs7O0lBcEhMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUNJLGNBQVlFLENBQVosRUFBZTtNQUNYLE9BQU9DLElBQUksQ0FBQ0MsRUFBTCxZQUFVRixDQUFWLEVBQWUsQ0FBZixDQUFQO0lBQ0g7SUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FDSSx1QkFBcUJBLENBQXJCLEVBQXdCO01BQ3BCLE9BQU8sSUFBSUMsSUFBSSxDQUFDQyxFQUFULEdBQWNGLENBQXJCO0lBQ0g7SUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FDSSxrQkFBZ0JBLENBQWhCLEVBQW1CO01BQ2YsT0FBT0EsQ0FBQyxHQUFHLENBQVg7SUFDSDtJQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztXQUNJLHdCQUFzQkcsQ0FBdEIsRUFBeUI7TUFDckIsT0FBT0YsSUFBSSxDQUFDRyxJQUFMLENBQVVELENBQUMsR0FBR0YsSUFBSSxDQUFDQyxFQUFuQixDQUFQO0lBQ0g7SUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FDSSxpQ0FBK0JHLENBQS9CLEVBQWtDO01BQzlCLE9BQU9BLENBQUMsSUFBSSxJQUFJSixJQUFJLENBQUNDLEVBQWIsQ0FBUjtJQUNIO0lBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O1dBQ0ksNEJBQTBCSSxDQUExQixFQUE2QjtNQUN6QixPQUFPQSxDQUFDLEdBQUcsQ0FBWDtJQUNIOzs7OztBQ3pHTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7SUFDcUJDOzs7Ozs7OztJQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFDSSxjQUFZQyxDQUFaLEVBQWVDLENBQWYsRUFBa0I7TUFDZCxPQUFRLElBQUksQ0FBTCxHQUFVRCxDQUFWLEdBQWNDLENBQXJCO0lBQ0g7SUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FDSSxvQkFBa0JDLENBQWxCLEVBQXFCRCxDQUFyQixFQUF3QjtNQUNwQixPQUFPUixJQUFJLENBQUNHLElBQUwsQ0FBVSxTQUFBTSxDQUFDLEVBQUksQ0FBSixDQUFELFlBQVNELENBQVQsRUFBYyxDQUFkLENBQVYsQ0FBUDtJQUNIO0lBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztXQUNJLGlCQUFlQyxDQUFmLEVBQWtCRCxDQUFsQixFQUFxQkUsQ0FBckIsRUFBd0I7TUFDcEIsT0FBTyxTQUFBQSxDQUFDLEVBQUksQ0FBSixDQUFELEtBQVcsU0FBQUQsQ0FBQyxFQUFJLENBQUosQ0FBRCxZQUFTRCxDQUFULEVBQWMsQ0FBZCxDQUFsQjtJQUNIOzs7OztBQ2hETDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7SUFDcUJHOzs7Ozs7OztJQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBQ0ksY0FBWUYsQ0FBWixFQUFlRCxDQUFmLEVBQWtCO01BQ2QsT0FBT0MsQ0FBQyxHQUFHRCxDQUFYO0lBQ0g7SUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O1dBQ0ksdUJBQXFCQyxDQUFyQixFQUF3QkQsQ0FBeEIsRUFBMkI7TUFDdkIsT0FBT0MsQ0FBQyxHQUFHLENBQUosR0FBUUQsQ0FBQyxHQUFHLENBQW5CO0lBQ0g7SUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O1dBQ0ksa0JBQWdCQyxDQUFoQixFQUFtQkQsQ0FBbkIsRUFBc0I7TUFDbEIsT0FBT0YsUUFBUSxDQUFDTSxVQUFULENBQW9CSCxDQUFwQixFQUF1QkQsQ0FBdkIsQ0FBUDtJQUNIO0lBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztXQUNJLGtCQUFnQkMsQ0FBaEIsRUFBbUJELENBQW5CLEVBQXNCO01BQ2xCLE9BQU9DLENBQUMsS0FBS0QsQ0FBYjtJQUNIOzs7OztBQ3hETDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7SUFDcUJLOzs7Ozs7OztJQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBQ0kscUJBQW1CZCxDQUFuQixFQUFzQlEsQ0FBdEIsRUFBeUI7TUFDckIsT0FBT0QsUUFBUSxDQUFDTSxVQUFULENBQW9CYixDQUFwQixFQUF1QlEsQ0FBdkIsQ0FBUDtJQUNIO0lBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztXQUNJLHFCQUFtQlIsQ0FBbkIsRUFBc0JRLENBQXRCLEVBQXlCO01BQ3JCLE9BQU9QLElBQUksQ0FBQ0MsRUFBTCxHQUFVRixDQUFWLEdBQWMsS0FBS2UsV0FBTCxDQUFpQmYsQ0FBakIsRUFBb0JRLENBQXBCLENBQXJCO0lBQ0g7SUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O1dBQ0ksbUJBQWlCUixDQUFqQixFQUFvQlEsQ0FBcEIsRUFBdUI7TUFDbkIsT0FBTyxLQUFLUSxXQUFMLENBQWlCaEIsQ0FBakIsRUFBb0JRLENBQXBCLElBQXlCWixNQUFNLENBQUNxQixJQUFQLENBQVlqQixDQUFaLENBQWhDO0lBQ0g7SUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O1dBQ0ksZ0JBQWNBLENBQWQsRUFBaUJRLENBQWpCLEVBQW9CO01BQ2hCLE9BQVEsSUFBSSxDQUFMLEdBQVVQLElBQUksQ0FBQ0MsRUFBZixZQUFvQkYsQ0FBcEIsRUFBeUIsQ0FBekIsSUFBNkJRLENBQXBDO0lBQ0g7Ozs7O0FDMURMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztJQUNxQlU7Ozs7Ozs7O0lBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFDSSxxQkFBbUJsQixDQUFuQixFQUFzQlEsQ0FBdEIsRUFBeUI7TUFDckIsT0FBTyxJQUFJUCxJQUFJLENBQUNDLEVBQVQsR0FBY0YsQ0FBZCxHQUFrQlEsQ0FBekI7SUFDSDtJQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FDSSxtQkFBaUJSLENBQWpCLEVBQW9CUSxDQUFwQixFQUF1QjtNQUNuQixPQUFPVSxRQUFRLENBQUNELElBQVQsQ0FBY2pCLENBQWQsRUFBaUJRLENBQWpCLElBQXNCLElBQUlaLE1BQU0sQ0FBQ3FCLElBQVAsQ0FBWWpCLENBQVosQ0FBakM7SUFDSDtJQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FDSSxnQkFBY0EsQ0FBZCxFQUFpQlEsQ0FBakIsRUFBb0I7TUFDaEIsT0FBT1AsSUFBSSxDQUFDQyxFQUFMLFlBQVVGLENBQVYsRUFBZSxDQUFmLElBQW1CUSxDQUExQjtJQUNIOzs7OztBQy9DTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7SUFDcUJXOzs7Ozs7OztJQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUNJLHFCQUFtQm5CLENBQW5CLEVBQXNCO01BQ2xCLE9BQU8sSUFBSUMsSUFBSSxDQUFDQyxFQUFULFlBQWNGLENBQWQsRUFBbUIsQ0FBbkIsQ0FBUDtJQUNIO0lBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FDSSxnQkFBY0EsQ0FBZCxFQUFpQjtNQUNiLE9BQVEsSUFBSSxDQUFMLEdBQVVDLElBQUksQ0FBQ0MsRUFBZixZQUFvQkYsQ0FBcEIsRUFBeUIsQ0FBekIsQ0FBUDtJQUNIOzs7Ozs7Ozs7Ozs7Ozs7QUMvQkw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ2UsU0FBU29CLE1BQVQsQ0FBZ0JDLEtBQWhCLEVBQXNDO0VBQUEsSUFBZkMsU0FBZSx1RUFBSCxDQUFHO0VBQ2pELE9BQU9DLFVBQVUsQ0FBQ0EsVUFBVSxDQUFDRixLQUFELENBQVYsQ0FBa0JHLE9BQWxCLENBQTBCRixTQUExQixDQUFELENBQWpCO0FBQ0o7OzsifQ==
