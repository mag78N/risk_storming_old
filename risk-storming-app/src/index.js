import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './components/pages/LeftPane.css';
//import LeftPane from './components/pages/LeftPane';
import App from '../src/components/app/App';
import * as serviceWorker from './serviceWorker';
/* import BlueCardv2 from './components/cards/blue-card/BlueCard';
import PinkCard from './components/cards/pink-card/PinkCard';
import PurpleCard from './components/cards/purple-card/PurpleCard';
import GreenCard from './components/cards/green-card/GreenCard';
import OrangeCard from './components/cards/orange-card/OrangeCard'; */

import BlueCard from './components/cards/blue-card/BlueCard';
ReactDOM.render(<BlueCard />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
