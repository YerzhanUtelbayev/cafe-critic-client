import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Register from './containers/Authorization/Register';
import Login from './containers/Authorization/Login';
import AddPlace from './containers/AddPlace/AddPlace';

const Routes = () => (
  <Switch>
    <Route path="/register" exact>
      <Register />
    </Route>
    <Route path="/login" exact>
      <Login />
    </Route>
    <Route path="/places/new" exact>
      <AddPlace />
    </Route>
  </Switch>
);

Routes.propTypes = {};

export default Routes;
