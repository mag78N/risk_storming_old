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
    window.localStorage.clear();
    //window.location.reload();
   // window.localStorage.clear();
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
          <Button variant='outline-dark'
                  className='clearDataButton'
                  onClick={clearLocalStorage}>
            Clear Previous Data
          </Button>
        </div>
      </div>

      {/* <CSVLink data={csvPurplecards}>download</CSVLink> */}
    </>
  );
};

export default MainPage;
