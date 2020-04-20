import React from 'react';
import MiniCard from './MiniCard';

function createMiniCards(card) {
  return (
    <MiniCard
      key={card.id}
      title={card.title}
      subtitle={card.subtitle}
      description={card.description}
    />
  );
}
export default createMiniCards;
