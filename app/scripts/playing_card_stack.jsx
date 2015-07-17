'use strict';

import React from 'react';

export default class PlayingCardStack extends React.Component {

  classAttribute() {
    var names = ['card', 'card--spacer', 'card-deck'];

    if (this.props.opponent) {
      names.push('card-deck--opponent');
    }

    return names.join(' ');
  }

  render() {
    return(
      <div className={ this.classAttribute() }>
        {React.Children.map(this.props.children, (el) => {
          return (
            <div className="card-deck__item">
              {el}
            </div>
          )
        })}
      </div>
    )
  }

}
