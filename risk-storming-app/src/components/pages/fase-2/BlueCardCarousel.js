import React, { useState } from 'react';
import '../../cards/blue-card/BlueCard.css';
import '../../cards/Card/Card.css';
import Carousel from 'react-bootstrap/Carousel';
import RiskPostIt from './RiskPostIt';

const BlueCardCarousel = useContext(ThemeContext) => {
 

  return (
    <Carousel slide={false} wrap={false} interval={null}>
      {BLUECARDLIST.map((card) => (
        <Carousel.Item key={card.id}>
          <div className='cardContainer'>{createMiniCards(card)}</div>
          <RiskPostIt />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default BlueCardCarousel;
