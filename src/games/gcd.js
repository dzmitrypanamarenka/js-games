import { cons, car, cdr } from 'hexlet-pairs';
import { random, getHead, getUser, getResult } from '../';

export default () => {
  getHead('Find the greatest common divisor of given numbers.');
  const user = getUser();

  const gameLogic = (numbs) => {
    let res = 1;
    for (let i = 1; i <= cdr(numbs); i += 1) {
      if (car(numbs) % i === 0 && cdr(numbs) % i === 0) {
        res = i;
      }
    }
    return res;
  };

  const askQuestion = () => {
    const minNumb = 1;
    const maxNumb = 101;
    const firstNumb = random(maxNumb, minNumb);
    const secNumb = random(maxNumb, minNumb);
    const numbs = firstNumb > secNumb ? cons(firstNumb, secNumb) : cons(secNumb, firstNumb);
    const question = `${firstNumb} ${secNumb}`;
    getResult(question, numbs, gameLogic, askQuestion, user);
    return false;
  };
  askQuestion();
};
