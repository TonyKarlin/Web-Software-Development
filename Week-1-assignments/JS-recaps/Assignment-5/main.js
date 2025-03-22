const userInput = prompt('Enter a positive integer: ');

function summation(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

if (userInput === '' || userInput === null) {
  document.getElementById('input').innerHTML = 'You entered nothing!';
} else document.getElementById('input').innerHTML = `You entered: ${userInput}`;

if (!isNaN(userInput) && userInput !== null && userInput !== '') {
  if (userInput < 0) {
    document.getElementById('result').innerHTML =
      'Please enter a positive integer!';
  } else {
    document.getElementById(
      'result'
    ).innerHTML = `The sum of numbers from 1 to ${userInput} is ${summation(
      userInput
    )}`;
  }
} else {
  document.getElementById('result').innerHTML = 'Please enter a valid number!';
}
