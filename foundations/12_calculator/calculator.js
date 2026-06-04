const add = function(number1, number2) {
	let total = number1 + number2;
  return total;
};

const subtract = function(number1, number2) {
	let difference = number1 - number2;
  return difference;
};

const sum = function(array) {
	let totalSum = 0;
  for (let i = 0; i < array.length; i++) {
    totalSum += array[i];
  }
  return totalSum;
};

const multiply = function(array) {
  let totalProduct = 1;
  for (let i = 0; i < array.length; i++) {
    totalProduct *= array[i];
  }
  return totalProduct;
};

const power = function(base, exponent) {
	let result = base ** exponent;
  return result;
};

const factorial = function(number) {
	if (number === 0) return 1;

  let totalProduct = 1;
  for (let i = number; i >= 1; i--) {
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
