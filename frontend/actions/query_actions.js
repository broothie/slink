import * as APIUtil from '../util/query_api_util';

export const RECEIVE_CHANNEL_QUERY_RESULTS = 'RECEIVE_CHANNEL_QUERY_RESULTS';
export const RECEIVE_USER_QUERY_RESULTS = 'RECEIVE_USER_QUERY_RESULTS';

export const receiveChannelsQueryResults = channels => ({
  type: RECEIVE_CHANNEL_QUERY_RESULTS,
  channels
});

export const clearChannelsQueryResults = () => ({
  type: RECEIVE_CHANNEL_QUERY_RESULTS,
  channels: {}
});

export const receiveUsersQueryResults = users => ({
  type: RECEIVE_USER_QUERY_RESULTS,
  users
});

export const clearUsersQueryResults = users => ({
  type: RECEIVE_USER_QUERY_RESULTS,
  users: {}
});

export const queryChannels = nameQuery => dispatch => (
  APIUtil.searchChannels(nameQuery).then(
    channels => dispatch(receiveChannelsQueryResults(channels))
  )
);

export const queryUsers = nameQuery => dispatch => (
  APIUtil.searchUsers(nameQuery).then(
    users => dispatch(receiveUsersQueryResults(users))
  )
);
