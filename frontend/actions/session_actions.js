import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const signUp = candidateUser => dispatch => (
  APIUtil.signUp(candidateUser).then(
    user => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveErrors(errors))
  )
);

export const signIn = candidateUser => dispatch => (
  APIUtil.signIn(candidateUser).then(
    user => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveErrors(errors))
  )
);

export const signOut = () => dispatch => (
  APIUtil.signOut().then(
    user => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveErrors(errors))
  )
);
