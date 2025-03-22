const userInput = prompt('Enter a positive number: ');
const num = parseInt(userInput);

if (!isNaN(num) && num > 0) {
  document.getElementById('input').innerHTML =
    'Multiplication table up to ' + num + ':';
} else {
  document.getElementById('input').innerHTML =
    'Invalid input. Please enter a positive number.';
}

function multiplicationTable(num) {
  const table = [];
  for (let i = 1; i <= num; i++) {
    const row = [];
    for (let j = 1; j <= num; j++) {
      row.push(i * j);
    }
    table.push(row);
  }
  return table;
}

const table = multiplicationTable(num);
const tableElement = document.getElementById('table');

for (let i = 0; i < table.length; i++) {
  const rowElement = document.createElement('tr');
  for (let j = 0; j < table[i].length; j++) {
    const cellElement = document.createElement('td');
    cellElement.innerHTML = table[i][j];
    rowElement.appendChild(cellElement);
  }
  tableElement.appendChild(rowElement);
}
