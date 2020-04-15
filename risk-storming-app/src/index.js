import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LeftPane from '../src/components/pages/LeftPane';
//import App from '../src/components/app/App';
//import BlueCard from '../src/components/cards/blue-card/BlueCard';

import * as serviceWorker from './serviceWorker';
import RightPane from './components/pages/RightPane';

ReactDOM.render(
  <div style={{display: 'flex'}}>
    <LeftPane/>
    <RightPane/> 
  </div>,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
