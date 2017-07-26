import { merge } from 'lodash';
import { RECEIVE_CHANNEL, RECEIVE_CHANNELS } from '../actions/channel_actions';
import {
  RECEIVE_MESSAGE,
  RECEIVE_CHANNEL_MESSAGES
} from '../actions/message_actions';

export default (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CHANNEL:
      return merge({}, state, { [action.channel.id]: action.channel });

    case RECEIVE_CHANNELS:
      return action.channels;

    case RECEIVE_MESSAGE:
      return merge({}, state, {
        [action.message.channelId]: {
          messages: { [action.message.id]: action.message }
        }
      });

    case RECEIVE_CHANNEL_MESSAGES:
      return merge({}, state, {
        [action.channelId]: {
          messages: action.messages
        }
      });

    default:
      return state;
  }
};
