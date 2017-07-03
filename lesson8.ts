let calculateSalary = function(){
    return 10000;
}

//let calculateSalaryArrow = () => 20000;
let calculateSalaryArrow = (bonus: number, tax: number) => 20000+bonus-tax;

console.log('calculateSalary : '+calculateSalary());
console.log('calculateSalaryArrow :'+calculateSalaryArrow(1000,100));