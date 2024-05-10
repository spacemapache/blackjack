// function for display card 1 text (random number)
// if else statements (if < 21, deal more, else if 21 congrats, else > 21 you're out)
// display statements
// button for new card
// function for display card 2 text (random number)
// if else statements (if < 21, deal more, else if 21 congrats, else > 21 you're out)

// add boolean variable if player is alive or has blackjack

// 2 cards drawn for start game - must be random , show each number and sum

let card1 = Math.floor(Math.random() * 13) + 1;
let card2 = Math.floor(Math.random() * 13) + 1;

let cardDisplay = document.getElementById("cards");
let messageDisplay = document.getElementById("message");
let sumDisplay = document.getElementById("sum");

let isAlive = true;
let hasBlackJack = false;

// function to display cards and sum for starting game
function startGame() {
  cardDisplay.textContent = "Cards: " + card1 + "," + card2;

  let sum = card1 + card2;
  sumDisplay.textContent = "Sum: " + sum;

  if (sum <= 20) {
    messageDisplay.textContent = "Would you like to draw another card?";
  } else if (sum === 21) {
    messageDisplay.textContent = "Congrats, you've won!!";
  } else {
    messageDisplay.textContent = "You lose!!";
  }
}
