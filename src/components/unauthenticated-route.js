import React from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import { Route, Redirect } from 'react-router-dom';

const UnauthenticatedRoute = ({ component: Component, ...rest }) => {

  // Parse a query string into an object. Leading ? or # are ignored, so you can pass location.search or location.hash directly
  let query = queryString.parse(rest.location.search);

  return (
    <Route
      {...rest}
      render={props =>
        !rest.isAuthenticated ? (
          <Component {...props} />
        ) : (
            <Redirect to={query.redirect || '/'} />
          )
      }
    />
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  null
)(UnauthenticatedRoute);
