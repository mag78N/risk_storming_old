import React from 'react';
import '../../cards/green-card/GreenCard.css';
import '../../cards/orange-card/OrangeCard.css';
import '../../cards/pink-card/PinkCard.css';
import '../../cards/purple-card/PurpleCard.css';
import Card from './Card';
import './fase3.css';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
const CardList = styled.div``;

class DummyRisk extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.columnid['id']);
    return (
      <>
        <div className='row riskLane'>
          <div className='col-sm-4'>
            <textarea rows='4' disabled placeholder='risk'></textarea>
          </div>
          <Droppable
            droppableId={this.props.columnid['id']}
            direction='horizontal'
            type='CARD'
          >
            {(provided, snapshot) => (
              <CardList
                ref={provided.innerRef}
                {...provided.droppableProps}
                isDraggingOver={snapshot.isDraggingOver}
                className='col-sm-8'
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
      </>
    );
  }
}

export default DummyRisk;

//<div className='col-sm-8'>Dropzone for cards</div>;
