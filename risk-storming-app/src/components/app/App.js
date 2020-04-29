import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { useRoutes } from 'hookrouter';
//import Routes from '../router';
import NotFoundPage from '../pages/404';
import './App.css';
import '../custom-bootstrap.css';
import { CardsContextProvider } from '../../context';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from '../pages/main-page';
import FaseOnePagednd from '../pages/fase-1/fase1dnd';
import FaseTwoPage from '../pages/fase-2/fase2';
import FaseThreePage from '../pages/fase-3/fase3';

const App = () => (
  <Router>
    <>
      <Switch>
        <CardsContextProvider>
          <Route exact path='/' component={MainPage} />
          <Route exact path='/fase1' component={FaseOnePagednd} />
          <Route exact path='/fase2' component={FaseTwoPage} />
          <Route exact path='/fase3' component={FaseThreePage} />
          <Route exact path='/404' component={NotFoundPage} />
        </CardsContextProvider>
      </Switch>
    </>
  </Router>
);
export default App;