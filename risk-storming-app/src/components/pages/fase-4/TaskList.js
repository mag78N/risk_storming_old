import React from 'react';
import './styles/fase4.css';
const TaskList = (props) => {
  return (
    <>
      {props.risk.tasks.map((task, taskIndex) => {
        return (
          <div>
            <textarea
              value={task.owner}
              name='owner'
              data-taskindex={taskIndex}
              data-riskindex={props.idx}
              data-cardid={props.card.id}
              onChange={props.onchange}
            />
            <textarea
              value={task.action}
              name='action'
              data-taskindex={taskIndex}
              data-riskindex={props.idx}
              data-cardid={props.card.id}
              onChange={props.onchange}
            />
            <textarea
              value={task.deliverable}
              name='deliverable'
              data-taskindex={taskIndex}
              data-riskindex={props.idx}
              data-cardid={props.card.id}
              onChange={props.onchange}
            />
          </div>
        );
      })}
    </>
  );
};
export default TaskList;
