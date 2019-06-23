import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

// It checks if the user is authenticated, if they are, it renders the "component" prop. If not, it redirects the user to /login.
// With Route, if a path isn’t supplied, then that Route will always match. So in the case below, because we didn’t supply a path prop, the Route will always match which means the render prop will always be called

const AuthenticatedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      rest.isAuthenticated ? (
        <Component {...props} />
      ) : (
          <Redirect to={`/login?redirect=${props.location.pathname}`} />
        )
    }
  />
);

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  null
)(AuthenticatedRoute);
