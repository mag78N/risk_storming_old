import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './styles/fase4.css';
const TaskList = ({ idx, risk, card, onchange, deletetaskrow, cardriskid }) => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col sm={2} className='rowHeader'>
            Who
          </Col>
          <Col sm={4} className='rowHeader'>
            Commitment
          </Col>
          <Col sm={5} className='rowHeader'>
            Deliverables/Measurables
          </Col>
          <Col sm={1}></Col>
        </Row>
        {risk.tasks.map((task, taskIndex) => {
          return (
            <Row key={taskIndex}>
              <Col sm={2}>
                <label for={`${cardriskid}|owner-${taskIndex}`}></label>
                <textarea
                  id={`${cardriskid}|owner-${taskIndex}`}
                  value={task.owner}
                  name='owner'
                  data-taskindex={taskIndex}
                  data-riskindex={idx}
                  data-cardid={card.id}
                  //placeholder='who?'
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
                  //placeholder='action?'
                  rows='5'
                  onChange={onchange}
                />
              </Col>
              <Col sm={5}>
                <label for={`${cardriskid}|deliverable-${taskIndex}`}></label>
                <textarea
                  id={`${cardriskid}|deliverable-${taskIndex}`}
                  value={task.deliverable}
                  name='deliverable'
                  data-taskindex={taskIndex}
                  data-riskindex={idx}
                  data-cardid={card.id}
                  //placeholder='deliverable?'
                  rows='5'
                  onChange={onchange}
                />
              </Col>
              <Col sm={1} className='addTaskButtonContainer'>
                <button
                  className='removeButton'
                  onClick={() => deletetaskrow(cardriskid, taskIndex)}
                >
                  <i className='fa fa-minus fa-2x' aria-hidden='true' />
                </button>
              </Col>
            </Row>
          );
        })}
      </Container>
    </>
  );
};
export default TaskList;
