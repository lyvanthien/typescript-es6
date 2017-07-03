function greetPerson(name) {
    let greet;
    if (name === "Ly Van Thien") {
        greet = "Hello Ly Van Thien";
    } else {
        greet = "Hello Ly Thien Hoang";
    }
    console.log(greet);
}
greetPerson("Ly Van Thien");

var a = 1;
let b = 2;

if (a === 1) {
    let b = 10;
    var a = 20;
}
console.log(a);
console.log(b);