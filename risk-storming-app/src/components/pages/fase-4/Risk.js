import React from 'react';
import ColorCards from './ColorCards';
import TaskList from './TaskList';
const Risk = ({card, addnewtask}) => {
  return (
    <>
      {card.risks.map((risk, idx) => {
        const riskId = `risk-${idx + 1}`,
          riskText = risk.label,
          cardRiskId = `${card.id}|${riskId}`;
        return (
          <div className='riskColumn' key={idx}>
            <div className='column'>
              <div className='risk riskPostit' id={cardRiskId}>
                <div key={cardRiskId} className='textareaBg'>
                  <p>
                    <b>{`risk #${idx + 1}`}:</b>
                  </p>
                  <p>{riskText}</p>
                </div>
              </div>
              <div>
                <ColorCards risk={risk} />
              </div>
              <div>
                {/* onClick={() => addnewtask(card.id)} */}
                <button
                  className='buttonSecondary'
                  onClick={() => addnewtask()}
                >
                  Add Task
                </button>
              </div>
            </div>
            <TaskList risks={card.risks} risk={risk} card={card} />
          </div>
        );
      })}
    </>
  );
};

export default Risk;
