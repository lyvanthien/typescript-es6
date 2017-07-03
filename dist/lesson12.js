"use strict";
var displayColorsSpread = function (message) {
    var colors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colors[_i - 1] = arguments[_i];
    }
    console.log(message);
    for (var i_1 in colors) {
        console.log(colors[i_1]);
    }
};
var messSpread = "Hello";
var colors = ['Red', 'Green', 'Blue'];
displayColorsSpread.apply(void 0, [messSpread].concat(colors));
//# sourceMappingURL=lesson12.js.map