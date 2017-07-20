import { values } from 'lodash';

export const channelMessages = (state, channelId) => (
  values(state.messages).filter(message => message.channel_id === channelId)
);