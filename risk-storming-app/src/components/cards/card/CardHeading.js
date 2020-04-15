
import CardTitle from '../card/CardTitle';
import CardSubtitle from '../card/CardSubtitle';

import React, { Component } from 'react';

class CardHeading extends Component {
  render() {
    return (
      <div>
        <CardTitle />
        <CardSubtitle />
      </div>
    );
  }
}

export default CardHeading;
