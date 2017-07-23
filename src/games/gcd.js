import { cons, car, cdr } from 'hexlet-pairs';
import letsPlay, { random } from '../';

export default () => {
  const headMsg = 'Find the greatest common divisor of given numbers.';

  const gameLogic = (numbs) => {
    let res = 1;
    for (let i = 1; i <= cdr(numbs); i += 1) {
      if (car(numbs) % i === 0 && cdr(numbs) % i === 0) {
        res = i;
      }
    }
    return res;
  };

  const gameData = () => {
    const minNumb = 1;
    const maxNumb = 101;
    const firstNumb = random(maxNumb, minNumb);
    const secNumb = random(maxNumb, minNumb);
    const numbs = firstNumb > secNumb ? cons(firstNumb, secNumb) : cons(secNumb, firstNumb);
    const question = `${firstNumb} ${secNumb}`;
    const result = gameLogic(numbs);
    console.log(typeof result);
    return { question, result };
  };
  return letsPlay(headMsg, gameData);
};
