function solve(...nums) {
    let negativeCount = null;
    for (let num of nums) {
        if (num < 0) {
            negativeCount++;
        } else if (num === 0) {
            return 'Positive';
        }
    }
    if (negativeCount % 2 === 0) {
        return 'Positive';
    } else {
        return 'Negative';
    }
}

console.log(solve(2, 3, -1));