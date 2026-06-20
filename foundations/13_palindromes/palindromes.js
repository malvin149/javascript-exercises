const palindromes = (string)  => {
    const cleaned = string.toLowerCase().replace(/[^\w]/g, '');
    const reversed = cleaned.split('').reverse().join('');

    return cleaned === reversed;
};

// Do not edit below this line
module.exports = palindromes;
