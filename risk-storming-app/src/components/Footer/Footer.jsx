import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
const Footer = (props) => {
  return (
    <div className='btnContainer'>
      <Link to={props.prev}>
        <button className='goToPrevFaseBtn'>Previous</button>
      </Link>
      <Link to={props.next}>
        <button className='goToNextFaseBtn'>Next</button>
      </Link>
    </div>
  );
}

export default Footer;
