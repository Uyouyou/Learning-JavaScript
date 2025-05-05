let b = 10;
if (b) {
    b = 20;
}

b = b && 20;
b &&= 20;
console.log(b);

let c = false;

if (c === null || c === undefined) {
    c = 20;
}

c = c ?? 20;

c ??= 20;

console.log(c);

/*1. Default Username
You have a variable username that may be empty ("").
Use ||= to set it to "Guest" if it’s falsy.*/
let username = "";
username ||= "Guest";
console.log(username);

/*2. Update Only If Active
You have two variables. Use &&= to update status to "active" only if isActive is truthy.*/
let isActive = true;
let status = "inactive";
isActive &&= (status = 'active');
console.log(status);



/*3. Assign Value Only If Null or Undefined
You have:let bio = null;
Use ??= to set bio to "No bio available" only if it is null or undefined.*/
let bio = null;
bio ??= "no bio available";
console.log(bio);

/*4. Shopping Cart Price
You have:let discountPrice = 0;
Use ||= to set discountPrice to 100 if it's falsy.

What will discountPrice become? (Be careful — 0 is falsy!)*/
let discountPrice = 0;
discountPrice ||= 100;
console.log(discountPrice);

/*5. Only Update Admin Role
You have: let isAdmin = false;
let role = "user";
Use &&= to change role to "admin" only if isAdmin is truthy.*/
let isAdmin = false;
let role = "user";
isAdmin &&= (role = "admin");
console.log(role);