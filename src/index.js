import readlineSync from 'readline-sync';

export default () => {
  const user = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${user}!`);
  return user;
};
