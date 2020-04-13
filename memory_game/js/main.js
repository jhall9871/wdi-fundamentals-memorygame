console.log("Up and running!")

const cards = ["queen", "jack", "king", "king"];
let cardsInPlay = [];

function checkForMatch() {
  if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
      console.log("You found a match!");
    } else {
      console.log("Sorry, try again.")
    }
  }
}

function flipCard(cardID) {
  console.log("User flipped " + cards[cardID]);
  cardsInPlay.push(cards[cardID]);
  checkForMatch();
}
flipCard(2);
flipCard(3);
