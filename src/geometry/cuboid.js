/**
 * @namespace geometry
 */

/**
 * Formulas related to cuboids.
 *
 * @class Cuboid
 * @memberof geometry
 */
export default class Cuboid {
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
    volume(w, h, l) {
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
    area(w, h, l) {
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
    diagonal(w, h, l) {
        return Math.sqrt(w ** 2 + h ** 2 + l ** 2);
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
    sideFromVolume(V, a, b) {
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
    sideFromDiagonal(d, a, b) {
        return Math.sqrt(d ** 2 - a ** 2 - b ** 2);
    }
}
