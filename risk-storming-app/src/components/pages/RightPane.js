import React from 'react';
import CardContainer from '../cards/card/CardContainer';
const rightPaneStyle = {
  backgroundColor: 'pink',
  height: '100v%',
  width: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
};
const RightPane = () => {
  return (
    <div style={rightPaneStyle}>
      <CardContainer className='cardContainer' />
      <CardContainer className='cardContainer' />
      <CardContainer className='cardContainer' />
      <CardContainer className='cardContainer' />
      <CardContainer className='cardContainer' />
      <CardContainer className='cardContainer' />
      <CardContainer className='cardContainer' />
      <CardContainer className='cardContainer' />
      <CardContainer className='cardContainer' />
      <CardContainer className='cardContainer' />
      <CardContainer className='cardContainer' />
      <CardContainer className='cardContainer' />
    </div>
  );
};

export default RightPane;
