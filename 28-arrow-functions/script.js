function add(a, b) {
    return a + b;
}

console.log(add(1, 2));

//arrow functions
const subtract = (c, d) => {
    return c - d;
}

console.log(subtract(9, 3));

//implicit return
const multiply = (a, b) => a * b;

console.log(multiply(4, 6));

const double = a => a * 2;
console.log(double(4));

//returning an object
const constObj = () => ({
    name: 'Brad',
});

console.log(constObj());

//arrow function in a callback
const num = [1, 2, 3, 4, 5];

num.forEach((n) => console.log(n));

/* challeneg 1
write an arrow function that takes an array of numbers and returns a new array with each number doubled*/
const numbers = [1, 2, 3];

numbers.forEach((num) => console.log(num * 2))

/*challenge 2
create an arrow function that takes a name as input and returnsa greeting string*/
const name = (value) => {
    return "Hello " + value;
}

console.log(name("Sonia"));

/*challenge 3
write an arrow function that filters out the even numbers from an array*/
const evenNum = [1, 2, 3, 4, 5, 6];

const pickedNum = evenNum.filter(item => item % 2 === 0);

console.log(pickedNum)

/*challenge 4
create a one line arrow function that returns the sum of 2 numbers*/
const sum = (a, b) => a + b;

console.log(sum(2, 4));

/*challenge 5
write an arrow function that takes an array of words and returns an array of the first letters of each word*/
const words = ["apple", "ball", "sugar"];

words.forEach((word) => console.log(word.charAt()));

