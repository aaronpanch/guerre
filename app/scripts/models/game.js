'use strict';

import deck from './deck';
import shuffle from './shuffle';
import Player from './player';

export default class Game {

  constructor() {
    var shuffled = shuffle(deck);
    this.player = new Player(shuffled.slice(0, 26));
    this.computer = new Player(shuffled.slice(26, 52));
    this.round = 1;
    this.warResults = null;
  }

  step() {
    var prizes = [];

    if (this.warResults) {
      prizes = this.getPrizes();
      prizes.push(this.warResults.playerCard, this.warResults.computerCard);
      this.warResults = null;
    }

    var results = this.draw();
    results.prizes = prizes;
    if (results.winner) {
      results.winner.bank.push(results.playerCard, results.computerCard);
      results.winner.bank = results.winner.bank.concat(prizes);
      this.round++;
    } else {
      this.warResults = results;
    }

    return results;
  }

  draw() {
    var playerCard = this.player.nextCard()
      , computerCard = this.computer.nextCard();

    return {
      playerCard: playerCard,
      computerCard: computerCard,
      prizes: [],
      winner: this.winner(playerCard, computerCard)
    };
  }

  winner(playerCard, computerCard) {
    var winnerTable = [this.computer, null, this.player];
    return winnerTable[playerCard.compareTo(computerCard) + 1];
  }

  getPrizes() {
    return [].concat(this.computer.drawThree(), this.player.drawThree());
  }

}
