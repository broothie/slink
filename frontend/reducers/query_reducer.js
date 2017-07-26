import {
  RECEIVE_CHANNEL_QUERY_RESULTS,
  RECEIVE_USER_QUERY_RESULTS
} from '../actions/query_actions';

const defaultState = {
  users: {},
  channels: {}
};

export default (state = defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_USER_QUERY_RESULTS:
      return Object.assign({}, state, { users: action.users });

    case RECEIVE_CHANNEL_QUERY_RESULTS:
      return Object.assign({}, state, { channels: action.channels });

    default:
      return state;
  }
};
