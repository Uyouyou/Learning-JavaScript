let x;
const arr = [12, 45, 67, 89];

arr.push(56);

arr.pop();

arr.unshift(34);

arr.shift();

arr.reverse();

x = arr.includes(46);

x = arr.indexOf(45);

x = arr.slice(1, 4);

x = arr.splice(1, 4).reverse().toString().charAt(0);

console.log(x);

/*
1️⃣ Sum of All Numbers
Write a function that takes an array of numbers and returns the sum of all elements.
*/
function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

console.log(sumArray([1, 2, 3, 4, 5]));

/*
2️⃣ Find the Largest Number
Write a function that takes an array of numbers and returns the largest number.
*/
function findLargest(arr) {
    return Math.max(...arr);
}

console.log(findLargest([3, 4, 67, 3]));

/*
3️⃣ Filter Even Numbers
Write a function that takes an array of numbers and returns a new array containing only even numbers.
*/

function filterEvens(arr) {
    return arr.filter(num => num % 2 === 0);
}

console.log(filterEvens([1, 2, 3, 4, 5]));

/*
4️⃣ Reverse an Array
Write a function that reverses an array without using .reverse().
*/

function reverseArray(arr) {
    return arr.map((_, i) => arr[arr.length - 1 - i]);
}

console.log(reverseArray([1, 2, 3, 4]));

/*
5️⃣ Count Occurrences of an Element
Write a function that takes an array and a value, then returns the number of times the value appears in the array.
*/
function countOccurrences(arr, value) {
    return arr.filter(num => num === value).length;
}

console.log(countOccurrences([1, 2, 4, 4, 4, , 3, 3, 6], 4));