import React, { useEffect, useState } from 'react';
import '../../cards/blue-card/BlueCard.css';
import '../../cards/Card/Card.css';
import Split from 'react-split';
import './fase2.css';
import TopNavbar from '../../TopNavbar/TopNavbar';
import Footer from '../../Footer/Footer';
import BlueCardCarousel from './BlueCardCarousel';
import createMiniCards from '../../cards/Card/createMiniCards';

function FaseTwoPage() {
  const BLUECARDLIST = JSON.parse(localStorage.getItem('cards'));
  const { blueCards, setBlueCards } = useState([]);
  //checking if there is data saved to localstorage
  useEffect(() => {
    const data = localStorage.getItem('cards');
    if (data) {
      setBlueCards(JSON.parse(data));
    }
  }, []);
  return (
    <>
      <TopNavbar />
      <Split
        className='splitContainerFase2'
        sizes={[60, 40]}
        minSize={[250]}
        expandToMin={false}
        gutterSize={5}
        gutterAlign='center'
        snapOffset={30}
        dragInterval={1}
        direction='horizontal'
        cursor='col-resize'
      >
        <div className='fase2LeftPane'>
          {BLUECARDLIST.map((card) => (
            <React.Fragment key={card.id}>
              <div className='miniCardContainer'>{createMiniCards(card)}</div>
              <hr className='blackLine'></hr>
            </React.Fragment>
          ))}
        </div>
        <div className='fase2RightPane'>
          <BlueCardCarousel />
        </div>
      </Split>
      <Footer prev='/fase1' next='/fase3' />
    </>
  );
}
export default FaseTwoPage;
