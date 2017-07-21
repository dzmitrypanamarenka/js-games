import readlineSync from 'readline-sync';
import { getHead, getUser, getMessage } from '../';

export default () => {
  getHead('Answer "yes" if number even otherwise answer "no".');
  const user = getUser();

  const askQuestion = () => {
    const maxNumb = 99;
    const numb = Math.floor(Math.random() * maxNumb);
    const ask = readlineSync.question(`Question: ${numb}\nYour answer: `);
    const corAnswer = numb % 2 === 0 ? 'yes' : 'no';
    if (ask === corAnswer) {
      getMessage('true', ask, corAnswer, askQuestion, user);
    } else {
      getMessage('fail', ask, corAnswer, askQuestion, user);
    }
    return false;
  };
  askQuestion();
};
