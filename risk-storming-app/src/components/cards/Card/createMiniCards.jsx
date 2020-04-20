import React from 'react';
import MiniCard from './MiniCard';

function createMiniCards(card) {
  return (
    <MiniCard
      key={card.id}
      title={card.title}
      subTitle={card.subTitle}
      description={card.description}
    />
  );
}
export default createMiniCards;
