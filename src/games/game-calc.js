import { maxAttempt, randomNum } from '..';
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

console.log('What is the result of the expression?');

const gameCalc = (attempt = 1) => {
  if (attempt > maxAttempt) {
    return `Congratulations, ${name}!`;
  }
  const operations = ['+', '-', '*'];
  const randomOperation = operations[Math.floor(Math.random() * operations.length)];
  const randomNum1 = randomNum();
  const randomNum2 = randomNum();
  console.log(`Question: ${randomNum1} ${randomOperation} ${randomNum2}`);
  const answer = readlineSync.question('Your answer: ');
  let correctAnswer = 0;
  if (randomOperation === '+') {
    correctAnswer = randomNum1 + randomNum2;
  } else if (randomOperation === '-') {
    correctAnswer = randomNum1 - randomNum2;
  } else {
    correctAnswer = randomNum1 * randomNum2;
  }
  if (Number(answer) === correctAnswer) {
    console.log('Correct!');
    return gameCalc(attempt + 1);
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return `Let's try again, ${name}!`;
};

export default gameCalc;
