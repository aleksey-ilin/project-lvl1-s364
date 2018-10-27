import readlineSync from 'readline-sync';

const maxAttempt = 3;

export default (task, getData) => {
  console.log('Welcome to the Brain Games!');
  console.log(task);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  const iter = (attempt) => {
    if (attempt > maxAttempt) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
    const [question, correctAnswer] = getData();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
      iter(attempt + 1);
      return;
    }
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
  };
  return iter(1);
};
