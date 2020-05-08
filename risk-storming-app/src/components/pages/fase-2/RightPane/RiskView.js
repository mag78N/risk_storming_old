import RiskList from './RiskList';

import React from 'react';

const RiskView = (props) => {
  return (
    <div className='content'>
      <form className='riskDetailsForm'>
        <button
          onClick={() => props.addNewRow(props.card.id)}
          type='button'
          className='btn btn-primary addButton'>
          <i className='fa fa-plus' aria-hidden='true' />
          Add risk
        </button>
        <RiskList
          key={props.key}
          id={props.id}
          card={props.card}
          onchange={props.handleChange}
          addNewRow={props.addNewRow}
          deleteRow={props.deleteRow}
        />
      </form>
    </div>
  );
};

export default RiskView;
