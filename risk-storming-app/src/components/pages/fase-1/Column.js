import React from 'react';
import styled from 'styled-components';
import '../../cards/green-card/GreenCard.css';
import '../../cards/orange-card/OrangeCard.css';
import '../../cards/pink-card/PinkCard.css';
import '../../cards/purple-card/PurpleCard.css';
import Card from './Card';
import { Droppable } from 'react-beautiful-dnd';
import './fase1.css';
const CardList = styled.div`
`;

class Column extends React.Component {
  render() {
    return (
      
        <Droppable droppableId={this.props.column.id} direction='vertical'>
          {(provided, snapshot) => (
            <CardList
              ref={provided.innerRef}
              {...provided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}
              className={this.props.column.class}
            >
              {this.props.cards.map((card, index) => (
                <Card
                  key={card.id}
                  card={card}
                  index={index}
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
