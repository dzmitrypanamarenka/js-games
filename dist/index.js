'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _readlineSync = require('readline-sync');

var _readlineSync2 = _interopRequireDefault(_readlineSync);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var user = _readlineSync2.default.question('May I have your name? ');
  console.log('Hello, ' + user + '!');
  return user;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJ1c2VyIiwicXVlc3Rpb24iLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7O2tCQUVlLFlBQU07QUFDbkIsTUFBTUEsT0FBTyx1QkFBYUMsUUFBYixDQUFzQix3QkFBdEIsQ0FBYjtBQUNBQyxVQUFRQyxHQUFSLGFBQXNCSCxJQUF0QjtBQUNBLFNBQU9BLElBQVA7QUFDRCxDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlYWRsaW5lU3luYyBmcm9tICdyZWFkbGluZS1zeW5jJztcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjb25zdCB1c2VyID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKCdNYXkgSSBoYXZlIHlvdXIgbmFtZT8gJyk7XG4gIGNvbnNvbGUubG9nKGBIZWxsbywgJHt1c2VyfSFgKTtcbiAgcmV0dXJuIHVzZXI7XG59O1xuIl19