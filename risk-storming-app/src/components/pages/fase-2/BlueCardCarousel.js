import React from 'react';
import '../../cards/blue-card/BlueCard.css';
import '../../cards/Card/Card.css';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

import Card from './Card';
import RiskPostIt from './RiskView';
function BlueCardCarousel(props) {
  return (
    <Carousel slide={false} wrap={false} interval={null}>
      {props.newArray.map((card, index) => (
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
          <Button onClick={props.addRisk}>Add New Risk</Button>
          {props.risks.map((value, index) => {
            let riskId = `risk-${index}`;
            return (
              <RiskPostIt
                /*  addRisk={props.addRisk} */
                index={index}
                key={index}
                htmlFor={riskId}
                name={riskId}
                data-id={index}
                id={riskId}
              />
            );
          })}
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default BlueCardCarousel;
