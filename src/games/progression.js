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

const getCorrectAnswer = (progression, step) => {
  const index = progression.indexOf('..');
  if (index === 0) {
    return String(progression[1] - step);
  }
  return String(progression[0] + index * step);
};

const length = 10;

const getData = () => {
  const randomStartingNum = randomNum(minRandomNum, maxRandomNum);
  const randomStep = randomNum(minRandomNum, maxRandomNum);
  const randomIndex = randomNum(1, length);
  const question = getProgression(randomStartingNum, randomStep, length, randomIndex);
  const correctAnswer = getCorrectAnswer(question, randomStep);
  return [question, correctAnswer];
};

export default () => engine(task, getData);
