import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRoutes } from 'hookrouter';
import Routes from '../router';
import NotFoundPage from '../pages/404';
import './App.css';

function App(props) {
  const routeResult = useRoutes(Routes);
  return routeResult || <NotFoundPage />;
}

export default App;
