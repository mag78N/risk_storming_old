import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import { Droppable } from 'react-beautiful-dnd';
import './styles/fase3.css';
const CardList = styled.div``;

class RightColumn extends React.Component {

  render() {
      const { colorcards } = this.props;
    return (
      <React.Fragment>
        <input type='text' onChange={this.props.filtercards} />

        <Droppable droppableId='RIGHT-COLUMN' direction='vertical' type='CARD'>
          {(provided, snapshot) => (
            <CardList
              ref={provided.innerRef}
              {...provided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}
              className={`rightPane fase1RightPane`}
            >
              {colorcards.map((card, index) => (
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
      </React.Fragment>
    );
  }
}

export default RightColumn;
