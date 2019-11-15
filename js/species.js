const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    //first click
    hasFlippedCard = true;
    firstCard = this;

    return;
  } 

    //second click
    hasFlippedCard = false;
    secondCard = this;

    checkForMatch();
  }


function checkForMatch() {
  let isMatch = firstCard.dataset.framework === 
  secondCard.dataset.framework;
  
  isMatch ? disableCards() : unflipCards();
  }

function disableCards() {
  //match cards
  firstCard.removeEventListner('click', flipCard);
  secondCard.removeEventListner('click', flipCard);

  resetBoard();
}

function unflipCards() {
   //not a match
   lockBoard = true;
   setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1500);
}


function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}


//shuffle, immediately invoked
(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12)
    card.style.order = randomPos;
  });
})();



cards.forEach(card => card.addEventListener('click', flipCard))


