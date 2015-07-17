'use strict';

import shuffle from './shuffle';

export default class Player {

  constructor(deck) {
    this.deck = deck;
    this.bank = [];
  }

  get score() {
    return this.deck.length + this.bank.length
  }

  nextCard() {
    if (this.deck.length < 1) {
      this.deck = shuffle(this.bank);
      this.bank = [];
    }

    return this.deck.shift();
  }

  drawThree() {
    var stack = [];
    for (var i = 0; i < 3; i++) {
      stack.push(this.deck.shift());
    }
    return stack;
  }

}
