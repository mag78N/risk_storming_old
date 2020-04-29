import React from 'react';
import './Footer.css';
import rightChevron from '../../assets/icons/arrowhead-right-outline.svg';
import leftChevron from '../../assets/icons/arrowhead-left-outline.svg';
import { Link } from 'react-router-dom';

const Footer = (props) => {
  return (
    <div className='btnContainer'>
      <Link to={props.prev}>
        <button className='goToPrevFaseBtn'>
          <img src={leftChevron} alt=''/>
          Previous</button>
      </Link>
      <Link to={props.next}>
        <button className='goToNextFaseBtn'>Next
        <img src={rightChevron} alt=''/>
        </button>
      </Link>
    </div>
  );
};

export default Footer;
