/* Your JS goes in this file */
function isAdult(age) {
  if (age >= 18) return true;
  if (age < 18) return false;
}

const isAdultResult = isAdult(31);
console.log('isAdultResult:', isAdultResult);

function didStudentPass(score) {
  if (score >= 70) return true;
  if (score < 70) return false;
}

const didStudentPassResult = didStudentPass(68);
console.log('didStudentPassResult:', didStudentPassResult);

function gradeCalculator(score) {
  if (score < 60) return 'F';
  if (score < 70) return 'D';
  if (score < 80) return 'C';
  if (score < 90) return 'B';
  if (score < 100) return 'A';
  if (score > 100) return 'A++';
}

const gradeCalculatorResult = gradeCalculator(55);
console.log('gradeCalculatorResult:', gradeCalculatorResult);

function seasonMessenger(season) {
  if (season === 'summer') return 'it is hot today';
  if (season === 'spring') return 'the flowers are blooming';
  if (season === 'autumn') return 'the leaves are changing colors';
  if (season === 'winter') return 'it is cold today';
  else return 'please enter a valid season';
}
const seasonMessengerResult = seasonMessenger('fire season');
console.log('seasonMessengerResult:', seasonMessengerResult);

function dayDetector(dayOfTheWeek) {
  if (dayOfTheWeek === 'saturday' || dayOfTheWeek === 'sunday')
    return 'Have a good weekend!';
  else return 'It is a weekday!';
}

const dayDetectorResult = dayDetector('sunday');
console.log('dayDetectorResult:', dayDetectorResult);
