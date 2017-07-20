#!/usr/bin/env node

import hello from '../';
import welcome from './brain-games';
import readlineSync from 'readline-sync';

const head = () => {
  welcome();
  console.log('Answer "yes" if number even otherwise answer "no".\n\n');
  return hello();
};
const user = head();

const getMessage = (msg, count, ans, cor) => {
  if (msg === 'true') {
    console.log('Correct!');
    if (count === 3) {
      return console.log(`Congratulations, ${user}!`);
    }
  } else if (msg === 'fail') {
    console.log(`${ans} is wrong answer ;(. Correct answer was ${cor}\n
    Let's try again, ${user}`);
    return false;
  }
};

const askQuestion = () => {
  const maxNumb = 99;
  const numb = Math.floor(Math.random() * maxNumb);
  const ask = readlineSync.question(`${numb} `);
  const answer = ask;
  const corAnswer = numb % 2 === 0 ? 'yes' : 'no';
  console.log(answer === corAnswer);
  let count = 0;
  if (answer !== ('yes' || 'no')) {
    getMessage('fail', count, answer, corAnswer);
  }
  if (answer === corAnswer) {
    count += 1;
    getMessage('true', count);
    askQuestion();
  } else {
    getMessage('fail', count, answer, corAnswer);
  }
};
askQuestion();

