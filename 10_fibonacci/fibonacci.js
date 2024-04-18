const fibonacci = function (index) {
    if (index < 0) return 'OOPS';

    let numbers = [0, 1];

    for (let i = 2; i <= index; i++) {
        numbers[i] = numbers[i - 1] + numbers[i - 2];
    }

    return numbers[index];
}

// Do not edit below this line
module.exports = fibonacci;
