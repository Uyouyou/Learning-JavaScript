let x;

const todo = new Object();

todo.id = 1;
todo.name = 'buy bread';
todo.completed = false;

x = todo;

const person = {
    address: {
        coords: {
            lat: 42.934,
            lng: -34.2344,
        },
    },
};

x = person.address.coords.lat;

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const obj3 = { ...obj1, ...obj2 };

const obj4 = Object.assign({}, obj1, obj2);

const todos = [
    { id: 1, name: 'bread' },
    { id: 2, name: 'milk' },
    { id: 3, name: 'butter' },
];
x = todos[0].name;
x = Object.keys(todo);
x = Object.keys(todo).length;
x = Object.entries(todo);
x = todo.hasOwnProperty('age');
console.log(x);

/*
1️⃣ Add a Method to an Object
Write a function that adds a greet method to a person object. The method should return "Hello, my name is [name]".
*/
function addGreetMethod(human) {
    human.greet = function () {
        return `hello, my name is ${this.name}`;
    };

    return human;
}


const human = { name: "Sonia" };
const updatedPerson = addGreetMethod(human);

console.log(updatedPerson.greet());
// Output: "Hello, my name is Sonia"

/*
 Merge Two Objects Using Spread
Write a function that merges two objects using the spread operator and returns the new object.
*/
function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

console.log(mergeObjects({ a: 1, b: 2 }, { b: 3, c: 4 }));
// Output: { a: 1, b: 3, c: 4 }

/*
 Copy an Object Without Mutating the Original
Write a function that takes an object and returns a new copy using the spread operator.
*/
function copyObject(obj) {
    return { ...obj };
}

const original = { x: 10, y: 20 };
const copied = copyObject(original);
copied.x = 50;

console.log(original.x); // Output: 10 (original object is not changed)
console.log(copied.x); // Output: 50 (only the copied object is modified)


/*
Remove a Property from an Object Using Spread
Write a function that removes a given property from an object and returns a new object without modifying the original.
*/
function removeProperty(obj, prop) {
    const { [prop]: _, ...rest } = obj;
    return rest;
}

console.log(removeProperty({ name: "Sonia", age: 25 }, "age"));
// Output: { name: "Sonia" }


/*
 Use this Inside a Method
Write an object representing a car that has properties brand and speed, and a method increaseSpeed that increases the speed by a given value.
*/
const car = {
    brand: "Toyota",
    speed: 50,
    increaseSpeed(amount) {
        this.speed += amount;
    }
};

car.increaseSpeed(20);
console.log(car.speed); // Output: 70
