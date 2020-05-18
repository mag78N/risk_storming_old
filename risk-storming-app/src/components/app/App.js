import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFoundPage from '../pages/404';
import './App.css';
import '../custom-bootstrap.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from '../pages/main-page';
import FaseOnePage from '../pages/fase-1/fase1';
import FaseTwoPage from '../pages/fase-2/fase2';
import FaseTwoPdf from '../pages/fase-2/FaseTwoPdf';
import FaseThreePage from '../pages/fase-3/fase3';
import FaseThreePdf from '../pages/fase-3/FaseThreePdf';

const App = () => (
  <Router>
    <>
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route exact path='/fase1' component={FaseOnePage} />
        <Route exact path='/fase2' component={FaseTwoPage} />
        <Route exact path='/fase2Pdf' component={FaseTwoPdf} />
        <Route exact path='/fase3' component={FaseThreePage} />
        <Route exact path='/fase3Pdf' component={FaseThreePdf} />
        <Route exact path='/404' component={NotFoundPage} />
      </Switch>
    </>
  </Router>
);
export default App;
