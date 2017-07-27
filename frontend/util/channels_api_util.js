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

export const createChannel = channelName => (
  $.ajax({
    type: 'POST',
    url: 'api/channels',
    data: { channel: { name: channelName } }
  })
);

export const createPrivateChannelById = ids => (
  $.ajax({
    type: 'POST',
    url: 'api/channels/private_by_id',
    data: { channel: { ids } }
  })
);

export const destroyChannel = channelId => (
  $.ajax({
    type: 'DELETE',
    url: `api/channels/${channelId}/subscriptions/0`  // Sub has arbitrary :id
  })
);
