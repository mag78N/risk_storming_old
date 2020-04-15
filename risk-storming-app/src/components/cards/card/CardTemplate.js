
//import blueCards from '../../../assets/en/blueCards.json';

import CardContainer from './CardContainer';

import React, { Component } from 'react';
const cardTemplateStyle = {
  
  display: 'flex',
  flexWrap: 'wrap',
};
class CardTemplate extends Component{
  render() {
    return (
      <div style={cardTemplateStyle}>
        <CardContainer className='cardContainer' />
        <CardContainer className='cardContainer' />
        <CardContainer className='cardContainer' />
        <CardContainer className='cardContainer' />
        <CardContainer className='cardContainer' />
        <CardContainer className='cardContainer' />
        <CardContainer className='cardContainer' />
        <CardContainer className='cardContainer' />
        <CardContainer className='cardContainer' />
        <CardContainer className='cardContainer' />
        <CardContainer className='cardContainer' />
        <CardContainer className='cardContainer' />
      </div>
    );
  }
}

export default CardTemplate;



