import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import { Droppable } from 'react-beautiful-dnd';
import './styles/fase1.scss';
const CardList = styled.div`
min-height: 500px;
`;

class LeftColumn extends React.Component {
  render() {
    const { cards, id } = this.props;
    return (
      <Droppable droppableId={id} direction='vertical'>
        {(provided, snapshot) => (
          <CardList
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {cards.map((card, index) => (
              <Card
               
                key={card['id']}
                cardid={card['id']}
                card={card}
                index={index}
              />
            ))}
          </CardList>
        )}
      </Droppable>
    );
  }
}

export default LeftColumn;
