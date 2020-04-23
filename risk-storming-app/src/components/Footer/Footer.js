import React from 'react';
import { A } from 'hookrouter';
import './Footer.css';
const Footer = (props) => {
  return (
    <div className='btnContainer'>
      <A href={props.prev}>
        <button className='goToPrevFaseBtn'>Previous</button>
      </A>
      <A href={props.next}>
        <button className='goToNextFaseBtn'>Next</button>
      </A>
    </div>
  );
};

export default Footer;
