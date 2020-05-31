import React from 'react';
import './404.scss';
import { Link } from 'react-router-dom';
import bg from '../../../assets/images/24.png';

const NotFoundPage = () => {
  var bgImgStyle = {
    backgroundImage: `url(${bg})`
  };
  return (
    <div className='page404' style={ bgImgStyle }>
      <h1>Page not found!</h1>
      <p>This page doesn't exist, please go back to the</p>
      <Link to="/">
        <button className='buttonPrimary'>main page</button>
      </Link>
    </div>
  );
}

export default NotFoundPage;
