import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import '../custom-bootstrap.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import PrivateRoute from '../private-route/PrivateRoute';
import LandingPage from '../pages/landing-page/LandingPage'
import MainPage from '../pages/main-page';
import Login from '../login/Login';
import CardsViewer from '../pages/cards-viewer/CardsViewer';
import FaseOnePage from '../pages/fase-1/fase1';
import FaseTwoPage from '../pages/fase-2/fase2';
import FaseTwoPdf from '../pages/fase-2/pdf/FaseTwoPdf';
import FaseThreePage from '../pages/fase-3/fase3';
import FaseThreePdf from '../pages/fase-3/pdf/FaseThreePdf';
import NotFoundPage from '../pages/404/404';
/* const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  },
}; */
const fakeAuth = {
  signedIn: false,
};

const RequireAuth = ({ children }) => {
  if (!fakeAuth.signedIn) {
    return <Redirect to='/login' />;
  }
  return children;
};
const App = () => (
  
  <Router>
    <>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/login' component={Login} />
        <RequireAuth>
          <Route exact path='/mainpage' component={MainPage} />
          <Route exact path='/CardsViewer' component={CardsViewer} />
          <Route exact path='/fase1' component={FaseOnePage} />
          <Route exact path='/fase2' component={FaseTwoPage} />
          <Route exact path='/fase2Pdf' component={FaseTwoPdf} />
          <Route exact path='/fase3' component={FaseThreePage} />
          <Route exact path='/fase3Pdf' component={FaseThreePdf} />
          <Route exact path='/404' component={NotFoundPage} />
        </RequireAuth>
      </Switch>
    </>
  </Router>
);
export default App;
