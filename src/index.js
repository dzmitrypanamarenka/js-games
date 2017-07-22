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
const getMessage = (msg, answer, corAnswer, callback, user) => {
  if (msg === 'true') {
    count += 1;
    console.log('Correct!');
    if (count === 3) {
      console.log(`Congratulations, ${user}!`);
      return false;
    }
    callback();
  } else {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${corAnswer}"\nLet's try again, ${user}`);
    return false;
  }
  return false;
};
const getResult = (question, numbs, gameLogic, callback, user) => {
  let answer = getAnswer(question);
  const corAnswer = gameLogic(numbs);
  if (typeof corAnswer === 'number') {
    if (!isNaN(Number(answer))) {
      answer = Number(answer);
    }
  }
  if (answer === corAnswer) {
    getMessage('true', answer, corAnswer, callback, user);
  } else {
    getMessage('fail', answer, corAnswer, callback, user);
  }
};

export { random, getHead, getUser, getAnswer, getMessage, getResult };
