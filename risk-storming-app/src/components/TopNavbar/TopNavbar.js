import React from 'react';
import logo from '../../assets/images/logo-blue.png'
import '../TopNavbar/topNavbar.css';

const TopNavbar = (props) => {
  return <div className='topNavbar'>
    <img className='logo' src={logo} alt="RiskStorming Online" />
    <span className='faseNum'>{props.faseNum}</span>
  </div>;
};

export default TopNavbar;
