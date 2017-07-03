"use strict";
var calculateSalary = function () {
    return 10000;
};
//let calculateSalaryArrow = () => 20000;
var calculateSalaryArrow = function (bonus, tax) { return 20000 + bonus - tax; };
console.log('calculateSalary : ' + calculateSalary());
console.log('calculateSalaryArrow :' + calculateSalaryArrow(1000, 100));
//# sourceMappingURL=lesson8.js.map