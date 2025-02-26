//arithmetic operators
let x;

x = 10 + 5;
x = 10 - 5;
x = 10 * 5;
x = 10 / 5;
x = 10 % 5;

console.log(x);

//concatenation
x = 'hello' + ' ' + 'world';
console.log(x);

//exponent
x = 2 ** 3;
console.log(x);

//increment
x = 1;
x++;
console.log(x);

//decrement
x--;
console.log(x);

//assigment
x = 10;

x += 5;
x -= 5;
x *= 5;
x /= 5;
x %= 5;
x **= 5;

console.log(x);

//comparison
x = 2 == '2';

x = 2 === '2';

x = 2 != '2';

x = 2 !== '2';

x = 10 > 5;

x = 10 < 5;

x = 10 >= 5;

x = 10 <= 5;

console.log(x);

/*
1. Basic Arithmetic Calculator
Create a function that takes two numbers and performs all basic arithmetic operations (+, -, *, /, %) on them. Print the results.
*/
function basicMath(a, b) {
   console.log(a + b);
   console.log(a - b)
   console.log(a * b);
   console.log(a / b);
   console.log(a % b);
}

basicMath(10, 5);

/*
2. Compare Ages
Write a function that compares the ages of two people and returns:

"Person A is older" if the first age is greater.
"Person B is older" if the second age is greater.
"They are the same age" if the ages are equal.

**/
function ageCom(a, b) {
    if (a > b){
        return "Person A is older";
    } else if (b > a) {
        return "Person B is older";
    } else {
        return "They are the same age";
    }
}

console.log(ageCom(19, 5));

/*
3. Voting Eligibility Checker
Build a function that takes a person’s age and returns whether they are eligible to vote (age 18 or older). Use the ternary operator (condition ? true : false).
*/

function voteEli(age) {
    return age >= 18 ? true : false;
}

console.log(voteEli(15));

/*
4. Even or Odd
Write a function that takes a number and checks if it’s even or odd using the modulus operator (%).
*/
function checkNum(data) {
    return data % 2 === 0 ? "Even" : "Odd";
}

console.log(checkNum(4));

/*
5. Simple Logical Game
Create a game function where:

If x is greater than 10 and less than 20, print "In range".
If x is less than 10 or greater than 20, print "Out of range".
Use logical operators (&&, ||) to handle the conditions.
*/

function game(x) {
    if (x > 10 && x < 20) {
        return "in range";
    } else if ( x < 10 || x > 20) {
        return "out of range";
    } else {
        return  "invalid";
    }
}

console.log(game(30));