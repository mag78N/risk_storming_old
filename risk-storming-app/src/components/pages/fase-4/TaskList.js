import React from 'react';
import './styles/fase4.css';
const TaskList = (props) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Who?</th>
            <th>Action?</th>
            <th>Deliverable</th>
          </tr>
        </thead>

        <tbody>
          {props.risk.tasks.map((task, taskIndex) => {
            return (
              <div key={taskIndex}>
                <tr>
                  <td>
                    <textarea
                      value={task.owner}
                      name='owner'
                      data-taskindex={taskIndex}
                      data-riskindex={props.idx}
                      data-cardid={props.card.id}
                      placeholder='who?'
                      rows='5'
                      onChange={props.onchange}
                    />
                  </td>
                  <td>
                    <textarea
                      value={task.action}
                      name='action'
                      data-taskindex={taskIndex}
                      data-riskindex={props.idx}
                      data-cardid={props.card.id}
                      placeholder='action?'
                      rows='5'
                      onChange={props.onchange}
                    />
                  </td>
                  <td>
                    <textarea
                      value={task.deliverable}
                      name='deliverable'
                      data-taskindex={taskIndex}
                      data-riskindex={props.idx}
                      data-cardid={props.card.id}
                      placeholder='deliverable?'
                      rows='5'
                      onChange={props.onchange}
                    />
                  </td>
                </tr>

                <button
                  className='removeButton'
                  onClick={() =>
                    props.deletetaskrow(props.cardriskid, taskIndex)
                  }
                >
                  <i className='fa fa-minus' aria-hidden='true' />
                </button>
              </div>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
export default TaskList;
