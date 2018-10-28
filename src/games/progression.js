import engine from '..';
import { randomNum } from '../utils';

const task = 'What number is missing in this progression?';

const minRandomNum = 1;
const maxRandomNum = 10;

const getProgression = (startingNum, step, length) => {
  const iter = (acc) => {
    const result = acc;
    if (result.length >= length) {
      result[Math.floor(Math.random() * result.length)] = '..';
      return result;
    }
    const newElement = result[result.length - 1] + step;
    return iter([...result, newElement]);
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

const getData = () => {
  const randomStartingNum = randomNum(minRandomNum, maxRandomNum);
  const randomStep = randomNum(minRandomNum, maxRandomNum);
  const length = 10;
  const question = getProgression(randomStartingNum, randomStep, length);
  const correctAnswer = getCorrectAnswer(question, randomStep);
  return [question, correctAnswer];
};

export default () => engine(task, getData);
