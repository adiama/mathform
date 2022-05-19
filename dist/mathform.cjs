/*!
@fileoverview mathform - A collection of mathematical formulas, constants and algorithms
@author Alexandros Diamantonis <asdiamantonis@gmail.com>
@version 0.0.3

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
 * Formulas related to circles.
 *
 * @class Circle
 * @memberof geometry
 */

var Circle = /*#__PURE__*/function () {
  function Circle() {
    _classCallCheck(this, Circle);
  }

  _createClass(Circle, null, [{
    key: "area",
    value:
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
    function area(r) {
      return Math.PI * Math.pow(r, 2);
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

  }, {
    key: "circumference",
    value: function circumference(r) {
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

  }, {
    key: "diameter",
    value: function diameter(r) {
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

  }, {
    key: "radiusFromArea",
    value: function radiusFromArea(A) {
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

  }, {
    key: "radiusFromCircumference",
    value: function radiusFromCircumference(C) {
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

  }, {
    key: "radiusFromDiameter",
    value: function radiusFromDiameter(d) {
      return d / 2;
    }
  }]);

  return Circle;
}();
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
     * Calculates area of a triangle from its base and height.
     *
     * @example
     * mathform.geometry.Triangle.area(1, 1); // 0.5
     *
     * @memberof! geometry.Triangle#
     * @param   {number} h  -   Height
     * @param   {number} b  -   Base
     * @returns {number}        (<sup>1</sup>&frasl;<sub>2</sub>)hb
     * @static
     */
    function area(h, b) {
      return 1 / 2 * h * b;
    }
    /**
     * Calculates the altitude of a triangle from its area and base.
     *
     * @example
     * mathform.geometry.Triangle.altitude(0.5, 1); // 1
     *
     * @memberof! geometry.Triangle#
     * @param   {number} A  -   Area
     * @param   {number} b  -   Base
     * @returns {number}        2(<sup>A</sup>&frasl;<sub>b</sub>)
     * @static
     */

  }, {
    key: "altitude",
    value: function altitude(A, b) {
      return 2 * (A / b);
    }
    /**
     * Calculates the base of a triangle from its area and height.
     *
     * @example
     * mathform.geometry.Triangle.base(0.5, 1); // 1
     *
     * @memberof! geometry.Triangle#
     * @param   {number} A  -   Area
     * @param   {number} h  -   Height
     * @returns {number}        2(<sup>A</sup>&frasl;<sub>h</sub>)
     * @static
     */

  }, {
    key: "base",
    value: function base(A, h) {
      return 2 * (A / h);
    }
    /**
     * Calculates the perimeter of a triangle from its sides.
     *
     * @example
     * mathform.geometry.Triangle.perimeter(1, 1, 1); // 3
     *
     * @memberof! geometry.Triangle#
     * @param   {number} a  -   Side a
     * @param   {number} b  -   Side b
     * @param   {number} c  -   Side c
     * @returns {number}        a+b+c
     * @static
     */

  }, {
    key: "perimeter",
    value: function perimeter(a, b, c) {
      return a + b + c;
    }
    /**
     * Calculates the semiperimeter of a triangle from its perimeter.
     *
     * @example
     * mathform.geometry.Triangle.semiperimeter(2); // 1
     *
     * @memberof! geometry.Triangle#
     * @param   {number} p -    The perimeter of the triangle
     * @returns {number}        <sup>p</sup>&frasl;<sub>2</sub>
     * @static
     */

  }, {
    key: "semiperimeter",
    value: function semiperimeter(p) {
      return p / 2;
    }
    /**
     * Uses Heron's formula to calculate a triangle's area.
     *
     * Knowns Side-Side-Side
     *
     * @example
     * mathform.geometry.Triangle.areaSSS(3, 4, 5); // 6
     *
     * @memberof! geometry.Triangle#
     * @param   {number} a  -   Side a
     * @param   {number} b  -   Side b
     * @param   {number} c  -   Side c
     * @returns {number}        &radic;s(s-a)(s-b)(s-c)
     * @static
     */

  }, {
    key: "areaSSS",
    value: function areaSSS(a, b, c) {
      var p = this.perimeter(a, b, c);
      var s = this.semiperimeter(p);
      return Math.sqrt(s * (s - a) * (s - b) * (s - c));
    }
    /**
     * Calculates the area of a triangle from Side-Angle-Side.
     *
     * Knowns Side-Angle-Side
     *
     * @example
     * let theta = mathform.convert.degreesToRadians(90);
     * mathform.geometry.Triangle.areaSAS(3, 4, theta); // 6
     *
     * @memberof! geometry.Triangle#
     * @param   {number} a        - Side a
     * @param   {number} b        - Side b
     * @param   {number} theta    - Angle &theta;, in **radians**
     * @returns {number}            (<sup>1</sup>&frasl;<sub>2</sub>)ab sin &theta;
     * @static
     */

  }, {
    key: "areaSAS",
    value: function areaSAS(a, b, theta) {
      return 1 / 2 * a * b * Math.sin(theta);
    }
    /**
     * Uses the Pythagorean theorem to calculate the hypotenuse of a right triangle.
     *
     * @example
     * mathform.geometry.Triangle.hypotenuse(3, 4); // 5
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
     * Any side in the arguments can be used as the hypotenuse.
     *
     * @example
     * mathform.geometry.Triangle.isRight(3, 4, 5); // true
     * mathform.geometry.Triangle.isRight(1, 1, 1); // false
     *
     * @memberof! geometry.Triangle#
     * @param   {number} a  -   Side of length a
     * @param   {number} b  -   Side of length b
     * @param   {number} c  -   Side of length c
     * @returns {boolean}       c&#178;&equiv;a&#178;+b&#178; OR a&#178;&equiv;b&#178;+c&#178; OR b&#178;&equiv;a&#178;+c&#178;
     * @static
     */

  }, {
    key: "isRight",
    value: function isRight(a, b, c) {
      var con1 = Math.pow(a, 2) === Math.pow(b, 2) + Math.pow(c, 2);
      var con2 = Math.pow(b, 2) === Math.pow(a, 2) + Math.pow(c, 2);
      var con3 = Math.pow(c, 2) === Math.pow(a, 2) + Math.pow(b, 2);
      return con1 || con2 || con3;
    }
    /**
     * TODO: add functions for missing angles and sides with trigonometric functions
     *      - https://www.mathsisfun.com/algebra/trig-solving-triangles.html
     */

  }]);

  return Triangle;
}();
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
    function area(w, h) {
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

  }, {
    key: "circumference",
    value: function circumference(w, h) {
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

  }, {
    key: "diagonal",
    value: function diagonal(w, h) {
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

  }, {
    key: "isSquare",
    value: function isSquare(w, h) {
      return w === h;
    }
  }]);

  return Rectangle;
}();
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
    function slantHeight(r, h) {
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

  }, {
    key: "lateralArea",
    value: function lateralArea(r, h) {
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

  }, {
    key: "totalArea",
    value: function totalArea(r, h) {
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

  }, {
    key: "volume",
    value: function volume(r, h) {
      return 1 / 3 * Math.PI * Math.pow(r, 2) * h;
    }
    /**
     * TODO: add functions for finding
     *  - radius
     */

  }]);

  return Cone;
}();
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
    function lateralArea(r, h) {
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

  }, {
    key: "totalArea",
    value: function totalArea(r, h) {
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

  }, {
    key: "volume",
    value: function volume(r, h) {
      return Math.PI * Math.pow(r, 2) * h;
    }
    /**
     * TODO: add functions for finding radius
     */

  }]);

  return Cylinder;
}();
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
    key: "area",
    value:
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
    function area(r) {
      return 4 * Math.PI * Math.pow(r, 2);
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

  }, {
    key: "volume",
    value: function volume(r) {
      return 4 / 3 * Math.PI * Math.pow(r, 3);
    }
    /**
     * TODO: add functions for
     *  - diameter
     *  - radiusFrom
     *      - volume
     *      - area
     *      - diameter
     */

  }]);

  return Sphere;
}();
/**
 * Formulas related to cuboids.
 *
 * @class Cuboid
 * @memberof geometry
 */


