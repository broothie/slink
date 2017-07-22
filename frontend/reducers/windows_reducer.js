import {
  RECEIVE_CHAT_WINDOW,
  REMOVE_CHAT_WINDOW,
  CLEAR_WINDOWS
} from '../actions/window_actions';
import { merge } from 'lodash';

const defaultState = {
  chatWindows: [],
  utilityWindows: {
    addChannel: false
  }
};

export default (state = defaultState, action) => {
  Object.freeze(state);

  const chatWindowsSet = new Set(state.chatWindows);
  switch (action.type) {
    case RECEIVE_CHAT_WINDOW:
      return merge({}, state, { chatWindows: [action.channelId] });

    case REMOVE_CHAT_WINDOW:
      chatWindowsSet.delete(action.channelId);
      console.log(chatWindowsSet);
      return Object.assign({}, state, { chatWindows: Array.from(chatWindowsSet)});

    case CLEAR_WINDOWS:
      return defaultState;

    default:
      return state;
  }
};
