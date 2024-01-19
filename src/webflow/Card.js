import { TRANSITION_DURATION } from "./constants.js";

export default class Card {
  constructor(emoji, element) {
    this.emoji = emoji;
    this.element = element;
    this.isFlipped = false;
    this.isMatched = false;
  }

  flip() {
    if (this.isMatched) return;

    this.isFlipped = !this.isFlipped;
    this.update();
  }

  match() {
    this.isMatched = true;
    this.update();
  }

  update() {
    if (this.isFlipped) {
      this.element.classList.add("flip");
      setTimeout(() => {
        this.element.textContent = this.emoji;
        this.element.classList.remove("flip");
      }, TRANSITION_DURATION);
    } else {
      this.element.classList.add("flip");
      setTimeout(() => {
        this.element.textContent = "";
        this.element.classList.remove("flip");
      }, TRANSITION_DURATION);
    }
  }
}