var Cuboid = /*#__PURE__*/function () {
  function Cuboid() {
    _classCallCheck(this, Cuboid);
  }

  _createClass(Cuboid, null, [{
    key: "volume",
    value:
    /**
     * Calculates the volume of a cuboid from its width, length and height.
     *
     * @example
     * mathform.geometry.Cuboid.volume(1, 2, 3); // 6
     *
     * @memberof! geometry.Cuboid#
     * @param   {number} w -    width
     * @param   {number} h -    height
     * @param   {number} l -    length
     * @returns                 whl
     * @static
     */
    function volume(w, h, l) {
      return w * h * l;
    }
    /**
     * Calculates the area of a cuboid from its width, length and height.
     *
     * @example
     * mathform.geometry.Cuboid.area(1, 2, 3); // 22
     *
     * @memberof! geometry.Cuboid#
     * @param   {number} w -    width
     * @param   {number} h -    height
     * @param   {number} l -    length
     * @returns                 2(wl+hl+lw)
     * @static
     */

  }, {
    key: "area",
    value: function area(w, h, l) {
      return 2 * (w * l + h * l + h * w);
    }
    /**
     * Calculates the diagonal of a cuboid from its width, length and height.
     *
     * @example
     * mathform.geometry.Cuboid.diagonal(1, 2, 3); // ~3.74
     *
     * @memberof! geometry.Cuboid#
     * @param   {number} w -    width
     * @param   {number} h -    height
     * @param   {number} l -    length
     * @returns                 &radic;(w&#178;+h&#178;+l&#178;)
     * @static
     */

  }, {
    key: "diagonal",
    value: function diagonal(w, h, l) {
      return Math.sqrt(Math.pow(w, 2) + Math.pow(h, 2) + Math.pow(l, 2));
    }
    /**
     * Calculates a side of a cuboid from its other 2 sides and its Volume.
     *
     * @example
     * mathform.geometry.Cuboid.sideFromVolume(1, 1, 1); // 1
     *
     * @memberof! geometry.Cuboid#
     * @param   {number} V -    Volume
     * @param   {number} a -    side a
     * @param   {number} b -    side b
     * @returns                 <sup>V</sup>&frasl;<sub>ab</sub>
     * @static
     */

  }, {
    key: "sideFromVolume",
    value: function sideFromVolume(V, a, b) {
      return V / (a * b);
    }
    /**
     * Calculates a side of a cuboid from its other 2 sides and its diagonal.
     *
     * @example
     * mathform.geometry.Cuboid.sideFromDiagonal(2, 1, 1); // sqrt(2)
     *
     * @memberof! geometry.Cuboid#
     * @param   {number} d -    diagonal
     * @param   {number} a -    side a
     * @param   {number} b -    side b
     * @returns                 &radic;(d&#178;-a&#178;-b&#178;)
     * @static
     */

  }, {
    key: "sideFromDiagonal",
    value: function sideFromDiagonal(d, a, b) {
      return Math.sqrt(Math.pow(d, 2) - Math.pow(a, 2) - Math.pow(b, 2));
    }
  }]);

  return Cuboid;
}();

