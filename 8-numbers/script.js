let x;

const num = new Number(5);

x = num.toString();

x = num.toString().length;

x = num.toFixed(2);

x = num.toPrecision(2);
x = num.toExponential(2);
x = num.toLocaleString('en-NG');
x = num.valueOf();
x = Number.MAX_VALUE;
x = Number.MIN_VALUE;
console.log(x);

/*
1. Basic Arithmetic Operations
Write a program that performs and prints the results of addition, subtraction, multiplication, and division using two numbers.
*/
let a = 10;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

/*
2. Modulus and Exponentiation
Find the remainder when 17 is divided by 4 and also calculate 
5
3
5 
3
*/

console.log(19 % 3);
console.log(4 ** 2);

/*
3. Rounding Numbers
Round a decimal number to the nearest integer using Math.round(), Math.floor(), and Math.ceil().
*/

let num1 = 7.8
Math.round(7.8);
Math.floor(7.8);
console.log(num1);