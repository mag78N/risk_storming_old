import React from 'react';
import Risks from './Risks';
import '../../cards/Card/Card.scss';
const BlueCard = ({ card, addnewtask, onchange, deletetaskrow }) => {
  return (
    <>
      <div>
        <div className='blueCardHeader'>
          <div className='title'>{card.title}</div>
          <div>{card.subTitle}</div>
        </div>
      </div>
      <Risks
        card={card}
        addnewtask={addnewtask}
        onchange={onchange}
        deletetaskrow={deletetaskrow}
      />
    </>
  );
};

export default BlueCard;
