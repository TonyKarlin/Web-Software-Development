const input = prompt('Enter temperature in Celsius');

function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

if (input !== null) {
  document.getElementById('temp').innerHTML =
    'The temperature in Fahrenheit is: ' + celsiusToFahrenheit(input);
} else {
  document.getElementById('temp').innerHTML = 'Please enter a valid number';
}
