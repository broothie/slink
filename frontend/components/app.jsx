import React from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import AuthRoute from '../util/auth_route';
import SessionFormContainer from './session/session_form_container';
import ChatContainer from './chat/chat_container';

export default () => (
  <Switch>
    <Route exact path='/' component={ChatContainer}/>
    <AuthRoute path='/signup' component={SessionFormContainer}/>
    <AuthRoute path='/signon' component={SessionFormContainer}/>
    <Redirect to='/'/>
  </Switch>
);
