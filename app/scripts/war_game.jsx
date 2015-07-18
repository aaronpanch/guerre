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
      collect: 'Collect',
      give: 'Give'
    };

    var lookup = this.state.phase;

    if (lookup === 'collect' && this.state.winner != this.game.player) {
      lookup = 'give';
    }

    return translation[lookup];
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
      <div className={ this.state.phase === 'newGame' ? 'game-splash game-splash--new' : 'game-splash' }>
        <header className="topbar">
          <div className="topbar__left game-splash__in-game">
            <GameRound round={ this.state.round } />
          </div>

          <div className="topbar__right game-splash__in-game">
            <GameScore playerScore={this.state.playerScore} computerScore={this.state.computerScore} />
          </div>

          <div className="topbar__center game-splash__center">
            <h1 className="topbar__title">War (Guerre)</h1>
            <button className="button game-splash__out-of-game" style={{ marginTop: '4em' }} onClick={this.nextStep.bind(this)}>New Game!</button>
          </div>
        </header>

        <main className="game-splash__in-game">
          <section className="card-mat">
            <div className="card-mat__slot">
              <PlayingCardStack opponent>
                {this.state.computerPrizes.map((el, i) => {
                  return <PlayingCard {...el} flipped={i % 4 !== 3} key={`computerPrize${i}`} opponent />
                })}
              </PlayingCardStack>
            </div>
            <div className="card-mat__slot">
              { this.state.computerCard ? <PlayingCard {...this.state.computerCard} opponent /> : <Spacer placeholder/> }
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
