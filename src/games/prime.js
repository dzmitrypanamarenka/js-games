import letsPlay, { random } from '../';

export default () => {
  const headMsg = 'Answer "yes" if number prime otherwise answer "no".';

  const isPrime = (numb) => {
    const check = (iter) => {
      if (numb === iter) {
        return true;
      } else if (numb % iter === 0) {
        return false;
      }
      return check(iter + 1);
    };
    return check(2);
  };

  const gameData = () => {
    const minNumb = 2;
    const maxNumb = 100;
    const numb = random(maxNumb, minNumb);
    const question = `${numb}`;
    const result = isPrime(numb) ? 'yes' : 'no';
    return { question, result };
  };

  return letsPlay(headMsg, gameData);
};

