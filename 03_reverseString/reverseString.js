const reverseString = function(string) {
    const length = string.length;
    let counter = 0;
    let reverse = "";

    while (counter < length) {
        reverse = reverse + string[length - counter - 1];
        counter++;
    }
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
