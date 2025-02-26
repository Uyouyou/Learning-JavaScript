let x;

let d = new Date();

x = d.toString();
x = d.getTime();
x = d.valueOf();
x = d.getFullYear();
x = d.getMonth() + 1;
x = d.getDate();
x = d.getDay();
x = d.getHours();
x = d.getMinutes();
x = d.getSeconds();
x = d.getMilliseconds();
x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
x = Intl.DateTimeFormat('en-NG').format(d);
x = Intl.DateTimeFormat('en-NG', { month: 'long' }).format(d);
x = d.toLocaleString('default', { month: 'short' });

x = d.toLocaleString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'Africa/Lagos',
});
console.log(x);

/*
Get the Current Date and Time

Write a function that returns the current date and time in the format: "YYYY-MM-DD HH:MM:SS".
*/
function current() {
    return new Date();
}

console.log(current());

/*
Find the Day of the Week

Create a function that takes a date string as input and returns the corresponding day of the week (e.g., "Monday").
*/

function getDayOfWeek(dateString) {
    let date = new Date(dateString); // Convert input string to Date object
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[date.getDay()]; // Get day index and return corresponding name
}

console.log(getDayOfWeek("2025-02-20")); // Example: "Thursday"


/*
Calculate Age from Birthdate

Write a function that takes a birthdate (YYYY-MM-DD) as input and returns the person’s age.
*/
function calculateAge(birthdate) {
    let birthDate = new Date(birthdate); // Convert input string to Date object
    let today = new Date(); // Get current date

    let age = today.getFullYear() - birthDate.getFullYear(); // Calculate initial age
    let monthDiff = today.getMonth() - birthDate.getMonth(); // Check month difference

    // Adjust age if the birthday hasn't occurred yet this year
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}

console.log(calculateAge("2000-02-20")); // Example output: 25


/*
Add Days to a Given Date

Create a function that takes a date and a number of days as input, then returns the new date after adding the given number of days.
*/
function givenDate(date, num) {
    let newDate = new Date(date); // Convert input date string to a Date object
    newDate.setDate(newDate.getDate() + num); // Add the number of days
    return newDate.toDateString(); // Return the updated date as a readable string
}

// Example usage:
console.log(givenDate("2025-02-20", 10)); // Returns the new date after adding 10 days

/*
Time Until New Year

Write a function that calculates the number of days remaining until the next New Year's Day.
*/

function newYear() {
    let today = new Date(); // Get the current date
    let nextYear = today.getFullYear() + 1; // Get the next year
    let newYearDate = new Date(nextYear, 0, 1); // New Year's Day (January 1st)

    let timeDiff = newYearDate - today; // Difference in milliseconds
    let daysRemaining = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); // Convert to days

    return daysRemaining;
}

// Example usage:
console.log(`Days until New Year: ${newYear()}`);
