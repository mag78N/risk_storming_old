import React from 'react';
import styled from 'styled-components';
import '../../cards/color-css/green-card/GreenCard.css';
import '../../cards/color-css/orange-card/OrangeCard.css';
import '../../cards/color-css/pink-card/PinkCard.css';
import '../../cards/color-css/purple-card/PurpleCard.css';
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
