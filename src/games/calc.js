import readlineSync from 'readline-sync';
import { cons, car, cdr } from 'hexlet-pairs';
import hello from '../';

export default () => {
  const head = () => {
    console.log('Welcome to Brain Games!\nWhat is the result of the expression?\n\n');
    return hello();
  };
  const user = head();
  let count = 0;

  const askQuestion = () => {
    const maxNumb = 50;
    const arr = ['+', '-', '*'];
    const firstNumb = Math.floor(Math.random() * maxNumb);
    const secNumb = Math.floor(Math.random() * maxNumb);
    const numbs = firstNumb > secNumb ? cons(firstNumb, secNumb) : cons(secNumb, firstNumb);
    const operation = arr[Math.floor(Math.random() * arr.length)];
    const ask = readlineSync.question(`Question: ${car(numbs)}${operation}${cdr(numbs)}\nYour answer: `);
    const calc = (op, pair) => {
      switch (op) {
        case '+':
          return car(pair) + cdr(pair);
        case '-':
          return car(pair) - cdr(pair);
        case '*':
          return car(pair) * cdr(pair);
        default:
          return false;
      }
    };
    const corAnswer = calc(operation, numbs);
    const getMessage = (msg) => {
      if (msg === 'true') {
        count += 1;
        console.log('Correct!');
        if (count === 3) {
          console.log(`Congratulations, ${user}!`);
          return false;
        }
        askQuestion();
      } else {
        console.log(`"${ask}" is wrong answer ;(. Correct answer was "${corAnswer}"\nLet's try again, ${user}`);
        return false;
      }
      return false;
    };
    if (calc(operation, numbs) === +ask) {
      getMessage('true');
    } else {
      getMessage('fail');
    }
    return false;
  };
  askQuestion();
};
