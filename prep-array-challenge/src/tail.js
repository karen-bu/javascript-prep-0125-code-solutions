/* exported tail */

function tail(array) {
  const tailArray = [];
  for (let index = 1; index < array.length; index++) {
    tailArray.push(array[index]);
  }
  return tailArray;
}
