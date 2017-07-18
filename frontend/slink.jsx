import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

// TODO: Remove testing imports
import * as APIUtil from './util/session_api_util';
import * as actions from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

  // TODO: Remove testing objects on window
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.APIUtil = APIUtil;
  window.actions = actions;

  ReactDOM.render(
    <h1>slink coming even sooner...</h1>,
    document.getElementById('root')
  );
});
