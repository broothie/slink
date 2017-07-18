import * as APIUtil from '../util/session_api_util';
import { receiveErrors } from './errors_actions';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';

export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const signUp = candidateUser => dispatch => (
  APIUtil.signUp(candidateUser).then(
    user => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
);

export const signOn = candidateUser => dispatch => (
  APIUtil.signOn(candidateUser).then(
    user => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
);

export const signOff = () => dispatch => (
  APIUtil.signOff().then(
    user => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
);
