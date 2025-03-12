const library = [
    {
        title: "the road ahead",
        author: "bill gates",
        status: {
            own: true,
            reading: false,
            read: false,
        },
    },
    {
        title: "dream count",
        author: "chimammanda adichie",
        status: {
            own: true,
            reading: false,
            read: false,
        },
    },
    {
        title: "angels and demons",
        author: "dan brown",
        status: {
            own: true,
            reading: false,
            read: false,
        },
    },
];

//set the read status of the book to true
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

console.log(library);

//destructure the title from the first book and rename the variable to firstBook
const [firstBook] = library;

console.log(library[0].title);

//turn the library object into a json string
const libJson = JSON.stringify(library);

console.log(libJson);

//Tasks
/*
1. Create and Parse JSON
Create a JavaScript object with your name, age, and favorite programming language. Convert it to a JSON string and then parse it back to an object.
*/
const person = {
    name: "Sonia",
    age: 27,
    faveLang: "Javascrpt",
};

const personJson = JSON.stringify(person);
console.log(personJson);

const personParse = JSON.parse(personJson);
console.log(personParse);

/*
2. Access JSON Data
Given the following JSON string:
{
  "name": "Sonia",
  "skills": ["JavaScript", "React", "Blockchain"],
  "experience": 2
}
Write JavaScript code to extract and log:

Your name
The second skill in the skills array
Your experience level
*/
const person1 = {
    "name": "Sonia",
    "skills": ["JavaScript", "React", "Blockchain"],
    "experience": 2
}

const person2 = `My name is ${person1.name}, and I am skilled at ${person1.skills} and my experience level is ${person1.experience}`;
console.log(person2);

/*
3. Modify JSON Object
Take the JSON object from Challenge 2, add a new key "country": "Nigeria", and remove the "experience" key. Log the updated object.
*/
person1.country = "Nigeria";
delete person1.experience;
console.log(person1);

/*
4. Loop Through JSON Array
Given the following JSON array:
[
  { "name": "Alice", "age": 25 },
  { "name": "Bob", "age": 30 },
  { "name": "Charlie", "age": 28 }
]
Write JavaScript code to loop through the array and log each person's name and age.
*/

const humans = [
    { "name": "Alice", "age": 25 },
    { "name": "Bob", "age": 30 },
    { "name": "Charlie", "age": 28 }
];

humans.forEach(person => {
    console.log(`Name: ${person.name}, Age: ${person.age}`);
});

