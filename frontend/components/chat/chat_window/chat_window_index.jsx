import React from 'react';
import ChatWindowContainer from './chat_window_container';

export default ({ channels }) => (
  <ul>
    {
      channels.map((channel, idx) => (
        <li>
          <ChatWindowContainer key={idx} channel={channel}/>
        </li>
      ))
    }
  </ul>
);
