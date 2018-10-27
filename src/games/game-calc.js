import {
  engine, randomNum, minRandomNum, maxRandomNum,
} from '..';

const operations = ['+', '-', '*'];

const gameCalc = () => {
  const randomNum1 = () => randomNum(minRandomNum, maxRandomNum);
  const randomNum2 = () => randomNum(minRandomNum, maxRandomNum);
  const randomOperation = () => operations[Math.floor(Math.random() * operations.length)];
  const question = () => `${randomNum1()} ${randomOperation()} ${randomNum2()}`;
  const correctAnswer = (randomQuestion) => {
    const operand1 = Number(randomQuestion.split(' ')[0]);
    const operand2 = Number(randomQuestion.split(' ')[2]);
    const operator = randomQuestion.split(' ')[1];
    let result = 0;
    switch (operator) {
      case '+':
        result = operand1 + operand2;
        break;
      case '-':
        result = operand1 - operand2;
        break;
      case '*':
        result = operand1 * operand2;
        break;
      default:
        break;
    }
    return String(result);
  };
  return engine(question, correctAnswer);
};

export default gameCalc;
