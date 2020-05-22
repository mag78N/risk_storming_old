import React from 'react';
import styled from 'styled-components';
import InnerCardList from './InnerCardList';
import { Droppable } from 'react-beautiful-dnd';
import './styles/fase1.css';
const CardList = styled.div``;

class Column extends React.Component {
  render() {
    const { bluecards } = this.props;
    return (
      <Droppable droppableId='RIGHT-COLUMN' direction='vertical'>
        {(provided, snapshot) => (
          <CardList
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
            className={column.class}
          >
            <InnerCardList cards={bluecards} />
            {provided.placeholder}
          </CardList>
        )}
      </Droppable>
    );
  }
}

export default Column;
