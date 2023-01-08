// const TYPE = {
//     AREA: 'area',
//     LENGTH: 'length',
//     TEMPERATURE: 'temperature',
//     VOLUME: 'volume',
//     MASS: 'mass',
//     SPEED: 'speed',
//     TIME: 'time',
//     DATA: 'data',
//     ANGLE: 'angle'
// };

// const UNIT = {
//     ACRE: {
//         measurement: TYPE.AREA,
//         name: {
//             singular: 'acre',
//             plural: 'acres'
//         },
//         abbreviation: 'ac',
//         symbol: ''
//     },
// }

// function convert(value) {
//     this._value = value;
//     this._from = '';
//     this._to = '';

//     return {
//         from(unit) {
//             this._from = unit;
//             return this;
//         },
//         to(unit) {
//             this._to = this._convert(unit);
//             return this._to;
//         },

//     };

//     _convert() {

//     }
// }

// console.log(convert(90).from('deg').to('rad'));
// console.log(convert(90).from('degrees').to('radians'));
// console.log(convert(2.3).from('nautical miles').to('kilometers'));
// console.log(convert(2.3).from('nautical_miles').to('km'));

// console.log(convert(230).from(UNIT.MELIMETERS).to(UNIT.CENTIMETERS));
// console.log(convert(230).from(UNIT.MM).to(UNIT.CM));

// let m = convert(10);
// m = m.from('meters');
// console.log(m.value);
// console.log(m.from);

// let cm = m.to('cm');
// let mm = m.to('mm');

// km = mm.to('km');
// console.log(km);
// km = km.to;
// console.log(km);
// km = km.to('mm'); // expect error

import convert from './convert/index.js';

console.log(convert(50).from('m').to('km'));
let c = convert(50);
console.log(c);
console.log(c.value);

c.from('m');
console.log(c);
console.log(c.origin);

c.to('km');
console.log(c);
console.log(c.target);
console.log(c.result);
