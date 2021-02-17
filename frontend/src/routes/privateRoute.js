import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PrivateRoute({ component: Component, ...rest }) {
  const { user } = useSelector(state => state.auth);
  return (
    <Route
      {...rest}
      render={
        props =>
          user ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: '/',
                state: { from: props.location },
              }}
            />
          )
      }
    />
  );
}

export default PrivateRoute;
