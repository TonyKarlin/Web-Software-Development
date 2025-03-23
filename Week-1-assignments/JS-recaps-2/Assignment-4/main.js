const array = [10, 2, 5, 1, 9];
let sortedArray = [];

function sortArray(array) {
  sortedArray = array.sort((a, b) => a - b);
  return sortedArray;
}

console.log(array);
console.log(sortArray(array));
