import * as mathform from '../src/index.js';

import chai, { expect } from 'chai';
chai.should();
import chaiThings from 'chai-things';
chai.use(chaiThings);

describe('mathform.format', function () {
    it('should format 1.434 as 1.43', function () {
        let n = mathform.helpers.format(1.434);
        expect(n).to.be.equal(1.43);
    });

    it('should format 1.436 as 1.44', function () {
        let n = mathform.helpers.format(1.436);
        expect(n).to.be.equal(1.44);
    });

    it('should format "1.432" as 1.43', function () {
        let n = mathform.helpers.format('1.432');
        expect(n).to.be.equal(1.43);
    });

    it('should format "1.432" as 1.4', function () {
        let n = mathform.helpers.format('1.432', 1);
        expect(n).to.be.equal(1.4);
    });

    it('should format "1.432" as 1', function () {
        let n = mathform.helpers.format('1.432', 0);
        expect(n).to.be.equal(1);
    });

    it('should format "1.6" as 2', function () {
        let n = mathform.helpers.format('1.6', 0);
        expect(n).to.be.equal(2);
    });

    it('should format 1 as 1', function () {
        let n = mathform.helpers.format(1, 100);
        expect(n).to.be.equal(1);
    });
});

describe('namespace: rng', function () {
    describe('mathform.rng#generateRandomInteger', function () {
        it(`should test generateRandomInteger 50 times and all should be integers >= 0 and <= 5`, function () {
            let numbers = [];
            for (let i = 0; i < 50; i++) {
                numbers.push(mathform.rng.generateRandomInteger(0, 5));
            }

            numbers.should.all.satisfy(Number.isInteger);
            numbers.should.all.be.greaterThanOrEqual(0);
            numbers.should.all.be.lessThanOrEqual(5);
        });

        it(`should test generateRandomInteger 1000 times and all should be integers >= 0 and <= 100`, function () {
            let numbers = [];
            for (let i = 0; i < 1000; i++) {
                numbers.push(mathform.rng.generateRandomInteger(0, 100));
            }

            numbers.should.all.satisfy(Number.isInteger);
            numbers.should.all.be.greaterThanOrEqual(0);
            numbers.should.all.be.lessThanOrEqual(100);
        });
    });

    describe('mathform.rng#generateRandomFloat', function () {
        it(`should test generateRandomFloat 100 times and all should be floats >= 0 and < 1`, function () {
            let numbers = [];
            for (let i = 0; i < 100; i++) {
                numbers.push(mathform.rng.generateRandomFloat(0, 1));
            }

            numbers.should.all.be.greaterThanOrEqual(0);
            numbers.should.all.be.lessThan(1);
        });

        it(`should test generateRandomFloat 100 times and all should be floats >= 0 and < 0.1`, function () {
            let numbers = [];
            for (let i = 0; i < 100; i++) {
                numbers.push(mathform.rng.generateRandomFloat(0, 0.1));
            }

            numbers.should.all.be.greaterThanOrEqual(0);
            numbers.should.all.be.lessThan(0.1);
        });

        it(`should test generateRandomFloat 10000 times and all should be floats >= 1 and < 1.0001`, function () {
            let numbers = [];
            for (let i = 0; i < 10000; i++) {
                numbers.push(mathform.rng.generateRandomFloat(1, 1.0001));
            }

            numbers.should.all.be.greaterThanOrEqual(1);
            numbers.should.all.be.lessThan(1.0001);
        });
    });

    describe('mathform.rng#LCG', function () {
        describe('LCG with ZX81 parameters', function () {
            let n = 2 ** 16;
            let modulus = n + 1;
            let multiplier = 75;
            let increment = 74;
            let seed = mathform.rng.generateRandomInteger(0, n);

            let lcg = new mathform.rng.LCG(modulus, multiplier, increment, seed);

            it(`should be 0 <= integer <= ${n} and pass ${n} tests (which is how many iterations to repeat a result)`, function (cb) {
                let numbers = [];
                while (numbers[numbers.length - 1] !== seed) {
                    numbers.push(lcg.step());
                }

                numbers.length.should.equal(n);
                numbers.should.all.satisfy(Number.isInteger);
                numbers.should.all.be.greaterThanOrEqual(0);
                numbers.should.all.be.lessThanOrEqual(n);
                cb();
            });
        });
    });
});

