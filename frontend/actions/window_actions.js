export const RECEIVE_CHAT_WINDOW = 'RECEIVE_CHAT_WINDOW';
export const REMOVE_CHAT_WINDOW = 'REMOVE_CHAT_WINDOW';
export const RECEIVE_UTILITY_WINDOW = 'RECEIVE_UTILITY_WINDOW';
export const REMOVE_UTILITY_WINDOW = 'REMOVE_UTILITY_WINDOW';
export const CLEAR_WINDOWS = 'CLEAR_WINDOWS';

export const receiveChatWindow = channelId => ({
  type: RECEIVE_CHAT_WINDOW,
  channelId
});

export const removeChatWindow = channelId => ({
  type: REMOVE_CHAT_WINDOW,
  channelId
});

export const receiveUtilityWindow = windowName => ({
  type: RECEIVE_UTILITY_WINDOW,
  windowName
});

export const removeUtilityWindow = windowName => ({
  type: REMOVE_UTILITY_WINDOW,
  windowName
});

export const clearWindows = () => ({
  type: CLEAR_WINDOWS
});
