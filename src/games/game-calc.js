import {
  engine, randomNum, minRandomNum, maxRandomNum,
} from '..';

const gameCalc = () => {
  const operations = ['+', '-', '*'];
  const randomOperation = operations[Math.floor(Math.random() * operations.length)];
  const randomNum1 = randomNum(minRandomNum, maxRandomNum);
  const randomNum2 = randomNum(minRandomNum, maxRandomNum);
  const question = `${randomNum1} ${randomOperation} ${randomNum2}`;
  let correctAnswer = 0;
  switch (randomOperation) {
    case '+':
      correctAnswer = randomNum1 + randomNum2;
      break;
    case '-':
      correctAnswer = randomNum1 - randomNum2;
      break;
    case '*':
      correctAnswer = randomNum1 * randomNum2;
      break;
    default:
      break;
  }
  return engine(question, String(correctAnswer));
};

export default gameCalc;
