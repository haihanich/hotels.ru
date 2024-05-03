const testArr = [1, 300];

function simpleNumbers(arr) {
    const firstNumber = arr[0];
    const lastNumber = arr[1];
    let resArr = []
    for (let i = firstNumber; i <= lastNumber; i++) {
        if (i >= 1 && i <= 3 || i === 5 || i === 7 || i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0) {
            resArr.push(i);
        }
    }
    return resArr;
}

console.log(simpleNumbers(testArr));