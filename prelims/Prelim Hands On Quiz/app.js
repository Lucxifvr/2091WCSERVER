const calc = require('./calculation.js');

const Rate_HR = 300;
const Days = 6;
const Hrs = 4;
const Work_HR = calc.multiply(Days,Hrs);

const Gross = calc.multiply(Work_HR, Rate_HR);
const Tax = calc.multiply(Gross,0.1);
const SSS = 1200;
const Pag_ibig = 300;
const PhilHealth = 400;
const Deduct = calc.add(calc.add(Tax,SSS),calc.add(Pag_ibig,PhilHealth));

console.log('The gross income is ' + Gross);
console.log('Tax: ' + Tax);
console.log('SSS: ' + SSS);
console.log('Pag-Ibig fund: ' + Pag_ibig);
console.log('PhilHealth: ' + PhilHealth);
console.log('Total deductions: ' + Deduct);
console.log('The net salary is ' + calc.subtract(Gross,Deduct));