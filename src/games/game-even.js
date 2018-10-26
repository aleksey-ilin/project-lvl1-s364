import { engine, randomNum } from '..';

const isEven = number => number % 2 === 0;

const gameEven = () => {
  const question = randomNum();
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return engine(question, correctAnswer);
};

export default gameEven;
