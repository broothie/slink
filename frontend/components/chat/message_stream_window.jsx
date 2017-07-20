import React from 'react';
import { values } from 'lodash';

export default class MessageStreamWindow extends React.Component {
  componentWillMount() {
    this.props.requestChannel();
    this.streamIdentifier = `message-stream-channel-${this.props.channelId}`;
  }

  componentDidMount() {
    App.chat = App.cable.subscriptions.create('ChatChannel', {
      connected: null,
      received: ({ message }) => this.props.receiveMessage(JSON.parse(message)),
      disconnected: null
    });
  }

  componentDidUpdate(prevProps) {
    const stream = document.getElementsByClassName(this.streamIdentifier)[0];
    stream.scrollTop = stream.scrollHeight;
  }

  render() {
    return (
      <div>
        <textarea
          className={`message-stream-window ${this.streamIdentifier}`}
          rows='6'
          readOnly
          value={
            this.props.channel ? (
              values(this.props.channel.messages).map(message => (
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
