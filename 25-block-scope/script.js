const x = 100;

if (true) {
    const y = 200;
    console.log(x + y);
}

for (let i = 0; i <= 10; i++) {
    console.log(i);
}

if (true) {
    const a = 500;//blocked scope
    let b = 600;//blocked scope
    let c = 700; //function scoped
}

console.log(c);

function run() {
    var d = 200;
    console.log(d);
}

run();