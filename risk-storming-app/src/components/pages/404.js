import React from 'react';
import './404.css';
import { A } from 'hookrouter';
import bg from '../../assets/images/bg.jpg';

const NotFoundPage = () => {
  var bgImgStyle = {
    backgroundImage: `url(${bg})`
  };
  return (
    <div className='page404' style={ bgImgStyle }>
      <h1>404 Not Found!</h1>
      <p>This page doesn't exist,<br/>
      go back to <A href="/">the main page</A>.
      </p>
    </div>
  );
}

export default NotFoundPage;
