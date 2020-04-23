import React, { useState, useEffect } from 'react';
import '../../cards/blue-card/BlueCard.css';
import '../../cards/Card/Card.css';
import blueCardsJSON from '../../../assets/en/blueCards';
import createCards from '../../cards/Card/createCards';
import createMiniCards from '../../cards/Card/createMiniCards';
import Split from 'react-split';
import '../../pages/fase-1/fase1.css';
import Footer from '../../Footer/Footer';
import TopNavbar from '../../TopNavbar/TopNavbar';

const FaseOnePage = () => {
  const [blueCardList, setBlueCardList] = useState([]);
  const [selectedBlueCards, setSelectedBlueCards] = useState([]);
  const [draggedCard, setDraggedCard] = useState({});
  //runs only once
  useEffect(() => {
    console.log('use effect 1');
    const result = blueCardsJSON;
    setBlueCardList(result);
  }, []);
  //stores selectedBlueCards to local storage only if value of selectedBlueCards changes
  useEffect(() => {
    console.log('use effect 2');
    localStorage.setItem('cards', JSON.stringify(selectedBlueCards));
  }, [selectedBlueCards]);

  //checking if there is data saved to localstorage
  useEffect(() => {
    console.log('use effect 3');
    let data = localStorage.getItem('cards');
    if (data !== '') {
      setSelectedBlueCards(JSON.parse(data));
    }
  }, []);
  //saving  selected 6 cards to local storage

  // Drag and drop
  const onDrag = (e, card) => {
    e.preventDefault();
    setDraggedCard(card);
  };
  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDropLeftPane = (e) => {
    if (!selectedBlueCards.includes(draggedCard)) {
      setSelectedBlueCards([draggedCard, ...selectedBlueCards]);
    }
    setBlueCardList(blueCardList.filter((card) => card.id !== draggedCard.id));
  };
  const onDropRightPane = () => {
    if (!blueCardList.includes(draggedCard)) {
      setBlueCardList([draggedCard, ...blueCardList]);
    }
    setSelectedBlueCards(
      selectedBlueCards.filter((card) => card.id !== draggedCard.id)
    );
  };

  return (
    <>
      <TopNavbar />
      <Split
        className='splitContainerFase1'
        sizes={[75, 25]}
        minSize={[300, 150]}
        expandToMin={false}
        gutterSize={10}
        gutterAlign='center'
        snapOffset={30}
        dragInterval={1}
        direction='horizontal'
        cursor='col-resize'
      >
        <div
          className='fase1LeftPane'
          onDrop={(e) => onDropLeftPane(e)}
          onDragOver={(e) => onDragOver(e)}
        >
          {selectedBlueCards.map((card) => (
            <div
              draggable
              key={card.id}
              className='cardContainer'
              onDrag={(e) => onDrag(e, card)}
            >
              {createMiniCards(card)}
            </div>
          ))}
        </div>
        <div
          className='fase1RightPane'
          onDrop={(e) => onDropRightPane(e)}
          onDragOver={(e) => onDragOver(e)}
        >
          {blueCardList.map((card) => (
            <div
              className='cardContainer'
              key={card.id}
              draggable
              onDrag={(e) => onDrag(e, card)}
            >
              {createCards(card)}
            </div>
          ))}
        </div>
      </Split>

      <Footer prev='/' next='/fase2' />
    </>
  );
};

export default FaseOnePage;
