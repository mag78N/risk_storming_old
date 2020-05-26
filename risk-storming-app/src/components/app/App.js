import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import '../buttons.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import FreeFaseOnePage from '../free-version/fase1/fase1';
import FreeFaseTwoPage from '../free-version/fase2/fase2';
import FreeFaseThreePage from '../free-version/fase3/fase3';
import PrivateRoute from '../private-route/PrivateRoute';
import LandingPage from '../pages/landing-page/LandingPage';
import MainPage from '../pages/main-page';
import Login from '../login/Login';
import CardsViewer from '../pages/cards-viewer/CardsViewer';
import FaseOnePage from '../pages/fase-1/fase1';
import FaseTwoPage from '../pages/fase-2/fase2';
import FaseTwoPdf from '../pages/fase-2/pdf/FaseTwoPdf';
import FaseThreePage from '../pages/fase-3/fase3';
import FaseThreePdf from '../pages/fase-3/pdf/FaseThreePdf';
import FaseFourPage from '../pages/fase-4/fase4';
import NotFoundPage from '../pages/404/404';

const App = () => (
  <Router>
    <>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route
          exact
          path='/explorefreeversion/fase1'
          component={FreeFaseOnePage}
        />
        <Route
          exact
          path='/explorefreeversion/fase2'
          component={FreeFaseTwoPage}
        />
        <Route
          exact
          path='/explorefreeversion/fase3'
          component={FreeFaseThreePage}
        />
        <Route exact path='/login' component={Login} />
        <PrivateRoute>
          <Route exact path='/mainpage' component={MainPage} />
          <Route exact path='/cardsviewer' component={CardsViewer} />
          <Route exact path='/fase1' component={FaseOnePage} />
          <Route exact path='/fase2' component={FaseTwoPage} />
          <Route exact path='/fase2Pdf' component={FaseTwoPdf} />
          <Route exact path='/fase3' component={FaseThreePage} />
          <Route exact path='/fase3Pdf' component={FaseThreePdf} />
          <Route exact path='/fase4' component={FaseFourPage} />
          <Route exact path='/404' component={NotFoundPage} />
        </PrivateRoute>
      </Switch>
    </>
  </Router>
);
export default App;