describe('namespace: helpers', function () {
    describe('mathform.helpers#isGreaterThanZero', function () {
        it('should return true when 1 is passed as value', function () {
            expect(mathform.helpers.isGreaterThanZero(1)).to.be.true;
        });

        it('should return true when 1 is passed as value and strict is false', function () {
            expect(mathform.helpers.isGreaterThanZero(1, '', false)).to.be.true;
        });

        it(`should throw an Error containing 'must be greater than 0.' when 0 is passed as the value`, function () {
            expect(() => mathform.helpers.isGreaterThanZero(0, '')).to.throw(
                Error,
                /must be greater than 0./
            );
        });

        it('should return false when 0 is passed as value and strict is false', function () {
            expect(mathform.helpers.isGreaterThanZero(0, '', false)).to.be.false;
        });

        it(`should throw an Error containing 'must be greater than 0.' when a negative is passed as the value`, function () {
            expect(() => mathform.helpers.isGreaterThanZero(-1, '')).to.throw(
                Error,
                /must be greater than 0./
            );
        });

        it('should return false when a negative is passed as value and strict is false', function () {
            expect(mathform.helpers.isGreaterThanZero(-1, '', false)).to.be.false;
        });

        it(`should throw Error('Radius must be greater than 0.') when a negative value and 'Radius' are passed as arguments`, function () {
            expect(() => mathform.helpers.isGreaterThanZero(-2, 'Radius')).to.throw(
                Error,
                'Radius must be greater than 0.'
            );
        });
    });
});

describe('namespace: convert', function () {
    describe('mathform.convert#degreesToRadians', function () {
        it('should convert 0 degrees to 0 radians', function () {
            let radians = mathform.convert.degreesToRadians(0);
            expect(radians).to.equal(0);
        });

        it('should convert 45 degrees to PI / 4 radians', function () {
            let radians = mathform.convert.degreesToRadians(45);
            expect(radians).to.equal(Math.PI / 4);
        });

        it('should convert 90 degrees to PI / 2 radians', function () {
            let radians = mathform.convert.degreesToRadians(90);
            expect(radians).to.equal(Math.PI / 2);
        });

        it('should convert 180 degrees to PI radians', function () {
            let radians = mathform.convert.degreesToRadians(180);
            expect(radians).to.equal(Math.PI);
        });

        it('should convert 270 degrees to PI * 1.5 radians', function () {
            let radians = mathform.convert.degreesToRadians(270);
            expect(radians).to.equal(Math.PI * 1.5);
        });

        it('should convert 360 degrees to PI * 2 radians', function () {
            let radians = mathform.convert.degreesToRadians(360);
            expect(radians).to.equal(Math.PI * 2);
        });
    });

    describe('mathform.convert#radiansToDegrees', function () {
        it('should convert 0 radians to 0 degrees', function () {
            let degrees = mathform.convert.radiansToDegrees(0);
            expect(degrees).to.equal(0);
        });

        it('should convert PI / 4 radians to 45 degrees', function () {
            let degrees = mathform.convert.radiansToDegrees(Math.PI / 4);
            expect(degrees).to.equal(45);
        });

        it('should convert PI / 2 radians to 90 degrees', function () {
            let degrees = mathform.convert.radiansToDegrees(Math.PI / 2);
            expect(degrees).to.equal(90);
        });

        it('should convert PI radians to 180 degrees', function () {
            let degrees = mathform.convert.radiansToDegrees(Math.PI);
            expect(degrees).to.equal(180);
        });

        it('should convert PI * 1.5 radians to 270 degrees', function () {
            let degrees = mathform.convert.radiansToDegrees(Math.PI * 1.5);
            expect(degrees).to.equal(270);
        });

        it('should convert PI * 2 radians to 360 degrees', function () {
            let degrees = mathform.convert.radiansToDegrees(Math.PI * 2);
            expect(degrees).to.equal(360);
        });
    });

    describe('mathform.convert#normalize', function () {
        it('should normalize 50 to 0.5 when min = 0 and max = 100', function () {
            let n = mathform.convert.normalize(50, 0, 100);
            expect(n).to.equal(0.5);
        });

        it('should normalize 50 to 0.05 when min = 0 and max = 1000', function () {
            let n = mathform.convert.normalize(50, 0, 1000);
            expect(n).to.equal(0.05);
        });

        it('should normalize 5 to 0.005 when min = 0 and max = 1000', function () {
            let n = mathform.convert.normalize(5, 0, 1000);
            expect(n).to.equal(0.005);
        });

        it('should normalize 150 to 0.5 when min = 100 and max = 200', function () {
            let n = mathform.convert.normalize(150, 100, 200);
            expect(n).to.equal(0.5);
        });

        it('should normalize 0 to 0 when min = 0 and max = 100', function () {
            let n = mathform.convert.normalize(0, 0, 100);
            expect(n).to.equal(0);
        });

        it('should normalize 100 to 1 when min = 0 and max = 100', function () {
            let n = mathform.convert.normalize(100, 0, 100);
            expect(n).to.equal(1);
        });

        it('should normalize 0.1 to 0.1 when min = 0 and max = 1', function () {
            let n = mathform.convert.normalize(0.1, 0, 1);
            expect(n).to.equal(0.1);
        });
    });
});
