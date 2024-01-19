import Card from "./Card.js";
import { TRANSITION_DURATION } from "./constants.js";
import { shuffleArray } from "./utils.js";

export default class GameBoard {
  constructor(emojis) {
    this.cardElements = Array.from(
      document.querySelectorAll(".match-game_card")
    );
    this.cards = this.createCards(emojis);
    this.flippedCards = [];
    this.matchedCount = 0;
    console.log(this.cards);
  }

  createCards(emojis) {
    let shuffledEmojis = emojis.concat(emojis);
    shuffleArray(shuffledEmojis);
    return shuffledEmojis.map(
      (emoji, index) => new Card(emoji, this.cardElements[index])
    );
  }

  handleCardClick(card) {
    // Ignore clicks on already matched or currently flipped cards
    if (card.isMatched || card.isFlipped) {
      console.log("ignore");
      return;
    }

    card.flip();

    // If no other card is flipped, keep this card flipped
    if (this.flippedCards.length === 0) {
      console.log("here");
      this.flippedCards.push(card);
    } else if (this.flippedCards.length === 1) {
      // If one card is already flipped, check if this is a match
      this.flippedCards.push(card);
      this.checkForMatch();
    }
  }

  checkForMatch() {
    if (this.flippedCards.length === 2) {
      const [firstCard, secondCard] = this.flippedCards;

      if (firstCard.emoji === secondCard.emoji) {
        // If both cards match
        firstCard.match();
        secondCard.match();
        this.matchedCount += 2;

        // Check if the game is won
        if (this.matchedCount === this.cards.length) {
          // Implement game win logic here (e.g., display a message)
          console.log("You won!");
        }
      } else {
        // If cards don't match, flip them back after a short delay
        setTimeout(() => {
          firstCard.flip();
          secondCard.flip();
        }, TRANSITION_DURATION * 3);
      }

      // Reset the flipped cards array for the next turn
      this.flippedCards = [];
    }
  }
}
