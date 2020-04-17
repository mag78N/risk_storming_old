import React from 'react';
//import RiskPostIt from './RiskPostIt';
import Split from 'react-split';
import './fase2.css';
import { Link } from 'react-router-dom';
import TopNavbar from '../../TopNavbar/TopNavbar';
import BlueCardCarousel from './BlueCardCarousel';
const FaseTwoPage = () => {
  return (
    <React.Fragment>
      <TopNavbar />
      <Split
        className='splitContainerFase2'
        sizes={[60, 40]}
        minSize={[250]}
        expandToMin={false}
        gutterSize={5}
        gutterAlign='center'
        snapOffset={30}
        dragInterval={1}
        direction='horizontal'
        cursor='col-resize'
      >
        <div id='fase2LeftPane'>Fase 2</div>
        <div id='fase2RightPane'>
          <BlueCardCarousel />
        </div>
      </Split>

      <div id='goToFase3btnContainer'>
        <Link to='/fase3'>
          <button id='goToFase3btn'>Proceed to third fase</button>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default FaseTwoPage;
