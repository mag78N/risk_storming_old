import React from 'react';
import './fase3.css';
const DummyRisk = () => {
  return (
    <>
      <div className='row riskLane'>
        <div className='col-sm-4'>
          <textarea rows='4' disabled placeholder='risk'>
            
          </textarea>
        </div>
        <div className='col-sm-8'>Dropzone for cards</div>
      </div>
    </>
  );
}

export default DummyRisk;