var index = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Circle: Circle,
  Triangle: Triangle,
  Rectangle: Rectangle,
  Cone: Cone,
  Cylinder: Cylinder,
  Sphere: Sphere,
  Cuboid: Cuboid
});
/**
 * @namespace convert
 */

/**
 * Converts degrees to radians
 *
 * @example
 * mathform.convert.degreesToRadians(180) // ~3.14159...
 *
 * @memberof convert
 * @param   {number} degrees
 * @returns {number}            radians
 */

function degreesToRadians(degrees) {
  return degrees * Math.PI / 180;
}
/**
 * Converts radians to degrees
 *
 * @example
 * mathform.convert.radiansToDegrees(Math.PI) // 180
 *
 * @memberof convert
 * @param   {number} radians
 * @returns {number}            degrees
 */


function radiansToDegrees(radians) {
  return radians * 180 / Math.PI;
}
/**
 * Normalizes a value
 *
 * @example
 * mathform.convert.normalize(150, 100, 200) // 0.5
 *
 * @memberof convert
 * @param   {number} value
 * @param   {number} min
 * @param   {number} max
 * @returns {number}        float from 0 and 1
 */


function normalize(value, min, max) {
  return (value - min) / (max - min);
}

var convert = /*#__PURE__*/Object.freeze({
  __proto__: null,
  degreesToRadians: degreesToRadians,
  radiansToDegrees: radiansToDegrees,
  normalize: normalize
});
/**
 * @namespace rng
 */

