let x;

x = Math.sqrt(9);
x = Math.abs(9);
x = Math.round(4.5);
x = Math.ceil(4.2);
x = Math.floor(4.2);
x = Math.pow(2, 3);
x = Math.max(2, 4, 5);
x = Math.min(3, 5, 6);
x = Math.random();
x = Math.floor(Math.random() * 10 + 1);

console.log(x);

/*
Generate a Random Number
Write a function that generates a random number between 1 and 100.
*/
function randomNum() {
    return Math.floor(Math.random() * 100 + 1);
}

console.log(randomNum());

/*
Round a Number
Given a floating-point number, round it to the nearest integer using Math.round().
*/
let y;
y = Math.round(4.43);
console.log(y);

/*
Find the Maximum and Minimum
Write a function that takes an array of numbers and returns both the maximum and minimum values using Math.max() and Math.min().
*/
function arrayNum(numbers) {
    return {
        max: Math.max(...numbers),
        min: Math.min(...numbers)
    };
}

console.log(arrayNum([1, 2, 3, 4, 5]));

/*
Calculate the Square Root
Write a function that takes a number as input and returns its square root using Math.sqrt().
*/

function sqrt(num) {
    return Math.sqrt(num);
}

console.log(sqrt(9));

/*
Power of a Number
Write a function that takes two numbers as input (base and exponent) and returns the result of raising the base to the exponent using Math.pow().
*/
function digits(base, expo) {
    return Math.pow(base, expo);
}

console.log(digits(4, 6));