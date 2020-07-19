import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Register from './containers/Authorization/Register';
import Login from './containers/Authorization/Login';
import AddPlace from './containers/AddPlace/AddPlace';
import Places from './containers/Places/Places';
import PlaceFullInfo from './containers/PlaceFullInfo/PlaceFullInfo';

const Routes = () => (
  <Switch>
    <Route path="/" exact>
      <Places />
    </Route>
    <Route path="/places" exact>
      <Places />
    </Route>
    <Route path="/places/new" exact>
      <AddPlace />
    </Route>
    <Route path="/places/:id" exact>
      <PlaceFullInfo />
    </Route>

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
