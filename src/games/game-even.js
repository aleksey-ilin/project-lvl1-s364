import greeting from '..';
import readlineSync from 'readline-sync';

console.log(greeting());

const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

const gameEven = (attempt) => {
  if (attempt > 3) {
    return `Congratulations, ${name}!`;
  }
  const num = Math.round(Math.random() * 10) + 1;
  console.log(`Question: ${num}`);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = num % 2 === 0 ? 'yes' : 'no';
  const incorrectAnswer = (num % 2 === 0 && answer !== 'yes') || (num % 2 !== 0 && answer !== 'no');
  if (incorrectAnswer) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    return `Let's try again, ${name}!`;
  }
  console.log('Correct!');
  return gameEven(attempt + 1);
};

export default gameEven;
