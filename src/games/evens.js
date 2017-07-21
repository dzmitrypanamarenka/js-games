import readlineSync from 'readline-sync';
import hello from '../';

export default () => {
  const head = () => {
    console.log('Welcome to Brain Games!\nAnswer "yes" if number even otherwise answer "no".\n\n');
    return hello();
  };
  const user = head();
  let count = 0;

  const askQuestion = () => {
    const maxNumb = 99;
    const numb = Math.floor(Math.random() * maxNumb);
    const ask = readlineSync.question(`Question: ${numb}\nYour answer: `);
    const corAnswer = numb % 2 === 0 ? 'yes' : 'no';
    const getMessage = (msg) => {
      if (msg === 'true') {
        count += 1;
        console.log('Correct!');
        if (count === 3) {
          console.log(`Congratulations, ${user}!`);
          return false;
        }
        askQuestion();
      } else if (msg === 'fail') {
        console.log(`"${ask}" is wrong answer ;(. Correct answer was "${corAnswer}"\nLet's try again, ${user}`);
        return false;
      }
      return false;
    };
    if (ask === corAnswer) {
      getMessage('true');
    } else {
      getMessage('fail');
    }
    return false;
  };
  askQuestion();
};
