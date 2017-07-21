import {
  RECEIVE_CHAT_WINDOW,
  REMOVE_CHAT_WINDOW
} from '../actions/window_actions';
import { merge } from 'lodash';

export default (state = [], action) => {
  Object.freeze(state);

  const stateSet = new Set(state);
  switch (action.type) {
    case RECEIVE_CHAT_WINDOW:
      return Array.from(stateSet.add(action.channelId));

    case REMOVE_CHAT_WINDOW:
      stateSet.delete(action.channelId);
      return Array.from(stateSet);

    default:
      return state;
  }
};
