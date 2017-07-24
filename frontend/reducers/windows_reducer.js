import AddChannelContainer from '../components/chat/utility_windows/add_channel_container';
import CreateChannelContainer from '../components/chat/utility_windows/create_channel_container';
import CreatePrivateChatContainer from '../components/chat/utility_windows/create_private_chat_container';
import {
  RECEIVE_CHAT_WINDOW,
  REMOVE_CHAT_WINDOW,
  RECEIVE_UTILITY_WINDOW,
  REMOVE_UTILITY_WINDOW,
  INCREMENT_Z_INDEX,
  CLEAR_WINDOWS
} from '../actions/window_actions';
import { merge } from 'lodash';

const componentMap = {
  addChannel: AddChannelContainer,
  createChannel: CreateChannelContainer,
  createPrivateChat: CreatePrivateChatContainer
};

const defaultState = {
  chatWindows: [],
  utilityWindows: [],
  lastZIndex: 1
};

export default (state = defaultState, action) => {
  Object.freeze(state);

  const chatWindowsSet = new Set(state.chatWindows);
  const utilityWindowsSet = new Set(state.utilityWindows);
  switch (action.type) {
    case RECEIVE_CHAT_WINDOW:
      chatWindowsSet.add(action.channelId);
      return merge({}, state, { chatWindows: Array.from(chatWindowsSet) });

    case REMOVE_CHAT_WINDOW:
      chatWindowsSet.delete(action.channelId);
      return Object.assign({}, state, {
        chatWindows: Array.from(chatWindowsSet)
      });

    case RECEIVE_UTILITY_WINDOW:
      utilityWindowsSet.add(componentMap[action.windowName]);
      return merge({}, state, {
        utilityWindows: Array.from(utilityWindowsSet)
      });

    case REMOVE_UTILITY_WINDOW:
      utilityWindowsSet.delete(componentMap[action.windowName]);
      return Object.assign({}, state, {
        utilityWindows: Array.from(utilityWindowsSet)
      });

    case INCREMENT_Z_INDEX:
      return merge({}, state, { lastZIndex: state.lastZIndex + 1 });

    case CLEAR_WINDOWS:
      return defaultState;

    default:
      return state;
  }
};
