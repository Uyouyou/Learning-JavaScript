const socials = ['twitter', 'facebook', 'linkedin', 'instagram'];

socials.forEach((item, index, arr) => console.log(`${index} - ${item}`, arr))

function logSocials(socials) {
    console.log(socials)
}

socials.forEach(logSocials);

const socialObjs = [
    { name: 'twitter', url: 'https://twitter.com' },
    { name: 'facebook', url: 'https://facebook.com' },
    { name: 'linkedin', url: 'https://likedin.com' },
    { name: 'instagram', utl: 'https://instagram.com' },
];

socialObjs.forEach((item) => console.log(item))

/*given an array of fruits, use foreach to log each fruit to the console*/
const fruits = ['apple', 'banana', 'cherry'];

fruits.forEach((fruit) => console.log(fruit));

/*use foreach to calculate and log the sum of all numbers in this array*/
const numbers = [5, 10, 15, 20];

let sum = 0;

numbers.forEach((number) => {
    sum += number;
})

console.log(sum)

/*use foreach to log each name in uppercase*/
const names = ['john', 'jane', 'doe'];

names.forEach((name) => console.log(name.toUpperCase()))

/*use foreach to log only the even numbers from this array*/
const nums = [1, 2, 3, 4, 5, 6];

nums.forEach((num) => {
    if (num % 2 === 0) {
        console.log(num)
    }
})

/*use foreach to add "-done" to each task and log the result*/
const tasks = ['wash', 'cook', 'clean'];

tasks.forEach((task) => console.log(task, '- done'))