import Card from '../Card';
import React from 'react';

import Carousel from 'react-bootstrap/Carousel';
import RiskView from './RiskView';
const RightPane = (props) => {
  
  return (
    <Carousel slide={false} wrap={false} interval={null}>
      {props.chosenCards.map((card, index) => (
        <Carousel.Item id={card.id} key={index}>
          <Card
            key={card.id}
            id={card.id}
            color={card.color}
            title={card.title}
            subTitle={card.subTitle}
            description={card.description}
            exampleOne={card.exampleOne}
            exampleTwo={card.exampleTwo}
            exampleThree={card.exampleThree}
          />
          <RiskView
            cardid={card.id}
            card={card}
            handleChange={props.handleChange}
            addNewRow={props.addNewRow}
            deleteRow={props.deleteRow}
            
            
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
export default RightPane;
