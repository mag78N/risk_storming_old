import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = (props) => {
  return (
    <div className='btnContainer'>
      <Link to={props.prev}>
        <button className='buttonSecondary goToPrevFaseBtn'>
          {props.prevFase}</button>
      </Link>
      <Link to={props.next}>
        <button className='buttonSecondary goToNextFaseBtn'>{props.nextFase}
        </button>
      </Link>
    </div>
  );
};

export default Footer;
