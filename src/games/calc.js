import readlineSync from 'readline-sync';
import { cons, car, cdr } from 'hexlet-pairs';
import { getHead, getUser, getMessage } from '../';

export default () => {
  getHead('What is the result of the expression?');
  const user = getUser();

  const askQuestion = () => {
    const maxNumb = 50;
    const arr = ['+', '-', '*'];
    const firstNumb = Math.floor(Math.random() * maxNumb);
    const secNumb = Math.floor(Math.random() * maxNumb);
    const numbs = firstNumb > secNumb ? cons(firstNumb, secNumb) : cons(secNumb, firstNumb);
    const operation = arr[Math.floor(Math.random() * arr.length)];
    const ask = readlineSync.question(`Question: ${car(numbs)}${operation}${cdr(numbs)}\nYour answer: `);
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
    if (calc(operation, numbs) === +ask) {
      getMessage('true', ask, corAnswer, askQuestion, user);
    } else {
      getMessage('fail', ask, corAnswer, askQuestion, user);
    }
    return false;
  };
  askQuestion();
};
