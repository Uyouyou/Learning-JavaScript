let i = 0;

while (i <= 20) {
    console.log('number ' + i);
    i++;
}

//loop over arrays
const arr = [10, 20, 30, 40];
let j = 0;
while (j < arr.length) {
    console.log(arr[j]);
    j++;
}

//nesting while loops
let k = 1;
while (k <= 5) {
    console.log('number ' + k);

    let l = 1;
    while (l <= 5) {
        console.log(`${k} * ${l} = ${k * l}`);
        l++;
    }

    k++;
}


//do while loop
let m = 1;

do {
    console.log('number ' + m);
    m++;
} while (m <= 20);

/*1. Print Numbers 1 to 5 (using while)
Use a while loop to print numbers from 1 to 5.*/
let n = 1;
while (n <= 5) {
    console.log('number ' + n);
    n++;
}

/*2. Countdown from 10 to 1 (using while)
Create a while loop that counts down from 10 to 1 and prints each number.*/
let o = 10;
while (o >= 1) {
    console.log('number ' + o);
    o--;
}

/*3. Print Numbers 1 to 5 (using do...while)
Use a do...while loop to print numbers from 1 to 5.*/
let p = 1;

do {
    console.log('number ' + p);
    p++;
} while (p <= 5);

/*4. Prompt Until Correct Answer (do...while)
Simulate a number guessing game. Keep asking the user to guess the number until they get it right.
(Use prompt() in the browser; assume the correct number is 7.)*/
let guess;
const correctNum = 7;

do {
    guess = parseInt(prompt('guess the number between 1 - 10'));
} while (guess !== correctNum);

alert('correct! the number is ' + correctNum);

/*5. Sum Numbers Until Total is Over 100
Use a while loop to keep adding numbers (starting from 1) until the sum is more than 100. Then print the sum.*/
let sum = 0;
let q = 1;
while (sum <= 100) {
    sum += q;
    q++;
    console.log('sum is ' + sum);
}