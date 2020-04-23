import '../../cards/Card/Card.css';
import React from 'react';

function MiniCard(props) {
  return (
    <>
      <div className='cardHeader'>
        <div className='cardTitle'>{props.title}</div>
        <div className='cardSubtitle'>{props.subTitle}</div>
      </div>
      <div className='cardBody'>
        <div className='cardDescription'>{props.description}</div>
      </div>
    </>
  );
}

export default MiniCard;
