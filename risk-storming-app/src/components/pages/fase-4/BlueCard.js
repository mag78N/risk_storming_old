import React from 'react';
import Risk from './Risk';
import '../../cards/Card/Card.css';
const BlueCard = ({ card, addnewtask, onchange, deletetaskrow }) => {
  return (
    <>
      {/* blue card */}
      <div className={`miniCard`}>
        <div className={`cardHeader colorWhite ${card.color}Bg`}>
          <div className='cardTitle colorWhite'>{card.title}</div>
          <div className='cardSubtitle colorWhite'>{card.subTitle}</div>
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

