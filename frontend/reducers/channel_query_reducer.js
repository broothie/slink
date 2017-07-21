import { RECEIVE_CHANNELS_QUERY_LIST } from '../actions/channel_actions';

export default (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CHANNELS_QUERY_LIST:
      return action.channels;

    default:
      return state;
  }
};
