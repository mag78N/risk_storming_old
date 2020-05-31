import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import '../../cards/Card/Card.scss';
import './CardsViewer.scss';
import { bluecards } from '../../../assets/en/blueCards';
import { pinkcards } from '../../../assets/en/pinkCards';
import { orangecards } from '../../../assets/en/orangeCards';
import { greencards } from '../../../assets/en/greenCards';
import { redcards } from '../../../assets/en/redCards';
import { darkbluecards } from '../../../assets/en/darkblueCards';
import CardDeck from './card-decks/CardDeck';
import TopNavbar from '../../TopNavbar/TopNavbar';

const CardsViewer = () => {
  return (
    <>
      <TopNavbar faseNum='Card Deck' homepage='/mainpage' />
      <Tabs defaultActiveKey='quality-aspects' id='uncontrolled-tab-example'>
        <Tab eventKey='quality-aspects' title='Quality Aspects' className='tab'>
          {/* <button>Expand all</button> */}
          <CardDeck cards={bluecards} />
        </Tab>
        <Tab eventKey='techniques' title='Techniques' className='tab'>
          {' '}
          <CardDeck cards={greencards} />
        </Tab>
        <Tab eventKey='heuristics' title='Heuristics' className='tab'>
          {' '}
          <CardDeck cards={pinkcards} />
        </Tab>
        <Tab
          eventKey='dealing-with-change'
          title='Dealing With Change'
          className='tab'
        >
          {' '}
          <CardDeck cards={darkbluecards} />
        </Tab>
        <Tab eventKey='patterns' title='Patterns' className='tab'>
          {' '}
          <CardDeck cards={orangecards} />
        </Tab>
        <Tab eventKey='observability' title='Observability' className='tab'>
          {' '}
          <CardDeck cards={redcards} />
        </Tab>
      </Tabs>
    </>
  );
};

export default CardsViewer;
