import { expect } from 'chai';
import { geometry, format } from 'mathform';

describe('geometry namespace', function () {
    describe('geometry.Circle', function () {
        it('should match numbers of area and circumference when r = 2', function () {
            let r = 2;
            let area = geometry.Circle.area(r);
            let circumference = geometry.Circle.circumference(r);
            expect(area).to.be.equal(circumference);
        });

        describe('geometry.Circle#area', function () {
            it('should be 0 when r = 0', function () {
                let area = geometry.Circle.area(0);
                expect(area).to.be.equal(0);
            });

            it('should be 0.031415926535897934 when r = 0.1', function () {
                let area = geometry.Circle.area(0.1);
                expect(area).to.be.equal(0.031415926535897934);
            });

            it('should be Math.PI when r = 1', function () {
                let area = geometry.Circle.area(1);
                expect(area).to.be.equal(Math.PI);
            });

            it('should be formatted as 12.57 when r = 2', function () {
                let area = format(geometry.Circle.area(2));
                expect(area).to.be.equals(12.57);
            });
        });

        describe('geometry.Circle#circumference', function () {
            it('should be 0 when r = 0', function () {
                let circumference = geometry.Circle.circumference(0);
                expect(circumference).to.be.equal(0);
            });

            it('should be 0.6283185307179586 when r = 0.1', function () {
                let circumference = geometry.Circle.circumference(0.1);
                expect(circumference).to.be.equal(0.6283185307179586);
            });

            it('should be 6.283185307179586 when r = 1', function () {
                let circumference = geometry.Circle.circumference(1);
                expect(circumference).to.be.equal(6.283185307179586);
            });

            it('should be formatted as 12.57 when r = 2', function () {
                let circumference = format(geometry.Circle.circumference(2));
                expect(circumference).to.be.equal(12.57);
            });
        });

        describe('geometry.Circle#diameter', function () {
            it('should be 0 when r = 0', function () {
                let diameter = geometry.Circle.diameter(0);
                expect(diameter).to.be.equal(0);
            });

            it('should be 0.2 when r = 0.1', function () {
                let diameter = geometry.Circle.diameter(0.1);
                expect(diameter).to.be.equal(0.2);
            });

            it('should be 2 when r = 1', function () {
                let diameter = geometry.Circle.diameter(1);
                expect(diameter).to.be.equal(2);
            });

            it('should be 4 when r = 2', function () {
                let diameter = geometry.Circle.diameter(2);
                expect(diameter).to.be.equal(4);
            });
        });

        describe('geometry.Circle#radiusFromArea', function () {
            it('should be 0 when A = 0', function () {
                let radius = geometry.Circle.radiusFromArea(0);
                expect(radius).to.be.equal(0);
            });

            it('should be 0.1 when A = 0.031415926535897934', function () {
                let radius = geometry.Circle.radiusFromArea(0.031415926535897934);
                expect(radius).to.be.equal(0.1);
            });

            it('should be 1 when A = Math.PI', function () {
                let radius = geometry.Circle.radiusFromArea(Math.PI);
                expect(radius).to.be.equal(1);
            });

            it('should be formatted as 2 when A = 12.57', function () {
                let radius = format(geometry.Circle.radiusFromArea(12.57));
                expect(radius).to.be.equal(2);
            });
        });

        describe('geometry.Circle#radiusFromCircumference', function () {
            it('should be 0 when C = 0', function () {
                let radius = geometry.Circle.radiusFromCircumference(0);
                expect(radius).to.be.equal(0);
            });

            it('should be 0.1 when C = 0.6283185307179586', function () {
                let radius = geometry.Circle.radiusFromCircumference(0.6283185307179586);
                expect(radius).to.be.equal(0.1);
            });

            it('should be 1 when C = 6.283185307179586', function () {
                let radius = geometry.Circle.radiusFromCircumference(6.283185307179586);
                expect(radius).to.be.equal(1);
            });

            it('should be formatted as 2 when C = 12.57', function () {
                let radius = format(geometry.Circle.radiusFromCircumference(12.57));
                expect(radius).to.be.equal(2);
            });
        });

        describe('geometry.Circle#radiusFromDiameter', function () {
            it('should be 0 when d = 0', function () {
                let radius = geometry.Circle.radiusFromDiameter(0);
                expect(radius).to.be.equal(0);
            });

            it('should be 0.1 when d = 0.2', function () {
                let radius = geometry.Circle.radiusFromDiameter(0.2);
                expect(radius).to.be.equal(0.1);
            });

            it('should be 1 when d = 2', function () {
                let radius = geometry.Circle.radiusFromDiameter(2);
                expect(radius).to.be.equal(1);
            });

            it('should be 2 when d = 4', function () {
                let radius = geometry.Circle.radiusFromDiameter(4);
                expect(radius).to.be.equal(2);
            });
        });
    });
});
