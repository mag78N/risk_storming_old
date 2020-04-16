import blueCards from '../../../assets/en/blueCards.json';
import '../card/cardFlexbox/Card.css';
import '../blue-card/BlueCard.css';
import React from 'react';
const blueCardList = blueCards;

function BlueCardv2() {
  return blueCardList.map((bluecard, i) => (
    <div key={i} className='cardContainer'>
      <div className='cardTitle'>{bluecard.title}</div>
      <div className='cardSubtitle'>{bluecard.subTitle}</div>
      <div className='cardDescription'>{bluecard.description}</div>
      <div className='exampleContainer'>
        <div className='exampleNumber'>1</div>
        <div className='cardExample1'>{bluecard.exampleOne}</div>
      </div>
      <hr className='dottedHr'></hr>
      <div className='exampleContainer'>
        <div className='exampleNumber'>2</div>
        <div className='cardExample2'>{bluecard.exampleTwo}</div>
      </div>
      <hr className='dottedHr'></hr>
      <div className='exampleContainer'>
        <div className='exampleNumber'>3</div>
        <div className='cardExample3'>{bluecard.exampleThree}</div>
      </div>
    </div>
  ));
}

export default BlueCardv2;
