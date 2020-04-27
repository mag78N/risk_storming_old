import React from 'react';
import './404.css';
<<<<<<< HEAD
import { A } from 'hookrouter';
=======
import { Link } from 'react-router-dom';
>>>>>>> d4ada8207d4ad028bd36eb6aeaf4d90305ae7666
import bg from '../../assets/images/bg.jpg';

const NotFoundPage = () => {
  var bgImgStyle = {
    backgroundImage: `url(${bg})`
  };
  return (
    <div className='page404' style={ bgImgStyle }>
      <h1>404 Not Found!</h1>
      <p>This page doesn't exist,<br/>
<<<<<<< HEAD
      go back to <A href="/">the main page</A>.
=======
      go back to <Link to="/">the main page</Link>.
>>>>>>> d4ada8207d4ad028bd36eb6aeaf4d90305ae7666
      </p>
    </div>
  );
}

export default NotFoundPage;
