/* exported compact */

function compact(array) {
  const compactArray = [];
  for (let index = 0; index < array.length; index++) {
    if (
      array[index] !== false &&
      array[index] !== null &&
      Number.isNaN(array[index]) !== true &&
      array[index] !== 0 &&
      array[index] !== -0 &&
      array[index] !== undefined &&
      array[index] !== ''
    )
      compactArray.push(array[index]);
  }
  return compactArray;
}
