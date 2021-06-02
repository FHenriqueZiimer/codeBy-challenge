import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/cart' exact component={Cart} />
      </Switch>
    </BrowserRouter>
  )
}

export default  Routes