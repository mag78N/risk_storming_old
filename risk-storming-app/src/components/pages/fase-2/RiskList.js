import React from 'react';

const RiskList = props => {
  return props.riskDetails.map((val, idx) => {
    let risk = `risk-${idx}`;
    return (
      <div className='form-row' key={val.index}>
        <div className='postitContainer' id={props.id}>
          {/*  <label>Risk</label> */}
          <textarea
            rows='3'
            placeholder='enter risk here'
            name='risk'
            data-id={idx}
            id={risk}
            resize='none'
          ></textarea>
        </div>
        <div className='buttonContainer'>
          {idx === 0 ? (
            <button
              onClick={() => props.add()}
              type='button'
              className='btn addButton'
            >
              <i className='fa fa-plus' aria-hidden='true' />
            </button>
          ) : (
            <button
              className='btn removeButton'
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