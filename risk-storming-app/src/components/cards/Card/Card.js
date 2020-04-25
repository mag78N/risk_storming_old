import '../../cards/Card/Card.css';
import React from 'react';

function Card(props) {
  return( 
  <>
    <div className='cardHeader'>
      <div className='cardTitle'>{props.title}</div>
      <div className='cardSubtitle'>{props.subTitle}</div>
    </div>
    <div className='cardBody'>
      <div className='cardDescription'>{props.description}</div>
      <div className='exampleContainer'>
        <div className='exampleNumber'>1</div>
        <div className='cardExample1'>{props.exampleOne}</div>
      </div>
      <div className='exampleContainer'>
        <div className='exampleNumber'>2</div>
        <div className='cardExample2'>{props.exampleTwo}</div>
      </div>
      <div className='exampleContainer'>
        <div className='exampleNumber'>3</div>
        <div className='cardExample3'>{props.exampleThree}</div>
      </div>
    </div>
    </ >
  )
}


export default Card;