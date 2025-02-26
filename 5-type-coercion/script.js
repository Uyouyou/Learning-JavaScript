let x;

x = 5 + '5';

//nb: type coercion works with the + sign operator

x = 5 * 5;

x = 5 + null;
x = Number(true);
x = Number(false);
console.log(x, typeof x);

/*
1. Implicit Coercion (String + Number)
*/
console.log('5' + 3);
console.log(3 + '5');
console.log(3 + 5 + '5');
console.log('5' + 3 + 5);

/*
2. Implicit Coercion (Subtraction, Multiplication, Division)
*/

console.log('10' - 5);
console.log('10' * '2');
console.log('20' / '4');
console.log('5' - 'hello');

/*
3. Boolean Coercion in Logical Operations
*/

console.log(Boolean(''));
console.log(Boolean(' '));
console.log(Boolean(0));
console.log(Boolean([]));
console.log(Boolean({}));

/*
4. Implicit Boolean Coercion in Conditions
*/

if ('0') console.log('truthy');
if (0) console.log('falsy');
if ('') console.log('falsy');
if (null) console.log('falsy');
if ([]) console.log('truthy');

/*
5. Double Equals (==) vs Triple Equals (===)
*/

console.log(5 == '5');
console.log(5 === '5');
console.log(false == 0);
console.log(false === 0);
console.log(null == undefined);
console.log(null === undefined);

/*
6. Type Coercion in Arrays
*/

console.log([] + []);
console.log([5] + 5);
console.log({} + 5);
console.log({} + {});

/*
7. Using Unary + Operator
*/

console.log(+'5');
console.log(+true);
console.log(+false);
console.log(+null);

console.log(+'hello');

/*
8. Implicit Coercion in Template Literals
*/
let num = 5;
console.log(`the number is ` + num + 2);
console.log(`the number is ${num + 2}`);

/*
9. Coercion in Logical OR (||) and AND (&&)
*/

console.log(0 || 'hello');
console.log('' || 100);
console.log(null || 'defualt');
console.log('hi' && 'hello');
console.log(0 && 'hello');
console.log(1 && 2 && 3);

/*
10. Explicit Type Conversion
*/

console.log(Number('123'));
console.log(String(456));
console.log(Boolean(0));
console.log(Number(true));
console.log(Boolean('false'));