import * as APIUtil from '../util/messages_api_util.js';
import { receiveErrors, clearErrors } from './errors_actions';

export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';

export const receiveMessage = message => ({
  type: RECEIVE_MESSAGE,
  message
});

export const createMessage = (channelId, candidateMessage) => dispatch => (
  APIUtil.createMessage(channelId, candidateMessage).then(
    () => dispatch(clearErrors()),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
);
