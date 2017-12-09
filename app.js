let userName = '';
let userQuestion = 'Will I be rich?';
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
      case 2:
    eightBall = 'Cannot predict now';
    break;
      case 3:
    eightBall = "Don't count on it";
    break;
      case 4:
    eightBall = 'My sources say no';
    break;
      case 5:
    eightBall = 'Outlook not so good';
    break;
      case 6:
    eightBall = 'Signs point to yes';
    break;
}
console.log(userQuestion);
console.log(eightBall);
