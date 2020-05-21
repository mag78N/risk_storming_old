import React from 'react';
import './LandingPage.css';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import TopNavbar from '../../TopNavbar/TopNavbar';
import { Link } from 'react-router-dom';
import bg from '../../../assets/images/bg.jpg';

const MainPage = () => {
  const bgImgStyle = {
    backgroundImage: `url(${bg})`,
  };
  

  return (
    <>
      <div className='mainPageContainer'>
        <TopNavbar faseNum='' />
        <div className='mainPageJumbotron' style={bgImgStyle}>
          <Link to='/fase1'>
            <Button variant='outline-dark' className='mainPageButton'>
              Go to Login
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MainPage;
