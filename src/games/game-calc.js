import engine from '..';
import randomNum from '../utils';

const minRandomNum = 1;
const maxRandomNum = 10;

const operations = ['+', '-', '*'];
const randomOperation = () => operations[Math.floor(Math.random() * operations.length)];

const getCorrectAnswer = (question) => {
  const operand1 = Number(question.split(' ')[0]);
  const operand2 = Number(question.split(' ')[2]);
  const operator = question.split(' ')[1];
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

const task = 'What is the result of the expression?';

const getData = () => {
  const question = `${randomNum(minRandomNum, maxRandomNum)} ${randomOperation()} ${randomNum(minRandomNum, maxRandomNum)}`;
  const correctAnswer = getCorrectAnswer(question);
  return [question, correctAnswer];
};

export default () => engine(task, getData);
