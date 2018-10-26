import { maxAttempt, randomNum, isEven } from '..';
import readlineSync from 'readline-sync';

const gameEven = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if number even otherwise answer "no".');
  const iter = (attempt) => {
    if (attempt > maxAttempt) {
      console.log(`Congratulations, ${name}!`);
      return undefined;
    }
    const question = randomNum();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    if (answer === correctAnswer) {
      console.log('Correct!');
      return iter(attempt + 1);
    }
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
    return undefined;
  };
  return iter(1);
};

export default gameEven;
