import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({ component: Component, path, signedIn }) => (
  <Route path={path} render={props => (
    !signedIn ? (
      <Component {...props}/>
    ) : (
      <Redirect to='/'/>
    )
  )}/>
);

const mapStateToProps = ({ session: { currentUser } }) => ({
  signedIn: Boolean(currentUser)
});

export default withRouter(connect(mapStateToProps)(Auth));
