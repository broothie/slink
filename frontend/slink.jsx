import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// import * as actions from './actions/window_actions';

document.addEventListener('DOMContentLoaded', () => {
  const store = window.currentUser ? (
    configureStore({ session: { currentUser: window.currentUser } })
  ) : (
    configureStore()
  );
  delete window.currentUser;

  // window.store = store;
  // window.actions = actions;

  ReactDOM.render(
    <Root store={store}/>,
    document.getElementById('root')
  );
});
