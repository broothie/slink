import React from 'react';
import { Redirect } from 'react-router-dom';
import ChatWindow from './chat_window';
import MessageStreamWindowContainer from './message_stream_window_container';

export default props => (
  props.signedOn ? (
    <main className='chat-main'>
      <ChatWindow windowName={'Channel 1'}/>
      <br/>
      <button onClick={props.signOff}>Sign Off</button>
    </main>
  ) : (
    <Redirect to='/signon'/>
  )
);
