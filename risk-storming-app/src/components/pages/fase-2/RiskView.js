import RiskList from './RiskList';
import Button from 'react-bootstrap/Button';
import React from 'react';

const RiskView = (props) => {
  return (
    <div className='content'>
      <form className='riskDetailsForm' onSubmit={props.onsubmit}>
        <h2 className='riskDetailsHeading'>Add Risks</h2>
        <RiskList
          key={props.key}
          add={props.addNewRow}
          delete={props.clickOnDelete.bind(this)}
          riskDetails={props.riskDetails}
          id={props.id}
          card={props.card}
          onchange={props.handleChange}
          addNewRow={props.addNewRow}
          deleteRow={props.deleteRow}
          clickOnDelete={props.clickOnDelete}
        />
        <Button onSubmit={props.onsubmit}>Confirm</Button>
      </form>
    </div>
  );
};

export default RiskView;
