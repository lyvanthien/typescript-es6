"use strict";
var isDone = false;
console.log(isDone);
var decimal = 6;
console.log(decimal);
var color = 'blue';
console.log(color);
var fullname = "ly van thien";
var age = 30;
var sentense = "\n    Hello, Hi, my name is  " + fullname + ".\n    I'll be " + (age + 4) + " years old next month.\n";
console.log(sentense);
// enum data type in TypeScript
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
//enum Color {Red = 1, Green, Blue}
//enum Color {Red =1, Green = 2, Blue = 4};
var c = Color.Green;
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 1] = "Red";
    Color1[Color1["Green"] = 2] = "Green";
    Color1[Color1["Blue"] = 3] = "Blue";
})(Color1 || (Color1 = {}));
;
var colorName = Color1[2];
console.log('colorName is :' + colorName);
console.log('value of  c :' + c);
// Array data type in TypeScript
var list = [10, 20, 30];
console.log(list[0]);
var list1 = [100, 200, 300];
console.log(list1[2]);
// Tuple types in TypeScript
//Declare a tuple type
var tup;
// Initialize it
tup = ["Hello, Lythienhoang", 20];
console.log(tup[0].substr(0));
tup[3] = "world";
console.log(tup[3].toString());
//tup[4]=true; Fail
//# sourceMappingURL=lesson7.js.map