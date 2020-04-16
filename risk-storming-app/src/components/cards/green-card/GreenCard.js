import greenCards from '../../../assets/en/greenCards.json';
import '../../cards/Card.css';
import '../green-card/greenCard.css';
import React from 'react';
const GREENCARDLIST = greenCards;

function GreenCard() {
  return GREENCARDLIST.map(greencard => (
    <div key={greencard.id} className='cardContainer'>
      <div className='cardTitle'>{greencard.title}</div>
      <div className='cardSubtitle'>{greencard.subTitle}</div>
      <div className='cardDescription'>{greencard.description}</div>
      <div className='exampleContainer'>
        <div className='exampleNumber'>1</div>
        <div className='cardExample1'>{greencard.exampleOne}</div>
      </div>
      <hr className='dottedHr'></hr>
      <div className='exampleContainer'>
        <div className='exampleNumber'>2</div>
        <div className='cardExample2'>{greencard.exampleTwo}</div>
      </div>
      <hr className='dottedHr'></hr>
      <div className='exampleContainer'>
        <div className='exampleNumber'>3</div>
        <div className='cardExample3'>{greencard.exampleThree}</div>
      </div>
    </div>
  ));
}

export default GreenCard;
