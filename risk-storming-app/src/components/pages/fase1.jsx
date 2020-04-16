import React from 'react';
import BlueCard from '../cards/blue-card/BlueCard';
//import SplitPane from 'react-split-pane';
import Split from 'react-split';
import '../pages/fase1.css';
import { Link } from 'react-router-dom';
const FaseOnePage = () => {
  return (
    <React.Fragment>
      <Split
        className='splitContainer1'
        sizes={[60, 40]}
        minSize={[500, 500]}
        expandToMin={false}
        gutterSize={10}
        gutterAlign='center'
        snapOffset={30}
        dragInterval={1}
        direction='horizontal'
        cursor='col-resize'
      >
        <div id='split1'></div>
        <div id='split2'>
          <BlueCard />
        </div>
      </Split>

      <div id='goToFase2btnContainer'>
        <Link to='/fase2'>
          <button id='goToFase2btn'>Proceed to second fase</button>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default FaseOnePage;

{
  /* <Link to='/fase2'>
        <button>Proceed to second fase</button>
      </Link> */
}
