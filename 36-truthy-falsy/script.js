/*falsy values:
- false
- 0
- "" or ' (empty string)
- null
- undefined
- NaN*/

const x = 0;

if (x) {
    console.log('truthy');
} else {
    console.log('falsy');
}

console.log(Boolean(x));

/*truthy values:
- everything else that is not falsy
- true
- '0' (0 in a string)
- '  ' (space in a string)
- 'false' (false in a string)
- [] (empty array)
- {} (empty object)
- function (){} (empty function)*/

const y = '0';

if (y) {
    console.log('truthy');
} else {
    console.log('falsy');
}

console.log(Boolean(y));

//truthy and falsy caveats
const children = 3;

if (!isNaN(children)) {
    console.log(`you have ${children} children`);
} else {
    console.log('please enter  number of children');
}

//check for empty arrays
const posts = [];

if (posts.length > 0) {
    console.log('list posts');
} else {
    console.log('no posts')
}

//check for empty objects
const user = {};

if (Object.keys(user).length > 0) {
    console.log('list user');
} else {
    console.log('no user');
}

//loose equality
console.log(false === 0);
console.log('' === 0);
console.log(null === undefined);

/*1. Check If a Value is Truthy or Falsy
Write a function checkTruthyFalsy(value) that prints:

"Truthy" if the value is truthy

"Falsy" if the value is falsy.*/
const checkValue = (value) => {
    if (value) {
        console.log('truthy');
    } else {
        console.log('falsy');
    }
}

checkValue(0);
checkValue('hello');

/*2. Default Value with OR Operator
Create a variable username.
If username is falsy, set it to "Guest".
Print the final username.*/
let username = "";
username = username || 'Guest';
console.log(username);

/*3. Simple Login Check
You have a variable isLoggedIn.
Write a function that:

Prints "Welcome back!" if isLoggedIn is truthy,

Prints "Please log in." if it's falsy.*/
const isLoggedIn = false;
function loginCheck() {
    if (isLoggedIn) {
        console.log('welcome back');
    } else {
        console.log('please log in');
    }
}

loginCheck();

/*4. Filter Out Falsy Values from an Array
Given an array [0, "Hello", false, "", 42, null, "World", undefined],
write code to create a new array with only the truthy values.*/
const arr = [0, "hello", false, "", 42, null, "world", undefined];
const truthArr = arr.filter(Boolean);
console.log(truthArr);


/*5. Short-Circuit Evaluation
Create a variable input = "".
Use the || operator to assign a default value "Default input" to a new variable finalInput.
Print finalInput.*/
let input = "";
const finalInput = input || 'Default input';

console.log(finalInput);