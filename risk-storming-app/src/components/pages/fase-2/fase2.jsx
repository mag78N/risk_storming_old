import React from 'react';
import RiskPostIt from './RiskPostIt';
import Split from 'react-split';
import './fase2.css';
import { Link } from 'react-router-dom';
const FaseTwoPage = () => {
  return (
    <React.Fragment>
      <Split
        className='splitContainerFase2'
        sizes={[50, 50]}
        minSize={[250]}
        expandToMin={false}
        gutterSize={10}
        gutterAlign='center'
        snapOffset={30}
        dragInterval={1}
        direction='horizontal'
        cursor='col-resize'
      >
        <div id='fase2LeftPane'>Fase 2</div>
        <div id='fase2RightPane'>
          <h1>Bluecard carousel</h1>
          <RiskPostIt />
          <RiskPostIt />
          <RiskPostIt />
          <RiskPostIt />
          <RiskPostIt />
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
