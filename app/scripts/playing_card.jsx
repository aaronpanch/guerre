'use strict';

import React from 'react';

export default class PlayingCard extends React.Component {

  generateClassAttr() {
    var classNames = ['card'];

    if (this.props.flipped) {
      classNames.push('card--flipped');
    } else if (this.props.suit) {
      classNames.push(`card--${ this.props.suit }`);
    }

    return classNames.join(' ');
  }

  render() {
    return (
      <div className={this.generateClassAttr()} data-rank={this.props.rank}>
        <div className="card__logo" />
      </div>
    );
  }

}
