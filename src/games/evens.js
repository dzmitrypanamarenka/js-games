import readlineSync from 'readline-sync';
import { random, getHead, getUser, getResult } from '../';

export default () => {
  getHead('Answer "yes" if number even otherwise answer "no".');
  const user = getUser();

  const askQuestion = () => {
    const maxNumb = 99;
    const numb = random(maxNumb);
    const answer = readlineSync.question(`Question: ${numb}\nYour answer: `);
    const corAnswer = numb % 2 === 0 ? 'yes' : 'no';
    getResult(answer, corAnswer, askQuestion, user);
    return false;
  };
  askQuestion();
};
