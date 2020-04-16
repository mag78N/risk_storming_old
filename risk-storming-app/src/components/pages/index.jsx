import React from 'react';
import { Link } from 'react-router-dom';
import TopNavbar from '../TopNavbar/TopNavbar';

const MainPage = () => {
  return (
    <div className='mainPageContainer'>
      <TopNavbar />
      <div>
        <Link to='/fase1'>
          <button className='startSessionButton'>Start Session!</button>
        </Link>
      </div>
    </div>
  );
};

export default MainPage;
