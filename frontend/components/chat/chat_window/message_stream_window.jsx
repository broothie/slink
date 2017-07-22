import React from 'react';
import MessageItemContainer from './message_item_container';
import { values } from 'lodash';

export default class MessageStreamWindow extends React.Component {
  componentDidMount() {
    const channel = this.props.channel;

    this.connection = this.props.cable.subscriptions.create(
      {
        channel: 'ChatChannel',
        id: channel.id
      }, {
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
      }
    );

    this.messageInput.scrollTop = this.messageInput.scrollHeight;
  }

  componentDidUpdate() {
    this.messageInput.scrollTop = this.messageInput.scrollHeight;
  }

  componentWillUnmount() {
    this.props.cable.subscriptions.remove(this.connection);
  }

  render() {
    const channel = this.props.channel;
    const messages = values(channel.messages);

    return (
      <ul ref={input => { this.messageInput = input; }}>
        {
          messages.map((message, idx) => (
            <MessageItemContainer key={idx} message={message}/>
          ))
        }
      </ul>
    );
  }
}
