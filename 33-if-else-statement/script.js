const d = new Date(10, 30, 2022, 6, 0, 0);
const hour = d.getHours();

if (hour < 12) {
    console.log('morning');
} else if (hour < 18) {
    console.log('afternoon')
} else {
    console.log('night');
}


//nesting
if (hour < 12) {

    if (hour === 6) {
        console.log('wake up');
    }

    console.log('morning');
} else if (hour < 18) {
    console.log('afternoon')
} else {
    console.log('night');

    if (hour >= 20) {
        console.log('zzzzz')
    }
}

//multiple conditions
if (hour >= 7 && hour < 15) {
    console.log('work time');
}

if (hour === 6 || hour === 20) {
    console.log('brush your teeth');
}

/*challenge 1
write a program that checks if a number is even or odd*/
function check(num) {
    if (num % 2 === 0) {
        console.log(`${num} is even`)
    } else {
        console.log(`${num} is odd`);
    }
}

check(3);