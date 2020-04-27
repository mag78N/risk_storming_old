import React from 'react';

const RiskList = props => {
  return props.riskDetails.map((val, idx) => {
    let risk = `risk-${idx}`;
    return (
      <div className='form-row' key={val.index}>
        <div className='col'>
         {/*  <label>Risk</label> */}
          <textarea
            rows='3'
            placeholder='enter risk here'
            //risk={risk}
            name='risk'
            data-id={idx}
            id={risk}
            resize='none'
          ></textarea>
          
        </div>
        <div className='col p-2'>
          {idx === 0 ? (
            <button
              onClick={() => props.add()}
              type='button'
              className='btn btn-primary text-center'
            >
              <i className='fa fa-plus-circle' aria-hidden='true' />
            </button>
          ) : (
            <button
              className='btn btn-danger'
              onClick={() => props.delete(val)}
            >
              <i className='fa fa-minus' aria-hidden='true' />
            </button>
          )}
        </div>
      </div>
    );
  
  
  })
}
export default RiskList;