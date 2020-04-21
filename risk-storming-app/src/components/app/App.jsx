import React from 'react';
import './App.css';
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

//Pages
import MainPage from '../pages/main-page/index';
import NotFoundPage from '../pages/404';
import FaseOnePage from '../pages/fase-1/fase1';
import FaseTwoPage from '../pages/fase-2/fase2';
import FaseThreePage from '../pages/fase-3/fase3';

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route exact path='/404' component={NotFoundPage} />
        <Route exact path='/fase1' component={FaseOnePage} />
        <Route exact path='/fase2' component={FaseTwoPage} />
        <Route exact path='/fase3' component={FaseThreePage} />
        <Redirect to='/404' />
      </Switch>
    </React.Fragment>
  );
}

export default App;
