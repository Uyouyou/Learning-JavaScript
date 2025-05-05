//loop through arrays
const items = ['book', 'pen', 'eraser', 'biro'];

for (const item of items) {
    console.log(item)
}

const users = [
    { name: 'brad' },
    { name: 'sara' },
    { name: 'suzi' }
];

for (const user of users) {
    console.log(user.name)
}

//loop through strings
const str = 'hello world';

for (const letter of str) {
    console.log(letter)
}

//loop through maps
const map = new Map();
map.set('name', 'brad');
map.set('age', 30);

for (const [key, value] of map) {
    console.log(key, value);
}

/*1. Print Each Letter in a Word
Use a for...of loop to print each character in this string:let word = "coding";
*/
let word = "coding";
for (const letter of word) {
    console.log(letter);
}

/*2. Sum All Numbers in an Array
Use a for...of loop to calculate the total of all numbers in this array:let numbers = [3, 7, 2, 9, 4];
*/
let numbers = [3, 7, 2, 9, 4];
let total = 0;
for (const num of numbers) {
    total += num;
    console.log(total)
}

/*3. Capitalize Each Fruit Name
Given:let fruits = ["apple", "banana", "cherry"];
Use for...of to print each fruit in uppercase.*/
let fruits = ["apple", "banana", "cherry"];
for (const fruit of fruits) {
    console.log(fruit.toUpperCase());
}

/*4. Count Vowels in a Word
Use for...of to count how many vowels are in this string:let word = "javascript";
*/
let words = "javascript";
let vowels = "aeiou";
let count = 0;
for (const letter of words) {
    if (vowels.includes(letter)) {
        count++;
    }

    console.log('number of vowels: ', count)
}

/*5. Double the Numbers in an Array (and store them)
Given: let nums = [1, 2, 3, 4];
Use for...of to create a new array with all numbers doubled.*/
let nums = [1, 2, 3, 4];
let doubled = [];
for (const num of nums) {
    doubled.push(num * 2);
    console.log(doubled)
}