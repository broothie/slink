import * as APIUtil from '../util/channels_api_util';
import { receiveErrors } from './errors_actions';

export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';
export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS';

export const receiveChannel = channel => ({
  type: RECEIVE_CHANNEL,
  channel
});

export const receiveChannels = channels => ({
  type: RECEIVE_CHANNELS,
  channels
});

export const clearChannels = () => ({
  type: RECEIVE_CHANNELS,
  channels: {}
});

export const requestChannel = channelId => dispatch => (
  APIUtil.fetchChannel(channelId).then(
    channel => dispatch(receiveChannel(channel)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
);

export const subscribeToChannel = channelId => dispatch => (
  APIUtil.subscribeToChannel(channelId).then(
    channel => dispatch(receiveChannel(channel)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
);

export const requestUserChannels = () => dispatch => (
  APIUtil.fetchUserChannels().then(
    channels => dispatch(receiveChannels(channels))
  )
);

export const createChannel = channelName => dispatch => (
  APIUtil.createChannel(channelName).then(
    channel => dispatch(receiveChannel(channel)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
);

export const createPrivateChannel = screennames => dispatch => (
  APIUtil.createPrivateChannel(screennames).then(
    channel => dispatch(receiveChannel(channel)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
);
