import { merge } from 'lodash';
import { RECEIVE_CHANNEL } from '../actions/channel_actions';
import { RECEIVE_MESSAGE } from '../actions/message_actions';

export default (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CHANNEL:
      return merge({}, state, { [action.channel.id]: action.channel });

    case RECEIVE_MESSAGE:
      return merge({}, state, {
        [action.message.channelId]: {
          messages: { [action.message.id]: action.message }
        }
      });

    default:
      return state;
  }
};
