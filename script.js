
const p1Button = document.getElementById('p1');
const p2Button = document.getElementById('p2');
const p1display = document.getElementById('p1display');
const p2display = document.getElementById('p2display');
const reset = document.getElementById('reset');
const input = document.querySelector('input');
const winningScoreDisplay = document.querySelector('p span');

var player1 = prompt("PLAYER 1 name is ?");
var player2 = prompt('PLAYER 2 name is ?');

  if(player1 == null || player1.trim() == '' || !isNaN(player1)){
    p1Button.textContent = 'Player 1';
  }
  else{
     p1Button.textContent = player1;
  }

  if(player2 == null || player2.trim() == '' || !isNaN(player2)){
     p2Button.textContent = 'player 2'
  }else{
     p2Button.textContent = player2;
  }


p1Score = 0;
p2Score = 0;
let gameOver = false;
let winningScore = 5;

p1Button.addEventListener('click' , function(){
    if(!gameOver){
      p1Score++;
      if(p1Score === winningScore){
        gameOver = true;
        p1display.classList.add('textcolorp1');
        alert('Player 1 wins');
      }
      p1display.textContent = p1Score;
   }
 });

p2Button.addEventListener('click' , function(){
  if(!gameOver){
      p2Score++;
  if(p2Score === winningScore){
      gameOver = true;
      p2display.classList.add('textcolorp2');
      alert('Player 2 wins');
    }
    p2display.textContent = p2Score;

  }
});

reset.addEventListener('click' ,resset);

function resset(){
  p1Score = 0;
  p2Score = 0;
  p1display.textContent = p1Score;
  p2display.textContent = p2Score;
  p1display.classList.remove('textcolorp1');
  p2display.classList.remove('textcolorp2');
  gameOver = false;
};

input.addEventListener('change' , function(){
   winningScoreDisplay.textContent = this.value;
   winningScore = Number(this.value);
   resset();
});