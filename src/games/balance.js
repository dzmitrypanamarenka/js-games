import { random, getHead, getUser, getResult } from '../';

export default () => {
  getHead('Find the greatest common divisor of given numbers.');
  const user = getUser();

  const gameLogic = (numb) => {
    const compare = (a, b) => {
      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      }
      return 0;
    };
    let arr = String(numb).split('').sort(compare);
    const balance = () => {
      arr[arr.length - 1] = Number(arr[arr.length - 1]) - 1;
      arr[0] = Number(arr[0]) + 1;
      arr = arr.sort(compare);
      if ((arr[arr.length - 1] - 1) === arr[0] || (arr[arr.length - 1]) === arr[0]) {
        return false;
      }
      return balance();
    };
    balance();
    return Number(arr.join(''));
  };

  const askQuestion = () => {
    const minNumb = 1;
    const maxNumb = 10000;
    const numb = random(maxNumb, minNumb);
    const question = `${numb}`;
    getResult(question, numb, gameLogic, askQuestion, user);
    return false;
  };
  askQuestion();
};
