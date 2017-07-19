export const createMessage = message => (
  $.ajax({
    type: 'POST',
    url: `api/channels/${message.channelId}/messages`,
    data: { message }
  })
);
