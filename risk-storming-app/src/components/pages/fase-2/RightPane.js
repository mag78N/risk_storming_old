import Card from './Card';
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
            id={card.id}
            card={card}
            riskDetails={props.riskDetails}
            handleChange={props.handleChange}
            addNewRow={props.addNewRow}
            deleteRow={props.deleteRow}
            clickOnDelete={props.clickOnDelete}
            onsubmit={props.onsubmit}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
export default RightPane;