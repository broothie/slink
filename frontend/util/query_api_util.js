export const searchUsers = screennameQuery => (
  $.ajax({
    type: 'GET',
    url: 'api/users',
    data: { user: { name_query: screennameQuery } }
  })
);

export const searchChannels = channelNameQuery => (
  $.ajax({
    type: 'GET',
    url: 'api/channels',
    data: { channel: { name_query: channelNameQuery } }
  })
);
