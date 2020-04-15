
//import blueCards from '../../../assets/en/blueCards.json';
import CardHeading from './CardHeading';
import CardTitle from './CardTitle';
import CardSubtitle from './CardSubtitle';
import CardDescription from './CardDescription';
import CardExampleOne from './CardExampleOne';
import CardExampleTwo from './CardExampleTwo';
import CardExampleThree from './CardExampleThree';
import React, { Component } from 'react';

const cardContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  border: '2px solid black',
  margin: '0.5rem',
  minWidth: '130px',
  minHeight: '250px',
}

class CardContainer extends Component {
  render() {
    return (
      <div style={cardContainerStyle}>
        <CardHeading>
          <CardTitle />
          <CardSubtitle />
        </CardHeading>
        <CardDescription />
        <CardExampleOne />
        <CardExampleTwo />
        <CardExampleThree />
      </div>
    );
  }
}

export default CardContainer;
