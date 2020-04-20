import React from 'react';
import Card from './Card';

function createCards(card) {
  return (
    <Card
      key={card.id}
      title={card.title}
      subTitle={card.subTitle}
      description={card.description}
      exampleOne={card.exampleOne}
      exampleTwo={card.exampleTwo}
      exampleThree={card.exampleThree}
    />
  );
}
export default createCards;
