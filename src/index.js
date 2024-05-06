// function for display card 1 text (random number)
// if else statements (if < 21, deal more, else if 21 congrats, else > 21 you're out)
// display statements
// button for new card
// function for display card 2 text (random number)
// if else statements (if < 21, deal more, else if 21 congrats, else > 21 you're out)

let card1 = Math.floor(Math.random() * 11 + 1);
let cardDisplay = document.getElementById("cards");
let messageDisplay = document.getElementById("message");
let sumDisplay = document.getElementById("sum");

let card2 = Math.floor(Math.random() * 11 + 1);

// function to display card1 and if else statements
function startGame() {
  cardDisplay.textContent = "Cards: " + card1;

  if (card1 <= 20) {
    messageDisplay.textContent = "Would you like to draw another card?";
  } else if (card1 === 21) {
    messageDisplay.textContent = "Congrats, you've won!!";
  } else {
    messageDisplay.textContent = "You lose!!";
  }
}

// draw another card
function drawCard() {
  cardDisplay.textContent = "Cards: " + card1 + ", " + card2;

  // update sum to reflect card numbers
  let sum = card1 + card2;
  sumDisplay.textContent = "Sum: " + sum;

  // create loop to draw another card if <= 20
}
