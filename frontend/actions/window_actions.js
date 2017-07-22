export const RECEIVE_CHAT_WINDOW = 'RECEIVE_CHAT_WINDOW';
export const REMOVE_CHAT_WINDOW = 'REMOVE_CHAT_WINDOW';

export const receiveChatWindow = channelId => ({
  type: RECEIVE_CHAT_WINDOW,
  channelId
});

export const removeChatWindow = channelId => ({
  type: REMOVE_CHAT_WINDOW,
  channelId
});

export const clearWindows = () => ({
  type: CLEAR_WINDOWS
});
