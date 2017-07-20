import React from 'react';
import { values } from 'lodash';

export default class MessageStreamWindow extends React.Component {
  componentWillMount() {
    this.props.requestChannel();
    this.streamIdentifier = `message-stream-channel-${this.props.channelId}`;
  }

  componentDidUpdate(prevProps) {
    const channel = this.props.channel;
    const prevChannel = prevProps.channel;

    if (channel) {
      if (
        !prevChannel ||
        prevChannel.messages.length !== channel.messages.length
      ) {
        const stream =
          document.getElementsByClassName(this.streamIdentifier)[0];
        stream.scrollTop = stream.scrollHeight;
      }
    }
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
