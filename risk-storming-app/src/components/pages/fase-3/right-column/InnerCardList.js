import React, { Component } from 'react';
import Card from '../Card';
class InnerCardList extends Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps === this.props) {
      return false;
    }
    return true;
  }
  render(props) {
    const { colorcards } = this.props;
    return colorcards.map((card, index) => (
      <Card
        
        key={card.id}
        cardid={card.id}
        card={card}
        index={index}
      />
    ));
  }
}

export default InnerCardList;
