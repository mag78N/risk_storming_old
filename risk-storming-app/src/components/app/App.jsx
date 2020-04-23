import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import blueCardsJSON from '../../assets/en/blueCards';
import {useRoutes} from 'hookrouter';
import Routes from '../router';
import NotFoundPage from '../pages/404';

function App() {
  const routeResult = useRoutes(Routes)
  return routeResult || <NotFoundPage />;
}

export default App;
