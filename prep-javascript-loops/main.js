// create your loops here.

function whileLoop1() {
  const array1 = [];
  let index = 0;

  while (index < 10) {
    array1.push(index);
    index++;
  }

  return array1;
}

const whileLoop1Result = whileLoop1();
console.log('whileLoop1Result', whileLoop1Result);

function whileLoop2() {
  const array2 = [];
  let index = 0;

  while (index < 19) {
    if (index % 2 === 0) array2.push(index);
    index++;
  }

  return array2;
}

const whileLoop2Result = whileLoop2();
console.log('whileLoop2Result:', whileLoop2Result);

function forLoop1() {
  const array3 = [];
  for (let index = 0; index < 10; index++) {
    array3.push(index);
  }

  return array3;
}
const forLoop1Result = forLoop1();
console.log('forLoop1Result:', forLoop1Result);

function forLoop2() {
  const array4 = [];
  for (let index = 100; index >= 0; index--) {
    console.log('Time till explosion: ' + index + '!');
  }
}
const forLoop2Result = forLoop2();
console.log('forLoop2Result', forLoop2Result);

const person = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};

function forInLoop1(object) {
  array5 = [];
  let index = 0;
  for (characterTraits in person) {
    array5.push(characterTraits);
  }
  return array5;
}
const forInLoop1Result = forInLoop1();
console.log('forInLoop1Result', forInLoop1Result);

function forInLoop2(object) {
  array6 = [];
  for (values in object) {
    array6.push(object[values]);
  }
  return array6;
}
const forInLoop2Result = forInLoop2(person);
console.log('forInLoop2Result', forInLoop2Result);
