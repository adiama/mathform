/**
 * Formulas related to triangles.
 *
 * @class Triangle
 * @memberof geometry
 */
export default class Triangle {
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
    static area(h, b) {
        return (1 / 2) * h * b;
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
    static altitude(A, b) {
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
    static base(A, h) {
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
    static perimeter(a, b, c) {
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
    static semiperimeter(p) {
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
    static areaSSS(a, b, c) {
        const p = this.perimeter(a, b, c);
        const s = this.semiperimeter(p);
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
    static areaSAS(a, b, theta) {
        return (1 / 2) * a * b * Math.sin(theta);
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
    static hypotenuse(a, b) {
        return Math.sqrt(a ** 2 + b ** 2);
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
    static isRight(a, b, c) {
        const con1 = a ** 2 === b ** 2 + c ** 2;
        const con2 = b ** 2 === a ** 2 + c ** 2;
        const con3 = c ** 2 === a ** 2 + b ** 2;
        return con1 || con2 || con3;
    }

    /**
     * TODO: add functions for missing angles and sides with trigonometric functions
     *      - https://www.mathsisfun.com/algebra/trig-solving-triangles.html
     */
}
