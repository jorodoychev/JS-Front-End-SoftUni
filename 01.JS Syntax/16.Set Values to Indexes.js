function solve(array) {
    let n = Number(array[0]);
    let result = [];

    for (let i = 1; i < array.length; i++) {
        const tokens = array[i].split(' - ');
        let inputIndex = tokens[0];
        result[inputIndex] = tokens[1];
    }
    for (let j = 0; j < n; j++) {
        if (result[j] === undefined) {
            console.log(0);
        } else {
            console.log(result[j]);
        }

    }

}

solve(['3', '0 - 5', '1 - 6', '2 - 7']);