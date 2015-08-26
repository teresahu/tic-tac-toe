var painted, content, winningCombinations, theCanvas, c, cxt, y;
var turn = 0;
var squaresFilled = 0;

window.onload = function() {
  'use strict';
  painted = [];
  content = [];
  winningCombinations = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
                        [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
  for (var l = 0; l <= 8; l++) {
    painted[l] = false;
    content[l] = '';
  }
};

function playAgain() {
  'use strict';
  y = confirm('Play again?');
  if (y === true){
    location.reload(true);
  }
  else {
    alert('Thanks for playing!');
  }
}

function checkforWinners(symbol) {
  'use strict';
  for (var a = 0; a < winningCombinations.length; a++) {
    if(content[winningCombinations[a][0]] === symbol && content[winningCombinations[a][1]] === symbol &&
    content[winningCombinations[a][2]] === symbol) {
      alert(symbol + ' WON!');
      playAgain();
    }
  }
}

function canvasClicked(canvasNumber) {
  'use strict';
  theCanvas = 'canvas' + canvasNumber;
  c = document.getElementById(theCanvas);
  cxt = c.getContext('2d');
  if (painted[canvasNumber - 1] === false) {
    if(turn % 2 === 0) {
      cxt.beginPath();
      cxt.moveTo(20, 20);
      cxt.lineTo(180, 180);
      cxt.moveTo(180, 20);
      cxt.lineTo(20, 180);
      cxt.lineWidth = 10;
      cxt.strokeStyle = 'rgba(229,229,229,0.85)';
      cxt.lineCap = 'round';
      cxt.stroke();
      cxt.closePath();
      content[canvasNumber - 1] = 'X';
    }
    else {
      cxt.beginPath();
      cxt.arc(100, 100, 80, 0, Math.PI * 2, true);
      cxt.lineWidth = 10;
      cxt.strokeStyle = 'rgba(0, 0, 0, 0.85)';
      cxt.stroke();
      cxt.closePath();
      content[canvasNumber - 1] = 'O';
    }
    turn++;
    painted[canvasNumber - 1] = true;
    squaresFilled++;
    checkforWinners(content[canvasNumber - 1]);
    if (squaresFilled === 9) {
      alert('The game is over.');
      location.reload(true);
    }
  }
  else {
    alert('That space is already occupied.');
  }
}
