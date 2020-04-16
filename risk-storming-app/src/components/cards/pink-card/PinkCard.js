import pinkCards from '../../../assets/en/pinkCards.json';
import '../card/cardFlexbox/Card.css';
import '../pink-card/PinkCard.css';
import React from 'react';
const PINKCARDLIST = pinkCards;

function PinkCard() {
  return PINKCARDLIST.map((pinkcard, i) => (
    <div key={i} className='cardContainer'>
      <div className='cardTitle'>{pinkcard.title}</div>
      <div className='cardSubtitle'>{pinkcard.subTitle}</div>
      <div className='cardDescription'>{pinkcard.description}</div>
      <div className='exampleContainer'>
        <div className='exampleNumber'>1</div>
        <div className='cardExample1'>{pinkcard.exampleOne}</div>
      </div>
      <hr className='dottedHr'></hr>
      <div className='exampleContainer'>
        <div className='exampleNumber'>2</div>
        <div className='cardExample2'>{pinkcard.exampleTwo}</div>
      </div>
      <hr className='dottedHr'></hr>
      <div className='exampleContainer'>
        <div className='exampleNumber'>3</div>
        <div className='cardExample3'>{pinkcard.exampleThree}</div>
      </div>
    </div>
  ));
}

export default PinkCard;
