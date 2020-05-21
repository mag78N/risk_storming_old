import React, { useState } from 'react';
import TopNavbar from '../TopNavbar/TopNavbar';
import { Link } from 'react-router-dom';
import { Button, FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import './Login.css';
import '../pages/main-page/index.css';
import bg from '../../assets/images/bg.jpg';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }
  var bgImgStyle = {
    backgroundImage: `url(${bg})`,
  };
  return (
    <React.Fragment>
      <div className='mainPageContainer'>
        <TopNavbar />
        <div className='mainPageJumbotron' style={bgImgStyle}>
          <div className='loginContainer'>
            <h3>Log in to RiskStorming</h3>
            <form onSubmit={handleSubmit}>
              <FormGroup controlId='email' bsSize='large'>
                <FormLabel className='username'>Username</FormLabel>
                <FormControl
                  autoFocus
                  type='username'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </FormGroup>
              <FormGroup controlId='password' bsSize='large'>
                <FormLabel className='password'>Password</FormLabel>
                <FormControl
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type='password'
                />
              </FormGroup>
              <Link to='/mainpage'>
                <Button
                  variant='outline-dark'
                  /*  disabled={!validateForm()} */
                  type='submit'
                  className='btn btn-primary loginButton'
                >
                  Login
                </Button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
