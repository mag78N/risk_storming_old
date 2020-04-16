import purpleCards from '../../../assets/en/purpleCards.json';
import '../card/cardFlexbox/Card.css';
import '../purple-card/PurpleCard.css';
import React from 'react';
const PURPLECARDLIST = purpleCards;

function PurpleCard() {
  return PURPLECARDLIST.map((purplecard, i) => (
    <div key={i} className='cardContainer'>
      <div className='cardTitle'>{purplecard.title}</div>
      <div className='cardSubtitle'>{purplecard.subTitle}</div>
      <div className='cardDescription'>{purplecard.description}</div>
      <div className='exampleContainer'>
        <div className='exampleNumber'>1</div>
        <div className='cardExample1'>{purplecard.exampleOne}</div>
      </div>
      <hr className='dottedHr'></hr>
      <div className='exampleContainer'>
        <div className='exampleNumber'>2</div>
        <div className='cardExample2'>{purplecard.exampleTwo}</div>
      </div>
      <hr className='dottedHr'></hr>
      <div className='exampleContainer'>
        <div className='exampleNumber'>3</div>
        <div className='cardExample3'>{purplecard.exampleThree}</div>
      </div>
    </div>
  ));
}

export default PurpleCard;
