export const createMessage = (channelId, message) => (
  $.ajax({
    type: 'POST',
    url: `api/channels/${channelId}/messages`,
    data: { message }
  })
);
