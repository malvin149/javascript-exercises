const sumAll = function(start, end) {
    let totalSum = 0

    if (typeof start !== 'number' || typeof end !== 'number') return 'ERROR';
    if (!Number.isInteger(start) || !Number.isInteger(end)) return 'ERROR';
    if (start < 0 || end < 0) return 'ERROR';
    if (start > end) {
        let temp = start; 
            start = end;
            end = temp;
    }
    for (let i = start; i <= end; i++) {
        totalSum += i;
    }

    return totalSum;
};

// Do not edit below this line
module.exports = sumAll;
