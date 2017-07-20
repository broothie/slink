import * as APIUtil from '../util/channels_api_util';
import { receiveErrors } from './errors_actions';

export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';

export const receiveChannel = channel => ({
  type: RECEIVE_CHANNEL,
  channel
});

export const requestChannel = channelId => dispatch => (
  APIUtil.fetchChannel(channelId).then(
    channel => dispatch(receiveChannel(channel)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
);
