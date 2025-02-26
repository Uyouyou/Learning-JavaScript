let x;

const person = {
    name: 'Jay',
    age: 23,
    isAdmin: false,
    address: {
        street: '123 main st',
        city: 'boston',
        state: 'ma'
    },
    hobbies: ['games', 'sleep'],
};

x = person.name;
x = person['age'];
x = person.address.state;
x = person.hobbies[1];
person.name = 'Tiya';
person['isAdmin'] = true;
delete person.age;
person.hasKids = true;
person.greet = function () {
    console.log(`hello, my name na ${this.name}`);
}

person.greet();
x = person;

const person2 = {
    'first name': 'son',
    'last name': 'elo',
};

x = person2['first name'];
console.log(x);

/*
1️⃣ Access an Object Property
Write a function that takes a person object and returns the person's age.
*/

function getAge(person) {
    return person.age;
}

console.log(getAge({ name: "Sonia", age: 25 })); // Output: 25

/*
2️⃣ Add a New Property to an Object
Write a function that takes an object and a new property-value pair, then returns the updated object.
*/


function addProperty(obj, key, value) {
    obj[key] = value;
    return obj;
}

console.log(addProperty({ name: "Sonia" }, "age", 25));
// Output: { name: "Sonia", age: 25 }

/*
3️⃣ Loop Through an Object
Write a function that takes an object and logs all key-value pairs in the format: "key: value".
*/
function printObject(obj) {
    for (let key in obj) {
        console.log(`${key}: ${obj[key]}`);
    }
}

printObject({ name: "Sonia", age: 25, country: "Nigeria" });
// Output:
// name: Sonia
// age: 25
// country: Nigeria

/*
4️⃣ Merge Two Objects
Write a function that merges two objects into one using the spread operator.
*/
function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

console.log(mergeObjects({ a: 1, b: 2 }, { b: 3, c: 4 }));
// Output: { a: 1, b: 3, c: 4 }

/*
5️⃣ Convert an Object into an Array
Write a function that converts an object into an array of key-value pairs.
*/

function objectToArray(obj) {
    return Object.entries(obj);
}

console.log(objectToArray({ name: "Sonia", age: 25 }));
// Output: [["name", "Sonia"], ["age", 25]]


