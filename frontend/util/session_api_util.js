export const signUp = user => (
  $.ajax({
    type: 'POST',
    url: 'api/users',
    data: { user }
  })
);

export const signOn = user => (
  $.ajax({
    type: 'POST',
    url: 'api/session',
    data: { user }
  })
);

export const signOff = () => (
  $.ajax({
    type: 'DELETE',
    url: 'api/session'
  })
);
