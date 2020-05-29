import Card from '../Card';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import RiskView from './RiskView';
const RightPane = ({ handleChange, addNewRow, deleteRow, chosenCards }) => {
  return (
    <Carousel slide={false} wrap={false} interval={null}>
      {chosenCards.map((card, index) => (
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
            card={card}
            handleChange={handleChange}
            addNewRow={addNewRow}
            deleteRow={deleteRow}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
export default RightPane;
