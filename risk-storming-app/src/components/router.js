import React from 'react';


//Pages
import MainPage from './pages/main-page/index';
import NotFoundPage from './pages/404';
//import FaseOnePage from '../pages/fase-1/fase1';
import FaseOnePagednd from './pages/fase-1/fase1dnd';
import FaseTwoPage from './pages/fase-2/fase2';
import FaseThreePage from './pages/fase-3/fase3';

const routes = {
  '/': () => <MainPage />,
  '/fase1': () => <FaseOnePagednd />,
  '/fase2': () => <FaseTwoPage />,
  '/fase3': () => <FaseThreePage />,
};
export default routes;