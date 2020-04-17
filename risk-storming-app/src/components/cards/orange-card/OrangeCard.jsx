import orangeCards from '../../../assets/en/orangeCards.json';
import '../../cards/Card.css';
import '../orange-card/OrangeCard.css';
import React from 'react';
const ORANGECARDLIST = orangeCards;

function OrangeCard() {
  return ORANGECARDLIST.map((orangecard) => (
    <div key={orangecard.id} className='cardContainer'>
      <div className='cardTitle'>{orangecard.title}</div>
      <div className='cardSubtitle'>{orangecard.subTitle}</div>
      <div className='cardDescription'>{orangecard.description}</div>
      <div className='exampleContainer'>
        <div className='exampleNumber'>1</div>
        <div className='cardExample1'>{orangecard.exampleOne}</div>
      </div>
      <hr className='dottedHr'></hr>
      <div className='exampleContainer'>
        <div className='exampleNumber'>2</div>
        <div className='cardExample2'>{orangecard.exampleTwo}</div>
      </div>
      <hr className='dottedHr'></hr>
      <div className='exampleContainer'>
        <div className='exampleNumber'>3</div>
        <div className='cardExample3'>{orangecard.exampleThree}</div>
      </div>
    </div>
  ));
}

export default OrangeCard;
