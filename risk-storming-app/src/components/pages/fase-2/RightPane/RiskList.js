import React from 'react';

const RiskList = (props) => {
  return props.card.risks.map((val, idx) => {
    let riskId = `risk-${idx + 1}`;
    //console.log('val: ', val);
    //console.log('idx: ', idx);
    
    return (
      <div className='form-row' key={idx}>
        <div className='postitContainer' id={`${props.card.id}|risk-${idx + 1}`}>
          <textarea
            onChange={props.onchange}
            rows='3'
            placeholder='enter risk here'
            name={riskId}
            data-index={idx}
            data-cardid={props.card.id}
            id={riskId}
            className='risk'
            resize='none'
            value={val}
          />
        </div>
        <div className='buttonContainer'>
          {idx === 0 ? (
            <button
              onClick={() => props.addNewRow(props.card.id)}
              type='button'
              className='btn addButton'
            >
              <i className='fa fa-plus' aria-hidden='true' />
            </button>
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
