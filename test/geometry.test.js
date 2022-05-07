import { expect } from 'chai';
import { geometry, format } from '../src/index.js';

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

    describe('geometry.Triangle', function () {
        describe('geometry.Triangle#area', function () {
            it('should be 0 when a = 0 and b = 0', function () {
                let area = geometry.Triangle.area(0, 0);
                expect(area).to.be.equal(0);
            });

            it('should be 0 when a = 1 and b = 0', function () {
                let area = geometry.Triangle.area(1, 0);
                expect(area).to.be.equal(0);
            });

            it('should be 0 when a = 0 and b = 1', function () {
                let area = geometry.Triangle.area(0, 1);
                expect(area).to.be.equal(0);
            });

            it('should be 0.5 when a = 1 and b = 1', function () {
                let area = geometry.Triangle.area(1, 1);
                expect(area).to.be.equal(0.5);
            });

            it('should be 1 when a = 1 and b = 2', function () {
                let area = geometry.Triangle.area(1, 2);
                expect(area).to.be.equal(1);
            });

            it('should be 1 when a = 2 and b = 1', function () {
                let area = geometry.Triangle.area(2, 1);
                expect(area).to.be.equal(1);
            });

            it('should be 2 when a = 2 and b = 2', function () {
                let area = geometry.Triangle.area(2, 2);
                expect(area).to.be.equal(2);
            });
        });

        describe('geometry.Triangle#altitude', function () {
            it('should test altitude');
        });

        describe('geometry.Triangle#base', function () {
            it('should test base');
        });

        describe('geometry.Triangle#perimeter', function () {
            it('should test perimeter');
        });

        describe('geometry.Triangle#semiperimeter', function () {
            it('should test semiperimeter');
        });

        describe('geometry.Triangle#areaSSS', function () {
            it('should test areaSSS');
        });

        describe('geometry.Triangle#areaSAS', function () {
            it('should test areaSAS');
        });

        describe('geometry.Triangle#hypotenuse', function () {
            it('should test hypotenuse');
        });

        describe('geometry.Triangle#isRight', function () {
            it('should test isRight');
        });
    });

    describe('geometry.Rectangle', function () {
        describe('geometry.Rectangle#area', function () {
            it('should test area');
        });

        describe('geometry.Rectangle#circumference', function () {
            it('should test circumference');
        });

        describe('geometry.Rectangle#diagonal', function () {
            it('should test diagonal');
        });

        describe('geometry.Rectangle#isSquare', function () {
            it('should test isSquare');
        });
    });

    describe('geometry.Sphere', function () {
        describe('geometry.Sphere#area', function () {
            it('should test area');
        });

        describe('geometry.Sphere#volume', function () {
            it('should test volume');
        });
    });

    describe('geometry.Cone', function () {
        describe('geometry.Cone#slantHeight', function () {
            it('should test slantHeight');
        });

        describe('geometry.Cone#lateralArea', function () {
            it('should test lateralArea');
        });

        describe('geometry.Cone#totalArea', function () {
            it('should test totalArea');
        });

        describe('geometry.Cone#volume', function () {
            it('should test volume');
        });
    });

    describe('geometry.Cylinder', function () {
        describe('geometry.Cylinder#lateralArea', function () {
            it('should test lateralArea');
        });

        describe('geometry.Cylinder#totalArea', function () {
            it('should test totalArea');
        });

        describe('geometry.Cylinder#volume', function () {
            it('should test volume');
        });
    });

    describe('geometry.Cuboid', function () {
        describe('geometry.Cuboid#', function () {
            it('should test functions');
        });
    });
});
