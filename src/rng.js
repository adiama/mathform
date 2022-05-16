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
export function generateRandomInteger(min, max) {
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
export function generateRandomFloat(min, max) {
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
export class LCG {
    get modulus() {
        return this._m;
    }

    get multiplier() {
        return this._a;
    }

    get increment() {
        return this._c;
    }

    get seed() {
        return this._X;
    }

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
     * @memberof! rng#LCG
     * @param {integer} Modulus     - 0 < m
     * @param {integer} Multiplier  - 0 < a < m
     * @param {integer} Increment   - 0 <= c < m
     * @param {number}  Seed        - 0 <= X0 < m
     * @constructor
     */
    constructor(modulus, multiplier, increment, seed) {
        this._m = modulus;
        this._a = multiplier;
        this._c = increment;
        this._X = seed;
    }

    /**
     * Iterates the algorithm once and returns the new seed
     *
     * @memberof! rng#LCG
     * @returns {integer}
     * @public
     */
    step() {
        this._iterate();
        return this.seed;
    }

    /**
     * Iterates the algorithm once
     *
     * @memberof! rng#LCG
     * @private
     */
    _iterate() {
        this._X = (this.multiplier * this.seed + this.increment) % this.modulus;
    }
}
