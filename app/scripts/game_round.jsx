'use strict';

import React from 'react';

export default class GameRound extends React.Component {

  render() {
    return (
      <section className="hud-panel">
        <h2 className="hud-panel__title">Round</h2>
        <div className="hud-panel__body">
          <p className="round-number">{ this.props.round }</p>
        </div>
      </section>
    );
  }

}
