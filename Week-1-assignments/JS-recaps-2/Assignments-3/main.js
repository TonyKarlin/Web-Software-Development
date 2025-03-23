const evenNums = [];
let num;

const divElem = document.createElement('div');
document.body.appendChild(divElem);

while (true) {
  num = prompt('Enter a number or "done" to finish');
  if (num === 'done') {
    break;
  } else if (isNaN(num) || num === '' || num === null) {
    alert('Please enter a valid number');
  } else {
    num = Number(num);
    if (num % 2 === 0) {
      evenNums.push(num);
    }
  }
}

const evenNumberElement = document.createElement('p');
let evenNumbersString = 'Even numbers: ';

for (const number of evenNums) {
  evenNumbersString += number + ', ';
}

evenNumbersString = evenNumbersString.slice(0, -2);

evenNumberElement.innerHTML = evenNumbersString;
divElem.appendChild(evenNumberElement);

const doneElement = document.createElement('p');
doneElement.innerHTML = 'You have finished entering numbers';
divElem.appendChild(doneElement);
