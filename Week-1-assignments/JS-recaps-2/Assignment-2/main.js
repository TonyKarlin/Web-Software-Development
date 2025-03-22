const nums = [];

const divElem = document.createElement('div');
document.body.appendChild(divElem);

for (let i = 0; i < 5; i++) {
  const num = prompt('Enter a number');
  const numberElement = document.createElement('p');

  if (!isNaN(num) && num !== '' && num !== null) {
    nums.push(num);
    numberElement.innerHTML = 'Number entered: ' + num;
    divElem.appendChild(numberElement);
  } else {
    numberElement.innerHTML = 'Invalid input. Please enter a number.';
    divElem.appendChild(numberElement);
  }
}

const inclusion = prompt(
  'Enter a number to check if it is included in the array'
);
const inclusionElement = document.createElement('p');

if (isNaN(inclusion) || inclusion === '' || inclusion === null) {
  inclusionElement.innerHTML = 'Invalid input. Please enter a number.';
  divElem.appendChild(inclusionElement);
} else if (!nums.includes(inclusion)) {
  inclusionElement.innerHTML =
    'Number ' + inclusion + ' is not included in the array';
  divElem.appendChild(inclusionElement);
} else {
  inclusionElement.innerHTML =
    'Number ' + inclusion + ' is included in the array';
  divElem.appendChild(inclusionElement);
}

nums.pop(nums.length - 1);
const popLastElement = document.createElement('p');
popLastElement.innerHTML = 'Array after removing last element: ' + nums;
divElem.appendChild(popLastElement);

const sortedArray = nums.sort((a, b) => a - b);
const sortedArrayElement = document.createElement('p');
sortedArrayElement.innerHTML = 'Sorted array: ' + sortedArray;
divElem.appendChild(sortedArrayElement);
