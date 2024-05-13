let cards = [];
let sum = 0;

let cardDisplay = document.getElementById("cards");
let messageDisplay = document.getElementById("message");
let sumDisplay = document.getElementById("sum");

let isAlive = false;
let hasBlackJack = false;

let player = {
  name: "Isabelle",
  chips: 150,
};

let playerDetails = document.getElementById("playerDetails");
playerDetails.textContent = `${player.name}: $${player.chips}`;

// function to get random number
function getRandomNumber() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber === 1) {
    return 11;
  } else if (randomNumber > 10) {
    return 10;
  } else {
    return randomNumber;
  }
}

function startGame() {
  isAlive = true;
  let card1 = getRandomNumber();
  let card2 = getRandomNumber();
  cards = [card1, card2];
  sum = card1 + card2;
  renderGame();
}

// function to display cards and sum
function renderGame() {
  cardDisplay.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardDisplay.textContent += cards[i] + ", ";
  }

  sumDisplay.textContent = "Sum: " + sum;

  if (sum <= 20) {
    messageDisplay.textContent = "Would you like to draw another card?";
  } else if (sum === 21) {
    messageDisplay.textContent = "Congrats, you've won!!";
  } else {
    messageDisplay.textContent = "You lose!!";
    isAlive = false;
  }
}

// fuction for new card
function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card3 = getRandomNumber();
    sum += card3;
    cards.push(card3);
    renderGame();
  }
}
