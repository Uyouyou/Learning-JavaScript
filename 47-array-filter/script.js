const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const evenNumbers = numbers.filter(function (number) {
    return number % 2 === 0;
})

console.log(evenNumbers)

const evNum = numbers.filter((number) => number % 2 === 0);

console.log(evNum)

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

//get only retail companies
const retailCompanies = companies.filter((company) => company.category === 'retail');

console.log(retailCompanies);

//get companies that started in or after 1980  and ended in or before 2005
const earlyCompanies = companies.filter((company) => company.start >= 1980 && company.end <= 2005);

console.log(earlyCompanies);

//get companies that lasted 10 years or more
const longCompanies = companies.filter((company) => company.end - company.start >= 10)

console.log(longCompanies)

/*use filter to return only even numbers from the array*/
const numerals = [1, 2, 3, 4, 5, 6];

const evenNum = numerals.filter((numeral) => numeral % 2 === 0);

console.log(evenNum);

/*return only words that are 3 letters or fewer*/
const words = ['hi', 'sun', 'code', 'sky', 'tree']

const threeWords = words.filter((word) => word.length >= 3)

console.log(threeWords)

/*return only people who are 18 or older*/
const ages = [12, 25, 17, 30, 14, 21];

const adult = ages.filter((age) => age >= 18)

console.log(adult)

/*return only the string values*/
const mixed = [1, 'hello', true, 'world', 42];

const strings = mixed.filter((string) => typeof string === 'string')

console.log(strings)

/*return only products with a price less than 50*/
const product = [
    { name: 'book', price: 30 },
    { name: 'pen', price: 10 },
    { name: 'bag', price: 70 },
];

const lowPrice = product.filter((cost) => cost.price <= 50)

console.log(lowPrice)