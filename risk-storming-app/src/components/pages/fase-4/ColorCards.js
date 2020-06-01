import React from 'react';
import '../../cards/Card/Card.scss';
import '../../cards/Card/card-colors.scss';
const ColorCards = (props) => {
  return (
    <>
      <div className='colorCardsColumn'>
        {props.risk.cards.map((card, idx) => {
          return (
            <div className={`${card.color} miniCard`} key={idx}>
              <div className={`cardHeader`}>
                <div className='cardTitle'>{card.title}</div>
                <div className={`cardSubtitle`}>{card.subTitle}</div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default ColorCards;
