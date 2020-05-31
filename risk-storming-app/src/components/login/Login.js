import React, { useState } from 'react';
import TopNavbar from '../TopNavbar/TopNavbar';
import { Link } from 'react-router-dom';
import { FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import './Login.scss';
import '../pages/main-page/index.scss';
import bg from '../../assets/images/10.png';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function validateForm() {
    return username === 'risk' && password === 'storm';
  }
  function saveToLocalStorage() {
    localStorage.setItem('uname', username);
    localStorage.setItem('pw', password);
  }
  function handleSubmit(event) {
    event.preventDefault();
  }
  var bgImgStyle = {
    backgroundImage: `url(${bg})`,
  };

  return (
    <React.Fragment>
      <div className='mainPage'>
        <TopNavbar homepage='/mainpage' />
        <div className='mainPage__jumbotron loginPage' style={bgImgStyle}>
          <div className='loginContainer'>
            <h3>Log in to RiskStorming</h3>
            <form onSubmit={handleSubmit}>
              <FormGroup controlId='email'>
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
                <button
                  disabled={!validateForm()}
                  type='submit'
                  className='buttonPrimary loginButton'
                  onClick={saveToLocalStorage()}
                >
                  Login
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
