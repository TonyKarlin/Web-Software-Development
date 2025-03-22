const a = prompt('Enter length of side a: ');
const b = prompt('Enter length of side b: ');
const c = prompt('Enter length of side c: ');

function triangleType(a, b, c) {
  if (a === b && b === c) {
    return 'Equilateral';
  } else if (a === b || b === c || a === c) {
    return 'Isosceles';
  } else {
    return 'Scalene';
  }
}

if (a !== null && b !== null && c !== null) {
  document.getElementById('result').innerHTML =
    'Triangle type: ' + triangleType(a, b, c);
} else {
  document.getElementById('result').innerHTML = 'Please enter valid values';
}
