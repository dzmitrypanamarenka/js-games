import readlineSync from 'readline-sync';

let count = 0;
const getHead = (str) => {
  console.log(`Welcome to the Brain Games!\n${str}\n\n`);
};
const getUser = () => {
  const user = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${user}!\n`);
  return user;
};
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
export { getHead, getUser, getMessage };
