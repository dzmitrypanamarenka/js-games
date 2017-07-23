import letsPlay, { random } from '../';

export default () => {
  const headMsg = 'What number is missing in this progression?';

  const getProgression = (index, start, step, length) => {
    const res = [];
    for (let i = 0; i < length; i += 1) {
      if (i === index) {
        res.push('..');
      } else {
        res.push(start + (i * step));
      }
    }
    return res;
  };

  const gameData = () => {
    const maxNumb = 50;
    const progLength = 10;
    const step = random(maxNumb, 1);
    const startNumb = random(maxNumb);
    const missingNumbIndex = random(progLength);
    const progression = getProgression(missingNumbIndex, startNumb, step, progLength);
    const question = `${progression.join(' ')}`;
    const result = startNumb + (missingNumbIndex * step);
    return { question, result };
  };

  return letsPlay(headMsg, gameData);
};
