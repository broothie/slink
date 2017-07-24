export const fetchChannel = channelId => (
  $.ajax({
    type: 'GET',
    url: `api/channels/${channelId}`
  })
);

export const subscribeToChannel = channelId => (
  $.ajax({
    type: 'POST',
    url: `api/channels/${channelId}/subscriptions`
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

export const createChannel = channelName => (
  $.ajax({
    type: 'POST',
    url: 'api/channels',
    data: { channel: { name: channelName } }
  })
);

export const createPrivateChannel = screennames => (
  $.ajax({
    type: 'POST',
    url: 'api/channels/private',
    data: { channel: { screennames } }
  })
);
