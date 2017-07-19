import { merge } from 'lodash';
import {
  RECEIVE_MESSAGE,
  RECEIVE_ALL_MESSAGES
} from '../actions/message_actions';

export default (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_MESSAGES:
      return action.messages;

    case RECEIVE_MESSAGE:
      return merge({}, state, { [action.message.id]: action.message });

    default:
      return state;
  }
};
