import '../../cards/Card/Card.css';
import React from 'react';

function MiniCard(props) {
  return (
    <>
      <div className='cardTitle'>{props.title}</div>
      <div className='cardSubtitle'>{props.subTitle}</div>
      <div className='cardDescription'>{props.description}</div>
    </>
  );
}

export default MiniCard;
