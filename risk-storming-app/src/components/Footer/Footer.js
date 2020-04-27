import React from 'react';
import { A } from 'hookrouter';
import './Footer.css';
import rightChevron from '../../assets/icons/arrow-circle-right-outline.svg';
import leftChevron from '../../assets/icons/arrow-circle-left-outline.svg';

const Footer = (props) => {
  return (
    <div className='btnContainer'>
      <A href={props.prev}>
        <button className='goToPrevFaseBtn'>
          <img src={leftChevron} alt=''/>
          Previous</button>
      </A>
      <A href={props.next}>
        <button className='goToNextFaseBtn'>Next
        <img src={rightChevron} alt=''/>
        </button>
      </A>
    </div>
  );
};

export default Footer;
