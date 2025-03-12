//default params
function registerUser(user = 'Bot') {
    return user + ' is registered';
}

console.log(registerUser());

//rest params
function sum(...numbers) {
    return numbers;
}

console.log(sum(1, 2, 3, 4, 5));

function add(...num) {
    let total = 0;

    for (const numerals of num) {
        total += numerals;
    }

    return total;
}

console.log(add(1, 2, 3, 4, 5, 6));

//objects as params
function loginUser(user) {
    return `the user ${user.name} with the id of ${user.id} is logged in`;
}

const user = {
    id: 1,
    name: 'jay',
};

console.log(loginUser(user));

console.log(
    loginUser({
        id: 2,
        name: 'sara',
    })
);

//arrays as params
function getRandom(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);

    const item = arr[randomIndex];

    console.log(item);
}

getRandom([1, 2, 3, 4, 5, 6]);

/*
1. Sum of Two Numbers
Write a function add(a, b) that takes two numbers as arguments and returns their sum.
*/

function add(a, b) {
    return a + b;
}

console.log(add(3, 5));

/*
2. Greet a User
Create a function greet(name) that takes a person's name as a parameter and returns a greeting message.
*/

function greet(name) {
    return 'Hello ' + name;
}

console.log(greet('Alice'))

/*
3. Multiply Three Numbers
Write a function multiply(a, b, c) that takes three numbers as arguments and returns their product.
*/
function multiply(a, b, c) {
    return a * b * c;
}

console.log(multiply(2, 3, 4));

/*
4. Check if a Number is Even or Odd
Create a function isEven(num) that takes a number as an argument and returns "Even" if the number is even and "Odd" if it is odd.
*/
function isEven(num) {
    return num % 2 === 0 ? 'Even' : 'Odd';
}

console.log(isEven(4));

/*
5. Find the Maximum of Two Numbers
Write a function max(a, b) that takes two numbers as arguments and returns the larger number.
*/
function max(a, b) {
    return a > b ? a : b;
}

console.log(max(10, 20));

/*
6. Repeat a Word Multiple Times
Create a function repeatWord(word, times) that takes a word and a number as arguments and returns the word repeated the given number of times.
*/
function repeatWord(word, times) {
    return word.repeat(times);
}

console.log(repeatWord("hello", 3));