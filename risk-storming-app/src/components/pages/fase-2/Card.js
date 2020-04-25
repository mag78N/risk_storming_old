import React from 'react';
import '../../cards/green-card/GreenCard.css';
import '../../cards/orange-card/OrangeCard.css';
import '../../cards/pink-card/PinkCard.css';
import '../../cards/purple-card/PurpleCard.css';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import '../../cards/Card/Card.css';

class Card extends React.Component {
  render() {
    return (
      <div className={`cardContainer ${this.props.color}`}>
        <div className={`cardHeader ${this.props.color}Header`}>
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
    );
  }
}

export default Card;
