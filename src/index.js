import readlineSync from 'readline-sync';

export const maxAttempt = 3;

export const minRandomNum = 1;
export const maxRandomNum = 10;
export const randomNum = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

export const engine = (task, question, correctAnswer) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(task);
  const iter = (attempt) => {
    if (attempt > maxAttempt) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
    const currentQuestion = question();
    console.log(`Question: ${currentQuestion}`);
    const answer = readlineSync.question('Your answer: ');
    const currentCorrentAnswer = correctAnswer(currentQuestion);
    if (answer === currentCorrentAnswer) {
      console.log('Correct!');
      iter(attempt + 1);
      return;
    }
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${currentCorrentAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
  };
  return iter(1);
};
