const integer = 0;

function integerToString(int) {
    let str = '';
    const lastDigit = int % 10;
    if (lastDigit === 1) {
        str = '';
    } else if (lastDigit >= 2 && lastDigit <= 4) {
        str = 'а';
    } else if (lastDigit >= 5 && lastDigit <= 9 || lastDigit === 0) {
        str = 'ов'
    }
    return `${int} компьютер${str}`;
}

console.log(integerToString(integer));