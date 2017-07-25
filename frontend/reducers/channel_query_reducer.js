import { RECEIVE_CHANNELS_QUERY_LIST } from '../actions/channel_actions';
import { merge } from 'lodash';

const defaultState = {
  users: {},
  channels: {}
};

export default (state = defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    // case RECEIVE_USERS_QUERY_LIST:
    //   return merge({}, state, { users: action.users });
    
    case RECEIVE_CHANNELS_QUERY_LIST:
      return merge({}, state, { channels: action.channels });

    default:
      return state;
  }
};
