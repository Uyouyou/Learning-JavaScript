if (true) {
    console.log(
        'true'
    )
}

const x = 10;
const y = 5;

if (x > y) {
    console.log(`${x} is greater than ${y}`);
}

if (x === y) {
    console.log(`${x} is equal to ${y}`);
} else {
    console.log(`${x} is not equal to ${y}`);
}

if (x !== y) {
    const z = 20;
    console.log(`${z} is 20`);
}

//shorthand if
if (x >= y) console.log(`${x} is greater than or equal to ${y}`);
else console.log('false')

/*challenge 1
write a program that takes a number and tells the user if it's even or odd*/
function check(num) {
    if (num % 2 === 0) {
        console.log(`${num} is an even number`)
    } else {
        console.log(`${num} is an odd number`);
    }
}

check(3);

/*challenge 2
ask the user to input their age. if they are 18 or older, display you are eligible to vote otherwise you are not eligible to vote*/
function age(value) {
    if (value > 18) {
        console.log('you are eligible to vote')
    } else {
        console.log('you are not eligible to vote')
    }
}

age(14);

/*challenge 3
write a program that takes 2 numbers and prints the greater one*/
const a = 8;
const b = 13

if (a > b) {
    console.log(`${a} is greater than ${b}`)
} else {
    console.log(`${b} is greater than ${a}`)
}

/*challenge 4
take a students score (0-100) and print their grades using
a: 90 - 100
b: 80 - 89
c: 70 - 79
d: 60 - 69
e: below 60*/
function grade(value) {
    if (value >= 100) {
        console.log('A: 90 - 100')
    } else if (value >= 80) {
        console.log('B: 80 - 89')
    } else if (value >= 70) {
        console.log('C: 70 - 79')
    } else if (value >= 60) {
        console.log('D: 60 - 69')
    } else {
        console.log('Below 60')
    }
}

grade(16);

/*challenge 5
ask for the current temperature and tell the user:
"it's cold" if it is less than 15c
"it is moderate" if it is moderate if it is between 15 and 30
"it's hot" if it is above 30*/
function weather(value) {
    if (value < 15) {
        console.log('it is cold')
    } else if (value === 15 && 30) {
        console.log('it is moderate')
    } else {
        console.log('it is hot')
    }
}

weather(0)