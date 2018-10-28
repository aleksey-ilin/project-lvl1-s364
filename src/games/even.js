import engine from '..';
import { randomNum } from '../utils';

const minRandomNum = 1;
const maxRandomNum = 50;

const isEven = number => number % 2 === 0;

const task = 'Answer "yes" if number even otherwise answer "no".';

const getData = () => {
  const question = randomNum(minRandomNum, maxRandomNum);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => engine(task, getData);
