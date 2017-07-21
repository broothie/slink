export const fetchChannel = channelId => (
  $.ajax({
    type: 'GET',
    url: `api/channels/${channelId}`
  })
);

export const fetchUserChannels = () => (
  $.ajax({
    type: 'GET',
    url: 'api/subscriptions'
  })
);

export const searchChannels = channelNameQuery => (
  $.ajax({
    type: 'GET',
    url: 'api/channels',
    data: { channel: { name_query: channelNameQuery } }
  })
);
