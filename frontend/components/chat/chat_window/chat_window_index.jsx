import React from 'react';
import ChatWindowContainer from './chat_window_container';

export default class ChatWindowIndex extends React.Component {
  componentWillMount() {
    this.cable = ActionCable.createConsumer();
  }

  render() {
    return (
      <ul>
        {
          this.props.channels.map(channel => (
            <li key={channel.name}>
              <ChatWindowContainer channel={channel} cable={this.cable}/>
            </li>
          ))
        }
      </ul>
    );
  }
}
