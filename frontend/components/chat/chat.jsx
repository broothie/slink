import React from 'react';
import { Redirect } from 'react-router-dom';
import ChatWindowContainer from './chat_window_container';
import MessageStreamWindowContainer from './message_stream_window_container';

export default props => (
  props.signedOn ? (
    <main className='chat-main'>
      <ChatWindowContainer windowName={'Channel 1'} channelId={1}/>
      <br/>
      <button onClick={props.signOff}>Sign Off</button>
    </main>
  ) : (
    <Redirect to='/signon'/>
  )
);
