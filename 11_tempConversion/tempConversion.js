const convertToCelsius = function(temperature) {
  //formula = (F - 32) / 1.8
  let converted = ((temperature - 32) / 1.8).toFixed(1);
  return parseFloat(converted);
};

const convertToFahrenheit = function(temperature) {
  // formula = C * 1.8 + 32
  let converted = ((temperature * 1.8) + 32).toFixed(1);
  return parseFloat(converted);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
