import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import { Droppable } from 'react-beautiful-dnd';
import './styles/fase1.css';
const CardList = styled.div``;

class RightColumn extends React.Component {
  render() {
    const { bluecards,id } = this.props;
    return (
      <Droppable droppableId={id} direction='vertical'>
        {(provided, snapshot) => (
          <CardList
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
            className='rightPane fase1RightPane'
          >
            {bluecards.map((card, index) => (
              <Card
                type='CARD'
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
