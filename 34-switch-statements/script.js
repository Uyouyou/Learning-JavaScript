const d = new Date(2025, 1, 10, 8, 0, 0);
const month = d.getMonth();
const hour = d.getHours();

switch (month) {
    case 1:
        console.log('it is jan');
        break;
    case 2:
        console.log('it is feb');
        break;
    case 3:
        console.log('it is march');
        break;
    default:
        console.log('none');
}


switch (true) {
    case hour < 12:
        console.log('morning');
        break;

    case hour < 18:
        break;
        console.log('afternoon');
    case hour < 24:
        console.log('evening');
        break;
    default:
        console.log('none');
}

/*
1. Basic Calculator
Write a switch statement that takes a variable operator (which could be "+", "-", "*", "/") and two numbers num1 and num2, and prints the result of the operation.
*/
const operation = (num1, num2, operator) => {
    switch (operator) {
        case '+':
            return num1 + num2;
            break;
        case '-':
            return num1 - num2;
            break;
        case '*':
            return num1 * num2;
            break;
        case '/':
            return num1 / num2;
            break;
        default:
            return 'invalid';
    }
}

console.log(operation(12, 4, '-'));

/*2. Days of the Week
Create a program that takes a number (1 to 7) and uses a switch statement to print the corresponding day of the week (e.g., 1 = Monday, 2 = Tuesday, etc.).*/
const dayOfWeek = (day) => {
    switch (day) {
        case 1:
            return 'monday';
            break;
        case 2:
            return 'tuesday';
            break;
        case 3:
            return 'wednesday';

            break;
        case 4:
            return 'thursday';
            break;
        case 5:
            return 'friday';
            break;
        case 6:
            return 'saturday';
            break;
        case 7:
            return 'sunday';
            break;
        default:
            return 'invalid';
    }
}

console.log(dayOfWeek(4));

/*3. Grade Checker
Using a switch statement, write a program that takes a letter grade ("A", "B", "C", "D", "F") and prints a message:

"Excellent!" for A

"Good job!" for B

"Well done" for C

"You passed" for D

"Try again" for F

"Invalid grade" if it's none of these.*/
const gradeChecker = (grade) => {
    switch (grade) {
        case 'A':
            return 'excellent!';
            break;
        case 'B':
            return 'good job!';
            break;
        case 'C':
            return 'well done';
            break;
        case 'D':
            return 'you passed';
            break;
        case 'F':
            return 'try again';
            break;
        default:
            return 'invalid';
    }
}

console.log(gradeChecker('B'));

/*4. Simple Traffic Light
Write a switch statement that checks the value of a color variable ("red", "yellow", "green") and outputs:

"Stop" for red

"Ready" for yellow

"Go" for green

"Invalid color" otherwise.*/
const trafficLight = (color) => {
    switch (color) {
        case 'red':
            return 'stop';
            break;
        case 'yellow':
            return 'ready';
            break;
        case 'green':
            return 'go';
            break;
        default:
            return 'invalid';
    }
}

console.log(trafficLight('red'));

/*5. Month Name
Create a program that takes a number (1 to 12) and uses a switch statement to print the corresponding month name (e.g., 1 = January, 2 = February, etc.).*/
const monthName = (month) => {
    switch (month) {
        case 1:
            return 'jan';
            break;
        case 2:
            return 'feb';
            break;
        case 3:
            return 'mar';
            break;
        case 4:
            return 'apr';
            break;
        case 5:
            return 'may';
            break;
        case 6:
            return 'june';
            break;
        case 7:
            return 'july';
            break;
        case 8:
            return 'aug';
            break;
        case 9:
            return 'sep';
            break;
        case 10:
            return 'oct';
            break;
        case 11:
            return 'nov';
            break;
        case 12:
            return 'dec';
            break;
        default:
            return 'invalide';
    }
}

console.log(monthName(7));