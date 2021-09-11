"use strict";
class Car {
    constructor(model, price) {
        this.model = model;
        this.price = price;
        this._millage = 15000;
    }
    getActualMillage() {
        const realMillage = this._millage + 5000;
        return realMillage;
    }
    getTotalPrice(tax) {
        const taxAmount = this.price * tax / 100;
        const total = this.price + taxAmount;
        return total;
    }
}
const toyota = new Car('Toyota', 354637);
const totalPrice = toyota.getTotalPrice(25);
