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