/**
 * Random Integer generator based on Math.random()
 * inclusive min, inclusive max
 *
 * @example
 * console.log(rng.generateRandomInteger(0, 5));    // 5
 * console.log(rng.generateRandomInteger(0, 5));    // 4
 * console.log(rng.generateRandomInteger(0, 5));    // 4
 * console.log(rng.generateRandomInteger(0, 5));    // 0
 * console.log(rng.generateRandomInteger(0, 5));    // 5
 *
 * console.log(rng.generateRandomInteger(0, 100));  // 45
 * console.log(rng.generateRandomInteger(0, 100));  // 52
 * console.log(rng.generateRandomInteger(0, 100));  // 45
 * console.log(rng.generateRandomInteger(90, 100)); // 94
 * console.log(rng.generateRandomInteger(90, 100)); // 99
 *
 * @memberof rng
 * @param {number}  min
 * @param {number}  max
 * @returns {number}        Integer of range min, max
 */

function generateRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
/**
 * Random Float generator based on Math.random()
 * inclusive min, exclusive max
 *
 * @example
 * console.log(rng.generateRandomFloat(0, 0.001));      // 0.00026509881625332786
 * console.log(rng.generateRandomFloat(0, 0.001));      // 0.00007506891359581824
 * console.log(rng.generateRandomFloat(0, 0.001));      // 0.00044325961245963644
 * console.log(rng.generateRandomFloat(0, 0.001));      // 0.0009738804824279097
 * console.log(rng.generateRandomFloat(0, 0.001));      // 0.00037007902123962523
 *
 * console.log(rng.generateRandomFloat(0, 1));          // 0.5439056343074258
 * console.log(rng.generateRandomFloat(0, 1));          // 0.7389564454471567
 * console.log(rng.generateRandomFloat(0, 1));          // 0.8800660182555697
 * console.log(rng.generateRandomFloat(0, 1));          // 0.028073711000210277
 * console.log(rng.generateRandomFloat(0, 1));          // 0.45954615798738296
 *
 * console.log(rng.generateRandomFloat(1, 2));          // 1.8467985822932083
 * console.log(rng.generateRandomFloat(2, 3));          // 2.603690406049185
 * console.log(rng.generateRandomFloat(3, 30));         // 14.428615314773008
 * console.log(rng.generateRandomFloat(50, 100));       // 78.90222904220667
 * console.log(rng.generateRandomFloat(1000, 10000));   // 8798.862959284734
 *
 * @memberof rng
 * @param {number}  min
 * @param {number}  max
 * @returns {number}        Float of range min, max
 */


function generateRandomFloat(min, max) {
  return parseFloat(Math.random() * (max - min) + min);
}
/**
 * Linear Congruential Generator
 *
 * Learn more
 *  - [wikipedia]{@link https://en.wikipedia.org/wiki/Linear_congruential_generator}
 *  - [rosettacode]{@link https://rosettacode.org/wiki/Linear_congruential_generator}
 *  - [ams]{@link https://www.ams.org/journals/mcom/1999-68-225/S0025-5718-99-00996-5/S0025-5718-99-00996-5.pdf}
 *
 * @example
 * import { rng } from 'mathform';
 *
 * // ZX81 parameters
 * // (see wikipedia or ams links provided above for more parameters)
 * let modulus = 2 ** 16 + 1;
 * let multiplier = 75;
 * let increment = 74;
 * let seed = Math.floor(Math.random() * 2 ** 16);
 *
 * // Create the LCG objet
 * let lcg = new rng.LCG(modulus, multiplier, increment, seed);
 *
 * // Usage
 * lcg.step() // returns a random number where 0 <= number <= 2 ** 16
 *
 * @class LCG
 * @memberof rng
 */


