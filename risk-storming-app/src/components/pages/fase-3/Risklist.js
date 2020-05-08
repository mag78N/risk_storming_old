import { Component } from 'react';
import React from 'react';
/* import '../../cards/green-card/GreenCard.css';
import '../../cards/orange-card/OrangeCard.css';
import '../../cards/pink-card/PinkCard.css';
import '../../cards/red-card/RedCard.css';
import '../../cards/darkblue-card/DarkblueCard.css'; */
import './styles/fase3.css';
import RiskDropColumn from './RiskDropColumn';

class RiskList extends Component {
  render() {
    return (
      <>
        {this.props.card.risks.map((val, idx) => {
          const riskId = `risk-${idx + 1}`,
            riskText = val.label;
          return (
            <div className='riskLane' key={idx}>
              <div
                className='riskPostit'
                id={`${this.props.card.id}|${riskId}`}
              >
                <div key={`${this.props.card.id}|${riskId}`}>
                  <p>{`#${riskId}`}:</p>
                  <p>{riskText}</p>
                </div>
              </div>
              <RiskDropColumn
                columnid={`${this.props.card.id}|${riskId}`}
                key={this.props.columnid}
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
