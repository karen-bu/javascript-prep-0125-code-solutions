/* exported initial */

function initial(array) {
  const initialArray = [];
  for (index = 0; index < array.length - 1; index++) {
    initialArray.push(array[index]);
  }
  return initialArray;
}
