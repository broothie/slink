# Sample State Structure

```javascript
{
  currentUser: {
    id: 1,
    username: ''
  },

  currentTeam: 1,

  currentChannel: 1,

  form: {
    errors: []
  },

  messages: {
    1: {
      body: '',
      author_id: 1,
    },
    // ...
  },

  channels: {
    1: {
      description: '',
      message_ids: [1, 18, 68 /* ... */ ]
    },
    // ...
  }
}
```
