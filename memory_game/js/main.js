console.log("Up and running!")

const cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "kind",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }
];
let cardsInPlay = [];

function checkForMatch() {
  if (cardsInPlay.length === 2) {
    if (cardsInPlay[0].rank === cardsInPlay[1].rank) {
      console.log("You found a match!");
    } else {
      console.log("Sorry, try again.")
    }
  }
}

function flipCard(cardID) {
  console.log("User flipped " + cards[cardID].rank);
  cardsInPlay.push(cards[cardID]);
  console.log(cards[cardID].cardImage);
  console.log(cards[cardID].suit);
  checkForMatch();
}



flipCard(2);
flipCard(3);
