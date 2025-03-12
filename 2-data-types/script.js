//String
const firstName = 'Lily';

//Number
const age = 45;

const float = 34.56;

const temp = 34.38;

//Boolean
const isMarried = false;


// Null
const apt = null;


//Undefined
let surname;



//Symbol
const id = Symbol('id');



//BigInt
const n = 2384783948993275872398798n;



//reference types
//object

const num = [1, 2, 3, 4, 5];

//object literal
const person = {
    name: 'Sugar',
};

//function
function hello() {
    console.log('hiya');
}

const output = hello;

console.log(output, typeof output);

/*
1. Basic Data Types Practice
Task: Declare variables of each data type and log them to the console.
Data types to include:

String
Number
Boolean
Null
Undefined
Object
Array
*/

let string = "Howfar";
let number = 30;
let boolean = true;
let nul = null;
let nothing = undefined;
let object = {
    food: 'banga',
};

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(string, number, boolean, nul, nothing, object, array);


/*
2. Type Checking
Task: Write a function that checks the type of any value and returns a message like:
"This is a string" or "This is a number".

Hint: Use typeof
*/

function checkType(value) {
    console.log(`This is a ${typeof value}`);
}

checkType(4);
checkType('hello');
checkType(true);
checkType(undefined);


/*
3. String Manipulation
Task: Take a string, convert it to uppercase, lowercase, and find its length.
*/
let words = 'Shawarma';
console.log(words.toUpperCase());
console.log(words.toLowerCase());
console.log(words.length);

/*
4. Simple Calculator (Numbers)
Task: Create a function that takes two numbers and returns their sum, difference, product, and quotient.
*/
function calc(a, b) {
    console.log(`sum: ${a + b}`);
    console.log(`difference: ${a - b}`);
    console.log(`product: ${a * b}`);
    console.log(`quotient: ${a / b}`);
}

calc(23, 4);

/*
5. Boolean Logic
Task: Write a function that checks if a number is even or odd using a Boolean condition.
*/

function checkNum(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(checkNum(4));
console.log(checkNum(9));


