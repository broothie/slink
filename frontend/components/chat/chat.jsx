import React from 'react';
import { Redirect } from 'react-router-dom';

export default props => (
  props.signedOn ? (
    <div>
      Do some chatting
      <button onClick={props.signOff}>Sign Off</button>
    </div>
  ) : (
    <Redirect to='/'/>
  )
);
