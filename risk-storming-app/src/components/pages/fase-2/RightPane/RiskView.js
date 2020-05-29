import RiskList from './RiskList';

import React from 'react';

const RiskView = ({ card, handleChange, addNewRow, deleteRow }) => {
  return (
    <div className='content'>
      <form className='riskDetailsForm'>
        <button
          onClick={() => addNewRow(card.id)}
          type='button'
          className='buttonSecondary addButton'
        >
          <i className='fa fa-plus' aria-hidden='true' />
          Add risk
        </button>
        <RiskList
          /* key={key} */
          card={card}
          onchange={handleChange}
          deleteRow={deleteRow}
        />
      </form>
    </div>
  );
};

export default RiskView;
