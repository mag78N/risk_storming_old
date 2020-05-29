import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './styles/fase4.css';
const TaskList = ({ idx, risk, card, onchange, deletetaskrow, cardriskid }) => {
  return (
    <>
      <Container fluid>
        {risk.tasks.map((task, taskIndex) => {
          return (
            <Row key={taskIndex}>
              <Col sm={4}>
                <label for={`${cardriskid}|owner-${taskIndex}`}></label>
                <textarea
                  id={`${cardriskid}|owner-${taskIndex}`}
                  value={task.owner}
                  name='owner'
                  data-taskindex={taskIndex}
                  data-riskindex={idx}
                  data-cardid={card.id}
                  placeholder='who?'
                  rows='5'
                  onChange={onchange}
                />
              </Col>
              <Col sm={4}>
                <label for={`${cardriskid}|action-${taskIndex}`}></label>
                <textarea
                  id={`${cardriskid}|action-${taskIndex}`}
                  value={task.action}
                  name='action'
                  data-taskindex={taskIndex}
                  data-riskindex={idx}
                  data-cardid={card.id}
                  placeholder='action?'
                  rows='5'
                  onChange={onchange}
                />
              </Col>
              <Col sm={4}>
                <label for={`${cardriskid}|deliverable-${taskIndex}`}></label>
                <textarea
                  id={`${cardriskid}|deliverable-${taskIndex}`}
                  value={task.deliverable}
                  name='deliverable'
                  data-taskindex={taskIndex}
                  data-riskindex={idx}
                  data-cardid={card.id}
                  placeholder='deliverable?'
                  rows='5'
                  onChange={onchange}
                />
              </Col>
              <div>
                <button
                  className='removeButton'
                  onClick={() => deletetaskrow(cardriskid, taskIndex)}
                >
                  <i className='fa fa-minus' aria-hidden='true' />
                </button>
              </div>
            </Row>
          );
        })}
      </Container>
    </>
  );
};
export default TaskList;
