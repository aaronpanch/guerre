'use strict';

import React from 'react';
import PlayingCard from './playing_card';
import PlayingCardStack from './playing_card_stack';
import Spacer from './spacer';
import GameRound from './game_round';
import GameScore from './game_score';

export default class WarGame extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      computerCard: { suit: 'diamonds', rank: 'A' },
      playerCard: { suit: 'spades', rank: 'K' }
    };
  }

  render() {
    return (
      <div>
        <header className="topbar">
          <div className="topbar__left">
            <GameRound round="10" />
          </div>

          <div className="topbar__right">
            <GameScore playerScore="28" computerScore="24" />
          </div>

          <h1 className="topbar__title">War (Guerre)</h1>
        </header>

        <main>
          <section className="card-mat">
            <div className="card-mat__slot">
              <PlayingCardStack>
                <PlayingCard flipped/>
                <PlayingCard flipped/>
                <PlayingCard flipped/>
              </PlayingCardStack>
            </div>
            <div className="card-mat__slot">
              <PlayingCard {...this.state.computerCard}/>
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
                <button className="button">Draw</button>
              </Spacer>
            </div>
            <div className="card-mat__slot">
              <PlayingCard {...this.state.playerCard}/>
            </div>
            <div className="card-mat__slot">
              <PlayingCardStack>
                <PlayingCard flipped/>
                <PlayingCard flipped/>
                <PlayingCard flipped/>
              </PlayingCardStack>
            </div>
          </section>
        </main>
      </div>
    );
  }
}
