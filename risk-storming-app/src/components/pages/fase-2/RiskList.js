import React from 'react';

const RiskList = props => {
  return (
    props.riskDetails.map((val, idx) => {
      let riskId = `riskId-${idx}`, riskContent = `risk-${idx}`;
    console.log(val.risk);
    return (
      <div className='form-row' key={idx}>
        <div className='postitContainer' id={`${props.card.id}|risk-${idx}`}>
          <label htmlFor={riskId}>{`Risk #${idx + 1}`}</label>
          <textarea
            onChange={props.onchange}
            rows='3'
            placeholder='enter risk here'
            name={riskId}
            data-id={idx}
            id={`${props.card.id}|risk-${idx}`}
            className='risk'
            resize='none'
            value={props.riskDetails[idx].riskContent}
          />
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
  )
}
export default RiskList;