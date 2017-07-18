import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const defaultState = { currentUser: null };

export default (state = defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { currentUser: action.user });

    default:
      return state;
  }
};
