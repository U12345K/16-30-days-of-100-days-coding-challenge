"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function logHobbies(...hobbies) {
    hobbies.forEach(hobby => {
        console.log(`I enjoy ${hobby}.`);
    });
}
logHobbies("reading", "coding", "cycling");
