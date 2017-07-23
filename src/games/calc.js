import { cons, car, cdr } from 'hexlet-pairs';
import letsPlay, { random } from '../';

export default () => {
  const headMsg = 'What is the result of the expression?';

  const gameLogic = (pair, operation) => {
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

  const gameData = () => {
    const maxNumb = 50;
    const arr = ['+', '-', '*'];
    const firstNumb = random(maxNumb);
    const secNumb = random(maxNumb);
    const operation = arr[random(arr.length - 1)];
    const numbs = firstNumb > secNumb ? cons(firstNumb, secNumb) : cons(secNumb, firstNumb);
    const result = gameLogic(numbs, operation);
    const question = `${car(numbs)}${operation}${cdr(numbs)}`;
    return { question, result };
  };
  return letsPlay(headMsg, gameData);
};
