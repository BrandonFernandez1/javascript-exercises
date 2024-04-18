const palindromes = function (str) {
    const alphaNum = 'abcdefghijklmnopqrstuvwxyz0123456789';

    const newStr = str
        .toLowerCase()
        .split('')
        .filter((character) => alphaNum.includes(character))
        .join('');
    
    const reverseStr = newStr.split('').reverse().join('');

    if (newStr === reverseStr) return true;
    else return false;
};

// Do not edit below this line
module.exports = palindromes;
