import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// TODO: Remove testing imports
import { merge } from 'lodash';
import * as APIUtil from './util/messages_api_util';
import * as actions from './actions/message_actions';
window.APIUtil = APIUtil;
window.actions = actions;
window.merge = merge;

document.addEventListener('DOMContentLoaded', () => {
  const store = window.currentUser ? (
    configureStore({ session: { currentUser: window.currentUser } })
  ) : (
    configureStore()
  );
  delete window.currentUser;

  // TODO: Remove testing window objects
  window.store = store;

  ReactDOM.render(
    <Root store={store}/>,
    document.getElementById('root')
  );
});
