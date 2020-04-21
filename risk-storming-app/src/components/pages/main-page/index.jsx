import React from 'react';
import './index.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import TopNavbar from '../../TopNavbar/TopNavbar';

const MainPage = () => {
  return (
    <div className='mainPageContainer'>
      <TopNavbar />
      <div>
        <Link to='/fase1'>
          <Button variant='outline-dark' className='startSessionButton'>Start Session!</Button>
        </Link>
      </div>
    </div>
  );
};

export default MainPage;
