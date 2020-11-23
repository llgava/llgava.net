import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/home';

function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path={['/', '/home', '/index']} component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;
