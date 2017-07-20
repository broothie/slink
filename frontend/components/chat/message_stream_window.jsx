import React from 'react';

export default class MessageStreamWindow extends React.Component {
  componentWillMount() {
    this.props.requestChannel();
  }

  render() {
    return (
      <div>
        <textarea
          className='message-stream-window'
          rows='6'
          readOnly
          value={
            this.props.messages.map(message => (
              `${message.author_screenname}: ${message.body}`
            )).join('\n')
          }
        />
      </div>
    );
  }
}
