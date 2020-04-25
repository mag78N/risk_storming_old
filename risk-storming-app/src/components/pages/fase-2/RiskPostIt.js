import React from 'react';
import Form from 'react-bootstrap/Form';
//import Button from 'react-bootstrap/Button';
const RiskPostIt = (props) => {
  return (
    <div id='riskPostItForm'>
      <Form>
       
        <label htmlFor={props.riskId}>{`Risk #${props.index + 1} `}</label>
        <Form.Control
          as='textarea'
          rows='3'
          key={props.index}
          name={props.riskId}
          data-id={props.index}
          id={props.riskId}
        />
      </Form>
    </div>
  );
};

export default RiskPostIt;
/* 
<div key={index}>
  <label htmlFor={riskId}>{`Risk #${index + 1} `}</label>
  <input type='text' name={riskId} data-id={index} id={riskId} />
</div>; */