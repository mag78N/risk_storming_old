import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = (props) => {
  return (
    <div className='btnContainer'>
      <Link to={props.prev}>
        <button className='goToPrevFaseBtn'>
          <i className='fa fa-chevron-left' aria-hidden='true' />
          {props.prevFase}</button>
      </Link>
      <Link to={props.next}>
        <button className='goToNextFaseBtn'>{props.nextFase}
          <i className='fa fa-chevron-right' aria-hidden='true' />
        </button>
      </Link>
    </div>
  );
};

export default Footer;
