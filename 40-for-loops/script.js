//for ([initialExpression]; [conditionExpression]; [incrementExpression]) statement;
//Initial Expression - Initializes a variable/counter
// Condition expression - condition that the loop will continue to run as long as it is met or until the condition is false
// increment expression - expression that will be executed after each iteration of the loop. usualyy increments the variable.
// statement - code that will be executed each time the loop is run. to execute a 'block' of code use the '{}' syntax.

for (let i = 0; i <= 10; i++) {
    if (i === 7) {
        console.log('7 is my lucky number')
    } else {
        console.log('number ' + i)
    }

}

//nested loops
for (let i = 1; i <= 10; i++) {
    console.log('number ' + i);

    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

//loop through an array
const names = ['brad', 'sara', 'zara', 'tim'];

for (let i = 0; i < names.length; i++) {
    if (i === 1) {
        console.log('sara is the best')
    } else {
        console.log(names[i]);
    }

}

/*
1. Print Numbers 1 to 10
Use a for loop to print numbers from 1 to 10 in the console.*/
for (let i = 1; i <= 10; i++) {
    console.log(i)
}

/*
2. Sum of Numbers from 1 to 100
Write a for loop that calculates the sum of numbers from 1 to 100 and logs the result.

*/
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
    console.log(sum);
}

/*3. Print Even Numbers from 1 to 20
Use a for loop to print all even numbers between 1 and 20.*/
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}

/*4. Loop Through an Array
Given this array:
let fruits = ["apple", "banana", "cherry", "date"];
Use a for loop to print each fruit in the array.*/
let fruits = ["apple", "banana", "cherry", "date"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}

/*5. Reverse Count from 10 to 1
Use a for loop to count down from 10 to 1 and print each number.*/
for (let i = 10; i >= 1; i--) {
    console.log(i)
}