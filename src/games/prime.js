import engine from '..';
import { randomNum } from '../utils';

const minRandomNum = 1;
const maxRandomNum = 50;

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getData = () => {
  const question = randomNum(minRandomNum, maxRandomNum);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => engine(task, getData);
