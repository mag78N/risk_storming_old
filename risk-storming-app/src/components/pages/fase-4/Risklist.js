import React, { Component } from 'react';

class RiskList extends Component {
  render() {
    const { card } = this.props;
    return (
      <>
        {card.risks.map((val, idx) => {
          const riskId = `risk-${idx + 1}`,
            riskText = val.label,
            cardRiskId = `${card.id}|${riskId}`;
          return riskText !== '' ? (
            <div className='riskLane' key={idx}>
              <div className='risk riskPostit' id={cardRiskId}>
                <div key={cardRiskId} className='textareaBg'>
                  <p>
                    <b>{`risk #${idx + 1}`}:</b>
                  </p>
                  <p>{riskText}</p>
                </div>
              </div>
              
            </div>
          ) : null;
        })}
      </>
    );
  }
}

export default RiskList;
