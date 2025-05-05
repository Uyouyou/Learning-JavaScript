const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((number) => number * 2);

console.log(doubledNumbers)

const companies = [
    { name: 'company 1', category: 'finance', start: 1981, end: 2004 },
    { name: 'company 2', category: 'retail', start: 1992, end: 2008 },
    { name: 'company 3', category: 'auto', start: 1999, end: 2007 },
    { name: 'company 4', category: 'retail', start: 1989, end: 2010 },
    { name: 'company 5', category: 'tech', start: 2009, end: 2014 },
    { name: 'company 6', category: 'finance', start: 1987, end: 2010 },
    { name: 'company 7', category: 'auto', start: 1986, end: 1996 },
    { name: 'company 8', category: 'tech', start: 2011, end: 2016 },
    { name: 'company 9', category: 'retail', start: 1981, end: 1989 },
]

//create an array of company names
const companyNames = companies.map((company) => company.name)

console.log(companyNames)

//create an array with just company and category
const companyInfo = companies.map((company) => {
    return {
        name: company.name,
        category: company.category
    }
})

console.log(companyInfo)

//create an array of objects with the name and the length of each company in years
const companyYears = companies.map((company) => {
    return {
        name: company.name,
        length: company.end - company.start + ' years',
    }
})

console.log(companyYears)

//chain map methods
//short version
const squareandD = numbers
    .map((number) => Math.sqrt(number))
    .map((sqrt) => sqrt * 2);

console.log(squareandD)

//long version
const squareandD2 = numbers
    .map(function (number) {
        return Math.sqrt(number)
    })
    .map(function (sqrt) {
        return sqrt * 2
    })
    .map(function (squareandD) {
        return squareandD * 3;
    })

console.log(squareandD2)

//chaining different methods
const evenDouble = numbers
    .filter((number) => number % 2 === 0)
    .map((number) => number * 2)

console.log(evenDouble)

/*use map to return a new array where each number is doubled*/
const nums = [1, 2, 3, 4, 5];

const newNumbers = nums.map((num) => num * 2);

console.log(newNumbers)

/*return a new array with all words capitalized*/
const words = ['hello', 'world', 'javascript'];

const newWords = words.map((word) => word.toUpperCase())

console.log(newWords)

/*return a new array with 10 added to each number*/
const numbas = [5, 10, 15];

const addition = numbas.map((add) => add + 10);

console.log(addition)

/* return an array containing the length of each name*/
const names = ['sonia', 'chuks', 'jerry'];

const length = names.map((name) => name.length)

console.log(length)

/*return an array of titles only*/
const books = [
    { title: 'atomic habits', author: 'james clear' },
    { title: 'clean code', author: 'robert c. martin' },
];

const titlesOnly = books.map((book) => book.title)

console.log(titlesOnly)