const add = function(a, b) {
	const result = a + b;
  return result;
};

const subtract = function(a, b) {
	const result = a - b;
  return result;
};

const sum = function(arr) {
  const total = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return total;
};

const multiply = function(arr) {
  const total = arr.reduce((accumulator, currentValue) => accumulator * currentValue ,1);
  return total;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(n) {
	if (n === 0) {
    return 1
  } 
  let result = 1;
  for (let i = 1; i <= n; i ++) {
    result *= i;
  }
  return result;
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
