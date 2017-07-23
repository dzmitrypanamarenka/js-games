import letsPlay, { random } from '../';

export default () => {
  const headMsg = 'What number is missing in this progression?';

  const gameLogic = (arr, start, step) => {
    let res;
    for (let i = 0; i <= arr.length; i += 1) {
      if (arr[i] === '..') {
        res = start + (i * step);
      }
    }
    return res;
  };

  const gameData = () => {
    const step = random(50);
    const minNumb = random(step, 1);
    const progLength = 10;
    const arr = [minNumb];
    for (let i = 1; i < progLength; i += 1) {
      arr.push(minNumb + (i * step));
    }
    arr[random(arr.length)] = '..';
    const question = `${arr.join(' ')}`;
    const result = gameLogic(arr, minNumb, step);
    return { question, result };
  };

  return letsPlay(headMsg, gameData);
};
