import React from 'react';
import { values } from 'lodash';

export default class MessageStreamWindow extends React.Component {
  componentDidMount() {
    const channel = this.props.channel;

    this.connection = this.props.cable.subscriptions.create('ChatChannel', {
      connected: () => (
        console.log(`Connected to ${channel.name}, id: ${channel.id}`)
      ),

      received: (data) => {
        const message = JSON.parse(data.message);
        console.log(`Received message id: ${message.id}`);
        return this.props.receiveMessage(message);
      },

      disconnected: () => (
        console.log(`Disconnected from ${channel.name}, id: ${channel.id}`)
      )
    });
  }

  componentDidUpdate(prevProps) {
    this.messageInput.scrollTop = this.messageInput.scrollHeight;
  }

  componentWillUnmount() {
    this.props.cable.subscriptions.remove(this.connection);
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
