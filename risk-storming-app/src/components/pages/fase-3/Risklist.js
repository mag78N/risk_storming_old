import React, { Component } from 'react';
import RiskDropLane from './RiskDropLane';

class RiskList extends Component {
  
  render() {
    const { card } = this.props;
    return (
      <>
        {card.risks.map((val, idx) => {
          const riskId = `risk-${idx + 1}`,
            riskText = val.label,
            cardRiskId = `${card.id}|${riskId}`;
          return (
            <div className='riskLane' key={idx}>
              <div className='risk riskPostit' id={cardRiskId}>
                <div key={cardRiskId} className='textareaBg'>
                  <p>{`#${riskId}`}:</p>
                  <p>{riskText}</p>
                </div>
              </div>
              <RiskDropLane
                cardRiskId={cardRiskId}
                key={cardRiskId}
                riskCards={val.cards}
              />
            </div>
          );
        })}
      </>
    );
  }
}

export default RiskList;
