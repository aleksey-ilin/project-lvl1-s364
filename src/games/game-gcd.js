import {
  engine, randomNum, minRandomNum, maxRandomNum,
} from '..';

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

const gameEven = () => {
  const task = 'Find the greatest common divisor of given numbers.';
  const getQuestion = () => `${randomNum(minRandomNum, maxRandomNum)} ${randomNum(minRandomNum, maxRandomNum)}`;
  const getCorrectAnswer = (randomQuestion) => {
    const randomNum1 = Number(randomQuestion.split(' ')[0]);
    const randomNum2 = Number(randomQuestion.split(' ')[1]);
    return String(getNod(randomNum1, randomNum2));
  };
  return engine(task, getQuestion, getCorrectAnswer);
};

export default gameEven;
