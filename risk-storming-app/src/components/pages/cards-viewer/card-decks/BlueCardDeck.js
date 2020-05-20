import React from 'react';
import Card from './Card';
import { bluecards } from '../../../../assets/en/blueCards'
import styled from 'styled-components';
const CardDeckContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const BlueCardDeck = () => {
  return (
    <CardDeckContainer>
      {Object.values(bluecards).map((card,index) => {
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

export default BlueCardDeck;
