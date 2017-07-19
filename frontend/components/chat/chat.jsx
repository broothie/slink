import React from 'react';
import { Redirect } from 'react-router-dom';
import MessageStreamWindowContainer from './message_stream_window_container';

export default props => (
  props.signedOn ? (
    <main>
      <button onClick={props.signOff}>Sign Off</button>

      <br/>

      <MessageStreamWindowContainer/>
    </main>
  ) : (
    <Redirect to='/signon'/>
  )
);
