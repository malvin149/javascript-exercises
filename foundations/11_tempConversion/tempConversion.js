const convertToCelsius = function(temperature) {
  const celsius = ( temperature - 32 ) * ( 5 / 9 );
  let results = Number(celsius.toFixed(1));
  return results;
};

const convertToFahrenheit = function(temperature) {
  const fahrenheit = ( temperature * ( 9 / 5 )) + 32;
  let results = Number(fahrenheit.toFixed(1));
  return results;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
