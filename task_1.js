
function arrayElementsType () {
    let array1 = [8, 6, 1, 65, 0, 'string', false, null, 39];
    let zero = 0;
    let even = 0;
    let odd = 0;

    for (let i = 0; i < array1.length; i += 1) {
        if (typeof array1[i] === 'number' && !isNaN(array1[i])) {
            if (array1[i] === 0) {
                zero++;
            } else if (array1[i] % 2 === 0) {
                even++;
            } else {
                odd++;
            }
        }
    }
    console.log(zero);
    console.log(even);
    console.log(odd);
}

arrayElementsType();
