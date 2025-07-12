const add = function(a, b) {
	const value = a + b;
  return value;
};

const subtract = function(a, b) {
	const value = a - b;
  return value;
};

const sum = function(arr) {
	if (!Array.isArray(arr) || arr.length === 0) {
    return 0;
  } 
  const total = arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue}, 0);
  return total;
};

const multiply = function() {

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
