const palindromes =function (string) {
    let cleanedString = string.toLowerCase().replace(/[^\w]/g, '');
    let reversedString = cleanedString.split('').reverse().join('');

    if (cleanedString === reversedString) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
