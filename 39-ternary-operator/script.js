const age = 13;

age >= 18 ? console.log('vote') : console.log('no vote');

const canVote = age >= 18 ? true : false;

console.log(canVote);

const auth = true;
let redirect;

if (auth) {
    alert('welcome');
    redirect = '/home';
} else {
    alert('access denied');
    redirect = '/login';
}

console.log(redirect);

/*1. Even or Odd Checker
Write a function that takes a number and uses a ternary operator to print:

"Even" if the number is even

"Odd" if the number is odd.*/
function Checker(num) {
    return num % 2 === 0 ? 'even' : 'odd';
}

console.log(Checker(5));

/*2. Age Permission
Given an age, use a ternary operator to print:

"Allowed" if age is 18 or older

"Not allowed" if age is below 18.*/
function ageCheck(age) {
    return age >= 18 ? 'allowed' : 'not allowed';
}

console.log(ageCheck(23));

/*3. Positive, Negative, or Zero
Write a function that takes a number and:

Prints "Positive" if the number is greater than 0

Prints "Negative" if less than 0

Prints "Zero" if exactly 0.

Use nested ternary operators.

*/
function checkNum(num) {
    return num > 0 ? 'positive' : num < 0 ? 'negative' : 'zero';
}

console.log(checkNum(2));

/*4. Short Message Based on Login
Given a variable isLoggedIn,
use a ternary operator to set a variable message:

"Welcome back!" if isLoggedIn is true

"Please log in" if false.

Then print message.*/
function logIn(isLoggedIn) {
    return isLoggedIn ? 'welcome back' : 'please log in';
}

console.log(logIn(true));

/*5. Shortest of Two Strings
Write a function that takes two strings, and uses a ternary operator to return the shorter string.
If they are equal in length, return "Equal length".*/
function strings(str1, str2) {
    return str1.length < str2.length ? str1 : str1.length > str2.length ? str2 : 'equal length';
}

console.log(strings('sofia', 'zara'));