const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const sum = (array) => array.reduce((acc, num) => acc + num, 0);

const multiply = (array) => array.reduce((acc, num) => acc * num, 1);

const power = (a, b) => a ** b;

const factorial = function(num) {
	if (num === 0) return 1;

  let totalProduct = 1;
  for (let i = num; i >= 1; i--) {
    totalProduct *= i;
  }
  return totalProduct;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
