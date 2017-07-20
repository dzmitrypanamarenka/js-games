#!/usr/bin/env node
'use strict';

var _ = require('../');

var _2 = _interopRequireDefault(_);

var _brainGames = require('./brain-games');

var _brainGames2 = _interopRequireDefault(_brainGames);

var _readlineSync = require('readline-sync');

var _readlineSync2 = _interopRequireDefault(_readlineSync);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var head = function head() {
  (0, _brainGames2.default)();
  console.log('Answer "yes" if number even otherwise answer "no".\n\n');
  return (0, _2.default)();
};
var user = head();

var getMessage = function getMessage(msg, count, ans, cor) {
  if (msg === 'true') {
    console.log('Correct!');
    if (count === 3) {
      return console.log('Congratulations, ' + user + '!');
    }
  } else if (msg === 'fail') {
    console.log(ans + ' is wrong answer ;(. Correct answer was ' + cor + '\n\n    Let\'s try again, ' + user);
    return false;
  }
};

var askQuestion = function askQuestion() {
  var maxNumb = 99;
  var numb = Math.floor(Math.random() * maxNumb);
  var ask = _readlineSync2.default.question(numb + ' ');
  var answer = ask;
  var corAnswer = numb % 2 === 0 ? 'yes' : 'no';
  console.log(answer === corAnswer);
  var count = 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iaW4vYnJhaW4tZXZlbi5qcyJdLCJuYW1lcyI6WyJoZWFkIiwiY29uc29sZSIsImxvZyIsInVzZXIiLCJnZXRNZXNzYWdlIiwibXNnIiwiY291bnQiLCJhbnMiLCJjb3IiLCJhc2tRdWVzdGlvbiIsIm1heE51bWIiLCJudW1iIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiYXNrIiwicXVlc3Rpb24iLCJhbnN3ZXIiLCJjb3JBbnN3ZXIiXSwibWFwcGluZ3MiOiI7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxPQUFPLFNBQVBBLElBQU8sR0FBTTtBQUNqQjtBQUNBQyxVQUFRQyxHQUFSLENBQVksd0RBQVo7QUFDQSxTQUFPLGlCQUFQO0FBQ0QsQ0FKRDtBQUtBLElBQU1DLE9BQU9ILE1BQWI7O0FBRUEsSUFBTUksYUFBYSxTQUFiQSxVQUFhLENBQUNDLEdBQUQsRUFBTUMsS0FBTixFQUFhQyxHQUFiLEVBQWtCQyxHQUFsQixFQUEwQjtBQUMzQyxNQUFJSCxRQUFRLE1BQVosRUFBb0I7QUFDbEJKLFlBQVFDLEdBQVIsQ0FBWSxVQUFaO0FBQ0EsUUFBSUksVUFBVSxDQUFkLEVBQWlCO0FBQ2YsYUFBT0wsUUFBUUMsR0FBUix1QkFBZ0NDLElBQWhDLE9BQVA7QUFDRDtBQUNGLEdBTEQsTUFLTyxJQUFJRSxRQUFRLE1BQVosRUFBb0I7QUFDekJKLFlBQVFDLEdBQVIsQ0FBZUssR0FBZixnREFBNkRDLEdBQTdELGtDQUNtQkwsSUFEbkI7QUFFQSxXQUFPLEtBQVA7QUFDRDtBQUNGLENBWEQ7O0FBYUEsSUFBTU0sY0FBYyxTQUFkQSxXQUFjLEdBQU07QUFDeEIsTUFBTUMsVUFBVSxFQUFoQjtBQUNBLE1BQU1DLE9BQU9DLEtBQUtDLEtBQUwsQ0FBV0QsS0FBS0UsTUFBTCxLQUFnQkosT0FBM0IsQ0FBYjtBQUNBLE1BQU1LLE1BQU0sdUJBQWFDLFFBQWIsQ0FBeUJMLElBQXpCLE9BQVo7QUFDQSxNQUFNTSxTQUFTRixHQUFmO0FBQ0EsTUFBTUcsWUFBWVAsT0FBTyxDQUFQLEtBQWEsQ0FBYixHQUFpQixLQUFqQixHQUF5QixJQUEzQztBQUNBVixVQUFRQyxHQUFSLENBQVllLFdBQVdDLFNBQXZCO0FBQ0EsTUFBSVosUUFBUSxDQUFaO0FBQ0EsTUFBSVcsWUFBWSxTQUFTLElBQXJCLENBQUosRUFBZ0M7QUFDOUJiLGVBQVcsTUFBWCxFQUFtQkUsS0FBbkIsRUFBMEJXLE1BQTFCLEVBQWtDQyxTQUFsQztBQUNEO0FBQ0QsTUFBSUQsV0FBV0MsU0FBZixFQUEwQjtBQUN4QlosYUFBUyxDQUFUO0FBQ0FGLGVBQVcsTUFBWCxFQUFtQkUsS0FBbkI7QUFDQUc7QUFDRCxHQUpELE1BSU87QUFDTEwsZUFBVyxNQUFYLEVBQW1CRSxLQUFuQixFQUEwQlcsTUFBMUIsRUFBa0NDLFNBQWxDO0FBQ0Q7QUFDRixDQWxCRDtBQW1CQVQiLCJmaWxlIjoiYnJhaW4tZXZlbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5pbXBvcnQgaGVsbG8gZnJvbSAnLi4vJztcbmltcG9ydCB3ZWxjb21lIGZyb20gJy4vYnJhaW4tZ2FtZXMnO1xuaW1wb3J0IHJlYWRsaW5lU3luYyBmcm9tICdyZWFkbGluZS1zeW5jJztcblxuY29uc3QgaGVhZCA9ICgpID0+IHtcbiAgd2VsY29tZSgpO1xuICBjb25zb2xlLmxvZygnQW5zd2VyIFwieWVzXCIgaWYgbnVtYmVyIGV2ZW4gb3RoZXJ3aXNlIGFuc3dlciBcIm5vXCIuXFxuXFxuJyk7XG4gIHJldHVybiBoZWxsbygpO1xufTtcbmNvbnN0IHVzZXIgPSBoZWFkKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2UgPSAobXNnLCBjb3VudCwgYW5zLCBjb3IpID0+IHtcbiAgaWYgKG1zZyA9PT0gJ3RydWUnKSB7XG4gICAgY29uc29sZS5sb2coJ0NvcnJlY3QhJyk7XG4gICAgaWYgKGNvdW50ID09PSAzKSB7XG4gICAgICByZXR1cm4gY29uc29sZS5sb2coYENvbmdyYXR1bGF0aW9ucywgJHt1c2VyfSFgKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAobXNnID09PSAnZmFpbCcpIHtcbiAgICBjb25zb2xlLmxvZyhgJHthbnN9IGlzIHdyb25nIGFuc3dlciA7KC4gQ29ycmVjdCBhbnN3ZXIgd2FzICR7Y29yfVxcblxuICAgIExldCdzIHRyeSBhZ2FpbiwgJHt1c2VyfWApO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuY29uc3QgYXNrUXVlc3Rpb24gPSAoKSA9PiB7XG4gIGNvbnN0IG1heE51bWIgPSA5OTtcbiAgY29uc3QgbnVtYiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1heE51bWIpO1xuICBjb25zdCBhc2sgPSByZWFkbGluZVN5bmMucXVlc3Rpb24oYCR7bnVtYn0gYCk7XG4gIGNvbnN0IGFuc3dlciA9IGFzaztcbiAgY29uc3QgY29yQW5zd2VyID0gbnVtYiAlIDIgPT09IDAgPyAneWVzJyA6ICdubyc7XG4gIGNvbnNvbGUubG9nKGFuc3dlciA9PT0gY29yQW5zd2VyKTtcbiAgbGV0IGNvdW50ID0gMDtcbiAgaWYgKGFuc3dlciAhPT0gKCd5ZXMnIHx8ICdubycpKSB7XG4gICAgZ2V0TWVzc2FnZSgnZmFpbCcsIGNvdW50LCBhbnN3ZXIsIGNvckFuc3dlcik7XG4gIH1cbiAgaWYgKGFuc3dlciA9PT0gY29yQW5zd2VyKSB7XG4gICAgY291bnQgKz0gMTtcbiAgICBnZXRNZXNzYWdlKCd0cnVlJywgY291bnQpO1xuICAgIGFza1F1ZXN0aW9uKCk7XG4gIH0gZWxzZSB7XG4gICAgZ2V0TWVzc2FnZSgnZmFpbCcsIGNvdW50LCBhbnN3ZXIsIGNvckFuc3dlcik7XG4gIH1cbn07XG5hc2tRdWVzdGlvbigpO1xuXG4iXX0=