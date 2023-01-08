/**
 * Length is a measure of distance.
 *
 * In the International System of Quantities,
 *  length is a quantity with dimension distance.
 *
 * In most systems of measurement a base unit for length is chosen,
 *  from which all other units are derived.
 *
 * In the International System of Units (SI) system the base unit for length is the metre.
 *
 * {@link https://en.wikipedia.org/wiki/Length}
 */
export const Length = {
    nanometer: {
        name: {
            singular: 'nanometer',
            plural: 'nanometers',
        },
        system: SYSTEM.METRIC,
        symbol: 'nm',
        abbr: ['nanometer', 'nanometers', 'nm'],
        SI: 1 / 1000000000,
    },
    micrometer: {
        name: {
            singular: 'micrometer',
            plural: 'micrometers',
        },
        system: SYSTEM.METRIC,
        symbol: 'μm',
        abbr: ['micrometer', 'micrometers', 'μm'],
        SI: 1 / 1000000,
    },
    milimeter: {
        name: {
            singular: 'milimeter',
            plural: 'milimeters',
        },
        system: SYSTEM.METRIC,
        symbol: 'mm',
        abbr: ['milimeter', 'milimeters', 'mm'],
        SI: 1 / 1000,
    },
    centimeter: {
        name: {
            singular: 'centimeter',
            plural: 'centimeters',
        },
        system: SYSTEM.METRIC,
        symbol: 'cm',
        abbr: ['centimeter', 'centimeters', 'cm'],
        SI: 1 / 100,
    },
    meter: {
        name: {
            singular: 'meter',
            plural: 'meters',
        },
        system: SYSTEM.METRIC,
        symbol: 'm',
        abbr: ['meter', 'meters', 'm'],
        SI: 1,
    },
    kilometer: {
        name: {
            singular: 'kilometer',
            plural: 'kilometers',
        },
        system: SYSTEM.METRIC,
        symbol: 'km',
        abbr: ['kilometer', 'kilometers', 'km'],
        SI: 1 * 1000,
    },
    inch: {
        name: {
            singular: 'inch',
            plural: 'inches',
        },
        system: SYSTEM.IMPERIAL,
        symbol: 'in',
        abbr: ['inch', 'inches', 'in'],
        SI: 1 / 39.3701,
    },
    foot: {
        name: {
            singular: 'foot',
            plural: 'feet',
        },
        system: SYSTEM.IMPERIAL,
        symbol: 'ft',
        abbr: ['foot', 'feet', 'ft'],
        SI: 1 / 3.28084,
    },
    yard: {
        name: {
            singular: 'yard',
            plural: 'yards',
        },
        system: SYSTEM.IMPERIAL,
        symbol: 'yd',
        abbr: ['yard', 'yards', 'yd'],
        SI: 1 / 1.09361,
    },
    mile: {
        name: {
            singular: 'mile',
            plural: 'miles',
        },
        system: SYSTEM.IMPERIAL,
        symbol: 'mi',
        abbr: ['mile', 'miles', 'mi'],
        SI: 1 * 0.000621371,
    },
    nautical_mile: {
        name: {
            singular: 'nautical mile',
            plural: 'nautical miles',
        },
        system: SYSTEM.IMPERIAL,
        symbol: 'NM',
        abbr: ['nauticalmile', 'nauticalmiles', 'NM'],
        SI: 1 * 0.000539957,
    },
};

const SYSTEM = {
    METRIC: {
        name: 'METRIC',
        base: {
            LENGTH: UNIT.METER,
        },
    },
    IMPERIAL: {
        name: 'IMPERIAL',
        base: {
            LENGTH: UNIT.INCH,
        },
    },
};

const QUANTITY = {
    LENGTH: {
        name: 'LENGTH',
        si: UNIT.METER,
        units: [UNIT.METER],
    },
};

// QUANTITY[UNIT.METER.quantity].si.SI

const EXPRESSION = {
    METER: /(\b(MET|Met|met)(ER|RE|er|re)[Ss]*\b)|(\b(SI|Si|si)\b)|(\bm\b)/gm,
    NANOMETER: /(\b(NANO|Nano|nano)((MET|Met|met)(ER|RE|er|re)[Ss]*)\b)|(\bnm\b)/gm,
};

const UNIT = {
    METER: {
        symbol: 'm',
        system: SYSTEM.METRIC.name,
        quantity: QUANTITY.LENGTH.name,
        expression: /(\b(MET|Met|met)(ER|RE|er|re)[Ss]*\b)|(\b(SI|Si|si)\b)|(\bm\b)/gm,
        SI: 1,
    },
    NANOMETER: {
        symbol: 'nm',
        system: SYSTEM.METRIC.name,
        quantity: QUANTITY.LENGTH.name,
        expression: /(\b(NANO|Nano|nano)((MET|Met|met)(ER|RE|er|re)[Ss]*)\b)|(\bnm\b)/gm,
        SI: 1 / 1000000000,
    },
};

//https://regex101.com/r/nKJLgX/1
