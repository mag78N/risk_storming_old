import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import blueCardsJSON from '../../assets/en/blueCards';
import {useRoutes} from 'hookrouter';
import Routes from '../router';

function App() {
  const routeResult = useRoutes(Routes)
  return routeResult;
}

export default App;
