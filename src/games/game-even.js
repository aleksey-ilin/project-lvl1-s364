import {
  engine, randomNum, minRandomNum, maxRandomNum,
} from '..';

const isEven = number => number % 2 === 0;

const gameEven = () => {
  const task = 'Answer "yes" if number even otherwise answer "no".';
  const getQuestion = () => randomNum(minRandomNum, maxRandomNum);
  const getCorrectAnswer = num => (isEven(num) ? 'yes' : 'no');
  return engine(task, getQuestion, getCorrectAnswer);
};

export default gameEven;
