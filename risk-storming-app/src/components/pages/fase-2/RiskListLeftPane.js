import React from 'react';

const RiskListLeftPane = (props) => {
  return props.card.risks.map((val, idx) => {
    let riskId = `risk#${idx}`,
      riskText = val;
      
    console.log(val);
    return (
      <div className='riskLane' key={idx}>
        <div className='risk riskPostit' id={`${props.card.id}|risk-${idx}`}>
          <div className='textareaBg' key={`${props.card.id}|risk-${idx}`}>
            <p>{riskId} is:</p>
            <p>{riskText}</p>
          </div>
        </div>
      </div>
    );
  });
};
export default RiskListLeftPane;
