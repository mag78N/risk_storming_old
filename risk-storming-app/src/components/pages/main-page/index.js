import React from 'react';
import './index.css';
import { useHistory } from 'react-router-dom';
import TopNavbar from '../../TopNavbar/TopNavbar';
import { Link } from 'react-router-dom';
import bg from '../../../assets/images/5.png';

const MainPage = () => {
  const bgImgStyle = {
    backgroundImage: `url(${bg})`,
  };
  const history = useHistory();

  /*  routeChange = () => {
    let path = '/fase1';
    let history = useHistory();
    history.push(path);
  }; */
  function clearLocalStorage() {
    //window.localStorage.clear();
    window.localStorage.removeItem('chosenCards');
    window.localStorage.removeItem('RIGHTCOLUMN');
    window.localStorage.removeItem('colorcards');
    window.localStorage.removeItem('filteredColorCards');
    history.push('/fase1');
  }
  return (
    <>
      <div className='mainPageContainer'>
        <TopNavbar faseNum='' />
        <div className='mainPageJumbotron' style={bgImgStyle}>
          <div className='mainPageButtonContainer'>
            <Link to='/fase1'>
              <button className='buttonPrimary'>Continue Session</button>
            </Link>
            <button
              className='buttonPrimary clearDataButton'
              onClick={clearLocalStorage}
            >
              Start New Session
            </button>
            <Link to='/CardsViewer' target={'_blank'}>
              <button className='buttonPrimary'>Card Deck Management</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
