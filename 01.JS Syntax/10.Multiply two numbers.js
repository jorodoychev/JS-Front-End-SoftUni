function solve(input) {
    // let a = input[0];
    // let b = input[1];
    // return Number(a) * Number(b);

    function multiply(a, b) {
        return Number(a) * Number(b);
    }
    return input.reduce(multiply);
}

console.log(solve(['13', '13']));