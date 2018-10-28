import engine from '..';
import { randomNum } from '../utils';

const minRandomNum = 1;
const maxRandomNum = 10;

const getNod = (num1, num2) => {
  const lessNum = num1 > num2 ? num2 : num1;
  const iter = (nod) => {
    if (num1 % nod === 0 && num2 % nod === 0) {
      return nod;
    }
    return iter(nod - 1);
  };
  return iter(lessNum);
};

const task = 'Find the greatest common divisor of given numbers.';

const getCorrectAnswer = (num1, num2) => String(getNod(num1, num2));

const getData = () => {
  const randomNum1 = randomNum(minRandomNum, maxRandomNum);
  const randomNum2 = randomNum(minRandomNum, maxRandomNum);
  const question = `${randomNum1} ${randomNum2}`;
  const correctAnswer = getCorrectAnswer(randomNum1, randomNum2);
  return [question, correctAnswer];
};

export default () => engine(task, getData);
