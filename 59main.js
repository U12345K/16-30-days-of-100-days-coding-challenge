"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function makeAdder(valueToAdd) {
    return function (number) { return number + valueToAdd; };
}
let addFive = makeAdder(5);
console.log(addFive(10));
