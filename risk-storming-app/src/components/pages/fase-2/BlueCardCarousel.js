import React, { useState } from 'react';
import '../../cards/blue-card/BlueCard.css';
import '../../cards/Card/Card.css';
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem';
import Card from './Card';
import RiskPostIt from './RiskPostIt';
function BlueCardCarousel(props) {
 
  return (
    <Carousel slide={false} wrap={false} interval={null}>
      {props.newArray.map((card,index) => (
        <Carousel.Item key={index}>
          <Card
            key={card.key}
            card={card.card}
            color={card.color}
            title={card.title}
            subTitle={card.subTitle}
            description={card.description}
            exampleOne={card.exampleOne}
            exampleTwo={card.exampleTwo}
            exampleThree={card.exampleThree}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default BlueCardCarousel;
