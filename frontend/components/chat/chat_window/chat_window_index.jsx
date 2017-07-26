import React from 'react';
import ChatWindowContainer from './chat_window_container';

export default class ChatWindowIndex extends React.Component {
  render() {
    return (
      <ul>
        {
          this.props.channels.map(channel => (
            <li key={channel.name}>
              <ChatWindowContainer channel={channel} cable={this.props.cable}/>
            </li>
          ))
        }
      </ul>
    );
  }
}
