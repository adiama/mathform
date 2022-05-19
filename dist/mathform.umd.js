/*!
@fileoverview mathform - A collection of mathematical formulas, constants and algorithms
@author Alexandros Diamantonis <asdiamantonis@gmail.com>
@version 0.0.2-alpha.0

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
var t,e;t=this,e=function(t){class e{static area(t){return Math.PI*t**2}static circumference(t){return 2*Math.PI*t}static diameter(t){return 2*t}static radiusFromArea(t){return Math.sqrt(t/Math.PI)}static radiusFromCircumference(t){return t/(2*Math.PI)}static radiusFromDiameter(t){return t/2}}class r{static area(t,e){return.5*t*e}static altitude(t,e){return t/e*2}static base(t,e){return t/e*2}static perimeter(t,e,r){return t+e+r}static semiperimeter(t){return t/2}static areaSSS(t,e,r){const a=this.perimeter(t,e,r),s=this.semiperimeter(a);return Math.sqrt(s*(s-t)*(s-e)*(s-r))}static areaSAS(t,e,r){return.5*t*e*Math.sin(r)}static hypotenuse(t,e){return Math.sqrt(t**2+e**2)}static isRight(t,e,r){return t**2===e**2+r**2||e**2===t**2+r**2||r**2===t**2+e**2}}class a{static lateralArea(t,e){return 2*Math.PI*t*e}static totalArea(t,r){return a.lateralArea(t,r)+2*e.area(t)}static volume(t,e){return Math.PI*t**2*e}}var s=Object.freeze({__proto__:null,Circle:e,Triangle:r,Rectangle:class{static area(t,e){return t*e}static circumference(t,e){return 2*t+2*e}static diagonal(t,e){return r.hypotenuse(t,e)}static isSquare(t,e){return t===e}},Cone:class{static slantHeight(t,e){return r.hypotenuse(t,e)}static lateralArea(t,e){return Math.PI*t*this.slantHeight(t,e)}static totalArea(t,r){return this.lateralArea(t,r)+e.area(t)}static volume(t,e){return 1/3*Math.PI*t**2*e}},Cylinder:a,Sphere:class{static area(t){return 4*Math.PI*t**2}static volume(t){return 4/3*Math.PI*t**3}},Cuboid:class{static volume(t,e,r){return t*e*r}static area(t,e,r){return 2*(t*r+e*r+e*t)}static diagonal(t,e,r){return Math.sqrt(t**2+e**2+r**2)}static sideFromVolume(t,e,r){return t/(e*r)}static sideFromDiagonal(t,e,r){return Math.sqrt(t**2-e**2-r**2)}}}),i=Object.freeze({__proto__:null,degreesToRadians:t=>t*Math.PI/180,radiansToDegrees:t=>180*t/Math.PI,normalize:(t,e,r)=>(t-e)/(r-e)}),n=Object.freeze({__proto__:null,generateRandomInteger:(t,e)=>Math.floor(Math.random()*(e-t+1))+t,generateRandomFloat:(t,e)=>parseFloat(Math.random()*(e-t)+t),LCG:class{get modulus(){return this._m}get multiplier(){return this._a}get increment(){return this._c}get seed(){return this._X}constructor(t,e,r,a){this._m=t,this._a=e,this._c=r,this._X=a}step(){return this._iterate(),this.seed}_iterate(){this._X=(this.multiplier*this.seed+this.increment)%this.modulus}}}),u=Object.freeze({__proto__:null,isGreaterThanZero:(t,e,r=!0)=>{if(t<=0){if(r)throw new Error(`${e||'Value'} must be greater than 0.`);return!1}return!0},format:(t,e=2)=>parseFloat(parseFloat(t).toFixed(e))});t.convert=i,t.geometry=s,t.helpers=u,t.rng=n,Object.defineProperty(t,'__esModule',{value:!0})},'object'==typeof exports&&'undefined'!=typeof module?e(exports):'function'==typeof define&&define.amd?define(['exports'],e):e((t='undefined'!=typeof globalThis?globalThis:t||self).mathform={});
