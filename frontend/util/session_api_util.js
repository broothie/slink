export const signUp = user => (
  $.ajax({
    type: 'POST',
    url: 'api/users',
    data: { user }
  })
);

export const signIn = user => (
  $.ajax({
    type: 'POST',
    url: 'api/session',
    data: { user }
  })
);

export const signOut = () => (
  $.ajax({
    type: 'DELETE',
    url: 'api/session'
  })
);