var LCG = /*#__PURE__*/function () {
  /**
   * The generator is defined by the recurrence relation
   *  - X<sub>0</sub> = (aX<sub>n</sub> + c) mod m
   *
   * Were
   * - 0 < m
   * - 0 < a < m
   * - 0 <= c < m
   * - 0 <= X<sub>0</sub> < m
   *
   * @memberof! rng.LCG#
   * @param {integer} Modulus     - 0 < m
   * @param {integer} Multiplier  - 0 < a < m
   * @param {integer} Increment   - 0 <= c < m
   * @param {number}  Seed        - 0 <= X0 < m
   * @constructor
   */
  function LCG(modulus, multiplier, increment, seed) {
    _classCallCheck(this, LCG);

    this._m = modulus;
    this._a = multiplier;
    this._c = increment;
    this._X = seed;
  }
  /**
   * Iterates the algorithm once and returns the new seed
   *
   * @memberof! rng.LCG#
   * @returns {integer}
   * @public
   */


  _createClass(LCG, [{
    key: "modulus",
    get: function get() {
      return this._m;
    }
  }, {
    key: "multiplier",
    get: function get() {
      return this._a;
    }
  }, {
    key: "increment",
    get: function get() {
      return this._c;
    }
  }, {
    key: "seed",
    get: function get() {
      return this._X;
    }
  }, {
    key: "step",
    value: function step() {
      this._iterate();

      return this.seed;
    }
    /**
     * Iterates the algorithm once
     *
     * @memberof! rng.LCG#
     * @private
     */

  }, {
    key: "_iterate",
    value: function _iterate() {
      this._X = (this.multiplier * this.seed + this.increment) % this.modulus;
    }
  }]);

  return LCG;
}();

var rng = /*#__PURE__*/Object.freeze({
  __proto__: null,
  generateRandomInteger: generateRandomInteger,
  generateRandomFloat: generateRandomFloat,
  LCG: LCG
});
/**
 * @namespace helpers
 */

/**
 * Checks if the given input is greater than 0.
 *  Throws an error or returns boolean if strict parameter is passed as false.
 *
 * @example
 * // throws 'Radius must be greater than 0.'
 * this._isGreaterThanZero(-1, 'Radius');
 *
 * // returns false
 * this._isGreaterThanZero(-1, 'Radius', false);
 *
 * // passes
 * this._isGreaterThanZero(1, 'Area');
 *
 * // returns true
 * this._isGreaterThanZero(1, 'Area', false);
 *
 * @memberof! helpers
 * @param   {number}    input   -   Input value
 * @param   {string}    name    -   Variable name
 * @param   {boolean}   strict  -   Set to false if you need an exception instead. Default true
 * @throws  {Error}                 When input < 0
 * @returns {boolean}
 */

function isGreaterThanZero(input, name) {
  var strict = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (input <= 0) {
    if (strict) {
      throw new Error("".concat(name || 'Value', " must be greater than 0."));
    }

    return false;
  }

  return true;
}
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
 * @memberof! helpers
 * @param   {number} value      -   The value to be formatted.
 * @param   {number} precision  -   0 to 100 number of floating point digits. Default 2.
 * @returns {number}                The formatted number.
 */


function format(value) {
  var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  return parseFloat(parseFloat(value).toFixed(precision));
}

var helpers = /*#__PURE__*/Object.freeze({
  __proto__: null,
  isGreaterThanZero: isGreaterThanZero,
  format: format
});
exports.convert = convert;
exports.geometry = index;
exports.helpers = helpers;
exports.rng = rng;
