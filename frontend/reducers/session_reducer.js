import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS
} from '../actions/session_actions';

const defaultState = {
  currentUser: null,
  errors: []
};

export default (state = defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { currentUser: action.user, errors: [] });

    case RECEIVE_ERRORS:
      return Object.assign({}, state, { errors: action.errors.responseJSON });

    default:
      return state;
  }
};
