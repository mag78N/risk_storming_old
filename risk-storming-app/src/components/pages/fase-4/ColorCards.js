import React from 'react';
import '../../cards/Card/Card.css';
import '../../cards/color-css/green-card/GreenCard.css';
import '../../cards/color-css/orange-card/OrangeCard.css';
import '../../cards/color-css/pink-card/PinkCard.css';
import '../../cards/color-css/red-card/RedCard.css';
import '../../cards/color-css/darkblue-card/DarkblueCard.css';
const ColorCards = (props) => {
  return (
    <>
     
      <div className='risk'>
        {props.risk.cards.map((card, idx) => {
          return (
            <div className={`${card.color} miniCard`} key={idx}>
              <div className={`cardHeader ${card.color}Header`}>
                <div className='cardTitle'>{card.title}</div>
                <div className={`cardSubtitle`}>{card.subTitle}</div>
              </div>
            </div>
          );
        })}
        <div>
          <button className='buttonSecondary'>Add Task</button>
        </div>
      </div>
    </>
  );
};

export default ColorCards;
