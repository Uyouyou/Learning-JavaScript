const calulator = (num1, num2, operator) => {
    switch (operator) {
        case '+':
            return num1 + num2;
            break;
        case '-':
            return num1 - num2;
            break;
        case '*':
            return num1 * num2;
            break;
        case '/':
            return num1 / num2;
            break;
        default:
            return 'invalid';
    }
}

console.log(calulator(5, 2, '+'));
console.log(calulator(5, 2, '-'));
console.log(calulator(5, 2, '*'));
console.log(calulator(5, 2, '/'));
console.log(calulator(5, 2, '%'));