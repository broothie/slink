import React from 'react';
import MessageStreamWindowContainer from './message_stream_window_container';

export default props => (
  <div className='chat-window'>
    <header className='title-bar'>
      {props.windowName} - Instant Message
    </header>

    <hr/>

    <div className='chat-window-content'>
      <MessageStreamWindowContainer channelId={1}/>
      <hr/>
      <textarea rows='2'/>
      <footer>
        <button>Send</button>
      </footer>
    </div>
  </div>
);
