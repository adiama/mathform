import Converter from './converter.js';

export default function convert(value) {
    return new Converter(value);
}
