import React from 'react';
import './index.css';
import Button from 'react-bootstrap/Button';
import TopNavbar from '../../TopNavbar/TopNavbar';
import { A } from 'hookrouter';
import bg from '../../../assets/images/bg.jpg';

const MainPage = () => {
  var mainPageStyle = {
    backgroundImage: `url(${bg})`
  };
  return (
    <div className='mainPageContainer'>
      <TopNavbar faseNum='Risk Storming Online' />
      <div className='mainPageJumbotron' style={ mainPageStyle }>
        <A href='/fase1'>
          <Button variant='outline-dark' className='startSessionButton'>Start Session!</Button>
       </A>
      </div>
    </div>
  );
};

export default MainPage;
