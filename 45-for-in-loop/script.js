const colorObj = {
    color1: 'red',
    color2: 'blue',
    color3: 'orange',
    color4: 'green',
};

for (const key in colorObj) {
    console.log(key, colorObj[key]);
}

const colorArr = ['red', 'green', 'blue', 'yellow'];

for (const key in colorArr) {
    console.log(colorArr[key]);
}

/* Challenge 1: Print Object Properties and Values
let person = {
  name: "Ada",
  age: 25,
  country: "Nigeria"
};

// Use a for...in loop to print each key and its value
*/
let person = {
    name: "Ada",
    age: 25,
    country: "Nigeria"
};

for (const key in person) {
    console.log(key, person[key]);
}

/*Challenge 2: Count Properties in an Object
let car = {
  brand: "Toyota",
  model: "Camry",
  year: 2020
};

// Use a for...in loop to count how many properties the object has
*/
let car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020
};

let count = 0;

for (const key in car) {
    count++;

}
console.log(count);

/*Challenge 3: Copy Object Keys into an Array
let book = {
  title: "The Alchemist",
  author: "Paulo Coelho",
  pages: 208
};

// Use a for...in loop to store all keys into an array called `keysArray`
*/
let book = {
    title: "The Alchemist",
    author: "Paulo Coelho",
    pages: 208
};

let keysArray = [];

for (const key in book) {
    keysArray.push(key);
}

console.log(keysArray);

/* Challenge 4: Delete a Property with a Specific Value
let user = {
  username: "johnDoe",
  password: "12345",
  role: "admin"
};

// Use a for...in loop to delete the property where the value is "12345"
*/
let user = {
    username: "johnDoe",
    password: "12345",
    role: "admin"
};

for (const key in user) {
    if (user[key] === "12345") {
        delete user[key];
    }
}

console.log(user);

/*Challenge 5: Convert All String Values to Uppercase
let product = {
  name: "laptop",
  brand: "hp",
  price: 500
};

// Use a for...in loop to convert all string values to uppercase (don't modify non-string values)
*/
let product = {
    name: "laptop",
    brand: "hp",
    price: 500
};

for (const key in product) {
    if (product[key] && typeof product[key] === "string") {
        product[key] = product[key].toUpperCase();
    }
}

console.log(product);