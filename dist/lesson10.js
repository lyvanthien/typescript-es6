"use strict";
var getBonus = function (value) {
    if (value === void 0) { value = 10; }
    console.log('Value default is : ' + value);
};
getBonus();
var getBonus1 = function (value, tax) {
    if (value === void 0) { value = 10; }
    if (tax === void 0) { tax = 20; }
    //console.log('Value1 default is : '+ parseInt(value) + parseInt(tax));
    console.log('Value1 default is : ');
    console.log(value + tax);
};
getBonus1(15);
getBonus1(undefined, 40);
getBonus1(40, undefined);
var getBonus2 = function (value, tax, salary) {
    if (value === void 0) { value = 10; }
    if (tax === void 0) { tax = value * 0.1; }
    if (salary === void 0) { salary = 50; }
    //console.log('Value1 default is : '+ parseInt(value) + parseInt(tax));
    console.log('Value2 default is : ');
    console.log(value + tax);
    console.log(arguments.length);
};
getBonus2();
getBonus2(20, 30);
getBonus2(40, 50, 60);
var getPercent = function () { return 2; };
var getBonus3 = function (value, tax) {
    if (value === void 0) { value = 10; }
    if (tax === void 0) { tax = value * getPercent(); }
    //console.log('Value1 default is : '+ parseInt(value) + parseInt(tax));
    console.log('Value3 default is : ');
    console.log(value + tax);
    console.log(arguments.length);
};
getBonus3();
getBonus3(60);
getBonus3(undefined, 30);
//# sourceMappingURL=lesson10.js.map