import React from 'react';

const RiskList = props => {
  return props.riskDetails.map((val, idx) => {
    let risk = `risk-${idx}`;
    return (
      <div className='form-row' key={val.idx}>
        <div className='col'>
          <label>Risk</label>
          <input
            type='text'
            placeholder='risk'
            ris='risk'
            data-id={idx}
            id={risk}
            />
        </div>
        <div className='col p-4'>
          {idx === 0 ? (
            <button 
              onClick={() => props.add()}
              type='button'
              className='btn btn-primary text-center'
            >
              <i className='fa fa-plus-circle' aria-hidden='true' />

            </button>
          ) : (
              <button className='btn btn-danger'
                onClick={() => props.delete(val)}>
                
                <i className="fa fa-minus" aria-hidden='true' />
              </button>
          )}
        </div>
    </div>
  )
  
  
  })
}
export default RiskList;