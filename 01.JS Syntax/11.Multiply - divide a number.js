function solve(input) {
    let num1 = +input[0];
    let num2 = +input[1];

    function multiply(a, b) {
        return a * b;
    }

    function divide(a, b) {
        return a / b;
    }

    if (num2 >= num1) {
        return input.reduce(multiply);
    } else {
        return input.reduce(divide);
    }
}


console.log(solve(['13', '13']));