import React from 'react';
import CardContainer from '../cards/card/CardContainer';

const leftPaneStyle = {
  backgroundColor: 'grey',
  height: '100%',
  width: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
};
const LeftPane = () => {
  return (
    <div style={leftPaneStyle}>
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

export default LeftPane;
