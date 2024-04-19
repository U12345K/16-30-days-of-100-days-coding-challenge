"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let laptop = {
    make: "Dell",
    model: "XPS 15",
    year: 2021,
    describe: function () {
        console.log(`this laptop ia a ${this.year} ${this.make} ${this.model}.`);
    }
};
laptop.describe();
