'use strict';

import React from 'react';

export default class Spacer extends React.Component {

  render() {
    return (
      <div className="card card--spacer">
        {this.props.children}
      </div>
    );
  }

}
