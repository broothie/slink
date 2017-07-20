import { merge } from 'lodash';
import { RECEIVE_CHANNEL } from '../actions/channel_actions';

export default (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CHANNEL:
      const channel = merge({}, action.channel);
      delete channel.messages;
      return merge({}, state, { [channel.id]: channel });

    default:
      return state;
  }
};
