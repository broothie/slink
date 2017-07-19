import React from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import AuthRoute from '../util/auth_route';
import SessionFormContainer from './session/session_form_container';
import HelloContainer from './hello/hello_container';
import ChatContainer from './chat/chat_container';

export default () => (
  <Switch>
    <Route exact path='/chat' component={ChatContainer}/>
    <AuthRoute exact path='/signup' component={SessionFormContainer}/>
    <AuthRoute exact path='/signon' component={SessionFormContainer}/>
    <Route exact path='/' component={HelloContainer}/>
    <Redirect to='/'/>
  </Switch>
);
