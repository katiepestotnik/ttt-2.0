//Select all the boxes 
const boxes = document.querySelectorAll('.box')
//select container of boxes for click
const container = document.querySelector('.container')
//create players
let currentPlayer = null
const player1 = 'X'
const player2 = 'O'
//displayer winner dom
const winnerDom = document.querySelector('#winner')
let winner
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
  // console.log(currentPlayer)
}

//winning combos

const win1 = [1, 2, 3]
const win2 = [1, 4, 7]
const win3 = [4, 5, 6]
const win4 = [2, 5, 8]
const win5 = [3, 6, 9]
const win6 = [1, 5, 9]
const win7 = [7, 5, 3]
const win8 = [7, 8, 9]
//update above arrays to show x or o accordingly with functions to pass params dynamically
const updateWin1 = (id, winArr, currentPlayer) => {
  if (id === '1') winArr.splice(0, 1, currentPlayer)
  if (id === '2') winArr.splice(1, 1, currentPlayer)
  if (id === '3') winArr.splice(2, 1, currentPlayer)
}
const updateWin2 = (id, winArr, currentPlayer) => {
  if (id === '1') winArr.splice(0, 1, currentPlayer)
  if (id === '4') winArr.splice(1, 1, currentPlayer)
  if (id === '7') winArr.splice(2, 1, currentPlayer)
}
const updateWin3 = (id, winArr, currentPlayer) => {
  if (id === '4') winArr.splice(0, 1, currentPlayer)
  if (id === '5') winArr.splice(1, 1, currentPlayer)
  if (id === '6') winArr.splice(2, 1, currentPlayer)
}
const updateWin4 = (id, winArr, currentPlayer) => {
  if (id === '2') winArr.splice(0, 1, currentPlayer)
  if (id === '5') winArr.splice(1, 1, currentPlayer)
  if (id === '8') winArr.splice(2, 1, currentPlayer)
}
const updateWin5 = (id, winArr, currentPlayer) => {
  if (id === '3') winArr.splice(0, 1, currentPlayer)
  if (id === '6') winArr.splice(1, 1, currentPlayer)
  if (id === '9') winArr.splice(2, 1, currentPlayer)
}
const updateWin6 = (id, winArr, currentPlayer) => {
  if (id === '1') winArr.splice(0, 1, currentPlayer)
  if (id === '5') winArr.splice(1, 1, currentPlayer)
  if (id === '9') winArr.splice(2, 1, currentPlayer)
}
const updateWin7 = (id, winArr, currentPlayer) => {
  if (id === '7') winArr.splice(0, 1, currentPlayer)
  if (id === '5') winArr.splice(1, 1, currentPlayer)
  if (id === '3') winArr.splice(2, 1, currentPlayer)
}
const updateWin8 = (id, winArr, currentPlayer) => {
  if (id === '7') winArr.splice(0, 1, currentPlayer)
  if (id === '8') winArr.splice(1, 1, currentPlayer)
  if (id === '9') winArr.splice(2, 1, currentPlayer)
}
//check win by seeing if every value in winarrs are a currentplayer
const checkWinner = (currentPlayer) => {
  const answer1 = win1.every((ele) => ele === currentPlayer)
  const answer2 = win2.every((ele) => ele === currentPlayer)
  const answer3 = win3.every((ele) => ele === currentPlayer)
  const answer4 = win4.every((ele) => ele === currentPlayer)
  const answer5 = win5.every((ele) => ele === currentPlayer)
  const answer6 = win6.every((ele) => ele === currentPlayer)
  const answer7 = win7.every((ele) => ele === currentPlayer)
  const answer8 = win8.every((ele) => ele === currentPlayer)
  //if any above are true
  if (answer1 || answer2 || answer3 || answer4 || answer5 || answer6 || answer7 || answer8) {
    //console.log(`${player1} is the big winner`)
    //change winner to currentplayer
    winner = currentPlayer
    //change dom to winner
    winnerDom.textContent = winner
    ///remove eventlisten to prevent extra entries
    container.removeEventListener('click', handleClick)
  }
} 
//event listener
const handleClick = (e) => {
  //check who the player is
  checkCurrentPlayer()
  //var to hold target
  const target = e.target
  //change text content to player
  target.textContent = currentPlayer
  //save id for updateWin
  const id = target.id
  //use updateWins functions to change arr to current player 
  updateWin1(id, win1, currentPlayer)
  updateWin2(id, win2, currentPlayer)
  updateWin3(id, win3, currentPlayer)
  updateWin4(id, win4, currentPlayer)
  updateWin5(id, win5, currentPlayer)
  updateWin6(id, win6, currentPlayer)
  updateWin7(id, win7, currentPlayer)
  updateWin8(id, win8, currentPlayer)
  //check that it is updating correctly
  console.log(win1)
  //checkwinner for currentplayer
  checkWinner(currentPlayer)

}
container.addEventListener('click', handleClick)
