import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({ component: Component, path, signedOn }) => (
  <Route path={path} render={props => (
    !signedOn ? (
      <Component {...props}/>
    ) : (
      <Redirect to='/'/>
    )
  )}/>
);

const mapStateToProps = ({ session: { currentUser } }) => ({
  signedOn: Boolean(currentUser)
});

export default withRouter(connect(mapStateToProps)(Auth));
