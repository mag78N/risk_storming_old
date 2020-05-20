import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import '../../cards/Card/Card.css';
import styled from 'styled-components';
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
import Footer from '../../Footer/Footer';
import TopNavbar from '../../TopNavbar/TopNavbar';
const CardDeckContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const CardsViewer = () => {
  return (
    <>
      <TopNavbar />
      <Tabs defaultActiveKey='quality-aspects' id='uncontrolled-tab-example'>
        <Tab eventKey='quality-aspects' title='Quality Aspects'>
          <BlueCardDeck />
        </Tab>
        <Tab eventKey='techniques' title='Techniques'>
          {' '}
          <GreenCardDeck />
        </Tab>
        <Tab eventKey='heuristics' title='Heuristics'>
          {' '}
          <PinkCardDeck />
        </Tab>
        <Tab eventKey='dealing-with-change' title='Dealing With Change'>
          {' '}
          <DarkBlueCardDeck />
        </Tab>
        <Tab eventKey='patterns' title='Patterns'>
          {' '}
          <OrangeCardDeck />
        </Tab>
        <Tab eventKey='observability' title='Observability'>
          {' '}
          <RedCardDeck />
        </Tab>
      </Tabs>
      <Footer />
    </>
  );
};

export default CardsViewer;
