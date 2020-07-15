import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Register from './containers/Authorization/Register';

const Routes = () => (
  <Switch>
    <Route path="/register" exact>
      <Register />
    </Route>
  </Switch>
);

Routes.propTypes = {};

export default Routes;
