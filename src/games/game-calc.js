import {
  engine, randomNum, minRandomNum, maxRandomNum,
} from '..';

const operations = ['+', '-', '*'];
const randomOperation = () => operations[Math.floor(Math.random() * operations.length)];

const gameCalc = () => {
  const task = 'What is the result of the expression?';
  const getQuestion = () => `${randomNum(minRandomNum, maxRandomNum)} ${randomOperation()} ${randomNum(minRandomNum, maxRandomNum)}`;
  const getCorrectAnswer = (randomQuestion) => {
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
  return engine(task, getQuestion, getCorrectAnswer);
};

export default gameCalc;
