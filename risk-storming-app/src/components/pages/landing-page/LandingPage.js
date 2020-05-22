import React from 'react';
import './LandingPage.css';
import Button from 'react-bootstrap/Button';
import TopNavbar from '../../TopNavbar/TopNavbar';
import { Link } from 'react-router-dom';
import bg from '../../../assets/images/21.png';

const MainPage = () => {
  const bgImgStyle = {
    backgroundImage: `url(${bg})`,
  };

  return (
    <>
      <div className='landingPageContainer'>
        <TopNavbar />
        <div className='landingPageJumbotron' style={bgImgStyle}>
          <div className='landingPageButtonContainer'>
            <h1>Welcome to <br/>RiskStorming Online</h1>
            <div className='lead'>An online collaboration tool on quality and how to achieve it.</div>
            <Link to='/login'>
              <Button variant='outline-dark' className='landingPageButton'>
                Go to Login page
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
