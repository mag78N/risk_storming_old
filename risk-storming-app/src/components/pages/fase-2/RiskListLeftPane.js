import React from 'react';

const RiskListLeftPane = (props) => {
  return props.riskDetails.map((val, idx) => {
    let riskId = `riskId-${idx}`,
      riskText = val.risk,
      riskContent = `risk-${idx}`;
    console.log(val.risk);
    return (
      <div className='riskLane' key={idx}>
        <div className='risk riskPostit' id={`${props.card.id}|risk-${idx}`}>
          {/*  <textarea
            onChange={props.handleChange}
            rows='3'
            placeholder='enter risk here'
            name={riskId} 
            data-id={idx}
            id={`${props.card.id}|risk-${idx}`}
            className='risk'
            resize='none'
            value={props.riskDetails[idx].riskContent}
          /> */}
          <p>risk is:</p>
          <p>{riskText}</p>
        </div>
      </div>
    );
  });
};
export default RiskListLeftPane;
