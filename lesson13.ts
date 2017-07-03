var employees = ['A','B','C'];

let [emp1,emp2,emp3]= employees;

console.log(emp1);
console.log(emp2);
console.log(emp3);

let [,,employ3] = employees;
console.log(employ3);

let [em1,...em2] = employees;
console.log(em1);
console.log(em2);

let [...emn2] = employees;
//console.log(emn1);
console.log(emn2[0]);