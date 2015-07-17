'use strict';

import React from 'react';

export default class PlayingCardStack extends React.Component {

  render() {
    return(
      <div className="card-deck card card--spacer">
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
