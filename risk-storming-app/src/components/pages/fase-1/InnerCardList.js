import React, { Component } from 'react';
import Card from './Card';
class InnerCardList extends Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.bluecards === this.props.bluecards) {
      return false;
    }
    return true;
  }
  render() {
    return this.props.bluecards.map((card, index) => (
      <Card
        key={card.id}
        card={card}
        index={index}
        color={card.color}
        title={card.title}
        subTitle={card.subTitle}
        description={card.description}
        exampleOne={card.exampleOne}
        exampleTwo={card.exampleTwo}
        exampleThree={card.exampleThree}
      />
    ));
  }
}

export default InnerCardList;
