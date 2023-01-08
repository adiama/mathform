export default class Converter {
    get value() {
        return this._value;
    }

    get origin() {
        return this._origin;
    }

    get target() {
        return this._target;
    }

    get result() {
        return this._result;
    }

    constructor(value) {
        this._value = value;
    }

    from(quantity) {
        this._origin = this._unit(quantity);
        return this;
    }

    to(quantity) {
        if (
            typeof quantity === 'undefined' ||
            quantity === null ||
            quantity === '' ||
            quantity === 'si' ||
            quantity === 'SI' ||
            quantity === 'Si'
        ) {
            // this._target = this._unit(quantity);
            this._result = value * origin.SI;
        } else {
            this._target = this._unit(quantity);
            this._result = (value * origin.SI) / target.SI;
        }

        return this.result;
    }

    toSI() {
        return this.to();
    }

    _unit(quantity) {}
}
