const array = [10, 2, 5, 1, 9];
const array2 = [100, 66, 1, 77, 81, 2, 12];
let sortedArray = [];

const asc = (a, b) => a - b;
const desc = (a, b) => b - a;

function sortArray(array, order) {
  let sortFunction;
  if (order === 'asc') {
    sortFunction = asc;
  } else if (order === 'desc') {
    sortFunction = desc;
  } else {
    return 'Please enter a valid order (asc or desc)';
  }
  sortedArray = array.sort(sortFunction);
  return sortedArray;
}

console.log(array);
console.log(sortArray(array, 'asc'));
console.log(sortArray(array, 'desc'));
console.log(array2);
console.log(sortArray(array2, 'asc'));
console.log(sortArray(array2, 'desc'));
