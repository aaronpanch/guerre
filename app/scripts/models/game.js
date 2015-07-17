'use strict';

import deck from './deck';
import shuffle from './shuffle';
import Player from './player';

export default class Game {

  constructor() {
    var shuffled = shuffle(deck);
    this.player = new Player(shuffled.slice(0, 26));
    this.computer = new Player(shuffled.slice(26, 52));
    this.round = 0;
    this.gameState = {
      playerCard: null,
      playerPrizes: [],
      computerCard: null,
      computerPrizes: [],
      winner: null,
      phase: 'newGame'
    };
  }

  step() {
    switch(this.gameState.phase) {
      case 'newGame':
        this.round++;
        this.gameState.phase = 'draw';
        break;
      case 'draw':
        Object.assign(this.gameState, this.draw());

        if (this.gameState.winner) {
          this.gameState.phase = 'collect';
        } else {
          this.gameState.phase = 'reinforce';
        }

        break;
      case 'warDraw':
        var results = this.draw();

        this.gameState.playerPrizes.push(results.playerCard);
        this.gameState.computerPrizes.push(results.computerCard);
        this.gameState.winner = results.winner;

        if (results.winner) {
          this.gameState.phase = 'collect';
        } else {
          this.gameState.phase = 'reinforce';
        }

        break;
      case 'reinforce':
        this.gameState.playerPrizes = this.gameState.playerPrizes.concat(this.player.drawThree());
        this.gameState.computerPrizes = this.gameState.computerPrizes.concat(this.computer.drawThree());

        this.gameState.phase = 'warDraw';
        break;
      case 'collect':
        var winner = this.gameState.winner;

        // tally winnings
        winner.bankCards([this.gameState.playerCard, this.gameState.computerCard]);
        winner.bankCards(this.gameState.playerPrizes);
        winner.bankCards(this.gameState.computerPrizes);

        // reset round
        this.gameState = {
          playerCard: null,
          playerPrizes: [],
          computerCard: null,
          computerPrizes: [],
          winner: null,
          phase: 'draw'
        };

        this.round++;
    }

    return this.gameState;
  }

  draw() {
    var playerCard = this.player.nextCard()
      , computerCard = this.computer.nextCard();

    return {
      playerCard: playerCard,
      computerCard: computerCard,
      winner: this.winner(playerCard, computerCard)
    };
  }

  winner(playerCard, computerCard) {
    var winnerTable = [this.computer, null, this.player];
    return winnerTable[playerCard.compareTo(computerCard) + 1];
  }

}
