export const createMessage = (channelId, message) => (
  $.ajax({
    type: 'POST',
    url: `api/channels/${channelId}/messages`,
    data: { message }
  })
);

export const fetchChannelMessages = channelId => (
  $.ajax({
    type: 'GET',
    url: `api/channels/${channelId}/messages`
  })
);
