import { Redirect } from 'react-router-dom';
import React from 'react';

const fakeAuth = {
  isUserAuthenticated: false,
};
 /* const validateForm = () => {
   return username.length === 'risk' && password.length === 'storm';
 } */
const PrivateRoute = ({ children }) => {
  if (!fakeAuth.isUserAuthenticated) {
    return <Redirect to='/login' />
  }
  return children;
}

export default PrivateRoute;
