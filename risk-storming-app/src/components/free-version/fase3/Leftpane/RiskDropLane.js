import React from 'react';
import styled from 'styled-components';
import Card from '../Card';
import { Droppable } from 'react-beautiful-dnd';
import '../styles/fase3.css';
const CardList = styled.div``;

class RiskDropLane extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { cardRiskId, riskCards } = this.props;
    return (
      <Droppable droppableId={cardRiskId} direction='horizontal' type='CARD'>
        {(provided, snapshot) => (
          <CardList
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
            className=' dropzone'
          >
            {riskCards.map((card, index) => (
              <Card
                type='CARD'
                cardid={card.id}
                key={card.id}
                card={card}
                index={index}
              />
            ))}
            {provided.placeholder}
          </CardList>
        )}
      </Droppable>
    );
  }
}

export default RiskDropLane;
