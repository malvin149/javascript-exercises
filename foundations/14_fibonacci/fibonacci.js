const fibonacci = function(position) {
    position = Number(position);
    if (position < 0) return 'OOPS';
    if (position === 0) return 0;
    if (position === 1 || position === 2) return 1;

    let prev = 1;
    let curr = 1;

    for (let i = 3; i <= position; i++) {
        let next = prev + curr;
        prev = curr;
        curr = next;
    }
    return curr;
};

// Do not edit below this line
module.exports = fibonacci;
