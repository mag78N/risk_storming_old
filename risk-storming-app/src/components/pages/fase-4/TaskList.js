import React from 'react';

const TaskList = (props) => {
  return props.risk.tasks.map((task, idx) => {
    

    return (
      <div className='form-row' key={idx}>
        <div className='postitContainer'>
          <textarea
            onChange={props.onchange}
            rows='3'
            placeholder='enter task here'
            data-riskindex={props.riskindex}
            data-taskindex={idx}
            data-taskid='a'
            className='risk'
            resize='none'
            maxLength='250'
            value={task.a}
          />
          <textarea
            onChange={props.onchange}
            rows='3'
            placeholder='enter task here'
            data-riskindex={props.riskindex}
            data-index={idx}
            data-taskid='b'
            className='risk'
            resize='none'
            maxLength='250'
            value={task.b}
          />
          <textarea
            onChange={props.onchange}
            rows='3'
            placeholder='enter task here'
            data-riskindex={props.riskindex}
            data-index={idx}
            data-taskid='c'
            className='risk'
            resize='none'
            maxLength='250'
            value={task.c}
          />
        </div>

        <div className='buttonContainer'></div>
      </div>
    );
  });
};
export default TaskList;
