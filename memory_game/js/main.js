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
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }
];
let cardsInPlay = [];

function checkForMatch() {
  //this.setAttribute('src', this.cardImage)
  if (cardsInPlay.length === 2) {
    if (cardsInPlay[0].rank === cardsInPlay[1].rank) {
      alert("You found a match!");
    } else {
      alert("Sorry, try again.")
    }
  }
}

function flipCard() {
  let cardID = this.getAttribute('data-id');
  console.log("User flipped " + cards[cardID].rank);
  cardsInPlay.push(cards[cardID]);
  //console.log(cards[cardID].cardImage);
  //console.log(cards[cardID].suit);
  document.getElementsByTagName('img')[cardID].setAttribute('src', cards[cardID].cardImage);
  checkForMatch();
}

function createBoard() {
  for (var i = 0; i < cards.length; i++) {
    let cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  }
}

function resetBoard() {
    let hand = document.querySelectorAll('img');
    for (let i = 0; i < hand.length; i++) {
      hand[i].remove();
    }
    cardsInPlay = [];
    createBoard();
}

createBoard();
