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
export default (headMsg, game) => {
  getHead(headMsg);
  const user = getUser();
  const getResult = () => {
    const data = game();
    const answer = getAnswer(data.question);
    const corAnswer = String(data.result);
    if (answer === corAnswer) {
      count += 1;
      console.log('Correct!');
      if (count === 3) {
        console.log(`Congratulations, ${user}!`);
        return false;
      }
      getResult();
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${corAnswer}"\nLet's try again, ${user}`);
      return false;
    }
    return false;
  };
  return getResult();
};

export { random };
