function stringLength(str1, str2, str3) {
    let sum = 0;
    sum = str1.length + str2.length + str3.length;
    let averageSum = Math.floor(sum / 3);
    console.log(sum);
    console.log(averageSum);
}

stringLength('chocolate', 'ice cream', 'cake');
stringLength('pasta', '5', '22.3');

//if input is Array
function sumStr(input) {
    let sum = 0;
    let numberOfElements = input.length;

    for (input of input) {
        let str = input.length;
        sum += str;
    }
    let averageSum = Math.floor(sum / numberOfElements);

    console.log(sum);
    console.log(averageSum);

}

sumStr(['chocolate', 'ice cream', 'cake']);
sumStr(['pasta', '5', '22.3']);