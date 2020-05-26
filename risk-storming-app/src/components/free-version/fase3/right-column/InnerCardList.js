import React, { Component } from 'react';
import Card from '../Card';
class InnerCardList extends Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps === this.props.colorcards) {
      return false;
    }
    return true;
  }
  render(props) {
    const { colorcards } = this.props;
    return colorcards.map((card, index) => (
      <Card
        type='CARD'
        key={card.id}
        cardid={card.id}
        card={card}
        index={index}
      />
    ));
  }
}

export default InnerCardList;