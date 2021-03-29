function calculate(num1, num2, op) {
    let firstNum = Number(num1);
    let secondNum = Number(num2);
    let operator = op;
    let result = 0;

    if (operator === '+') {
        result = firstNum + secondNum;
    } else if (operator === '-') {
        result = firstNum - secondNum;
    } else if (operator === '*') {
        result = firstNum * secondNum;
    } else if (operator === '/') {
        result = firstNum / secondNum;
    } else if (operator === '%') {
        result = firstNum % secondNum;
    } else if (operator === '**') {
        result = firstNum ** secondNum;
    }

    return result;

}

console.log(calculate(3, 5.5, '%'));