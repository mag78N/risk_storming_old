import React from 'react';
import Button from 'react-bootstrap/Button';
import './404.css';
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
        <Button variant='outline-dark' className='landingPageButton'>main page</Button>
      </Link>
    </div>
  );
}

export default NotFoundPage;
