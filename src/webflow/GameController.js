import GameBoard from "./GameBoard.js";
import { EIGHT_EMOJIS_ARRAY } from "./constants.js";

export default class GameController {
  constructor() {
    this.gameBoard = new GameBoard(EIGHT_EMOJIS_ARRAY);
    this.initializeGame();
  }

  initializeGame() {
    // Add event listeners to the cards
    this.addCardEventListeners();
  }

  addCardEventListeners() {
    // Add a click event listener to each card on the game board
    const cards = document.querySelectorAll(".match-game_card");
    cards.forEach((cardElement) => {
      cardElement.addEventListener("click", () => {
        const card = this.gameBoard.cards.find(
          (c) => c.element === cardElement
        );
        this.gameBoard.handleCardClick(card);
      });
    });
  }

  // Additional methods as needed, such as resetGame, updateScore, etc.
}
