import { Component } from 'react';
import React from 'react';
import '../../cards/green-card/GreenCard.css';
import '../../cards/orange-card/OrangeCard.css';
import '../../cards/pink-card/PinkCard.css';
import '../../cards/purple-card/PurpleCard.css';
import Card from './Card';
import './styles/fase3.css';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import RiskDropColumn from './RiskDropColumn';
const CardList = styled.div``;

class RiskList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return ( 
      <>
        {this.props.card.risks.map((val, idx) => {
          const riskId = `risk-${idx + 1}`,
            riskText = val.label;
          return (
            <div className='riskLane' key={idx}>
              <div
                className='riskPostit'
                id={`${this.props.card.id}|${riskId}`}
              >
                <div key={`${this.props.card.id}|${riskId}`}>
                  <p>{`#${riskId}`}:</p>
                  <p>{riskText}</p>
                </div>
              </div>
              <RiskDropColumn
                columnid={`${this.props.card.id}|${riskId}`}
                key={this.props.columnid}
                riskCards={val.cards}
                
                
              />
            </div>
          );
        })}
        </>
    )}
}

export default RiskList;


{/* <Droppable droppableId={this.props.columnid} direction='horizontal' type='CARD'>
  {(provided, snapshot) => (
    <CardList
      ref={provided.innerRef}
      {...provided.droppableProps}
      isDraggingOver={snapshot.isDraggingOver}
      className='dropzone' */}
      //className={props.column.class}>
    
      {/*  {Object.entries(this.props.cards).map(([key, card]) => (
                      <Card
                        type='CARD'
                        key={card.id}
                        card={card}
                        index={key}
                        column={this.props.columnid}
                        color={card.color}
                        title={card.title}
                        subTitle={card.subTitle}
                        description={card.description}
                        exampleOne={card.exampleOne}
                        exampleTwo={card.exampleTwo}
                        exampleThree={card.exampleThree}
                      />
                    ))} */}
    /*   {provided.placeholder}
    </CardList>
  )}
</Droppable>; */