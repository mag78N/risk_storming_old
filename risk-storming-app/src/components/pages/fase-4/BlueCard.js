import React from 'react';
import Risk from './Risk';
import '../../cards/Card/Card.css';
const BlueCard = ({card}) => {
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
        <Risk card={card}/>
     </>
    );
  }

export default BlueCard;
