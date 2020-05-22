import React from 'react';
import './LandingPage.css';
import Button from 'react-bootstrap/Button';
import TopNavbar from '../../TopNavbar/TopNavbar';
import { Link } from 'react-router-dom';
import bg from '../../../assets/images/5.png';

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
            <div className='landingPageHeadings'>
              <div>
                <h1>Welcome To Riskstorming Online</h1>
              </div>
              <div className='secondHeading'>
                <h2>
                  An online collaboration tool on quality and how to achieve it.
                </h2>
              </div>
            </div>
            <Link to='/login'>
              <Button variant='outline-dark' className='landingPageButton'>
                Go to Login
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
