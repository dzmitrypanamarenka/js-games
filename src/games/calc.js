import readlineSync from 'readline-sync';
import { cons, car, cdr } from 'hexlet-pairs';
import { random, getHead, getUser, getResult } from '../';

export default () => {
  getHead('What is the result of the expression?');
  const user = getUser();

  const gameLogic = (numbs) => {
    const operation = car(numbs);
    const pair = cdr(numbs);
    switch (operation) {
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

  const askQuestion = () => {
    const maxNumb = 50;
    const arr = ['+', '-', '*'];
    const firstNumb = random(maxNumb);
    const secNumb = random(maxNumb);
    const operation = arr[random(arr.length - 1)];
    const numbs = cons(operation,
      firstNumb > secNumb ? cons(firstNumb, secNumb) : cons(secNumb, firstNumb));
    const question = `${car(cdr(numbs))}${operation}${cdr(cdr(numbs))}`;
    getResult(question, numbs, gameLogic, askQuestion, user);
    return false;
  };
  askQuestion();
};
