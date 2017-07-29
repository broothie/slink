[![Slink logo][slink_logo]][slink]
# [Slink][slink] - an [AIM][aim] clone visually influenced by [Windows 95][windows95]
[Slink][slink] started as a simple attempt at cloning the much-beloved team collaboration tool [Slack][slack], and quickly became an amalgamation of Slack and primordial AOL Instant Messenger.

## Features
- Web-based chat interface
  - Leveraging of [Rails][ror]' [ActionCable][action_cable] for real-time message updates and channel broadcast management
  - Multiple channels open for application event forwarding
- Unique channel creation
- Private chat with fellow users and [SmarterChild][smarter_child]
  - SmarterChild bot running aboard Rails application
  - Homegrown response generation algorithm
- Nostalgia instillation
  - [Windows 95][windows95] theme
  - [AOL Instant Messenger][aim] based interface and [sound effects][aim_sound_effects]

## Implementation
### Stack
- [Backend](Gemfile)
  - [Ruby 2.3.1][ruby231] on [Rails 5.0.4][rails504]
  - [Postgres 9.6.2][postgres962]
  - [Faker][faker] for db seeding
  - [Redis To Go][redis] for local [ActionCable][action_cable] data storage
  - [Cloudinary][cloudinary] for image hosting
  - [Heroku][heroku]
- [Frontend](package.json)
  - [React][react]
  - [Redux][redux]
  - [SCSS][scss]
  - [webpack][webpack]
  - [jQuery][jquery] for [ajax][jquery_ajax]
  - [Draggable][jquery_ui_draggable] from [jQuery UI][jquery_ui]
- Tools
  - [webpack][webpack]
  - [Atom][atom]
  - [Duet][duet]

### Technical Challenges
#### Backend Design
Original schema and controller design can be viewed in the [docs](docs) folder of this repo. Naturally these designs went through several revisions during development.

The current state of the application persists data regarding users, messages & their relationship to users, and channels & their relationships to users & messages. A user can create public and private channels with other users, and remove or add their own subscriptions from the channel list interface.

Leveraging the use of Rails' [ActiveRecord][active_record] and [router][rails_router], controllers could be easily designed to provide the frontend software with api endpoints for data storage, retrieval, and processing.

#### Real-Time Chat
Rails' [ActionCable][action_cable] does the heavy lifting in creating the live-chat experience [Slink][slink] provides. By opening a socket channel for each chat window the client has open, users can have multiple chat streams running at one time, and the server can easily keep track of which users are subscribed to which channels in real time. By creating simple `#sign_on!` and `#sign_off!` methods on the Rails `ApplicationController`, clients can be signed by their `user_id` from the database:

```ruby
# application_controller.rb

def sign_on!(user)
  session[:session_token] = user.reset_session_token!
  cookies.signed[:user_id] = user.id
end

def sign_off!
  current_user.reset_session_token!
  session[:session_token] = nil
  cookies.delete :user_id
end
```

Hence, clients are tracked by that signed cookie:

```ruby
# connection.rb

module ApplicationCable
  class Connection < ActionCable::Connection::Base
    identified_by :current_user

    def connect
      self.current_user = User.find_by(id: cookies.signed[:user_id])
    end
  end
end
```

When a user subscribes to the `ChatChannel`, they are simply added to a ActionCable channel which corresponds with the channel model they are subscribed to:

```ruby
# chat_channel.rb

class ChatChannel < ApplicationCable::Channel
  def subscribed
    channel = Channel.find_by(id: params[:id])
    stream_for channel
  end
end
```

Users are notified of a new message in their channel through a post-then-broadcast pattern. When a user wants to send a message to a channel, a standard AJAX request is made to the message creation api endpoint through the Redux action `sendMessage`:

```javascript
// message_stream_window.jsx

received: ({ message }) => {
  if (this.props.currentUser.id !== message.authorId) {
    this.receiveAudio.play();
  }
  this.props.receiveMessage(message);
  this.messageInput.scrollTop = this.messageInput.scrollHeight;
}
```

```javascript
// message_stream_window.jsx

handleSend(e) {
  e.preventDefault();
  this.sendMessage();
}

sendMessage() {
  this.props.sendMessage(this.state.message).then(() => (
    this.setState({ message: '' })
  )).then(() => {
    this.props.clearErrors();
    return this.sendSound.play();
  });
}
```

When the message controller receives this message, it detects the message's corresponding channel and broadcasts it to all of the users currently subscribed to it:

