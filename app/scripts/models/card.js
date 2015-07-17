'use strict';

export default class Card {

  constructor(suit, rank, value) {
    this.suit = suit;
    this.rank = rank;
    this.value = value;
  }

  compareTo(card) {
    if (this.value < card.value) {
      return -1;
    } else if (this.value > card.value) {
      return 1;
    } else {
      return 0;
    }
  }
}
