
function firstClassFunc (firstNum) {
    return function(secondNum) {
        return firstNum + secondNum;
    }
}

const sumOfNum = firstClassFunc (5)(26);

console.log(sumOfNum);

firstClassFunc();
