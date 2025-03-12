function sayHello() {
    console.log('hello world');
}

sayHello();

function add(num1, num2) {
    console.log(num1 + num2);
}

add(4, 6);

function subtract(num1, num2) {
    return num1 - num2;
}

console.log(subtract(20, 5));

/*
1. Write a Function to Add Two Numbers
Create a function called addNumbers that takes two parameters and returns their sum.
*/
function addNumbers(num1, num2) {
    return num1 + num2;
}

console.log(addNumbers(6, 18));

/*
2. Function to Check Even or Odd
Write a function isEven that takes a number as an argument and returns "Even" if the number is even, otherwise "Odd".
*/

function isEven(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}

console.log(isEven(4));

/*
3. Function to Find the Largest Number in an Array
Write a function findLargest that takes an array of numbers as an argument and returns the largest number.
*/

function findLargest(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

console.log(findLargest([3, 5, 7, 2, 8]));

/*
4. Function to Reverse a String
Write a function reverseString that takes a string as input and returns the reversed version of the string.
*/

function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString('hello'));

/*
5. Function to Count Vowels in a String
Write a function countVowels that takes a string and returns the number of vowels (a, e, i, o, u) in it.
*/
function countVowels(str) {
    let count = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

console.log(countVowels('a,e,i,o,u'))