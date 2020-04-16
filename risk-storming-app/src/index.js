import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './components/pages/LeftPane.css';
//import LeftPane from './components/pages/LeftPane';

import * as serviceWorker from './serviceWorker';
import BlueCardv2 from './components/cards/blue-card/BlueCardv2';
import PinkCard from './components/cards/pink-card/PinkCard';
import PurpleCard from './components/cards/purple-card/PurpleCard';
import GreenCard from './components/cards/green-card/GreenCard';
import OrangeCard from './components/cards/orange-card/OrangeCard';
//import CardContainer from '../src/components/cards/card/////cardFlexbox/CardContainer';

ReactDOM.render(<OrangeCard />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
