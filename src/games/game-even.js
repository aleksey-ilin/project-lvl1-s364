import { maxAttempt, randomNum } from '..';
import readlineSync from 'readline-sync';

const isEven = number => number % 2 === 0;

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if number even otherwise answer "no".');

const gameEven = (attempt = 1) => {
  if (attempt > maxAttempt) {
    return `Congratulations, ${name}!`;
  }
  const question = randomNum();
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  if (answer === correctAnswer) {
    console.log('Correct!');
    return gameEven(attempt + 1);
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return `Let's try again, ${name}!`;
};

export default gameEven;
