const person = {
  firstName: 'Karen',
  lastName: 'Bu',
  hobby: 'playing hockey',
};
console.log(person);

const fullName = person.firstName + ' ' + person.lastName;
console.log('The name of the person is', fullName);

person.job = 'wrangling circus monkeys';
console.log("The person's job is:", person.job);

person['previousJob'] = 'graphic designer';
console.log("The person's previous job was:", person['previousJob']);

console.log(person);