```ruby
# messages_controller.rb

if @message.save
  ChatChannel.broadcast_to(channel, message: @message.camelized_json)
```

#### Real-Time Private Chat Spawning
Additionally, by keeping track of user status via another channel (`AppearanceChannel`), private message windows spawning was achieved. By subscribing each user additionally to the `AppearanceChannel`, clients are notified of new private messages on private channels they are subscribed to, meaning an open window action can be launched at that time via the `addChatWindow` action:

```javascript
// buddy_list.jsx

received: channelId => {
  if (!this.props.chatWindows.includes(channelId)) {
    return this.props.requestChannel(channelId).then(
      ({ channel }) => {
        this.props.addChatWindow(channel.id);
        this.newPrivateMessageSound.play();
      }
    );
  }
}
```

#### [SmarterChild][smarter_child]
No [AIM][aim] clone would be complete without some manifestation of [SmarterChild][smarter_child]. Hours of time and millions of billion were wasted conversing with this chatbot, who offered both bewildering retorts and surprisingly relevant witticisms.

The homegrown algorithm for generating Slink's SmarterChild responses is mounted on the messages model. By adding a self-joining id column to the messages table, a one-to-one relationship can be formed between messages, called `reply`/`prompt`. Not all messages have both a `reply` and `prompt`, but those that do offer an opportunity for using human chat interactions to influence SmarterChild's responses.

### Future Improvements
- Limit initial message download count
- Channel subscription on a "room by room" basis (as provided by ActionCable)
- Message window flashing
- Real-time user status

## Credits
Arrows graphic by [freepik](http://www.flaticon.com/authors/freepik) from [Flaticon](http://www.flaticon.com) is licensed under [CC BY 3.0](http://creativecommons.org/licenses/by/3.0/). Check out the new logo that [I](https://github.com/virginiac32) created on [LogoMaker.com](http://logomakr.com). https://logomakr.com/5kQFua5kQFua

Icons made by [Freepik](http://www.freepik.com) from [Flaticon](http://www.flaticon.com) is licensed by [CC 3.0 BY](http://creativecommons.org/licenses/by/3.0/).

I would also like to thank all of my supportive classmates and instructors at [App Academy][app_academy].

And of course, most of all, thank you to my wonderful mother, Kathy Booth.

<!-- ### Links ### -->
<!-- Inspirations -->
[slink]: http://www.slink.chat/
[slack]: https://slack.com/
[aim]: https://www.aim.com/
[windows95]: https://en.wikipedia.org/wiki/Windows_95
[smarter_child]: https://en.wikipedia.org/wiki/SmarterChild
[app_academy]: https://www.appacademy.io/

<!-- Data Sources -->
[aim_sound_effects]: http://gauss.ececs.uc.edu/Courses/c653/lectures/AIM/sound/?C=D;O=A

<!-- Technologies -->
[ror]: http://rubyonrails.org/
[ruby231]: https://www.ruby-lang.org/en/news/2016/04/26/ruby-2-3-1-released/
[rails504]: http://weblog.rubyonrails.org/2017/6/19/Rails-5-0-4-has-been-released/
[postgres962]: https://www.postgresql.org/docs/9.6/static/release-9-6-2.html
[faker]: https://github.com/stympy/faker
[redis]: http://redistogo.com/
[cloudinary]: http://cloudinary.com/
[action_cable]: http://edgeguides.rubyonrails.org/action_cable_overview.html
[rails_router]: http://api.rubyonrails.org/classes/ActionDispatch/Routing.html
[active_record]: https://github.com/rails/rails/tree/master/activerecord

[react]: https://facebook.github.io/react/
[redux]: http://redux.js.org/
[webpack]: https://webpack.github.io/
[scss]: http://sass-lang.com/
[jquery]: https://jquery.com/
[jquery_ajax]: http://api.jquery.com/jquery.ajax/
[jquery_ui]: https://jqueryui.com/
[jquery_ui_draggable]: https://jqueryui.com/draggable/

[heroku]:https://www.heroku.com/
[atom]: https://atom.io/
[duet]: https://www.duetdisplay.com/

<!-- Tools -->
[trello]: https://trello.com/invite/b/FZDx2kmG/cb21f57f8484fb9572647d758cd11713/slink

<!-- Images -->
[slink_logo]: http://res.cloudinary.com/dfawecall/image/upload/v1501278100/Screen_Shot_2017-07-28_at_2.39.04_PM_cttfo6.png
