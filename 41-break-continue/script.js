//break
for (let i = 0; i <= 20; i++) {
    if (i === 15) {
        console.log('breaking...');
        break;
    }

    console.log(i)
}

//continue
for (let i = 0; i <= 20; i++) {
    if (i === 13) {
        console.log('skipping 13...');
        continue;
    }

    console.log(i)
}

/*1. Stop Loop at 5
Write a for loop from 1 to 10. Use break to stop the loop when the number is 5.*/
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log('breaking at 5');
        break;
    }

    console.log(i)
}

/*2. Skip 5
Write a for loop from 1 to 10. Use continue to skip the number 5 (don't print it).*/
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log('continue at 5...');
        continue;
    }

    console.log(i)
}

/*3. Print First 3 Even Numbers
Write a loop from 1 to 20. Use continue to skip odd numbers, and break to stop after printing the first 3 even numbers.*/
for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log('skipping odd numbers');
        continue;
    } else if (i === 3) {
        console.log('breaking after first 3 numbers');
        break;
    }

    console.log(i)
}

/*4. Skip Multiples of 3
Loop from 1 to 15 and use continue to skip numbers that are divisible by 3 (use % operator).*/
for (let i = 1; i <= 15; i++) {
    if (i % 3 === 0) {
        console.log('skip numbers divisible by 3');
        continue;
    }

    console.log(i)
}

/*5. Break When Word is Found
Loop through this array:let words = ["hello", "world", "javascript", "break", "continue"];
Use a loop to print each word, but stop the loop completely when the word "break" is found.*/
let words = ["hello", "world", "javascript", "break", "continue"];
for (let i = 0; i < words.length; i++) {
    if (words[i] === 'break') {
        console.log('stopping at break...');
        break;
    }

    console.log(words[i])
}