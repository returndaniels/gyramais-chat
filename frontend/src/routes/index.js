import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from './privateRoute';

import { SignIn, Chat } from '../pages'

const Routes = ({ socket }) => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" render={() => <SignIn socket={socket} />} />
      <PrivateRoute path="/chat" component={Chat} socket={socket}/>
    </Switch>
  </BrowserRouter>
);

export default Routes;
