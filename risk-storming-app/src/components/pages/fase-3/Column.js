import React from 'react';
import styled from 'styled-components';
import '../../cards/green-card/GreenCard.css';
import '../../cards/orange-card/OrangeCard.css';
import '../../cards/pink-card/PinkCard.css';
import '../../cards/purple-card/PurpleCard.css';
import Card from './Card';
import { Droppable } from 'react-beautiful-dnd';
import './fase3.css';
const CardList = styled.div``;

class Column extends React.Component {

  render() {
      console.log(this.props.columnid['id']);
      
    return (
      <Droppable
        droppableId={this.props.columnid['id']}
        direction='vertical'
        type='CARD'
      >
        {(provided, snapshot) => (
          <CardList
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
            className={this.props.column.class}
          >
            {this.props.cards.map((card, index) => (
              <Card
                type='CARD'
                key={card.id}
                card={card}
                index={index}
                column={this.props.column.id}
                color={card.color}
                title={card.title}
                subTitle={card.subTitle}
                description={card.description}
                exampleOne={card.exampleOne}
                exampleTwo={card.exampleTwo}
                exampleThree={card.exampleThree}
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