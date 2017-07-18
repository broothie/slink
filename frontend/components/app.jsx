import React from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import AuthRoute from '../util/auth_route';
import SessionFormContainer from './session/session_form_container';

export default () => (
  <div>
    <Switch>
      <AuthRoute exact path='/signup' component={SessionFormContainer}/>
      <AuthRoute exact path='/signon' component={SessionFormContainer}/>
      <Route exact path='/' render={() => <h1>THE ROOT</h1>}/>
      <Redirect to='/'/>
    </Switch>
  </div>
);
