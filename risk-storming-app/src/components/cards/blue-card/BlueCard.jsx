import blueCards from '../../../assets/en/blueCards.json';
import '../../cards/Card/Card.css';
import '../blue-card/BlueCard.css';
import React from 'react';
const BLUECARDLIST = blueCards;

/* function createCard(bluecard) {
  return <BlueCard
    key={bluecard.id}
    title={bluecard.title}
    subtitle={bluecard.subtitle}
    description={bluecard.description}
    exampleOne={bluecard.exampleOne}
    exampleTwo={bluecard.exampleTwo}
    exampleThree={bluecard.exampleThree}
  />
} */


function BlueCard() {
  return BLUECARDLIST.map(bluecard => (
    <div key={bluecard.id} className='cardContainer'>
      <div className='cardTitle'>{bluecard.title}</div>
      <div className='cardSubtitle'>{bluecard.subTitle}</div>
      <div className='cardDescription'>{bluecard.description}</div>
      <div className='exampleContainer'>
        <div className='exampleNumber'>1</div>
        <p className='cardExample1'>{bluecard.exampleOne}</p>
      </div>
      <hr className='dottedHr'></hr>
      <div className='exampleContainer'>
        <div className='exampleNumber'>2</div>
        <p className='cardExample2'>{bluecard.exampleTwo}</p>
      </div>
      <hr className='dottedHr'></hr>
      <div className='exampleContainer'>
        <div className='exampleNumber'>3</div>
        <p className='cardExample3'>{bluecard.exampleThree}</p>
      </div>
    </div>
  ));
}

export default BlueCard;
