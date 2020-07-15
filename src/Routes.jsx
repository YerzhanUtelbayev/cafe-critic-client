import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Register from './containers/Authorization/Register';
import Login from './containers/Authorization/Login';

const Routes = () => (
  <Switch>
    <Route path="/register" exact>
      <Register />
    </Route>
    <Route path="/login" exact>
      <Login />
    </Route>
  </Switch>
);

Routes.propTypes = {};

export default Routes;
