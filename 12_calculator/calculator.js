const add = function(a, b) {
	const value = a + b;
  return value;
};

const subtract = function(a, b) {
	const value = a - b;
  return value;
};

const sum = function(arr) {
  const total = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return total;
};

const multiply = function(arr) {
  const total = arr.reduce((accumulator, currentValue) => accumulator * currentValue ,1);
  return total;
};

const power = function() {
	
};

const factorial = function() {
	
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
