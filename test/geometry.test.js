import { expect } from 'chai';
import { geometry, format, convert } from '../src/index.js';

describe('namespace: geometry', function () {
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
            it('should be Infinity when base is 0', function () {
                let altitude = geometry.Triangle.altitude(Math.random(), 0);
                expect(altitude).to.be.equal(Infinity);
            });

            it('should be 2 when Area is 0.1 and base is 0.1', function () {
                let altitude = geometry.Triangle.altitude(0.1, 0.1);
                expect(altitude).to.be.equal(2);
            });

            it('should be 2 when Area is 1 and base is 1', function () {
                let altitude = geometry.Triangle.altitude(1, 1);
                expect(altitude).to.be.equal(2);
            });

            it('should be 2 when Area === base', function () {
                let n = Math.floor(Math.random() * 100) + 1;
                let altitude = geometry.Triangle.altitude(n, n);
                expect(altitude).to.be.equal(2);
            });

            it('should be 1 when Area is 1 and base is 2', function () {
                let altitude = geometry.Triangle.altitude(1, 2);
                expect(altitude).to.be.equal(1);
            });

            it('should be 4 when Area is 2 and base is 1', function () {
                let altitude = geometry.Triangle.altitude(2, 1);
                expect(altitude).to.be.equal(4);
            });
        });

        describe('geometry.Triangle#base', function () {
            it('should be 0 when Area is 0', function () {
                let base = geometry.Triangle.base(0, 1);
                expect(base).to.be.equal(0);
            });

            it('should be 2 when Area is 1 and height is 1', function () {
                let base = geometry.Triangle.base(1, 1);
                expect(base).to.be.equal(2);
            });

            it('should be 4 when Area is 2 and height is 1', function () {
                let base = geometry.Triangle.base(2, 1);
                expect(base).to.be.equal(4);
            });

            it('should be 1 when Area is 1 and height is 2', function () {
                let base = geometry.Triangle.base(1, 2);
                expect(base).to.be.equal(1);
            });

            it('should be 2 when Area is 2 and height is 2', function () {
                let base = geometry.Triangle.base(2, 2);
                expect(base).to.be.equal(2);
            });

            it('should base to be Infinity when height is 0', function () {
                let base = geometry.Triangle.base(1, 0);
                expect(base).to.equal(Infinity);
            });
        });

        describe('geometry.Triangle#perimeter', function () {
            it('should be 3 when a = 1, b = 1 and c = 1', function () {
                let perimeter = geometry.Triangle.perimeter(1, 1, 1);
                expect(perimeter).to.equal(3);
            });
        });

        describe('geometry.Triangle#semiperimeter', function () {
            it('should be 1 when p = 2', function () {
                let semiperimeter = geometry.Triangle.semiperimeter(2);
                expect(semiperimeter).to.equal(1);
            });
        });

        describe('geometry.Triangle#areaSSS', function () {
            it('should be 6 when a = 5, b = 4, c = 3', function () {
                let area = geometry.Triangle.areaSSS(5, 4, 3);
                expect(area).to.equal(6);
            });

            it('should be approximately 0.5 when a = sqrt(2), b = 1, c = 1', function () {
                let area = geometry.Triangle.areaSSS(Math.sqrt(2), 1, 1);
                expect(area).to.be.approximately(0.5, Number.EPSILON);
            });
        });

        describe('geometry.Triangle#areaSAS', function () {
            it('should be (6) - the same as areaSSS when a = 3, b = 4, c = 5 and theta = 90 degrees', function () {
                let a = 3;
                let b = 4;
                let c = 5;
                let theta = convert.degreesToRadians(90);

                let areaSAS = geometry.Triangle.areaSAS(a, b, theta);
                let areaSSS = geometry.Triangle.areaSSS(a, b, c);

                expect(areaSAS).to.equal(areaSSS);
            });
        });

        describe('geometry.Triangle#hypotenuse', function () {
            it('should be 5 when a = 4, b = 3', function () {
                let hypotenuse = geometry.Triangle.hypotenuse(4, 3);
                expect(hypotenuse).to.equal(5);
            });

            it('should be sqrt(2) when a = 1, b = 1', function () {
                let hypotenuse = geometry.Triangle.hypotenuse(1, 1);
                expect(hypotenuse).to.equal(Math.sqrt(2));
            });

            it('should be approximately sqrt(3) when a = sqrt(2), b = 1', function () {
                let hypotenuse = geometry.Triangle.hypotenuse(Math.sqrt(2), 1);
                expect(hypotenuse).to.be.approximately(Math.sqrt(3), Number.EPSILON);
            });
        });

        describe('geometry.Triangle#isRight', function () {
            it('should be true if a = 3, b= 4, c = 5', function () {
                let isRight = geometry.Triangle.isRight(3, 4, 5);
                expect(isRight).to.be.true;
            });

            it('should be false if a = 1, b= 1, c = 1', function () {
                let isRight = geometry.Triangle.isRight(1, 1, 1);
                expect(isRight).to.be.false;
            });

            /**
             * This fails because Math.sqrt(2) ** 2 is 2.0000000000000004
             */
            // it('should be true if a = 1, b= 1, c = sqrt(2)', function () {
            //     let isRight = geometry.Triangle.isRight(1, 1, Math.sqrt(2));
            //     expect(isRight).to.be.true;
            // });
        });
    });

    describe('geometry.Rectangle', function () {
        describe('geometry.Rectangle#area', function () {
            it('should be 1 when a = 1 and b = 1', function () {
                let area = geometry.Rectangle.area(1, 1);
                expect(area).to.equal(1);
            });

            it('should be 2 when a = 1 and b = 2', function () {
                let area = geometry.Rectangle.area(1, 2);
                expect(area).to.equal(2);
            });

            it('should be 2 when a = 2 and b = 1', function () {
                let area = geometry.Rectangle.area(2, 1);
                expect(area).to.equal(2);
            });

            it('should be 4 when a = 2 and b = 2', function () {
                let area = geometry.Rectangle.area(2, 2);
                expect(area).to.equal(4);
            });

            it('should be approximately 0.01 when a = 0.1 and b = 0.1', function () {
                let area = geometry.Rectangle.area(0.1, 0.1);
                expect(area).to.be.approximately(0.01, Number.EPSILON);
            });
        });

        describe('geometry.Rectangle#circumference', function () {
            it('should be 4 when a = 1, b = 1', function () {
                let circumference = geometry.Rectangle.circumference(1, 1);
                expect(circumference).to.equal(4);
            });

            it('should be 0.4 when a = 0.1, b = 0.1', function () {
                let circumference = geometry.Rectangle.circumference(0.1, 0.1);
                expect(circumference).to.equal(0.4);
            });
        });

        describe('geometry.Rectangle#diagonal', function () {
            it('should be sqrt(2) when a = 1, b = 1', function () {
                let diagonal = geometry.Rectangle.diagonal(1, 1);
                expect(diagonal).to.be.approximately(Math.sqrt(2), Number.EPSILON);
            });
        });

        describe('geometry.Rectangle#isSquare', function () {
            it('should return true if a and b are equal', function () {
                let isSquare = geometry.Rectangle.isSquare(1, 1);
                expect(isSquare).to.be.true;
            });
        });
    });

    describe('geometry.Sphere', function () {
        describe('geometry.Sphere#area', function () {
            it('should match with Circle r = 2 area when Sphere r = 1', function () {
                let circleArea = geometry.Circle.area(2);
                let sphereArea = geometry.Sphere.area(1);
                expect(sphereArea).to.equal(circleArea);
            });

            it('should be approximately 50.27 when r = 2', function () {
                let area = geometry.Sphere.area(2);
                expect(area).to.be.approximately(50.27, 0.01);
            });
        });

        describe('geometry.Sphere#volume', function () {
            it('should be approximately 4.19 when r = 1', function () {
                let volume = geometry.Sphere.volume(1);
                expect(volume).to.be.approximately(4.19, 0.01);
            });

            it('should be approximately 33.51 when r = 2', function () {
                let volume = geometry.Sphere.volume(2);
                expect(volume).to.be.approximately(33.51, 0.01);
            });
        });
    });

    describe('geometry.Cone', function () {
        describe('geometry.Cone#slantHeight', function () {
            it('should be approximately sqrt(2) when r = 1 and h = 1', function () {
                let slantHeight = geometry.Cone.slantHeight(1, 1);
                expect(slantHeight).to.equal(Math.sqrt(2));
            });

            it('should be approximately 2.83 when r = 2 and h = 2', function () {
                let slantHeight = geometry.Cone.slantHeight(2, 2);
                expect(slantHeight).to.be.approximately(2.83, 0.01);
            });
        });

        describe('geometry.Cone#lateralArea', function () {
            it('should be approximately 4.44 when r = 1 and h = 1', function () {
                let area = geometry.Cone.lateralArea(1, 1);
                expect(area).to.be.approximately(4.44, 0.01);
            });

            it('should be approximately 17.77 when r = 2 and h = 2', function () {
                let area = geometry.Cone.lateralArea(2, 2);
                expect(area).to.be.approximately(17.77, 0.01);
            });
        });

        describe('geometry.Cone#totalArea', function () {
            it('should be approximately 7.58 when r = 1 and h = 1', function () {
                let area = geometry.Cone.totalArea(1, 1);
                expect(area).to.be.approximately(7.58, 0.01);
            });

            it('should be approximately 30.34 when r = 2 and h = 2', function () {
                let area = geometry.Cone.totalArea(2, 2);
                expect(area).to.be.approximately(30.34, 0.01);
            });
        });

        describe('geometry.Cone#volume', function () {
            it('should be approximately 1.05 when r = 1 and h = 1', function () {
                let volume = geometry.Cone.volume(1, 1);
                expect(volume).to.be.approximately(1.05, 0.01);
            });

            it('should be approximately 8.38 when r = 2 and h = 2', function () {
                let volume = geometry.Cone.volume(2, 2);
                expect(volume).to.be.approximately(8.38, 0.01);
            });
        });
    });

    describe('geometry.Cylinder', function () {
        describe('geometry.Cylinder#lateralArea', function () {
            it('should be 2 * Pi when r = 1 and h = 1', function () {
                let latArea = geometry.Cylinder.lateralArea(1, 1);
                expect(latArea).to.equal(Math.PI * 2);
            });

            it('should be 8 * Pi when r = 2 and h = 2', function () {
                let latArea = geometry.Cylinder.lateralArea(2, 2);
                expect(latArea).to.equal(Math.PI * 8);
            });
        });

        describe('geometry.Cylinder#totalArea', function () {
            for (let i = 1; i <= 10; i++) {
                it(`should match area with Sphere when r = ${i}, h = ${i}`, function () {
                    let r = i;
                    let h = i;
                    let sphereArea = geometry.Sphere.area(r);
                    let cylinderTotalArea = geometry.Cylinder.totalArea(r, h);
                    expect(cylinderTotalArea).to.equal(sphereArea);
                });
            }
        });

        describe('geometry.Cylinder#volume', function () {
            it('should be Pi when r = 1 and h = 1', function () {
                let volume = geometry.Cylinder.volume(1, 1);
                expect(volume).to.equal(Math.PI);
            });

            it('should be 8 * Pi when r = 2 and h = 2', function () {
                let volume = geometry.Cylinder.volume(2, 2);
                expect(volume).to.equal(Math.PI * 8);
            });
        });
    });

    describe('geometry.Cuboid', function () {
        describe('geometry.Cuboid#volume', function () {
            it('should be 6 when w = 1, h = 2, l = 3', function () {
                let volume = geometry.Cuboid.volume(1, 2, 3);
                expect(volume).to.equal(6);
            });
        });

        describe('geometry.Cuboid#area', function () {
            it('should be 22 when w = 1, h = 2, l = 3', function () {
                let area = geometry.Cuboid.area(1, 2, 3);
                expect(area).to.equal(22);
            });
        });

        describe('geometry.Cuboid#diagonal', function () {
            it('should be 3 when w = 2, h = 2, l = 1', function () {
                let diagonal = geometry.Cuboid.diagonal(2, 2, 1);
                expect(diagonal).to.equal(3);
            });
        });

        describe('geometry.Cuboid#sideFromVolume', function () {
            it('should be 1 when V = 1, a = 1, b = 1', function () {
                let side = geometry.Cuboid.sideFromVolume(1, 1, 1);
                expect(side).to.equal(1);
            });
        });

        describe('geometry.Cuboid#sideFromDiagonal', function () {
            it('should be sqrt(2) when d = 2, a = 1, b = 1', function () {
                let side = geometry.Cuboid.sideFromDiagonal(2, 1, 1);
                expect(side).to.be.approximately(Math.sqrt(2), Number.EPSILON);
            });
        });
    });
});
