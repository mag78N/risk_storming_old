import React from 'react';
import { csvPurplecards } from '../../../assets/csv/csvPurplecards';
import './index.css';
import Button from 'react-bootstrap/Button';
import TopNavbar from '../../TopNavbar/TopNavbar';
import { Link } from 'react-router-dom';
import bg from '../../../assets/images/bg.jpg';
import { CSVLink } from 'react-csv';

const MainPage = () => {
  var bgImgStyle = {
    backgroundImage: `url(${bg})`,
  };
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
        </div>
      </div>

      <CSVLink data={csvPurplecards}>download</CSVLink>
    </>
  );
};

export default MainPage;
