import engine from '..';
import randomNum from '../utils';

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

const getCorrectAnswer = (question) => {
  const randomNum1 = Number(question.split(' ')[0]);
  const randomNum2 = Number(question.split(' ')[1]);
  return String(getNod(randomNum1, randomNum2));
};

const getData = () => {
  const question = `${randomNum(minRandomNum, maxRandomNum)} ${randomNum(minRandomNum, maxRandomNum)}`;
  const correctAnswer = getCorrectAnswer(question);
  return [question, correctAnswer];
};

const gameEven = () => engine(task, getData);

export default gameEven;
