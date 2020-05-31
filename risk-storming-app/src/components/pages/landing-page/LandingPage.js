import React from 'react';
import './LandingPage.scss';
import TopNavbar from '../../TopNavbar/TopNavbar';
import { Link, useHistory } from 'react-router-dom';
import bg from '../../../assets/images/21.png';

const MainPage = () => {
  const bgImgStyle = {
    backgroundImage: `url(${bg})`,
  };
  const history = useHistory();

  function clearLocalStorage() {
    window.localStorage.clear();
    /*  window.localStorage.removeItem('chosenCards');
     window.localStorage.removeItem('RIGHTCOLUMN');
     window.localStorage.removeItem('colorcards');
     window.localStorage.removeItem('filteredColorCards'); */
    history.push('/explorefreeversion/fase1');
  }
  return (
    <>
      <div className='landingPage'>
        <TopNavbar homepage='/' />
        <div className='landingPage__jumbotron' style={bgImgStyle}>
          <div className='landingPage__container'>
            <h1>
              Welcome to <br />
              RiskStorming Online
            </h1>
            <div className='lead'>
              An online collaboration tool on quality and how to achieve it.
            </div>

            <Link to='/login'>
              <button className='buttonPrimary'>
                Go to Login page
              </button>
            </Link>
            <Link to='/explorefreeversion/fase1'>
              <button
                className='buttonPrimary'
                onClick={clearLocalStorage}
              >
                Explore Free Version
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
