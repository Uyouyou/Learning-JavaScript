console.log(10 < 20 && 30 > 15 && 40 > 30);
console.log(10 > 20 || 30 < 15);

// && - will return the first falsy value or the last value
let a;
a = 10 && 20;
a = 10 && 20 && 30;
a = 10 && 0 && 30;
a = 10 && '' && 0 && 30;
console.log(a);

const posts = ['post 1', 'post 2'];
posts.length > 0 && console.log(posts[0]);

// || - will return the first truthy value or the last value
let b;

b = 10 || 20;
b = 0 || 20;
b = 0 || null || '' || undefined;
console.log(b);

// ?? - returns the right side operand when the left is null or undefined
let c;
c = 10 ?? 20;
c = null ?? 20;
c = undefined ?? 30;
c = 0 ?? 30;
c = '' ?? 30;
console.log(c);

/*1. Age Checker
Write a program that checks if a person is a teenager (age between 13 and 19 inclusive) using the && operator.
Print "Teenager" if true, otherwise "Not a teenager".*/
const age = (value) => {
    if (value < 13) {
        console.log('teenager')
    } else if (value > 19) {
        console.log('not a teenager')
    } else {
        console.log('adult')
    }
}

age(11);


/*2. Login Access
You have two variables: username and password.
If both username and password are truthy (not empty), print "Access granted".
Otherwise, print "Access denied".

Use the && operator.

*/
const access = (username, password) => {
    if (username && password) {
        console.log('access granted')
    } else {
        console.log('access denied')
    }
}

access('sara', '0');

/*3. Weekend Checker
You have a variable day.
Write a program that prints "Weekend" if the day is "Saturday" or "Sunday", otherwise print "Weekday".
Use the || operator.*/
const Weekday = (value) => {
    if (value === 'saturday' || value === 'sunday') {
        console.log('weekend')
    } else {
        console.log('weekday')
    }
}

Weekday('saturday');

/*4. Light Switch
Create a variable isLightOn.
Use the ! (NOT) operator to turn the light off if it is on, and on if it is off.
Print the result.*/
let isLightOn = true;
isLightOn = !isLightOn;
console.log(isLightOn);


/*5. Valid Email Check
You have a variable email.
Write a program that checks:

Email must not be an empty string ("") AND

Email must include an "@" symbol.

If both conditions are true, print "Valid email", else print "Invalid email".*/
const email = (value) => {
    if (value !== '' && value.includes('@')) {
        console.log('valid email')
    } else {
        console.log('invalid email')
    }
}

email('tes@gmail.com');