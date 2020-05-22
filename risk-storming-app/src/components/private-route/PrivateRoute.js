import { Redirect, Route } from 'react-router-dom';

import React from 'react';

const PrivateRoute = (props) => {
  const username = localStorage.getItem('uname');
  const password = localStorage.getItem('pw');
  const u = 'risk';
  const pw = 'storm';
  function isUserAuthenticated() {
    return username === u && password === pw;
  }
  return (
    <React.Fragment>
      {isUserAuthenticated() ? props.children : <Redirect to='/login' />}
    </React.Fragment>
  );
};

export default PrivateRoute;

/* const PrivateRoute = ({ component: Component, ...rest }) => {
  const username = localStorage.getItem('username');
  const password = localStorage.getItem('password');
  const u = 'risk';
  const pw = 'storm';
  return (
    <Route
      {...rest}
      render={(props) =>
        username === u && password === pw ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
}; */
