
function betweenTwoNumbers(num1, num2) {
    let value = num1;
    let timer = setInterval(function() {
        console.log(value);
        if (value === num2) {
            clearInterval(timer);
        }
        value++;
    }, 1000);
}

betweenTwoNumbers (5, 15);
