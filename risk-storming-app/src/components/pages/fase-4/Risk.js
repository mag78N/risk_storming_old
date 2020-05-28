import React from 'react';
import ColorCards from './ColorCards';
import TaskList from './TaskList';
const Risk = ({ card, addnewtask, onchange, deletetaskrow }) => {
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
                  onClick={() => addnewtask(cardRiskId)}
                >
                  Add Task
                </button>
               
              </div>
            </div>
            <TaskList idx={idx} risk={risk} card={card} onchange={onchange} deletetaskrow={deletetaskrow} cardriskid={cardRiskId}/>
          </div>
        );
      })}
    </>
  );
};

export default Risk;
