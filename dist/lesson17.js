"use strict";
person12(); // use declare support for hoisting
function person12() { } // use declare support for hoisting
// let p =new Person(); // Error
var Person = (function () {
    function Person() {
    }
    Person.prototype.run = function () {
        console.log('Person is running...');
    };
    return Person;
}());
var p1 = new Person();
p1.run();
console.log(p1.run === Person.prototype.run);
//console.log(typeof p1);
//console.log("typeof Person is: " + typeof Person);
//# sourceMappingURL=lesson17.js.map