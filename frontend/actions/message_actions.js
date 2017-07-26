import * as APIUtil from '../util/messages_api_util.js';
import { receiveErrors, clearErrors } from './errors_actions';

export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const RECEIVE_CHANNEL_MESSAGES = 'RECEIVE_CHANNEL_MESSAGES';

export const receiveMessage = message => ({
  type: RECEIVE_MESSAGE,
  message
});

export const receiveChannelMessages = (channelId, messages) => ({
  type: RECEIVE_CHANNEL_MESSAGES,
  channelId,
  messages
});

export const createMessage = (channelId, candidateMessage) => dispatch => (
  APIUtil.createMessage(channelId, candidateMessage).then(
    () => dispatch(clearErrors()),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
);

export const requestChannelMessages = channelId => dispatch => (
  APIUtil.fetchChannelMessages(channelId).then(
    messages => (
      dispatch(receiveChannelMessages(channelId, messages))
    ),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
);
