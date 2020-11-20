import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/home';
import SnakeGame from './pages/snake-game';

function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path={['/', '/home', '/index']} component={Home} />
        <Route exact path={['/snake-game', '/easter-egg', '/game']} component={SnakeGame} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;
