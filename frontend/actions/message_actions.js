import * as APIUtil from '../util/messages_api_util.js';
import { receiveErrors } from './errors_actions';

export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const RECEIVE_ALL_MESSAGES = 'RECEIVE_ALL_MESSAGES';

export const receiveMessage = message => ({
  type: RECEIVE_MESSAGE,
  message
});

export const receiveAllMessages = messages => ({
  type: RECEIVE_ALL_MESSAGES,
  messages
});

export const clearMessages = () => ({
  type: RECEIVE_ALL_MESSAGES,
  messages: []
});

export const createMessage = candidateMessage => dispatch => (
  APIUtil.createMessage(candidateMessage).then(
    message => dispatch(receiveMessage(message)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
);
