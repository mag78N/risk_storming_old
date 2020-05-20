import React from 'react';
import Card from './Card';
import { redcards } from '../../../../assets/en/redCards';
import styled from 'styled-components';
const CardDeckContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const RedCardDeck = () => {
  return (
    <CardDeckContainer>
      {Object.values(redcards).map((card, index) => {
        return (
          <Card
            key={card.id}
            card={card}
            color={card.color}
            title={card.title}
            subTitle={card.subTitle}
            description={card.description}
            exampleOne={card.exampleOne}
            exampleTwo={card.exampleTwo}
            exampleThree={card.exampleThree}
          />
        );
      })}
    </CardDeckContainer>
  );
}

export default RedCardDeck;
