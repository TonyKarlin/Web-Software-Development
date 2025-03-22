const fruitArray = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
console.log(fruitArray);
const length = fruitArray.length;
console.log('Length of Fruits array: ' + length);
console.log('Fruit in index number 2: ' + fruitArray[2]);
console.log('Last fruit in the array: ' + fruitArray[fruitArray.length - 1]);

const vegetablesArray = [];

for (let i = 0; i < 3; i++) {
  const vegetable = prompt('Enter a vegetable');
  vegetablesArray.push(vegetable);
}

console.log(vegetablesArray);
console.log('Length of Vegetables array: ' + vegetablesArray.length);
