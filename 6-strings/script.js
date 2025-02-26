let x;

const name = 'Bisi';
const age = 35;

x = 'hello, my name is ' + name + ' and i am ' + age + ' years old';

x = `hello, my name is ${name} and i am ${age} years old`;

const s = new String('hello world');

x = s.length;
x = s[1];
x = s.toUpperCase();
x = s.toLowerCase();
x = s.charAt(0);
x = s.indexOf('h');
x = s.substring(0, 4);
x = s.substring(7);
x = s.slice(0, 5);
x = s.replace('world', 'Peace');
x = s.includes('hello');
x = s.valueOf();
x = s.split('');
console.log(x);

/*
1. String Length
Write a program that takes a string and prints its length.
*/

let str = 'hello, javacsript!';

console.log(str.length);

/*
2. Accessing Characters
Write a program that prints the first and last character of a given string.
*/
let str2 = 'programming';
console.log(str2.charAt(0));
console.log(str2.charAt(10));

/*
3. Changing Case
Convert a string to uppercase and lowercase.
*/

let text = 'javascript is fun!';
console.log(text.charAt(0).toUpperCase() + text.substring(1, 17));
console.log(text.charAt(0).toLowerCase() + text.substring(1, 17));

/*
4. String Concatenation
Combine two strings and print the result.
*/
let fname = 'hailey';

let lname = 'bailey';

console.log(`${fname} ${lname}`);

/*
5. Extracting a Substring
Extract the word "JavaScript" from the string below.
*/

let sen = 'i love javascript oh!';
console.log(sen.slice(7, 18));

/*
6. Replacing a Word
Replace "bad" with "good" in the given sentence.
*/
let sen2 = 'this is a bad idea.';
console.log(sen2.replace('bad', 'good'));

/*
7. Splitting a String
Convert a sentence into an array of words.
*/

let sen3 = 'learning javascript is fun!';
console.log(sen3.split(' '));

/*
8. Checking If a String Contains a Word
Check if the word "JavaScript" exists in the string.
*/
let sen4 = 'i am learning javascript';
console.log(sen4.includes('javascript'));

/*
9. Removing Whitespace
Trim unnecessary spaces from a string.
*/
let sen5 = '              hello, world!  ';
console.log(sen5.trim());

/*
10. Counting Occurrences of a Character
Count how many times the letter "a" appears in a string.
*/
let sen6 = 'javascript is amazing';
let count = 0;

for (let i = 0; i < sen6.length; i++) {
    if (sen6[i] === 'a') {
        count++;
    }
}

console.log(count); 
