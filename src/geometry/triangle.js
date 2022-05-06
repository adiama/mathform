/**
 * @namespace geometry
 */

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
     * @memberof! geometry.Triangle#
     * @param   {number} A  -   Height
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
     * @memberof! geometry.Triangle#
     * @param   {number} a  -   Side a
     * @param   {number} b  -   Side b
     * @param   {number} c  -   Side c
     * @returns {number}        &radic;s(s-a)(s-b)(s-c)
     * @static
     */
    static areaSSS(a, b, c) {
        let p = this.perimeter(a, b, c);
        let s = this.semiperimeter(p);
        return Math.sqrt(s * (s - a) * (s - b) * (s - c));
    }

    /**
     * Calculates the area of a triangle from Side-Angle-Side.
     *
     * Knowns Side-Angle-Side
     *
     * @memberof! geometry.Triangle#
     * @param   {number} a        - Side a
     * @param   {number} b        - Side b
     * @param   {number} theta    - Angle &theta;, in degrees
     * @returns {number}            (<sup>1</sup>&frasl;<sub>2</sub>)ab sin &theta;
     * @static
     */
    static areaSAS(a, b, theta) {
        return (1 / 2) * a * b * Math.sin(theta);
    }

    static areaASA(A, B, c) {
        let C = this.angleASA(A, B);
        let a = this.sideASA(c, C, A);
        let b = this.sideASA(c, C, B);
        return this.areaSSS(a, b, c);
    }

    static angleASA(A, B) {
        return 180 - (A + B);
    }

    static sideASA(a, A, theta) {
        return (a / Math.sin(A)) * Math.sin(theta);
    }

    static solve({
        base,
        altitude,
        sideA,
        sideB,
        sideC,
        angleA,
        angleB,
        angleC,
        area,
        perimeter,
        semiperimeter,
    }) {
        // AAA angleA && angleB && angleC
        // Can't solve base, altitude, area, perimeter, semiperimeter
        //      unless base && altitude || one side are given

        // AAS
        // ASA
        // SAS
        // SSA
        // SSS sideA && sideB && sideC

        return {
            base,
            altitude,
            sideA,
            sideB,
            sideC,
            angleA,
            angleB,
            angleC,
            area,
            perimeter,
            semiperimeter,
        };
    }

    /**
     * Uses the Pythagorean theorem to calculate the hypotenuse of a right triangle.
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
