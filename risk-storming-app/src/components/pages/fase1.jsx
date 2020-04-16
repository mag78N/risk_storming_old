import React from 'react';
import BlueCard from '../cards/blue-card/BlueCard';
import { Link } from 'react-router-dom';
const FaseOnePage = () => {
  return (
    <div>
      <h1>Fase 1</h1>
      <BlueCard />
      <Link to='/fase2'>
        <button>Proceed to second fase</button>
      </Link>
    </div>
  );
};

export default FaseOnePage;
