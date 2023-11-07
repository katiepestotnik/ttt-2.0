//Select all the boxes 
const boxes = document.querySelectorAll('.box')
//select container of boxes for click
const container = document.querySelector('.container')
//create players
let currentPlayer = null
const player1 = 'X'
const player2 = 'O'

//check for currentPlayer
const checkCurrentPlayer = () => {
  if (currentPlayer === null) {
    currentPlayer = player1
  }
  else if (currentPlayer === player1) {
    currentPlayer = player2
  }
  else if (currentPlayer === player2) {
    currentPlayer = player1
  }
  console.log(currentPlayer)
}

//winning combos
const winningCombinations = [
  [1, 2, 3],[4, 5, 6],[7, 8, 9],
  [1, 4, 7],[2, 5, 8],[3, 6, 9],
  [1, 5, 9],[3, 5, 7]
];
//create arrays to hold the boxes player selected
const player1Array = []
const player2Array = []

//check winner
//good resource for checking if values in arr matching
//https://www.freecodecamp.org/news/how-to-compare-arrays-in-javascript/
const checkWinner = () => {
  winningCombinations.forEach((arr) => {
    arrString = arr.toString()
    player1String = player1Array.toString()
    player2String = player2Array.toString()
    // console.log(arrString, player1String, player2String)
    if (arrString === player1String) {
      console.log('player1 wins')
    } else if (arrString === player2String) {
      console.log('player2 wins')
    }
  })
}

//event listener
const handleClick = (e) => {
  //check who the player is
  checkCurrentPlayer()
  //var to hold target
  const target = e.target
  target.textContent = currentPlayer
  if (currentPlayer === player1) {
    player1Array.push(target.id)
  }
  if (currentPlayer === player2) {
    player2Array.push(target.id)
  }
  //checkwinner
  checkWinner()
}

container.addEventListener('click', handleClick)
