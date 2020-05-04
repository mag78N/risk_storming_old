import React from 'react';
import '../../cards/green-card/GreenCard.css';
import '../../cards/orange-card/OrangeCard.css';
import '../../cards/pink-card/PinkCard.css';
import '../../cards/purple-card/PurpleCard.css';
import Card from './Card';
import './styles/fase3.css';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
const CardList = styled.div``;
const RiskList = (props) => {
  return props.card.risks.map((val, idx) => {
    let riskId = `risk-${idx + 1}`,
      riskText = val;
    return (
      <div className='riskLane' key={idx}>
        <div className='riskPostit' id={`${props.card.id}|${riskId}`}>
          <div key={`${props.card.id}|${riskId}`}>
            <p>{`#${riskId}`}:</p>
            <p>{riskText}</p>
          </div>
        </div>
        <Droppable
          droppableId={props.columnid}
          direction='horizontal'
          type='CARD'
        >
          {(provided, snapshot) => (
            <CardList
              ref={provided.innerRef}
              {...provided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}
              className='dropzone'
              //className={props.column.class}
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
      </div>
    );
  });
};
export default RiskList;
