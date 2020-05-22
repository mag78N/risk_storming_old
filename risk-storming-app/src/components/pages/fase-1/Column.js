import React from 'react';
import styled from 'styled-components';
import InnerCardList from './InnerCardList';
import { Droppable } from 'react-beautiful-dnd';
import './styles/fase1.css';
const CardList = styled.div``;

class Column extends React.Component {
  render() {
    const { column, cards } = this.props;
    return (
      <Droppable droppableId={column.id} direction='vertical'>
        {(provided, snapshot) => (
          <CardList
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
            className={column.class}
          >
            <InnerCardList cards={cards} />
            {provided.placeholder}
          </CardList>
        )}
      </Droppable>
    );
  }
}

export default Column;
