import letsPlay, { random } from '../';

export default () => {
  const headMsg = 'Answer "yes" if number even otherwise answer "no".';

  const gameLogic = numb => (numb % 2 === 0 ? 'yes' : 'no');

  const gameData = () => {
    const maxNumb = 99;
    const numb = random(maxNumb);
    const question = `${numb}`;
    const result = gameLogic(numb);
    return { question, result };
  };
  letsPlay(headMsg, gameData);
};
