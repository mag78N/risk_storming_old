import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './styles/fase4.css';
const TaskList = (props) => {
  return (
    <>
      <Container>
        
        {props.risk.tasks.map((task, taskIndex) => {
          return (
            <Row key={taskIndex}>
              <Col sm={4}>
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
              </Col>
              <Col sm={4}>
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
              </Col>
              <Col sm={4}>
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
              </Col>
              <div>
                <button
                  className='removeButton'
                  onClick={() =>
                    props.deletetaskrow(props.cardriskid, taskIndex)
                  }
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
