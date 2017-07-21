import React from 'react';
import { values } from 'lodash';

export default class MessageStreamWindow extends React.Component {
  componentDidMount() {
    App.chat = App.cable.subscriptions.create('ChatChannel', {
      connected: null,
      received: ({ message }) => this.props.receiveMessage(JSON.parse(message)),
      disconnected: null
    });
  }

  componentDidUpdate(prevProps) {
    this.messageInput.scrollTop = this.messageInput.scrollHeight;
  }

  render() {
    const channel = this.props.channel;
    const streamIdentifier = `message-stream-channel-${channel.id}`;

    return (
      <div>
        <textarea
          className={`message-stream-window ${streamIdentifier}`}
          ref={input => { this.messageInput = input; }}
          rows='6'
          readOnly
          value={
            channel ? (
              values(channel.messages).map(message => (
                `${message.authorScreenname}: ${message.body}`
              )).join('\n')
            ) : (
              ''
            )
          }
        />
      </div>
    );
  }
}
