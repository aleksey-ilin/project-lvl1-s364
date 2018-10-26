import readlineSync from 'readline-sync';

export const maxAttempt = 3;

export const minRandomNum = 1;
export const maxRandomNum = 10;
export const randomNum = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

export const engine = (question, correctAnswer) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if number even otherwise answer "no".');
  const iter = (attempt) => {
    if (attempt > maxAttempt) {
      console.log(`Congratulations, ${name}!`);
      return undefined;
    }
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
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
