import letsPlay, { random } from '../';

export default () => {
  const headMsg = 'Balance the given number.';

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

  const gameData = () => {
    const minNumb = 1;
    const maxNumb = 10000;
    const numb = random(maxNumb, minNumb);
    const question = `${numb}`;
    const result = gameLogic(numb);
    console.log(typeof result);
    return { question, result };
  };
  return letsPlay(headMsg, gameData);
};
