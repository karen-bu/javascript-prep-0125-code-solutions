/* exported reverse */

function reverse(array) {
  const reverseArray = [];
  for (let index = array.length - 1; index >= 0; index--) {
    reverseArray.push(array[index]);
  }
  return reverseArray;
}
