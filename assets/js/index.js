const startGameButton = document.getElementById('startGame')

startGameButton.onclick = function () {
  const intro = document.getElementById('intro')
  intro.style.display = 'none'

  const gameBoard = document.getElementById('game-board')
  gameBoard.style.display = 'grid'
}
