import React from 'react';

const RiskList = (props) => {
  return props.card.risks.map((val, idx) => {
    let riskId = `riskId-${idx} + 1`,
      riskContent = `risk-${idx}`;
    console.log(val);
    return (
      <div className='form-row' key={idx}>
        <div className='postitContainer' id={`${props.card.id}|risk-${idx}`}>
          <textarea
            onChange={props.onchange}
            rows='3'
            placeholder='enter risk here'
            name={riskId}
            data-index={idx}
            data-cardid={props.card.id}
            id={`${props.card.id}|risk-${idx}`}
            className='risk'
            resize='none'
            maxlength='250'
            value={val}
          />
        </div>
        <div className='buttonContainer'>
          {idx === 0 ? (
            ''
          ) : (
            <button
              className='btn removeButton'
              onClick={() => props.deleteRow(props.card.id, idx)}
            >
              <i className='fa fa-minus' aria-hidden='true' />
            </button>
          )}
        </div>
      </div>
    );
  });
};
export default RiskList;
