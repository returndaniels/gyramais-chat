import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from './privateRoute';

import { SignIn, Chat } from '../pages'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" render={() => <SignIn />} />
      <PrivateRoute path="/chat" component={Chat} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
