import React from 'react';
import Risk from './Risk';
import '../../cards/Card/Card.css';
const BlueCard = ({ card, addnewtask, onchange, deletetaskrow }) => {
  return (
    <>
      {/* blue card */}
      <div className={`${card.color} miniCard`}>
        <div className={`cardHeader ${card.color}Header`}>
          <div className='cardTitle'>{card.title}</div>
          <div className='cardSubtitle'>{card.subTitle}</div>
        </div>
      </div>
      {/* risk post its for 1 blue card + its colorcards */}
      <Risk
        card={card}
        addnewtask={addnewtask}
        onchange={onchange}
        deletetaskrow={deletetaskrow}
      />
    </>
  );
};

export default BlueCard;

