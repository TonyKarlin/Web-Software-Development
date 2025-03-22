const x1 = prompt('Enter the first x coordinate: ');
const y1 = prompt('Enter the first y coordinate: ');
const x2 = prompt('Enter the second x coordinate: ');
const y2 = prompt('Enter the second y coordinate: ');

function calculateDistance(x1, y1, x2, y2) {
  const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  const trimmed = distance.toFixed(2);
  return trimmed;
}

if (x1 !== null && y1 !== null && x2 !== null && y2 !== null) {
  document.getElementById('result').innerHTML =
    'The distance between the two points is: ' +
    calculateDistance(x1, y1, x2, y2) +
    ' units.';
} else {
  document.getElementById('result').innerHTML = 'Please enter valid numbers';
}
