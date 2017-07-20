# [Slink][slink]
[Track this project's progress!][trello]

## Minimum Viable Product
Slink is a real time chat app inspired by [Slack][slack] powered by [Ruby on Rails][ror] and [React][react]/[Redux][redux]. By August 4th, this app will, at a minimum, have the following features.

- [ ] Heroku Hosting
- [ ] User/Login with Demo Login
- [ ] Live Chat
- [ ] Channels
- [ ] Direct Messaging
<!-- - [ ] Teams -->
- [ ] Drag'n'Drop
- [ ] Production README

## Design Docs
- [Wireframes][wireframes]
- [React Components][components]
- [API Endpoints][endpoints]
- [DB Schema][schema]
- [Stample State][state]

## Implementation Timeline
### Phase 1: Backend setup and Front End User Authentication (2 days)
**Objective**: Functioning rails project with front-end Authentication

### Phase 2: User and Messages Models and APIs (2 days)
**Objective**: Users can be created and messages can be created and related to a user through the api.

### Phase 3: Socket Integration (2 days)
**Objective**: Messages should be able to be sent with other users being updated at the time the message is sent.

### Phase 4: Channels (1 day)
**Objective**: Messages should appear filtered by channel.

### Phase 5: Direct Messaging (1 day)
**Objective**: Messages should be able to be sent privately to other users.

### Phase 6: Teams (2 days)
**Objective**: Messages and channels should be tied to teams, and users should have a list of teams they are on.

[slink]: https://slink-chat.herokuapp.com/
[trello]: https://trello.com/invite/b/FZDx2kmG/cb21f57f8484fb9572647d758cd11713/slink
[slack]: https://slack.com
[ror]: http://rubyonrails.org/
[react]: https://facebook.github.io/react/
[redux]: http://redux.js.org/

[wireframes]: wireframes
[components]: component-hierarchy.md
[endpoints]: api-endpoints.md
[schema]: schema.md
[state]: sample-state.md
