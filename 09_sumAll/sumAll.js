const sumAll = function(num1, num2) {
    //check if either number is a positive number or an integer, if false return ERROR
    if ([num1, num2].some(n => n < 0 || !Number.isInteger(n))) {
        return 'ERROR';
    }
    //Determine the true start and end point for the loop regardless of the order passed
    const start = Math.min(num1, num2);
    const end = Math.max(num1, num2);
    let sum = 0;

    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
