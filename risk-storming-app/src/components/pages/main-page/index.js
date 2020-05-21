import React from 'react';
import './index.css';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import TopNavbar from '../../TopNavbar/TopNavbar';
import { Link } from 'react-router-dom';
import bg from '../../../assets/images/bg.jpg';

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
    window.localStorage.removeItem('selectedBlueCardIds');
    window.localStorage.removeItem('columnsFase1');
    window.localStorage.removeItem('columnOrderFase1');
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
            <div className='topButtonRow'>
              <Link to='/fase1'>
                <Button variant='outline-dark' className='mainPageButton'>
                  Continue Session
                </Button>
              </Link>
              <Button
                variant='outline-dark'
                className='clearDataButton mainPageButton'
                onClick={clearLocalStorage}
              >
                Start New Session
              </Button>
            </div>
            <div>
              <Link to='/CardsViewer' target={'_blank'}>
                <Button variant='outline-dark' className='mainPageButton'>
                  Card Deck Management
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
