export const searchUsers = screennameQuery => (
  $.ajax({
    type: 'GET',
    url: 'api/users',
    data: { user: { name_query: screennameQuery } }
  })
);
