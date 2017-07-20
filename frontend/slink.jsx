import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// TODO: Remove testing imports
import * as messageApiUtil from './util/messages_api_util';
import * as channelApiUtil from './util/channels_api_util';
import * as messageActions from './actions/message_actions';
import * as channelActions from './actions/channel_actions';

document.addEventListener('DOMContentLoaded', () => {
  const store = window.currentUser ? (
    configureStore({ session: { currentUser: window.currentUser } })
  ) : (
    configureStore()
  );
  delete window.currentUser;

  // TODO: Remove testing objects on window
  window.store = store;
  window.messageApiUtil = messageApiUtil;
  window.channelApiUtil = channelApiUtil;
  window.messageActions = messageActions;
  window.channelActions = channelActions;

  ReactDOM.render(
    <Root store={store}/>,
    document.getElementById('root')
  );
});
