'use strict';

import React from 'react';
import Game from './models/game'
import PlayingCard from './playing_card';
import PlayingCardStack from './playing_card_stack';
import Spacer from './spacer';
import GameRound from './game_round';
import GameScore from './game_score';

export default class WarGame extends React.Component {

  constructor(props) {
    super(props);

    this.game = new Game();

    this.state = {
      round: 0,
      playerScore: 0,
      computerScore: 0,
      playerCard: null,
      playerPrizes: [],
      computerCard: null,
      computerPrizes: [],
      winner: null,
      phase: 'newGame'
    };
  }

  buttonText() {
    var translation = {
      newGame: 'New Game',
      draw: 'Draw',
      warDraw: 'Draw Another',
      reinforce: 'Draw Three',
      collect: 'Collect'
    };

    return translation[this.state.phase];
  }

  nextStep() {
    var gameState = this.game.step();

    this.setState(Object.assign({
      round: this.game.round,
      playerScore: this.game.player.score,
      computerScore: this.game.computer.score
    }, gameState));
  }

  render() {
    return (
      <div>
        <header className="topbar">
          <div className="topbar__left">
            <GameRound round={ this.state.round } />
          </div>

          <div className="topbar__right">
            <GameScore playerScore={this.state.playerScore} computerScore={this.state.computerScore} />
          </div>

          <h1 className="topbar__title">War (Guerre)</h1>
        </header>

        <main>
          <section className="card-mat">
            <div className="card-mat__slot">
              <PlayingCardStack>
                {this.state.computerPrizes.map((el, i) => {
                  return <PlayingCard {...el} flipped={i % 4 !== 3} key={`computerPrize${i}`} />
                })}
              </PlayingCardStack>
            </div>
            <div className="card-mat__slot">
              { this.state.computerCard ? <PlayingCard {...this.state.computerCard} /> : <Spacer placeholder/> }
            </div>
            <div className="card-mat__slot">
              <Spacer>
                <h3 className="player-name">Player 2</h3>
              </Spacer>
            </div>
          </section>

          <section className="card-mat">
            <div className="card-mat__slot">
              <Spacer>
                <h3 className="player-name">Player 1</h3>
                <button className="button" onClick={this.nextStep.bind(this)}>{ this.buttonText() }</button>
              </Spacer>
            </div>
            <div className="card-mat__slot">
              { this.state.playerCard ? <PlayingCard {...this.state.playerCard} /> : <Spacer placeholder/> }
            </div>
            <div className="card-mat__slot">
              <PlayingCardStack>
                {this.state.playerPrizes.map((el, i) => {
                  return <PlayingCard {...el} flipped={i % 4 !== 3} key={`playerPrize${i}`}/>
                })}
              </PlayingCardStack>
            </div>
          </section>
        </main>
      </div>
    );
  }
}
