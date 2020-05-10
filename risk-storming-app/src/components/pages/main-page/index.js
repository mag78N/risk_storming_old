import React from 'react';
import './index.css';
import Button from 'react-bootstrap/Button';
import TopNavbar from '../../TopNavbar/TopNavbar';
import { Link } from 'react-router-dom';
import bg from '../../../assets/images/bg.jpg';
//import { CSVLink } from 'react-csv';

const MainPage = () => {
  var bgImgStyle = {
    backgroundImage: `url(${bg})`,
  };
  function clearLocalStorage() {
    localStorage.clear();
  }
  return (
    <>
      <div className='mainPageContainer'>
        <TopNavbar faseNum='' />
        <div className='mainPageJumbotron' style={bgImgStyle}>
          <Link to='/fase1'>
            <Button variant='outline-dark' className='startSessionButton'>
              Start Session!
            </Button>
          </Link>
          <Button
            onClick={clearLocalStorage}
            variant='outline-dark'
            
          >
            Clear Previous Data
          </Button>
        </div>
      </div>

      {/* <CSVLink data={csvPurplecards}>download</CSVLink> */}
    </>
  );
};

export default MainPage;
