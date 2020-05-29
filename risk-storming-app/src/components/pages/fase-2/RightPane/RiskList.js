import React from 'react';

const RiskList = ({cardid, card, onchange, deleteRow}) => {
  return card.risks.map((val, idx) => {
    let riskId = `risk-${idx + 1}`;
   
    return (
      <div className='form-row' key={idx}>
        <div
          className='postitContainer'
          id={`${card.id}|risk-${idx + 1}`}
        >
          <textarea
            onChange={onchange}
            rows='3'
            placeholder='enter risk here'
            name={riskId}
            data-index={idx}
            data-cardid={card.id}
            id={riskId}
            className='risk'
            resize='none'
            maxLength='250'
            value={val.label}
          />
        </div>
        <div className='buttonContainer'>
          {idx === 0 ? (
            ''
          ) : (
            <button
              className='removeButton'
              onClick={() => deleteRow(card.id, idx)}
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
