import React, {useState} from 'react';
import '../../cards/blue-card/BlueCard.css';
import '../../cards/Card/Card.css';
import Carousel from 'react-bootstrap/Carousel';
import RiskPostIt from './RiskPostIt';
import createMiniCards from '../../cards/Card/createMiniCards';
const BLUECARDLIST = JSON.parse(localStorage.getItem('cards'));
function BlueCardCarousel() {
  const [cards, setCards] = useState(BLUECARDLIST);
  
  return (
    <Carousel slide={false} wrap={false} interval={null}>
      {BLUECARDLIST.map((card) => (
        <Carousel.Item>
          <div className='cardContainer'>{createMiniCards(card)}</div>
          <RiskPostIt />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default BlueCardCarousel;
 