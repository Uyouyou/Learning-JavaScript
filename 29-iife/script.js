(function () {
    const user = 'john';
    console.log(user);
    const hello = () => console.log('hello from iife');
    hello();
})();

(function (name) {
    console.log('hello ' + name);
})('shawn');

(function hello() {
    console.log('hello');
})();

/*challenge 1
create 2 iifes. inside each, declare a vraible with the same name (message) but different values. log both inside their respective iifes and try logging the variable outside*/


(function message() {
    console.log('this is me!');
})();

(function message() {
    console.log('take that shit!');
})();

/*challenge 2
use an iife to create a counter function that returns a function which, when called, increase a private counter and logs the current counter*/
const counter = (function () {
    let count = 0;

    return function () {
        count++;
        console.log(count);
    };
})();

counter();
counter();

/*challenge 3
write an iife that accepts a name as a parameter and logs hello*/
(function (name) {
    console.log('hello ' + name);
})('sara');

