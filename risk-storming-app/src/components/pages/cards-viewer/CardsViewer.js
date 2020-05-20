import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import '../../cards/Card/Card.css';
import './CardsViewer.css';
import BlueCardDeck from './card-decks/BlueCardDeck';
import DarkBlueCardDeck from './card-decks/DarkBlueCardDeck';
import OrangeCardDeck from './card-decks/OrangeCardDeck';
import RedCardDeck from './card-decks/RedCardDeck';
import GreenCardDeck from './card-decks/GreenCardDeck';
import PinkCardDeck from './card-decks/PinkCardDeck';
import '../../cards/color-css/green-card/GreenCard.css';
import '../../cards/color-css/orange-card/OrangeCard.css';
import '../../cards/color-css/pink-card/PinkCard.css';
import '../../cards/color-css/red-card/RedCard.css';
import '../../cards/color-css/darkblue-card/DarkblueCard.css';
import TopNavbar from '../../TopNavbar/TopNavbar';

const CardsViewer = () => {
  return (
    <>
      <TopNavbar faseNum='Card Deck' />
      <Tabs defaultActiveKey='quality-aspects' id='uncontrolled-tab-example'>
        <Tab eventKey='quality-aspects' title='Quality Aspects' className='tab'>
          <BlueCardDeck />
        </Tab>
        <Tab eventKey='techniques' title='Techniques' className='tab'>
          {' '}
          <GreenCardDeck />
        </Tab>
        <Tab eventKey='heuristics' title='Heuristics' className='tab'>
          {' '}
          <PinkCardDeck />
        </Tab>
        <Tab
          eventKey='dealing-with-change'
          title='Dealing With Change'
          className='tab'
        >
          {' '}
          <DarkBlueCardDeck />
        </Tab>
        <Tab eventKey='patterns' title='Patterns' className='tab'>
          {' '}
          <OrangeCardDeck />
        </Tab>
        <Tab eventKey='observability' title='Observability' className='tab'>
          {' '}
          <RedCardDeck />
        </Tab>
      </Tabs>
    </>
  );
};

export default CardsViewer;
