import readlineSync from 'readline-sync';
import { cons, car, cdr } from 'hexlet-pairs';
import { random, getHead, getUser, getResult } from '../';

export default () => {
  getHead('What is the result of the expression?');
  const user = getUser();

  const askQuestion = () => {
    const maxNumb = 50;
    const arr = ['+', '-', '*'];
    const firstNumb = random(maxNumb);
    const secNumb = random(maxNumb);
    const numbs = firstNumb > secNumb ? cons(firstNumb, secNumb) : cons(secNumb, firstNumb);
    const operation = arr[random(arr.length - 1)];
    const answer = Number(readlineSync.question(`Question: ${car(numbs)}${operation}${cdr(numbs)}\nYour answer: `));
    const calc = (op, pair) => {
      switch (op) {
        case '+':
          return car(pair) + cdr(pair);
        case '-':
          return car(pair) - cdr(pair);
        case '*':
          return car(pair) * cdr(pair);
        default:
          return false;
      }
    };
    const corAnswer = calc(operation, numbs);
    getResult(answer, corAnswer, askQuestion, user);
    return false;
  };
  askQuestion();
};
