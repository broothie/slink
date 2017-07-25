import * as APIUtil from '../util/query_api_util';

export const RECEIVE_CHANNELS_QUERY_LIST = 'RECEIVE_CHANNELS_QUERY_LIST';
export const RECEIVE_USERS_QUERY_LIST = 'RECEIVE_USERS_QUERY_LIST';

export const receiveChannelsQueryList = channels => ({
  type: RECEIVE_CHANNELS_QUERY_LIST,
  channels
});

export const clearChannelsQueryList = () => ({
  type: RECEIVE_CHANNELS_QUERY_LIST,
  channels: {}
});

export const receiveUsersQueryList = users => ({
  type: RECEIVE_USERS_QUERY_LIST,
  users
});

export const clearUsersQueryList = users => ({
  type: RECEIVE_USERS_QUERY_LIST,
  users: {}
});

export const queryChannels = nameQuery => dispatch => (
  APIUtil.searchChannels(nameQuery).then(
    channels => dispatch(receiveChannelsQueryList(channels))
  )
);

export const queryUsers = nameQuery => dispatch => (
  APIUtil.searchUsers(nameQuery).then(
    users => dispatch(receiveUsersQueryList(users))
  )
);
