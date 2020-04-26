import React from 'react';
import './404.css';
import { Link } from 'react-router-dom';
import bg from '../../assets/images/bg.jpg';

const NotFoundPage = () => {
  var bgImgStyle = {
    backgroundImage: `url(${bg})`
  };
  return (
    <div className='page404' style={ bgImgStyle }>
      <h1>404 Not Found!</h1>
      <p>This page doesn't exist,<br/>
      go back to <Link to="/">the main page</Link>.
      </p>
    </div>
  );
}

export default NotFoundPage;
