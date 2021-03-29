function biggerNumber(input) {
    let firstNum = +input.shift();
    let secondNum = +input.shift();


    if (firstNum > secondNum) {
        return firstNum;
    } else {
        return secondNum;
    }
}

console.log(biggerNumber(['10', '20']));

function biggerNumber2(input) {
    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);


    if (firstNum > secondNum) {
        return firstNum;
    } else {
        return secondNum;
    }
}

console.log(biggerNumber2(['10', '20']));