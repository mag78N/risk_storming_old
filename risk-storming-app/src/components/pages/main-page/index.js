import React from 'react';
import './index.css';
import Button from 'react-bootstrap/Button';
import TopNavbar from '../../TopNavbar/TopNavbar';
import { A } from 'hookrouter';
const MainPage = () => {
  return (
    <div className='mainPageContainer'>
      <TopNavbar faseNum='Risk Storming Online' />
      <div>
        <A href='/fase1'>
          <Button variant='outline-dark' className='startSessionButton'>Start Session!</Button>
       </A>
      </div>
    </div>
  );
};

export default MainPage;
