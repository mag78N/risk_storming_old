import React from 'react';
import styled from 'styled-components';
import '../../cards/green-card/GreenCard.css';
import '../../cards/orange-card/OrangeCard.css';
import '../../cards/pink-card/PinkCard.css';
import '../../cards/red-card/RedCard.css';
import '../../cards/darkblue-card/DarkblueCard.css';
import Card from './Card';
import { Droppable } from 'react-beautiful-dnd';
import './styles/fase3.css';
const CardList = styled.div``;

class Column extends React.Component {

  render() {
      //console.log(Object.values(this.props.colorcards));
    return (
      <Droppable
        droppableId='RIGHT-COLUMN'
        direction='vertical'
        type='CARD'
      >
        {(provided, snapshot) => (
          <CardList
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
            className={`rightPane fase1RightPane`}
          >
            {this.props.colorcards.map((card, index) => (
              <Card
                type='CARD'
                key={card.id}
                card={card}
                index={index}
                //column={this.props.column2}
                
              />
            ))}
            {provided.placeholder}
          </CardList>
        )}
      </Droppable>
    );
  }
}

export default Column;
