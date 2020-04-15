import blueCards from '../../../../assets/en/blueCards.json';
import '../cardFlexbox/Card.css';
import React from 'react';
const blueCardList = blueCards;


function CardContainer() {
    return blueCardList.map((bluecard, i) => (
      <div key={i} className='cardContainer'>
        <div className='cardTitle'>{bluecard.title}</div>
        <div className='cardSubtitle'>{bluecard.subTitle}</div>

        <div className='cardDescription'>{bluecard.description}</div>
        <ol>
          <div className='cardExample1'>
            <li>{bluecard.exampleOne}</li>
          </div>
          <div className='cardExample2'>
            <li>{bluecard.exampleTwo}</li>
          </div>
          <div className='cardExample3'>
            <li>{bluecard.exampleThree}</li>
          </div>
        </ol>
      </div>
    ));
  }


export default CardContainer;
