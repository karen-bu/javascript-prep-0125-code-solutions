function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
const sum = addTwoNumbers(2, 2);
console.log('addTwoNumbers:', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}
const minutes = convertHoursToMinutes(2);
console.log('convertHoursToMinutes:', minutes);

function getGreeting(name) {
  return 'Hello' + ' ' + name;
}
const greeting = getGreeting('World!');
console.log('greeting:', greeting);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
const sumTimesFive = addAndMultiplyBy5(3, 5);
console.log('sumTimesFive:', sumTimesFive);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
const productDividedByFive = multiplyAndDivideBy5(6, 10);
console.log('productDividedByFive:', productDividedByFive);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
const difference = subtractTwoNumbers(100, 7);
console.log('difference:', difference);

function getCircleCircumference(radius) {
  return radius * 3.14;
}
const circumference = getCircleCircumference(10);
console.log('circumference', circumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
const fullName = getFullName('Karen', 'Bu');
console.log('fullName:', fullName);

function cube(number) {
  return number * number * number;
}
const cubed = cube(3);
console.log('cube', cubed);
