import React from 'react';
import Card from './Card';
import { darkbluecards } from '../../../../assets/en/darkblueCards';
import styled from 'styled-components';
const CardDeckContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const DarkBlueCardDeck = () => {
  return (
    <CardDeckContainer>
      {Object.values(darkbluecards).map((card, index) => {
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
};

export default DarkBlueCardDeck;
