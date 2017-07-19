export const createMessage = message => (
  $.ajax({
    type: 'POST',
    url: `api/channels/${message.channel_id}/messages`,
    data: { message }
  })
);
