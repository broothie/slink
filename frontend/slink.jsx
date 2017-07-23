import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// // TODO: Remove testing imports
// import * as APIUtil from './util/channels_api_util';
// import * as actions from './actions/channel_actions';

document.addEventListener('DOMContentLoaded', () => {
  const store = window.currentUser ? (
    configureStore({ session: { currentUser: window.currentUser } })
  ) : (
    configureStore()
  );
  delete window.currentUser;

  // // TODO: Remove testing window objects
  // window.store = store;
  // window.APIUtil = APIUtil;
  // window.actions = actions;

  ReactDOM.render(
    <Root store={store}/>,
    document.getElementById('root')
  );
});
