import engine from '..';
import { randomNum, randomOperation } from '../utils';

const minRandomNum = 1;
const maxRandomNum = 10;

const operations = ['+', '-', '*'];

const getCorrectAnswer = (num1, num2, action) => {
  let result = 0;
  switch (action) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      break;
  }
  return String(result);
};

const task = 'What is the result of the expression?';

const getData = () => {
  const operand1 = randomNum(minRandomNum, maxRandomNum);
  const operand2 = randomNum(minRandomNum, maxRandomNum);
  const operator = randomOperation(operations);
  const question = `${operand1} ${operator} ${operand2}`;
  const correctAnswer = getCorrectAnswer(operand1, operand2, operator);
  return [question, correctAnswer];
};

export default () => engine(task, getData);
