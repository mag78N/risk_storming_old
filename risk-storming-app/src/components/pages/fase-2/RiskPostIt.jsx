import React from 'react';

const RiskPostIt = () => {
  return (
    <React.Fragment>
      <div id='riskPostItForm'>
        <form>
          <textarea className='riskPostIt'>write down risk</textarea>
        </form>
      </div>
    </React.Fragment>
  );
};

export default RiskPostIt;
