import React from 'react';
import Form from 'react-bootstrap/Form';
const RiskPostIt = () => {
  return (
    <React.Fragment>
      <div id='riskPostItForm'>
        <Form>
          <Form.Group>
            <Form.Control as='textarea' rows='5' />

            <Form.Control as='textarea' rows='5' />

            <Form.Control as='textarea' rows='5' />

            <Form.Control as='textarea' rows='5' />

            <Form.Control as='textarea' rows='5' />
          </Form.Group>
        </Form>
      </div>
    </React.Fragment>
  );
};

export default RiskPostIt;
