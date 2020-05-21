import React from 'react';
import './index.css';
import Button from 'react-bootstrap/Button';
import TopNavbar from '../../TopNavbar/TopNavbar';
import { Link } from 'react-router-dom';
import bg from '../../../assets/images/bg.jpg';

const MainPage = () => {
  var bgImgStyle = {
    backgroundImage: `url(${bg})`,
  };
  function clearLocalStorage() {
    window.localStorage.clear();
  }
  return (
    <>
      <div className='mainPageContainer'>
        <TopNavbar faseNum='' />
        <div className='mainPageJumbotron' style={bgImgStyle}>
          <Link to='/fase1'>
            <Button variant='outline-dark' className='startSessionButton'>
              Start Session
            </Button>
          </Link>
          <Link to='/CardsViewer' target={'_blank'}>
            <Button variant='outline-dark' className='startSessionButton'>
              Go to Card Deck
            </Button>
          </Link>
          <Button
            variant='outline-dark'
            className='clearDataButton'
            onClick={clearLocalStorage}
          >
            Clear Previous Data
          </Button>
        </div>
      </div>
    </>
  );
};

export default MainPage;
