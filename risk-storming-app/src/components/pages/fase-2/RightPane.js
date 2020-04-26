import Card from './Card';
import React from 'react';
import RiskPostIt from './RiskPostIt';
import Carousel from 'react-bootstrap/Carousel';
import AddRiskButton from './AddRiskButton';
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
            <AddRiskButton addRisk={props.addRisk} />
            
          
          {props.risks.map((value, index) => {
            let cardId = value.cardId;
            let riskId = `risk-${index}`;
            return (
              <RiskPostIt
                index={index}
                key={cardId}
                htmlFor={riskId}
                name={riskId}
                data-id={index}
                id={riskId}
              />
            );
          })}
          <form action="">
            <textarea placeholder='Enter risk here' rows='3' name='risk'></textarea>
          </form>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
export default RightPane;
