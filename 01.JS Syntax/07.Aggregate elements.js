function aggregateElements(input) {
    let sum = 0;
    let inverseSum = 0;
    let concat = '';
    for (let i = 0; i < input.length; i++) {
        sum += input[i];
        inverseSum += 1 / input[i];
        concat += input[i].toString();
    }
    console.log(sum);
    console.log(inverseSum.toFixed(4));
    console.log(concat);

}

aggregateElements([1, 2, 3]);