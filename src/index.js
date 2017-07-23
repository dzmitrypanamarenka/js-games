import readlineSync from 'readline-sync';

let count = 0;
const random = (max, min = '0') => Math.floor(min + (Math.random() * ((max + 1) - min)));
const getHead = (str) => {
  console.log(`Welcome to the Brain Games!\n${str}\n\n`);
};
const getUser = () => {
  const user = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${user}!\n`);
  return user;
};
const getAnswer = quest => readlineSync.question(`Question: ${quest}\nYour answer: `);
const getMessage = (msg, answer, corAnswer, user) => {
  if (msg === 'true') {
    count += 1;
    console.log('Correct!');
    if (count === 3) {
      console.log(`Congratulations, ${user}!`);
      return false;
    }
  } else {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${corAnswer}"\nLet's try again, ${user}`);
    return false;
  }
  return true;
};
export default (headMsg, game) => {
  getHead(headMsg);
  const user = getUser();
  const getResult = () => {
    const data = game();
    let answer = getAnswer(data.question);
    const corAnswer = data.result;
    if (typeof corAnswer === 'number') {
      if (!isNaN(Number(answer))) {
        answer = Number(answer);
      }
    }
    if (answer === corAnswer) {
      if (getMessage('true', answer, corAnswer, user)) {
        getResult();
      } else {
        return false;
      }
    } else {
      getMessage('fail', answer, corAnswer, user);
      return false;
    }
    return false;
  };
  return getResult();
};

export { random };
