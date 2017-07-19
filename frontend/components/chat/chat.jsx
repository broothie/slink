import React from 'react';
import { Redirect } from 'react-router-dom';

export default props => (
  props.signedOn ? (
    <main>
      Do some chatting
      <button onClick={props.signOff}>Sign Off</button>
    </main>
  ) : (
    <Redirect to='/'/>
  )
);
