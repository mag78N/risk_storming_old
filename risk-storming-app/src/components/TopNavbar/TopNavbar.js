import React from 'react';
import logo from '../../assets/images/riskstorming_logo-1.png';
import { Link } from 'react-router-dom';
import '../TopNavbar/topNavbar.scss';

const TopNavbar = (props) => {
  return (
    <div className='topNavbar'>
      <Link to={props.homepage}>
        <img className='logo' src={logo} alt='RiskStorming Online' />
      </Link>
      <span className='faseNum'>{props.faseNum}</span>
    </div>
  );
};

export default TopNavbar;
