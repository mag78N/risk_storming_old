import React from 'react';
import '../TopNavbar/topNavbar.css';

const TopNavbar = (props) => {
  return <div className='topNavbar'>{props.faseNum}</div>;
};

export default TopNavbar;
