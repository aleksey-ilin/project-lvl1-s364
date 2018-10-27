import {
  engine, randomNum, minRandomNum, maxRandomNum,
} from '..';

const isEven = number => number % 2 === 0;

const gameEven = () => {
  const getQuestion = () => randomNum(minRandomNum, maxRandomNum);
  const getCorrectAnswer = num => (isEven(num) ? 'yes' : 'no');
  return engine(getQuestion, getCorrectAnswer);
};

export default gameEven;
