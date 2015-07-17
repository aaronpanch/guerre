'use strict';

import React from 'react';

export default class Spacer extends React.Component {

  classAttribute() {
    var parts = ['card', 'card--spacer'];
    if (this.props.placeholder) {
      parts.push('card--placeholder');
    }
    return parts.join(' ');
  }

  render() {
    return (
      <div className={ this.classAttribute() }>
        {this.props.children}
      </div>
    );
  }

}
