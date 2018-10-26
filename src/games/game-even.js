import {
  engine, randomNum, minRandomNum, maxRandomNum,
} from '..';

const isEven = number => number % 2 === 0;

const gameEven = () => {
  const question = randomNum(minRandomNum, maxRandomNum);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return engine(question, correctAnswer);
};

export default gameEven;
