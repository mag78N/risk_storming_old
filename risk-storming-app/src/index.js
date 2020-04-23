import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/components/app/App';
import * as serviceWorker from './serviceWorker';
import CardData from '../src/components/pages/fase-1/initial-data';
import { ThemeContext } from './context';

ReactDOM.render(
  <ThemeContext.Provider value={{ ...CardData }}>
    <App />
  </ThemeContext.Provider>,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
