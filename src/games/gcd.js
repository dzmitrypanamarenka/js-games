import letsPlay, { random } from '../';

export default () => {
  const headMsg = 'Find the greatest common divisor of given numbers.';

  const getGcd = (a, b) => {
    let res = 1;
    for (let i = 1; i <= a; i += 1) {
      if (a % i === 0 && b % i === 0) {
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
    const question = `${firstNumb} ${secNumb}`;
    const result = getGcd(firstNumb, secNumb);
    return { question, result };
  };

  return letsPlay(headMsg, gameData);
};
