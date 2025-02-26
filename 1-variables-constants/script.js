//declaraing variables: using let keyword
let firstName = 'John';
let lastName = 'Doe';
let age = 20;

console.log(firstName, lastName, age);

//Naming conventions in JavaScript:
/*
- only letters, numbers, underscores and dollar sign
- cannot start with a number.
camelCase: firstName, lastName
snake_case: first_name, last_name
PascalCase: FirstName, LastName
Upper Case with Underscore (Used for constants): MAX_LENGTH
*/


//re-assigning variables
let simpleName = 'Candy';

simpleName = 'Bisi';

console.log(simpleName);

let score;

score = 4;

console.log(score);



/*
Task 1: Store and Display Information
Instructions:

Create variables for your name, age, and favorite color.
Use console.log() to display the information.
*/
let myName = 'Sonia';
let myAge = 27;
let favColor = 'red';

console.log("My name is " + myName + ". I am " + myAge + " years old. My fave color is " + favColor);

/*
Task 2: Basic Calculator
Instructions:

Declare two variables a and b and assign them numbers.
Create a third variable that stores their sum.
Display the result in the console.
Bonus: Try subtraction, multiplication, and division as well.
*/

let a = 9;
let b = 5;
let sum = a + b;
console.log(sum);

let subtraction = a - b;
console.log(subtraction);

let multiplication = a * b;
console.log(multiplication);

let division = a / b;
console.log(division);


/*
Task 3: Swap Two Variables
Instructions:

Declare two variables x and y, with values 5 and 10.
Swap their values without directly assigning them.
*/
let x = 5;
let y = 10;

let tempX = y;
y = x;

console.log(tempX, y);

/*
Task 4: Temperature Converter
Instructions:

Create a variable celsius and assign a value (e.g., 30).
Convert it to Fahrenheit using this formula: fahrenheit = (celsius * 9/5) + 32
Display the Fahrenheit value in the console.
*/
let celsius = 30;
let fahrenheit = (celsius * 9 / 5) + 32;
console.log(fahrenheit);


/*
Task 5: Constants Practice
Instructions:

Use const to declare a constant for the value of Pi (3.14159).
Create a variable for the radius of a circle (e.g., 5).
Calculate the area of the circle (area = Pi * radius * radius) and display it.
*/

const PI = 3.14159;
let radius = 5;
let area = PI * radius * radius;
console.log(area);

/*
Task 6: String Manipulation
Instructions:

Create a variable with a sentence like "I am learning JavaScript!".
Extract and display the first word.
Convert the sentence to uppercase and lowercase.
*/

let sentence = 'I am learning Javascript!';
let firstWord = sentence.split('')[0];
let uppercase = sentence.toUpperCase();
let lowercase = sentence.toLowerCase();
console.log(firstWord);
console.log(uppercase)
console.log(lowercase);

/*
Task 7: Simple Quiz
Instructions:

Declare a variable for a question: "What is 2 + 2?"
Declare a second variable for the correct answer.
Display the question and answer using console.log().
*/

let question = 'What is 2  + 2? ';
let answer = '= 4';
console.log(question, answer);