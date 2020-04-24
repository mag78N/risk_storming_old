import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import '../../cards/Card/Card.css';

class Card extends React.Component {
  render() {
    return (
      <Draggable draggableId={this.props.card.id} index={this.props.index}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            isDragging={snapshot.isDragging}
            className='cardContainer'
          >
            <div className='cardHeader'>
              <div className='cardTitle'>{this.props.title}</div>
              <div className='cardSubtitle'>{this.props.subTitle}</div>
            </div>
            <div className='cardBody'>
              <div className='cardDescription'>{this.props.description}</div>
              <div className='exampleContainer'>
                <div className='exampleNumber'>1</div>
                <div className='cardExample1'>{this.props.exampleOne}</div>
              </div>
              <div className='exampleContainer'>
                <div className='exampleNumber'>2</div>
                <div className='cardExample2'>{this.props.exampleTwo}</div>
              </div>
              <div className='exampleContainer'>
                <div className='exampleNumber'>3</div>
                <div className='cardExample3'>{this.props.exampleThree}</div>
              </div>
            </div>
          </div>
        )}
      </Draggable>
    );
  }
}

export default Card;
