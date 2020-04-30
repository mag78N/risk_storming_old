import React from 'react';

const RiskListLeftPane = (props) => {
  return props.riskDetails.map((val, idx) => {
    let riskId = `risk#${idx}`,
      riskText = val.risk,
      riskContent = `risk-${idx}`;
    console.log(val.risk);
    return (
      <div className='riskLane' key={idx}>
        <div className='risk riskPostit' id={`${props.card.id}|risk-${idx}`}>
          <div className='textareaBg'>
            <p>{riskId} is:</p>
            <p>{riskText}</p>
          </div>
        </div>
      </div>
    );
  });
};
export default RiskListLeftPane;
