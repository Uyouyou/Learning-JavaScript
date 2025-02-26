let x;
const fruits = ['apple', 'banana', 'pear'];
const veggies = ['carrot', 'potato', 'onion'];
fruits.push(veggies);
x = fruits[3][1];

const allfruits = [fruits, veggies];
x = allfruits[1][2];
x = fruits.concat(veggies);
x = [...fruits, ...veggies];

const arr = [1, 2, [3, 4], 5, [6, 7], 8];
x = arr.flat();

x = Array.isArray(fruits);
x = Array.from('12345');

const a = 1;
const b = 2;
const c = 3;

x = Array.of(a, b, c);
console.log(x);

/*
1️⃣ Access a Nested Array Element
Write a function that extracts the second item from the inner array.
*/
function getNestedElement(arr) {
    return arr[1][1];
}

console.log(getNestedElement([1, [2, 3], 4]));

/*
2️⃣ Merge Two Arrays Without Duplicates
Write a function that merges two arrays and removes duplicates using the spread operator.
*/
function mergeArrays(arr1, arr2) {
    return [([...arr1.splice(0, 2), ...arr2])];
}

console.log(mergeArrays([1, 2, 3], [3, 4, 5])); // Output: [1, 2, 3, 4, 5]

/*
3️⃣ Flatten a Nested Array
Write a function that flattens a nested array one level deep using the spread operator.
*/
function flattenArray(arr) {
    return [].concat(...arr);
}

console.log(flattenArray([1, [2, 3], [4, 5]])); // Output: [1, 2, 3, 4, 5]

/*
4️⃣ Clone and Modify an Array
Write a function that takes an array and returns a new array with an extra element added at the end using the spread operator.
*/
function addElement(arr, newElement) {
    return [...arr, newElement]
}

console.log(addElement([1, 2, 3], 4)); // Output: [1, 2, 3, 4]

/*
5️⃣ Extract Elements From a Nested Array and Concatenate
Write a function that takes a nested array, extracts the last element from each sub-array, and returns a new array containing these elements.
*/
function extractLastElements(arr) {
    return arr.map(subArr => subArr[subArr.length - 1]);
}

console.log(extractLastElements([[1, 2], [3, 4], [5, 6]])); // Output: [2, 4, 6]
