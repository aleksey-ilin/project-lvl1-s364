import engine from '..';
import { randomNum } from '../utils';

const task = 'What number is missing in this progression?';

const minRandomNum = 1;
const maxRandomNum = 10;

const getProgression = (startingNum, step, length, index) => {
  const iter = (acc) => {
    if (acc.length >= length) {
      return [...acc.slice(0, index), '..', ...acc.slice(index + 1)];
    }
    const newElement = startingNum + acc.length * step;
    return iter([...acc, newElement]);
  };
  return iter([startingNum]);
};

const getCorrectAnswer = (startingNum, step, index) => String(startingNum + index * step);

const length = 10;

const getData = () => {
  const startingNum = randomNum(minRandomNum, maxRandomNum);
  const step = randomNum(minRandomNum, maxRandomNum);
  const index = randomNum(1, length);
  const question = getProgression(startingNum, step, length, index);
  const correctAnswer = getCorrectAnswer(startingNum, step, index);
  return [question, correctAnswer];
};

export default () => engine(task, getData);
