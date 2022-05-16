/**
 * @namespace convert
 */

export function degreesToRadians(degrees) {
    return (degrees * Math.PI) / 180;
}

export function radiansToDegrees(radians) {
    return (radians * 180) / Math.PI;
}

export function normalize(value, min, max) {
    return (value - min) / (max - min);
}
