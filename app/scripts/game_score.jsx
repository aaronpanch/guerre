'use strict';

import React from 'react';

export default class GameScore extends React.Component {

  render() {
    return (
      <section className="hud-panel">
        <h2 className="hud-panel__title">Score</h2>
        <div className="hud-panel__body">
          <table>
            <tbody>
              <tr>
                <td>Player 1:</td>
                <td className="u-text-right">{ this.props.playerScore }</td>
              </tr>
              <tr>
                <td>Player 2:</td>
                <td className="u-text-right">{ this.props.computerScore }</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    );
  }

}
