import React from 'react';
import blueCards from '../../../assets/en/blueCards.json';
import '../../cards/blue-card/BlueCard.css';
import Carousel from 'react-bootstrap/Carousel';
import RiskPostIt from './RiskPostIt';

const BLUECARDLIST = blueCards;
const firstBluecard = BLUECARDLIST[0];
const secondBluecard = BLUECARDLIST[1];
const thirdBluecard = BLUECARDLIST[2];
const fourthBluecard = BLUECARDLIST[3];
const fifthBluecard = BLUECARDLIST[4];

const BlueCardCarousel = () => {
  return (
    <Carousel slide={false} wrap={false} interval={null}>
      <Carousel.Item>
        <div className='cardContainer'>
          <div className='cardTitle'>{firstBluecard.title}</div>
          <div className='cardSubtitle'>{firstBluecard.subTitle}</div>
          <div className='cardDescription'>{firstBluecard.description}</div>
        </div>
        <RiskPostIt />
      </Carousel.Item>

      <Carousel.Item>
        <div className='cardContainer'>
          <div className='cardTitle'>{secondBluecard.title}</div>
          <div className='cardSubtitle'>{secondBluecard.subTitle}</div>
          <div className='cardDescription'>{secondBluecard.description}</div>
        </div>
        <RiskPostIt />
      </Carousel.Item>
      <Carousel.Item>
        <div className='cardContainer'>
          <div className='cardTitle'>{thirdBluecard.title}</div>
          <div className='cardSubtitle'>{thirdBluecard.subTitle}</div>
          <div className='cardDescription'>{thirdBluecard.description}</div>
        </div>
        <RiskPostIt />
      </Carousel.Item>
      <Carousel.Item>
        <div className='cardContainer'>
          <div className='cardTitle'>{fourthBluecard.title}</div>
          <div className='cardSubtitle'>{fourthBluecard.subTitle}</div>
          <div className='cardDescription'>{fourthBluecard.description}</div>
        </div>
        <RiskPostIt />
      </Carousel.Item>
      <Carousel.Item>
        <div className='cardContainer'>
          <div className='cardTitle'>{fifthBluecard.title}</div>
          <div className='cardSubtitle'>{fifthBluecard.subTitle}</div>
          <div className='cardDescription'>{fifthBluecard.description}</div>
        </div>
        <RiskPostIt />
      </Carousel.Item>
    </Carousel>
  );
};

export default BlueCardCarousel;
