function first() {
    const x = 100;

    function second() {
        const y = 200;
        console.log(x + y);
    }

    second();
}

first();

if (true) {
    const x = 100;

    if (x === 100) {
        const y = 200;
        console.log(x + y);
    }
}

//challenge 1
function outer() {
    let name = "Sonia";

    function inner() {
        let greeting = "Hello";
        console.log(greeting + " " + name);
    }

    inner();
}

outer();

// the output will be hello sonia. this is becuase we are nesting the if statements and the parent can be accessed from the child.

//challenge 2
function showMessage() {
    let message = "Hi there";

    function whisper() {
        let secret = "I love JS";
        console.log(message + "," + " " + secret);
    }

    whisper();

}

showMessage();

//challenge 3
function createCounter() {
    let count = 0;

    function increment() {
        count++;
        console.log(count);
    }

    return increment;
}

let counter = createCounter();

counter(); // ?
counter(); // ?
counter(); // ?

//the output is 1,2,3 and this is so because count has been declared with ++ which indicates an increment

//challenge 4
function testScope() {
    if (true) {
        var fruit1 = "apple";
        let fruit2 = "banana";
        const fruit3 = "cherry";
    }

    console.log(fruit1); // ?

}

testScope();
//the output only brings apple and this is because the same names fruit cannot be reassigned to a new variable

//challenge 5
function grandParent() {
    let grand = "Chika";

    function parent() {
        let dad = "Paul";

        function child() {
            let me = "Tessy";
            console.log(`${me} <- ${dad} <- ${grand}`);
        }

        child();
    }

    parent();
}

grandParent();


