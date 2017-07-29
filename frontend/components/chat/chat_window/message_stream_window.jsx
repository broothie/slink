import React from 'react';
import MessageItemContainer from './message_item_container';
import { values } from 'lodash';

export default class MessageStreamWindow extends React.Component {
  constructor(props) {
    super(props);

    this.receiveAudio = new Audio(
      'http://gauss.ececs.uc.edu/Courses/c653/lectures/AIM/sound/imrcv.wav'
    );
  }

  componentWillMount() {
    this.props.requestChannelMessages().then(
      () => { this.messageInput.scrollTop = this.messageInput.scrollHeight; }
    );
  }

  componentDidMount() {
    const channel = this.props.channel;

    this.connection = this.props.cable.subscriptions.create(
      {
        channel: 'ChatChannel',
        id: channel.id
      }, {
        received: ({ message }) => {
          if (this.props.currentUser.id !== message.authorId) {
            this.receiveAudio.play();
          }
          this.props.receiveMessage(message);
          this.messageInput.scrollTop = this.messageInput.scrollHeight;
        }
      }
    );

    this.messageInput.scrollTop = this.messageInput.scrollHeight;
  }

  componentWillUnmount() {
    this.props.cable.subscriptions.remove(this.connection);
  }

  render() {
    const channel = this.props.channel;

    return (
      <ul
        className='message-stream-window'
        ref={el => { this.messageInput = el; } }
      >
        {
          channel.messages.map((message, idx) => (
            <MessageItemContainer key={idx} message={message}/>
          ))
        }
      </ul>
    );
  }
}
