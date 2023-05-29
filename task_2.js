
function typeOfNumbers (num) {
    let  result = 'Число простое';
    if (num <= 1 || num > 1000) {
        result = 'Данные неверны';
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                result = 'Число составное';
                break;
            }
        }
    }
    console.log(result);
}

typeOfNumbers (1001);
