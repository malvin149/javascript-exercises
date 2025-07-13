const fibonacci = function( num ) {
    const number = Number( num );
    
    if ( number < 0 || !Number.isInteger(number) ) return 'OOPS';
    if (number === 0 || number === 1) return number;
    
    let firstNum = 0;
    let secondNum = 1;

    for (let i = 2; i <= number; i++) {
        let fibonacciNum = firstNum + secondNum;
        firstNum = secondNum;
        secondNum = fibonacciNum;
        
    }
     return secondNum
};

// Do not edit below this line
module.exports = fibonacci;
