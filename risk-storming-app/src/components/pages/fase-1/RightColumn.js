import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import { Droppable } from 'react-beautiful-dnd';
import './styles/fase1.scss';
const CardList = styled.div``;

class RightColumn extends React.Component {
  render() {
    const { cards,id } = this.props;
    return (
      <Droppable droppableId={id} direction='vertical'>
        {(provided, snapshot) => (
          <CardList
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
            className='rightPane fase1RightPane'
          >
            {cards.map((card, index) => (
              <Card
                
                key={card['id']}
                cardid={card['id']}
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

export default RightColumn;
