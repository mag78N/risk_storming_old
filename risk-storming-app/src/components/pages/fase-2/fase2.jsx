import React from 'react';
import RiskPostIt from './RiskPostIt';
import Split from 'react-split';
import './fase2.css';
const FaseTwoPage = () => {
  return (
    <React.Fragment>
      <Split
        className='splitContainer1'
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
        <div>Fase 2</div>
        <div>
          <RiskPostIt />
          <RiskPostIt />
          <RiskPostIt />
          <RiskPostIt />
          <RiskPostIt />
        </div>
      </Split>
    </React.Fragment>
  );
};

export default FaseTwoPage;
