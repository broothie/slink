import { merge } from 'lodash';
import {
  RECEIVE_CHANNEL,
  RECEIVE_CHANNELS,
  REMOVE_CHANNEL
} from '../actions/channel_actions';
import {
  RECEIVE_MESSAGE,
  RECEIVE_CHANNEL_MESSAGES
} from '../actions/message_actions';

export default (state = {}, action) => {
  Object.freeze(state);

  const stateCopy = merge({}, state);
  switch (action.type) {
    case RECEIVE_CHANNEL:
      return merge(stateCopy, { [action.channel.id]: action.channel });   // FIXME:

    case RECEIVE_CHANNELS:
      return action.channels;

    case REMOVE_CHANNEL:
      delete stateCopy[action.channel.id];
      return stateCopy;

    case RECEIVE_MESSAGE:
      stateCopy[action.message.channelId].messages.push(action.message);
      return stateCopy;

    case RECEIVE_CHANNEL_MESSAGES:
      return merge(stateCopy, {
        [action.channelId]: {
          messages: action.messages
        }
      });

    default:
      return stateCopy;
  }
};
