let secretNumber = Math.floor(Math.random()*10) + 1
let score = 10;
let highScore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
  };
  
  document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
  
   
    if (!guess) {
      displayMessage('⛔️ No number!');
  
      
    } else if (guess === secretNumber) {
      
      displayMessage('🎉 Correct Number!');
      document.querySelector('.number').textContent = secretNumber;
  
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
  
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
  
      // When guess is wrong
    } else if (guess !== secretNumber) {
      if (score > 1) {
        
        displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        
        displayMessage('💥 You lost the game!');
        document.querySelector('.score').textContent = 0;
      }
    }
  
  });
  
  document.querySelector('.again').addEventListener('click', function () {
    score = 10;
    secretNumber = Math.trunc(Math.random() * 10) + 1;
  
    
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
  
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  });