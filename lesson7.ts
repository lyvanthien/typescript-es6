let isDone: boolean = false;
console.log(isDone); 
let decimal: number = 6;
console.log(decimal);
let color: string ='blue';
console.log(color);


let fullname: string = "ly van thien";
let age: number = 30;
let sentense: string = `
    Hello, Hi, my name is  ${ fullname }.
    I'll be ${ age + 4 } years old next month.
`;

console.log(sentense);

// enum data type in TypeScript
enum Color {Red, Green, Blue};
//enum Color {Red = 1, Green, Blue}
//enum Color {Red =1, Green = 2, Blue = 4};
let c: Color = Color.Green;

enum Color1 {Red =1 , Green, Blue};
let colorName: string = Color1[2];
console.log('colorName is :'+colorName);

console.log('value of  c :'+c);
// Array data type in TypeScript
let list: number[] = [10,20,30];
console.log(list[0]);
let list1: Array<number> = [100,200,300];
console.log(list1[2]);

// Tuple types in TypeScript
//Declare a tuple type
let tup: [string,number];
// Initialize it
tup = ["Hello, Lythienhoang",20];

console.log(tup[0].substr(0));
tup[3] = "world";
console.log(tup[3].toString());
//tup[4]=true; Fail


