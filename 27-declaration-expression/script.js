//function declaration
function addDollar(value) {
    return "$" + value;
}

console.log(addDollar(300));

//function expression
const addPlus = function (value) {
    return "+" + value;
};

console.log(addPlus(400));

//hoisting
console.log(addMinus(200));

function addMinus(value) {
    return '-' + value
}

//challenge 1
/*write a function declaration named greetUser that takes a name as a parameter and logs "hello, [name]!"*/
function greetUser(name) {
    return "Hello " + name;
}

console.log(greetUser("Clara"));

const greetUser2 = function (name) {
    return "Hello " + name;
};

console.log(greetUser2("Simone"));

//challenge 2
/* write a function expression called square that takes a number and returns its square*/
const square = function (num) {
    return num * num;
};
console.log(square(4));

//challenge 3
/*write a function declaration named isEven that takes a number and returns "Even" if it is even and "Odd" if it is odd*/
function isEven(numeral) {
    if (numeral % 2 === 0) {
        return "Even"
    } else {
        return "Odd"
    }

};

console.log(isEven(10));

//challenge 4
/*write a function expression called maxNumber that takes 2 numbers and return the larger one*/
const maxNumber = function (a, b) {
    return Math.max(a, b);
}

console.log(maxNumber(3, 5));


//challenge 5
/*write a function declaration sumArray that takes an array of numbers and returns the total sum*/
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

console.log(sumArray([1, 2, 3, 4]));