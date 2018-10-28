import engine from '..';
import randomNum from '../utils';

const task = 'What number is missing in this progression?';

const minRandomNum = 1;
const maxRandomNum = 10;

const step = 2;
const length = 10;
const getProgression = (arr) => {
  if (arr.length >= length) {
    const result = arr;
    result[Math.floor(Math.random() * arr.length)] = '..';
    return result;
  }
  const newElement = arr[arr.length - 1] + step;
  return getProgression([...arr, newElement]);
};

const getCorrectAnswer = (progression) => {
  if (progression[0] === '..') {
    return String(progression[1] - step);
  }
  return getCorrectAnswer(progression.slice(1));
};

const getData = () => {
  const question = getProgression([randomNum(minRandomNum, maxRandomNum)]);
  const correctAnswer = getCorrectAnswer(question);
  return [question, correctAnswer];
};

export default () => engine(task, getData);
