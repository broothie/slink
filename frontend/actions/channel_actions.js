import * as APIUtil from '../util/channels_api_util';
import { receiveErrors } from './errors_actions';

export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';
export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS';
export const CREATE_CABLE = 'CREATE_CABLE';
export const RECEIVE_CHANNELS_QUERY_LIST = 'RECEIVE_CHANNELS_QUERY_LIST';

export const receiveChannel = channel => ({
  type: RECEIVE_CHANNEL,
  channel
});

export const receiveChannels = channels => ({
  type: RECEIVE_CHANNELS,
  channels
});

export const createCable = () => ({
  type: CREATE_CABLE
});

export const receiveChannelsQueryList = channels => ({
  type: RECEIVE_CHANNELS_QUERY_LIST,
  channels
});

export const clearChannelsQueryList = () => ({
  type: RECEIVE_CHANNELS_QUERY_LIST,
  channels: []
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
    errors => dispatch(receiveErrors(errors))
  )
);

export const requestUserChannels = () => dispatch => (
  APIUtil.fetchUserChannels().then(
    channels => dispatch(receiveChannels(channels))
  )
);

export const queryChannels = nameQuery => dispatch => (
  APIUtil.searchChannels(nameQuery).then(
    channels => dispatch(receiveChannelsQueryList(channels))
  )
);
