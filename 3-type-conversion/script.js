//converting string to number
let amount = '100';

amount = parseInt(amount);
amount = +amount;
amount = Number(amount);

console.log(amount, typeof amount);

//converting number to string
let amount2 = 100;

amount2 = amount2.toString();
amount2 = String(amount2);

console.log(amount2, typeof amount2);

//converting string to decimal
let amount3 = '23.5';

amount3 = parseFloat(amount3);

console.log(amount3, typeof amount3);

//converting number to boolean
let amount4 = 1;

amount4 = Boolean(amount4);

console.log(amount4, typeof amount4);

/*
Convert Data Types:

Convert "123" (string) to a number.
Convert false to a string.
Convert undefined to a number.
Convert 42 (number) to a boolean.
*/

let num = '123';
num = parseInt(num);

console.log(num, typeof num);

let bool = false;
bool = String(bool);
console.log(bool, typeof bool);

let undef = undefined;
undef = Number(undefined);
console.log(undef, typeof undef);

let num2 = 42;
num2 = Boolean(num2);
console.log(num2, typeof num2);

/*
User Input Simulation:
Write a function that simulates taking user input (e.g., a prompt) and always returns it as a number, even if the user types a string like "10".
*/
function getInput() {
    let input = prompt('Enter a number');
    return Number(input);
}
getInput("10");

/*
Conditional Type Conversion:
Create a function that accepts a value and returns:

"Number" if it can be converted to a number,
"Boolean" if it can be converted to a boolean,
"String" otherwise.
*/

function getType(value) {
    if (Number(value)) {
        return "Number";
    } else if (Boolean(value)) {
        return "Boolean";
    } else {
        return "String";
    }
}


console.log(getType("hello"));

/*
Sum of Mixed Types:
Add these values and convert the result to a string: 5, "10", true.
*/

let sum = 5 + "10" + true;
sum = String(sum);
console.log(sum, typeof sum);

/*
Type-Safe Calculator:
Build a function that accepts two inputs and an operator (+, -, *, /). Ensure the inputs are always converted to numbers before performing the operation.
*/
function calc(a, b, operator) {

    a = Number(a);
    b = Number(b);

    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            return 'invalide';
    }
}

console.log(calc(3, 6, "/"));