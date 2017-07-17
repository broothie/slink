# Sample State Structure

```javascript
{
  currentUser: {
    id: 1,
    username: 'broothie'
  },

  currentTeam: 1,

  currentChannel: 1,

  form: {
    errors: []
  },

  messages: {
    1: {
      body: 'Hey!',
      author_id: 1,
      channel_id: 1
    },
    ...
  },

  teams: {
    1: {
      description: ''
    },
    ...
  },

  channels: {
    1: {
      team_id: 1,
      description: ''
    },
    ...
  }
}
```
