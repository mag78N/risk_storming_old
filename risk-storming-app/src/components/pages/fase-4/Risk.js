import React from 'react';
import ColorCards from './ColorCards';
import TaskList from './TaskList';
const Risk = (props) => {
  return (
    <>
      {props.card.risks.map((val, idx) => {
        const riskId = `risk-${idx + 1}`,
          riskText = val.label,
          cardRiskId = `${props.card.id}|${riskId}`,
          riskindex = idx ;
        return (
          <>
            <div className='riskColumn' key={idx}>
              <div className='risk riskPostit' id={cardRiskId}>
                <div key={cardRiskId} className='textareaBg'>
                  <p>
                    <b>{`risk #${idx + 1}`}:</b>
                  </p>
                  <p>{riskText}</p>
                </div>
              </div>
              <div>
                <ColorCards risk={val} />
              </div>
              <div>
                <button className='buttonSecondary'>Add Task</button>
              </div>
            </div>
            <TaskList
              risk={val}
              riskindex={riskindex}
              onchange={props.handleChange}
            />
          </>
        );
      })}
    </>
  );
};

export default Risk;
