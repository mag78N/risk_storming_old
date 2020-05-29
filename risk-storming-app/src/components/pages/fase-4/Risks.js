import React from 'react';
import ColorCards from './ColorCards';
import TaskList from './TaskList';
const Risks = ({ card, addnewtask, onchange, deletetaskrow }) => {
  return (
    <>
      {card.risks.map((risk, idx) => {
        const riskId = `risk-${idx + 1}`,
          riskText = risk.label,
          cardRiskId = `${card.id}|${riskId}`;
        return (
          <div className='riskStream' key={idx}>
            <div className='riskCardsColumn'>
              <div className='risk riskPostit center' id={cardRiskId}>
                <div key={cardRiskId} className='textareaBg largerWidth'>
                  <p>
                    <b>{`risk #${idx + 1}`}</b>
                  </p>
                  <p>{riskText}</p>
                </div>
              </div>
              <div>
                <ColorCards risk={risk} />
              </div>
              <div className='addTaskButtonContainer'>
                <button
                  className='buttonSecondary '
                  onClick={() => addnewtask(cardRiskId)}
                >
                  <i className='fa fa-plus' aria-hidden='true' />
                  Add Task
                </button>
              </div>
            </div>
            <TaskList
              idx={idx}
              risk={risk}
              card={card}
              onchange={onchange}
              deletetaskrow={deletetaskrow}
              cardriskid={cardRiskId}
            />
          </div>
        );
      })}
    </>
  );
};

export default Risks;
