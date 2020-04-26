import Card from './Card';
import React from 'react';
import { useState } from 'react';
import RiskPostIt from './RiskView';
import Carousel from 'react-bootstrap/Carousel';
import AddRiskButton from './AddRiskButton';
import RiskView from './RiskView';
const RightPane = (props) => {
  
  return (
    <Carousel slide={false} wrap={false} interval={null}>
      {props.newArray.map((card, index) => (
        <Carousel.Item id={card.id} key={index}>
          <Card
            key={card.key}
            id={card.id}
            color={card.color}
            title={card.title}
            subTitle={card.subTitle}
            description={card.description}
            exampleOne={card.exampleOne}
            exampleTwo={card.exampleTwo}
            exampleThree={card.exampleThree}
          />
          <RiskView />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
export default RightPane;
