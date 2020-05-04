import React from 'react';

const RiskListLeftPane = (props) => {
  return props.card.risks.map((val, idx) => {
    let riskId = `risk-${idx + 1}`,
      riskText = val;
    return (
      <div className='riskLane' key={idx}>
        <div className='risk riskPostit' id={`${props.card.id}|${riskId}`}>
          <div className='textareaBg' key={`${props.card.id}|${riskId}`}>
            <p>{`#${riskId}`}:</p>
            <p>{riskText}</p>
          </div>
        </div>
      </div>
    );
  });
};
export default RiskListLeftPane;
