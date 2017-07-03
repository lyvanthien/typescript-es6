"use strict";
/* let displayColors = function(){
    for(let i in arguments){
        console.log(arguments[i]);
    }
}

let displayColors = function(...colors: string[]){
    console.log(colors);
    for(let i in arguments){
        console.log(arguments[i]);
    }
}

displayColors('Red');
displayColors('Red','Green');
displayColors('Red','Green','Blue');
*/
var displayColors1 = function (message) {
    var colors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colors[_i - 1] = arguments[_i];
    }
    console.log('displayColors1 has message : ' + message);
    console.log('displayColors1 has colors : ' + colors);
    for (var i_1 in arguments) {
        console.log(arguments[i_1]);
    }
    //console.log(arguments.length);
};
var mess = "Hello";
displayColors1(mess, 'Red');
displayColors1(mess, 'Red', 'Green');
displayColors1(mess, 'Red', 'Green', 'Blue');
var displayColors2 = function () {
    var colors = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        colors[_i] = arguments[_i];
    }
    console.log('displayColors1 has message : ');
    console.log('displayColors1 has colors : ' + colors);
    for (var i_2 in arguments) {
        console.log(arguments[i_2]);
    }
    //console.log(arguments.length);
};
var mess1 = "Hello";
displayColors2(mess1, 'Red');
displayColors2(mess1, 'Red', 'Green');
displayColors2(mess1, 'Red', 'Green', 'Blue');
//# sourceMappingURL=lesson11.js.map