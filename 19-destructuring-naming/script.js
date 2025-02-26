const firstName = 'john';
const lastName = 'doe';
const age = 40;

const person = {
    firstName,
    lastName,
    age
};

console.log(person.age);

const todo = {
    id: 1,
    title: 'stop her',
    user: {
        name: 'gina',
    },
};

const {
    id,
    title,
    user: { name },
} = todo;

console.log(name);

const num = [23, 45, 67, 88];

const [first, second, ...rest] = num;
console.log(first, second, rest);

/*
 Destructure an Object
Given the object below, extract the name and age properties using object destructuring.
*/
const girl = { name: "Sonia", age: 25, country: "Nigeria" };

function getPersonInfo(obj) {
    const { name, age } = obj;
    return `Name: ${name}, Age: ${age}`;

}

console.log(getPersonInfo(girl));
// Output: "Name: Sonia, Age: 25"

/*
 Destructure and Rename Variables
Destructure the person object and rename name to fullName and age to years.
*/

const live = { name: "Sonia", age: 25, country: "Nigeria" };

function renameProperties(obj) {
    const { name: fullName, age: years } = obj;
    return `Full Name: ${fullName}, Years: ${years}`;
}

console.log(renameProperties(live));
// Output: "Full Name: Sonia, Years: 25"

/*
Destructure an Array
Given the array below, extract the first and second items and return them in a sentence.
*/
const colors = ["red", "blue", "green"];

function getColors(arr) {
    const [firstColor, secondColor] = arr;
    return `First Color: ${firstColor}, Second Color: ${secondColor}`
}

console.log(getColors(colors));
// Output: "First color: red, Second color: blue"

/*
Destructure Function Parameters
Refactor the function below to use destructuring in its parameters.
*/
const car = { brand: "Toyota", model: "Camry", year: 2022 };

function carDetails(obj) {
    const { brand, model, year } = obj;
    return `Brand: ${obj.brand}, Model: ${obj.model}, Year: ${obj.year}`;
}

console.log(carDetails(car));
// Output: "Brand: Toyota, Model: Camry, Year: 2022"

/*
 Default Values with Destructuring
Modify the function below to use destructuring with default values for age (default: 18) and country (default: "Unknown").
*/
function userInfo({ name, age = 18, country = "Unknown" }) {
    return `Name: ${name}, Age: ${age}, Country: ${country}`;
}

console.log(userInfo({ name: "Sonia" }));
// Output: "Name: Sonia, Age: 18, Country: Unknown"

console.log(userInfo({ name: "John", age: 25, country: "Canada" }));
// Output: "Name: John, Age: 25, Country: Canada"




