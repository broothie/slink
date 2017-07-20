import React from 'react';

export default class MessageStreamWindow extends React.Component {
  componentWillMount() {
    this.props.requestChannel();
    this.streamIdentifier = `message-stream-channel-${this.props.channelId}`;
  }

  componentDidUpdate(prevProps) {
    console.log(prevProps);
    if (prevProps.messages.length !== this.props.messages.length) {
      const stream = document.getElementsByClassName(this.streamIdentifier)[0];
      // TODO: Test
      stream.scrollTop = stream.scrollHeight;
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
            this.props.messages.map(message => (
              `${message.authorScreenname}: ${message.body}`
            )).join('\n')
          }
        />
      </div>
    );
  }
}
